"use server";

import prisma from "~/lib/prisma";
import { Storage } from "@google-cloud/storage";

// functoin to remove all the white spaces from a file name
const formatFileName = (fileName: string): string => {
  // Remove all the white spaces from the file name
  return fileName.replace(/\s/g, "");
};

const private_key = Buffer.from(
  process.env.GOOGLE_PRIVATE_KEY ?? "",
  "base64",
).toString("ascii");

const cloudStorage = new Storage({
  keyFilename: `intrepid-pride-385906-1911f6f5be41.json`,
  projectId: "intrepid-pride-385906",
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: private_key,
  },
});
// TOOD: Prevent the form and rate limit the amount of data that can be sent at one time;

const bucket = cloudStorage.bucket("framingwebsite");
let q_url = "";
let a_url = "";

/** @function
 * @name function that submits the uploaded photo onto Google Cloud Storage
 * @param formData the uploaded file with type FormData
 *
 */
export default async function submitForm(formData: FormData) {
  const question: File | null = formData.get("question_url") as unknown as File;
  const answer: File | null = formData.get("answer_url") as unknown as File;
  const title = formData.get("title") as string;
  const topic = formData.get("topic") as string;

  if (!question || !answer) {
    return {
      upload: "No file",
    };
  }

  const bytes = await question.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const blob = bucket.file(formatFileName(question.name));
  const blobStream = blob.createWriteStream({ resumable: false });
  blobStream.on("finish", () => {
    // The public URL can be used to directly access the file via HTTP.
    q_url = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
  });

  const answer_bytes = await answer.arrayBuffer();
  const answer_buffer = Buffer.from(answer_bytes);

  const answer_blob = bucket.file(formatFileName(answer.name));
  const answer_blobStream = answer_blob.createWriteStream({ resumable: false });
  answer_blobStream.on("finish", () => {
    // The public URL can be used to directly access the file via HTTP.
    a_url = `https://storage.googleapis.com/${bucket.name}/${answer_blob.name}`;
  });

  answer_blobStream.end(answer_buffer);

  blobStream.end(buffer);

  return prisma.question.create({
    data: {
      title: title,
      topic: topic,
      question_url: `https://storage.googleapis.com/${bucket.name}/${answer_blob.name}`,
      answer_url: `https://storage.googleapis.com/${bucket.name}/${blob.name}`,
    },
  });
}
