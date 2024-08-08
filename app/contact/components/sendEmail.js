import emailjs from "@emailjs/browser";

export default async function sendEmail(name, email, message) {
  try {
    if (!name || !email || !message) throw new Error("Formulario incompleto");
    const userId = process.env.NEXT_PUBLIC_USER_ID;
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;

    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: name,
        from_email: email,
        message,
      },
      userId,
    );

    return { success: "Mensaje enviado correctamente." };
  } catch (error) {
    console.error("Error al enviar el correo electrónico: ", error);
    return { error: "Hubo un error al enviar el correo electrónico." };
  }
}
