"use server"; // This is a server function
async function file(formData: FormData) {
  const file = formData.get("question_url") as File;
}

export default file;
