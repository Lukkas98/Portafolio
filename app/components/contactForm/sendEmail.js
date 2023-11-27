import emailjs from 'emailjs-com';

export default async function sendEmail(name, email, message) {
  try {
    if(!name || !email || !message) throw new Error("Faltan datos")
    const userId = 'va-uaEeM6A7Yi60Qk';
    const serviceId = 'Portafolio'; 
    const templateId = 'template_o97r5c4';

    await emailjs.send(serviceId, templateId, {
      from_name: name,
      from_email: email,
      message: message,
    }, userId);

    return 'Mensaje enviado correctamente.';
  } catch (error) {
    console.error('Error al enviar el correo electrónico: ', error);
    throw new Error('Hubo un error al enviar el correo electrónico.');
  }
}