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
  const host = process.env.NEXT_PUBLIC_BACKEND_URL as string;
  const endpoint = "/confirm-attendance"
  await fetch(`${host}${endpoint}?name=${formData.name}&willAttend=${formData.willAttend}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
  });

}
