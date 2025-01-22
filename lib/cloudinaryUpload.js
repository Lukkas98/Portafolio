"use server";
import { v2 } from "cloudinary";
import { API_KEY, API_SECRET, CLOUD_NAME } from "./configVariables";

v2.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
  secure: true,
});

export async function uploadImageAction(file, nameProyect) {
  try {
    const result = await v2.uploader.upload(file.path, {
      folder: `portafolio/proyectos/${nameProyect}`,
    });
    return result.secure_url;
  } catch (error) {
    console.error("Error subiendo imagen a Cloudinary:", error);
    throw error;
  }
}
