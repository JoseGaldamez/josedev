export const buildMessage = (name: string, email: string) => {
    return `
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirmación de recepción</title>
  <style>
    /* Estilos inline-friendly: muchos clientes ignoran <style>, pero mantenemos reglas básicas.
       Para máxima compatibilidad, la mayoría de estilos importantes están inline en las etiquetas. */
    body { margin:0; padding:0; background-color:#f4f6f8; }
    .wrapper { width:100%; background-color:#f4f6f8; padding:20px 0; }
    .main { max-width:600px; margin:0 auto; background:#ffffff; border-radius:8px; overflow:hidden; }
    .spacer { height:20px; }
    @media only screen and (max-width:480px) {
      .container { padding:16px !important; }
      .logo { max-width:140px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f8;">
  <table class="wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td align="center">
        <table class="main" width="600" cellpadding="0" cellspacing="0" role="presentation">
          <!-- Header / Logo -->
          <tr>
            <td style="background-color:#000000;padding:20px;text-align:center;">
              <img src="https://josegaldamez.dev/jose.jpeg" alt="José Galdámez" width="100" style="display:block;border:0;" class="logo"> 
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td class="container" style="padding:24px;font-family:Arial,Helvetica,sans-serif;color:#333333;">
              <p style="margin:0 0 12px 0;font-size:14px;color:#7a8696;">Hola <strong> ${name} </strong>,</p>

              <h1 style="margin:0 0 12px 0;font-size:20px;color:#253237;">Hemos recibido tu mensaje</h1>

              <p style="margin:0 0 12px 0;line-height:1.5;font-size:15px;">
                Gracias por contactarte con <strong>José Galdámez</strong>. Este correo confirma que he recibido tu mensaje correctamente. La estoy revisando y te responderé a la mayor brevedad posible.
              </p>

              <p style="margin:0 0 12px 0;line-height:1.5;font-size:15px;">
                La respuesta la recibiras al correo electrónico: <strong>${email}</strong>.
              </p>

              <p style="margin:0 0 18px 0;font-size:14px;color:#333333;line-height:1.5;">
                Si necesitas añadir más información a esta solicitud responde a este correo o contáctanos en <a href="mailto:josegaldamez1991@gmail.com" style="color:#0a74da;text-decoration:none;">josegaldamez1991@gmail.com</a>.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f7f9fc;padding:18px 24px;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#7a8696;">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="vertical-align:top;">
                    <div style="font-weight:600;color:#334155;">José Galdámez</div>
                    <div style="margin-top:6px;">Tel: +504 3175 1455 • Email: <a href="mailto:josegaldamez1991@gmail.com" style="color:#0a74da;text-decoration:none;">josegaldamez1991@gmail.com</a></div>
                  </td>
                  <td style="text-align:right;vertical-align:top;">
                    <a href="https://www.facebook.com/josegaldamezdev" style="text-decoration:none;margin-right:8px;font-size:13px;color:#0a74da;">Facebook</a>
                    <a href="https://www.linkedin.com/in/josegaldamezdev" style="text-decoration:none;margin-left:8px;font-size:13px;color:#0a74da;">LinkedIn</a>
                  </td>
                </tr>
              </table>

              <div style="margin-top:12px;color:#9aa7b2;font-size:12px;">Este es un correo automático, por favor no respondas si no deseas añadir más información. Si necesitas ayuda inmediata puedes escribir a <a href="mailto:josegaldamez1991@gmail.com" style="color:#0a74da;text-decoration:none;">josegaldamez1991@gmail.com</a>.</div>
            </td>
          </tr>

          <tr>
            <td style="text-align:center;padding:14px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#9aa7b2;background:#ffffff;">
              © 2025 José Galdámez. Todos los derechos reservados.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}


export const buildMessageAdmin = (name: string, email: string, message: string) => {
    return `
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo mensaje de contacto</title>
  <style>
    body { margin:0; padding:0; background-color:#f4f6f8; }
    .wrapper { width:100%; background-color:#f4f6f8; padding:20px 0; }
    .main { max-width:600px; margin:0 auto; background:#ffffff; border-radius:8px; overflow:hidden; }
    .spacer { height:20px; }
    @media only screen and (max-width:480px) {
      .container { padding:16px !important; }
      .logo { max-width:140px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f8;">
  <table class="wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
        <td align="center">
            <table class="main" width="600" cellpadding="0" cellspacing="0" role="presentation">
                <!-- Header / Logo -->
                <tr>
                    <td style="background-color:#000000;padding:20px;text-align:center;">
                        <img src="https://josegaldamez.dev/jose.jpeg" alt="José Galdámez" width="100" style="display:block;border:0;" class="logo">
                    </td>
                </tr>
                <!-- Body -->
                <tr>
                    <td class="container" style="padding:24px;font-family:Arial,Helvetica,sans-serif;color:#333333;">
                        <h1 style="margin:0 0 12px 0;font-size:20px;color:#253237;">Nuevo mensaje de contacto recibido</h1>

                        <p style="margin:0 0 12px 0;line-height:1.5;font-size:15px;">
                            Has recibido un nuevo mensaje a través del formulario de contacto en tu sitio web.
                        </p>
                        <p style="margin:0 0 12px 0;font-size:14px;color:#7a8696;">Detalles del mensaje:</p>
                        <ul style="margin:0 0 12px 20px;padding:0;font-size:15px;line-height:1.5;">
                            <li><strong>Nombre:</strong> ${name}</li>
                            <li><strong>Email:</strong> ${email}</li>
                            <li><strong>Mensaje:</strong> ${message}</li>
                        </ul>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</body>
</html>
`;
}