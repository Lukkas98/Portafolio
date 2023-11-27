const emailRegex2 = /^[\w\.-]+@(hotmail|gmail)\.[a-zA-Z]{2,}$/;
const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

export default function validate(
  id,
  inputs = { name: "", email: "", message: "" },
  prevErrors = {}
) {
  const errors = { ...prevErrors };

  switch (id) {
    case "name":
      if (!inputs.name) errors.name = "Debes colocar tu nombre";
      else if (inputs.name.length > 40) errors.name = "El nombre es muy largo";
      else if (inputs.name.length < 3) errors.name = "El nombre es muy corto";
      else errors.name = "";
      return errors;

    case "email":
      if (!inputs.email) errors.email = "Debes colocar un Email";
      else if (!emailRegex.test(inputs.email))
        errors.email = "Debes colocar un Email válido";
      else if (!emailRegex2.test(inputs.email))
        errors.email = "El Email debe ser 'gmail' o 'hotmail'";
      else errors.email = "";
      return errors;

    case "message":
      if (!inputs.message) errors.message = "El mensaje no puede estar vacio";
      else if (inputs.message.length > 500)
        errors.message = "El mensaje es demasiado largo";
      else if(inputs.message.length < 10)
        errors.message = "El mensaje es demasiado corto"
      else errors.message = "";
      return errors;

    default:
      return errors;
  }
}
