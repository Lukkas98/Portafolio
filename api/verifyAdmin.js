"use server";
import { PASSWORD, USER } from "@/lib/configVariables";

export const verifyAdmin = async (_prevState, form) => {
  const user = form.get("user");
  const password = form.get("password");

  if (user === USER && password === PASSWORD) {
    return { success: true, message: "¡Bienvenido!" };
  }
  return { success: false, message: "Ups... Parece que tus credenciales son incorrectas." };
};
