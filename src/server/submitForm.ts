"use server";

import prisma from "~/lib/prisma";
import { Storage } from "@google-cloud/storage";
import { upload } from "node_modules/@google-cloud/storage/build/esm/src/resumable-upload";

const cloudStorage = new Storage({
  keyFilename: `intrepid-pride-385906-1911f6f5be41.json`,
  projectId: "intrepid-pride-385906",
});

const bucket = cloudStorage.bucket("framingwebsite");

export default async function submitForm(formData: FormData) {
  console.log(formData.get("question_url"));

  const file: File | null = formData.get("question_url") as unknown as File;

  if (!file) {
    return {
      upload: "No file",
    };
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const blob = bucket.file(file.name);
  const blobStream = blob.createWriteStream({ resumable: false });
  blobStream.on("finish", () => {
    // The public URL can be used to directly access the file via HTTP.
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
    console.log("file finished uploading", publicUrl);
  });

  blobStream.end(buffer);

  console.log(buffer, blobStream);

  // return prisma.question.create({
  //   data: {
  //     title: values.title,
  //     topic: values.topic,
  //     question_url: "https://wwww.google.com",
  //     answer_url: values.answer_url,
  //   },
  // });

  return {
    title: "Hello",
    topic: "World",
    question_url: "https://www.google.com",
    answer_url: "https://www.google.com",
  };
}
