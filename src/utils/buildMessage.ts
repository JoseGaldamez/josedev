

export const buildMessage = (name: string, email: string, message: string) => {
    return `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nuevo mensaje de contacto</title>
            <style>
                body { 
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; 
                    line-height: 1.6; 
                    color: #333; 
                    max-width: 600px; 
                    margin: 0 auto; 
                    padding: 20px;
                    background-color: #f8f9fa;
                }
                .container {
                    background: white;
                    border-radius: 12px;
                    padding: 32px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                }
                .header {
                    border-bottom: 2px solid #e9ecef;
                    padding-bottom: 20px;
                    margin-bottom: 24px;
                }
                h1 { 
                    color: #2563eb; 
                    margin: 0; 
                    font-size: 24px;
                    font-weight: 600;
                }
                .field {
                    margin-bottom: 20px;
                }
                .label { 
                    color: #6b7280; 
                    font-size: 14px; 
                    font-weight: 600; 
                    text-transform: uppercase; 
                    letter-spacing: 0.5px;
                    margin-bottom: 6px;
                    display: block;
                }
                .value { 
                    color: #111827; 
                    font-size: 16px; 
                    margin: 0;
                    padding: 12px;
                    background-color: #f9fafb;
                    border-radius: 6px;
                    border-left: 3px solid #2563eb;
                }
                .message-content {
                    background-color: #f0f9ff;
                    border: 1px solid #e0f2fe;
                    border-radius: 8px;
                    padding: 16px;
                    margin-top: 8px;
                    white-space: pre-wrap;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>📧 Nuevo mensaje de contacto</h1>
                </div>
                
                <div class="field">
                    <span class="label">Nombre</span>
                    <p class="value">${name}</p>
                </div>
                
                <div class="field">
                    <span class="label">Correo Electrónico</span>
                    <p class="value">${email}</p>
                </div>
                
                <div class="field">
                    <span class="label">Mensaje</span>
                    <div class="message-content">${message}</div>
                </div>
            </div>
        </body>
        </html>
    `;
}

export const buildConfirmMessage = (name: string) => {
    return `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mensaje recibido - José Galdámez</title>
            <style>
                body { 
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; 
                    line-height: 1.7; 
                    color: #374151; 
                    max-width: 600px; 
                    margin: 0 auto; 
                    padding: 20px;
                    background-color: #f8f9fa;
                }
                .container {
                    background: white;
                    border-radius: 12px;
                    padding: 40px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                }
                .header {
                    text-align: center;
                    border-bottom: 2px solid #e5e7eb;
                    padding-bottom: 24px;
                    margin-bottom: 32px;
                }
                h1 { 
                    color: #059669; 
                    margin: 0; 
                    font-size: 28px;
                    font-weight: 600;
                    margin-bottom: 8px;
                }
                .subtitle {
                    color: #6b7280;
                    font-size: 16px;
                    margin: 0;
                }
                .greeting {
                    font-size: 20px;
                    color: #111827;
                    margin-bottom: 24px;
                    font-weight: 500;
                }
                .content {
                    font-size: 16px;
                    margin-bottom: 24px;
                    line-height: 1.6;
                }
                .highlight-box {
                    background: linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%);
                    border-left: 4px solid #059669;
                    padding: 20px;
                    border-radius: 8px;
                    margin: 24px 0;
                }
                .signature {
                    margin-top: 32px;
                    padding-top: 20px;
                    border-top: 1px solid #e5e7eb;
                }
                .signature-name {
                    color: #111827;
                    font-weight: 600;
                    font-size: 18px;
                    margin-bottom: 4px;
                }
                .signature-title {
                    color: #6b7280;
                    font-size: 14px;
                    margin: 0;
                }
                .footer {
                    text-align: center;
                    margin-top: 32px;
                    padding-top: 20px;
                    border-top: 1px solid #e5e7eb;
                    color: #9ca3af;
                    font-size: 14px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>✅ Mensaje Recibido</h1>
                    <p class="subtitle">Confirmación de contacto</p>
                </div>
                
                <div class="greeting">¡Hola ${name}! 👋</div>
                
                <div class="content">
                    Gracias por contactarme. He recibido tu mensaje correctamente y me pondré en contacto contigo lo antes posible.
                </div>
                
                <div class="highlight-box">
                    <strong>📋 ¿Qué sigue?</strong><br>
                    Revisaré tu mensaje y te responderé en un plazo máximo de 24-48 horas. Si es urgente, no dudes en contactarme directamente.
                </div>
                
                <div class="signature">
                    <div class="signature-name">José Galdámez</div>
                    <div class="signature-title">Fullstack Developer</div>
                </div>
                
                <div class="footer">
                    Este es un mensaje automático de confirmación.<br>
                    <strong>josegaldamez.dev</strong>
                </div>
            </div>
        </body>
        </html>
    `;
}