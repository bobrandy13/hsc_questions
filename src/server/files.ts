"use server"; // This is a server function
async function file(formData: FormData) {
  const file = formData.get("question_url") as File;

  console.log("File name:", file.name, "file size:", file.size);
}

export default file;
