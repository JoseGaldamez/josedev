---
title: "Struct vs Class en Swift: ¿Cuál deberías usar y cuándo?"
date: "2025-06-20"
category: "iOS"
image: "https://res.cloudinary.com/jose-galdamez-dev/image/upload/f_auto,q_auto/v1/PersonalPage/blog/ieomfkq9chxfm6firbwd"
description: "¿Deberías usar struct o class en tu código Swift? Esta pregunta puede parecer simple, pero la decisión correcta puede hacer tu código más seguro, rápido y fácil de mantener."
author: "José Galdámez"
tags: ["Swift", "iOS", "Struct", "Class", "Desarrollo Móvil"]
---

<p class='paragraph' markdown='1'>
En Swift, una de las decisiones más comunes —y a la vez más fundamentales— que todo desarrollador debe tomar es: <strong>¿Uso una struct o una class?</strong>. A primera vista pueden parecer similares, pero sus diferencias marcan una gran diferencia en diseño, rendimiento y mantenimiento del código.
</p>

<p class='paragraph' markdown='1'>
Desde el principio, Apple ha recomendado usar <code>struct</code> por defecto, pero ¿por qué? ¿Cuándo deberías optar por una <code>class</code>? En este artículo vamos a desglosar estas preguntas y ayudarte a tomar la mejor decisión para tu proyecto.
</p>

<h2 class="h2" markdown='1'>¿Qué es una Struct y qué es una Class?</h2>

<p class='paragraph' markdown='1'>
Ambas son formas de crear tipos personalizados en Swift, pero tienen diferencias clave:
</p>

<ul class='list-with-bullets'>
  <li>
    <p class='paragraph' markdown='1'><strong>Structs</strong> son tipos por <strong>valor</strong>.</p>
  </li>
  <li>
    <p class='paragraph' markdown='1'><strong>Classes</strong> son tipos por <strong>referencia</strong>.</p>
  </li>
</ul>

<p class='paragraph' markdown='1'>
¿Qué significa esto? Vamos con un ejemplo.
</p>

<pre><code>// Struct
struct Usuario {
    var nombre: String
}

var user1 = Usuario(nombre: "Carlos")
var user2 = user1
user2.nombre = "Ana"

print(user1.nombre) // Carlos
print(user2.nombre) // Ana
</code></pre>

<p class='paragraph' markdown='1'>
En este caso, <code>user1</code> y <code>user2</code> son copias independientes. Cambiar uno no afecta al otro. Significa que cada vez que asignas una struct a otra variable, estás creando una copia nueva en memoria.
</p>

<p class='paragraph' markdown='1'>
Este es el comportamiento esperado de los tipos por valor y a la vez es lo más intuitivo para la mayoría de los desarrolladores (aunque no lo creas, los programadores también somos seres humanos, salvo algunas excepciones como <strong>Linus Torvalds</strong> y <strong>Bjarne Stroustrup</strong>, ellos son dioses del Olimpo).
</p>

<pre><code>// Class
class Persona {
    var nombre: String

    init(nombre: String) {
        self.nombre = nombre
    }
}

var persona1 = Persona(nombre: "Carlos")
var persona2 = persona1
persona2.nombre = "Ana"

print(persona1.nombre) // Ana
print(persona2.nombre) // Ana
</code></pre>

<p class='paragraph' markdown='1'>
En cambio, en este ejemplo ambos apuntan a la misma instancia en memoria. Cambiar <code>persona2</code> también afecta a <code>persona1</code>. Esto es porque las clases son tipos por referencia, lo que significa que cuando asignas una clase a otra variable, ambas variables apuntan al mismo objeto en memoria.
</p>
<p class='paragraph' markdown='1'>
Podemos decir que una class solo crea un espacio en memoria cuando se crea una instancia de la misma, es decir cuando se hace <code>let persona = Persona(nombre: "Carlos")</code>.
</p>

<p class='paragraph' markdown='1'>
Esto tiene sus ventajas y desventajas. Por un lado, las clases permiten compartir el mismo objeto entre diferentes partes del código, lo que puede ser útil en ciertos casos. Por otro lado, esto puede llevar a efectos colaterales inesperados si no se maneja con cuidado.
</p>

<h2 class="h2" markdown='1'>¿Cuándo usar Struct?</h2>

<p class='paragraph' markdown='1'>
Apple recomienda usar <code>struct</code> por defecto, y solo usar <code>class</code> si realmente necesitas las características adicionales que esta provee.
</p>

<ul class='list-with-bullets'>
  <li>
    <p class='paragraph' markdown='1'>Tu tipo representa un <strong>valor simple</strong>: como coordenadas, colores, tamaños o configuraciones.</p>
  </li>
  <li>
    <p class='paragraph' markdown='1'>No necesitas <strong>herencia</strong>.</p>
  </li>
  <li>
    <p class='paragraph' markdown='1'>Quieres asegurar que cada instancia sea <strong>inmutable o independiente</strong>.</p>
  </li>
  <li>
    <p class='paragraph' markdown='1'>Buscas mejor rendimiento al copiar valores en lugar de referencias.</p>
  </li>
</ul>

<h2 class="h2" markdown='1'>¿Cuándo usar Class?</h2>

<p class='paragraph' markdown='1'>
Las clases son útiles en escenarios más complejos donde necesitas:
</p>

<ul class='list-with-bullets'>
  <li>
    <p class='paragraph' markdown='1'><strong>Herencia:</strong> compartir o extender funcionalidad entre tipos relacionados.</p>
  </li>
  <li>
    <p class='paragraph' markdown='1'><strong>Referencias compartidas:</strong> múltiples variables apuntando al mismo objeto mutable.</p>
  </li>
  <li>
    <p class='paragraph' markdown='1'><strong>Desinicialización (deinit):</strong> para liberar recursos cuando el objeto se destruye.</p>
  </li>
</ul>

<h2 class="h2" markdown='1'>¿Y qué pasa con el rendimiento?</h2>

<p class='paragraph' markdown='1'>
En general, <strong>las structs son más ligeras y rápidas</strong> porque el sistema puede optimizar el uso de memoria al tratar valores. Las clases, al requerir referencia y manejo del heap, pueden ser más costosas.
</p>

<p class='paragraph' markdown='1'>
Esto me da pie para explicar un poco lo que es el heap/stack de memeria. Pero es un tema que merece un artículo por sí solo. En resumen, el heap es una región de memoria donde se almacenan objetos que pueden ser referenciados por múltiples variables. Las structs, al ser tipos por valor, se almacenan en la pila (stack), lo que las hace más eficientes en términos de acceso y uso de memoria.
</p>
<figure>
<img class='image' src="https://content-media-cdn.codefinity.com/courses/8204075c-f832-4cb9-88b1-4e24e74ebdcb/stack+heap+java+new.png" alt="Heap vs Stack Memory" />
<figcaption>Heap vs Stack Memory</figcaption>
</figure>

<p class='paragraph' markdown='1'>
Eso sí, si tienes una estructura muy grande o necesitas que sea mutable desde varias partes del código, ahí es donde una class puede tener más sentido.
</p>

<h2 class="h2" markdown='1'>Conclusión</h2>

<p class='paragraph' markdown='1'>
No se trata de que una sea mejor que la otra. Se trata de <strong>elegir la herramienta correcta para el contexto adecuado</strong>. Si estás modelando datos que representan un valor y quieres evitar efectos colaterales, las <code>struct</code> son ideales. Si necesitas un sistema complejo con comportamiento compartido o mutabilidad controlada, entonces ve con <code>class</code>.
</p>

<p class='paragraph' markdown='1'>
Si no tienes claro qué usar, empieza usando <code>struct</code>. Es más seguro, más predecible y te ayudará a evitar muchos problemas comunes en el desarrollo de software. Si necesitas una clase más adelante siempre puedes refactorizar tu código para usar una <code>class</code> en lugar de una <code>struct</code>. Pero en la mayoría de los casos, una <code>struct</code> será suficiente y te dará un código más limpio y eficiente.
</p>
