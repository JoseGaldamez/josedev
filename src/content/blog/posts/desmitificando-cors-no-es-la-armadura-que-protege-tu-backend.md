---
title: "Desmitificando CORS: ¿Por qué NO es la armadura que protege tu Backend?"
date: "2025-06-05"
category: "Backend"
image: "https://res.cloudinary.com/jose-galdamez-dev/image/upload/f_auto,q_auto/v1/PersonalPage/blog/q3lr6h7m03dmedhu3gmo"
description: "CORS no es un escudo de seguridad para tu Backend que aparenta ser. Entiende cómo funciona realmente y por qué Postman no se ve afectado por él."
author: "José Galdámez"
tags: ["Postman", "CORS", "Backend", "Seguridad"]
---

<p class='paragraph' markdown='1'>
Como desarrolladores, hemos visto este error un millón de veces en la consola del navegador: <code>Cross-Origin Resource Sharing Error</code>. Nuestra reacción casi instintiva suele ser buscar en Google, copiar una configuración en nuestro servidor y seguir adelante una vez que el mensaje rojo desaparece.
</p>
<p class='paragraph' markdown='1'>
Durante mucho tiempo, yo (y muchos otros) operé bajo una creencia fundamental pero errónea: que CORS era un escudo de seguridad para mi backend. Que era el servidor quien activamente bloqueaba estas solicitudes maliciosas.
</p>

<p class='paragraph' markdown='1'>
Hasta que un día, un colega me hizo una pregunta que desmoronó mi percepción:
</p>

<blockquote>
    <p class='paragraph' markdown='1'>“Si CORS realmente protege tu backend, ¿por qué herramientas como Postman, Insomnia o cURL pueden llamar a tu API sin ningún problema y sin ninguna configuración especial de CORS?”</p>
</blockquote>

<p class='paragraph' markdown='1'>
La pregunta fue un golpe de claridad. Nunca hemos añadido la "huella" de Postman a nuestra lista blanca de CORS, y sin embargo, cada petición funciona a la perfección. ¿Por qué?
</p>
<p class='paragraph' markdown='1'>
La respuesta revela la verdadera naturaleza de CORS: es una historia sobre quién tiene el poder de proteger a quién.
</p>

<h2 class="h2" markdown='1'>La Falsa Sensación de Seguridad</h2>

<p class='paragraph' markdown='1'>
La confusión es comprensible. Configuramos las políticas de CORS en el servidor, por lo que parece lógico que sea el servidor quien las aplique. Pero la realidad es más sutil y mucho más interesante.
</p>

<p class='paragraph' markdown='1'>
Para entenderlo, imaginemos un escenario clásico que expone una vulnerabilidad conocida como <strong>CSRF (Cross-Site Request Forgery)</strong>.
</p>

<ul class='list-with-bullets'>
    <li>
    <p class='paragraph' markdown='1'>
    <strong>Inicias Sesión:</strong> Abres tu navegador y visitas la página de tu banco, <code>mi-banco.com</code>. Ingresas tus credenciales y el frontend realiza las llamadas necesarias a la API del banco, <code>api-banco.com</code>. Como resultado, tu navegador almacena las cookies de sesión que te mantienen autenticado.
    </p>
    </li>
    <li>
    <p class='paragraph' markdown='1'>
    <strong>Visitas un Sitio Malicioso:</strong> Luego, en otra pestaña, navegas a un sitio de apariencia inofensiva, <code>sitio-engañoso.com</code>, que te prometió ver fotos de gatitos.
    </p>
    </li>
    <li>
    <p class='paragraph' markdown='1'>
    <strong>El Ataque Silencioso:</strong> Sin que lo sepas, ese sitio ejecuta un script en segundo plano. Este script intenta realizar una transferencia de dinero desde tu cuenta:
    </p>
    </li>
</ul>

<pre><code>// Script malicioso en sitio-engañoso.com
fetch("https://api-banco.com/transferencia?destino=12345&monto=5000", {
  method: "POST",
  credentials: "include" // ¡La clave del ataque!
});</code></pre>

<p class='paragraph' markdown='1'>
Si no existiera CORS, esto es lo que pasaría:
</p>

<ul class='list-with-bullets'>
     <li>
        <p class='paragraph' markdown='1'>
     El navegador ve una petición a <code>api-banco.com</code>.
        </p>
     </li>
     <li>
        <p class='paragraph' markdown='1'>
     La opción <code>credentials: "include"</code> le dice al navegador que debe adjuntar cualquier cookie relevante que tenga para ese dominio. ¡Y las tiene, porque iniciaste sesión antes!
        </p>
     </li>
     <li>
        <p class='paragraph' markdown='1'>
     La API del banco recibe la petición, ve una cookie de sesión válida y piensa: "Esta es una solicitud de un usuario autenticado. ¡Procedamos con la transferencia!".
        </p>
     </li>
     <li>
        <p class='paragraph' markdown='1'>
     <strong>Resultado:</strong> Acabas de perder 5,000 unidades de tu moneda.
        </p>
     </li>
</ul>

<img class='image' src="https://bunnyacademy.b-cdn.net/gTIGO-How-do-Cross-Origin-Resource-Sharing-CORS-Headers-work.png" alt="Diagrama flujo cors" />

<h2 class="h2" markdown='1'>¿Cómo nos Salva CORS?</h2>
<p class='paragraph' markdown='1'>Cuando el script en <code>sitio-engañoso.com</code> intenta hacer la petición, el navegador moderno interviene y dice: "Un momento. Este script se origina en <code>sitio-engañoso.com</code>, pero la petición va a <code>api-banco.com</code>. Esto es una solicitud de origen cruzado (cross-origin). Debo ser cauteloso".
</p>
<p class='paragraph' markdown='1'>Antes de enviar la petición <code>POST</code> real, el navegador envía una petición de "verificación previa" (conocida como <em>preflight request</em>) usando el método <code>OPTIONS</code>. Esta petición le pregunta al servidor:</p>
<p class='paragraph' markdown='1'><strong>Navegador:</strong> "Hola, <code>api-banco.com</code>. Un sitio en <code>sitio-engañoso.com</code> quiere enviarte una petición <code>POST</code> con credenciales. ¿Le das permiso?"</p>
<p class='paragraph' markdown='1'>El servidor, que ha sido configurado correctamente por sus desarrolladores, responde con unos encabezados (<code>headers</code>) específicos:</p>
<p class='paragraph' markdown='1'><strong>Servidor:</strong> "Hola, navegador. Solo permito peticiones que provengan de <code>https://mi-banco.com</code>."<br>(Técnicamente, responde con el encabezado: <code>Access-Control-Allow-Origin: https://mi-banco.com</code>)</p>
<p class='paragraph' markdown='1'>El navegador recibe esta política, la revisa y concluye:</p>
<p class='paragraph' markdown='1'><strong>Navegador:</strong> "La petición viene de <code>sitio-engañoso.com</code>, pero el servidor solo permite <code>mi-banco.com</code>. No coinciden. <strong>Voy a bloquear esta solicitud</strong>."</p>
<p class='paragraph' markdown='1'>El resultado es el famoso error de CORS que vemos en la consola. La petición <code>POST</code> maliciosa <strong>nunca llega al servidor</strong>. El navegador la detiene antes de que pueda causar daño.</p>

<h2 class="h2" markdown='1'>La Pieza Final del Rompecabezas: Postman</h2>

<p class='paragraph' markdown='1'>
Ahora podemos responder a la pregunta inicial. Postman no es un navegador. No implementa la Política del Mismo Origen (Same-Origin Policy). Es una herramienta para hacer peticiones HTTP directas. No le importan los orígenes ni las políticas de seguridad del navegador. Simplemente envía la solicitud y te muestra la respuesta cruda del servidor.
</p>
<p class='paragraph' markdown='1'>
<strong>CORS no protege tu backend de Postman, de un script en Python o de un ataque directo a tu servidor. CORS protege al <em>usuario</em> y su navegador de sitios web maliciosos que intentan abusar de sus sesiones.</strong>
</p>

<h2 class="h2" markdown='1'>Hagamos una pequeña conclusión</h2>

<p class='paragraph' markdown='1'>
La historia de CORS es un recordatorio poderoso de que en el desarrollo de software, entender el "porqué" es tan crucial como saber el "cómo".
</p>
<ul class='list-with-bullets'>
    <li>
      <p class='paragraph' markdown='1'>
      <strong>El rol del Backend:</strong> Definir la política de seguridad (<code>Access-Control-Allow-Origin</code>).
   </p>
    <li>
      <p class='paragraph' markdown='1'>
    <strong>El rol del Navegador:</strong> Hacer cumplir esa política para proteger al usuario.
    </p>
    </li>
</ul>

<p class='paragraph' markdown='1'>Así que la próxima vez que te enfrentes a un error de CORS, recuerda que no estás luchando contra una fortaleza en tu servidor. Estás trabajando con una característica de seguridad del navegador diseñada para mantener el ecosistema web un lugar más seguro.</p>

<p class='paragraph' markdown='1'>Y nunca dejes de hacer preguntas. La curiosidad que nos lleva a cuestionar lo que creemos saber es nuestro verdadero superpoder como desarrolladores. Es el motor del aprendizaje auténtico.</p>
