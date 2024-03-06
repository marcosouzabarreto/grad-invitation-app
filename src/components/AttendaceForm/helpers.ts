import { sql } from "@vercel/postgres";


export type FormData = {
  name: string,
  willAttend: string,
}

function findErrorByKey(key: keyof FormData) {
  const errorsMap = {
    name: "Nome Invalido",
    willAttend: "Confirmacao Invalida"
  }
  return errorsMap[key];

}

export function validateFormData(formData: FormData) {
  const errors: Array<string> = [];

  Object.entries(formData).forEach(([key, value]) => {
    if (!value) {
      errors.push(findErrorByKey(key as keyof FormData))

    }

  })
  return errors;

}

export async function submit(formData: FormData) {
  await sql`INSERT INTO guests (name, will_attend) values (${formData.name}, ${formData.willAttend})` ;
}
