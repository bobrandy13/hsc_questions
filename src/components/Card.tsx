"use client"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import happy_face from "public/maths/happy face.jpeg"
import normal_face from "public/maths/Normal Face Emoji.jpeg"
import sad_face from "public/maths/extension 2.jpeg"
import normaliseURL from "~/server/normaliseURL";

enum emoji_face { happy_face, normal_face, sad_face }

export default function Card({ face_emoji, topic, description }: { face_emoji: string, topic: string, description: string }) {
  const [face, setFace] = useState<StaticImageData>(happy_face);

  useEffect(() => {
    if (face_emoji == "4U") setFace(sad_face)
    else if (face_emoji == '3U') setFace(normal_face);
    else setFace(happy_face)
  }, [])


  return (
    <div className=" max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-8 gap-4 lg:w-full">
      <div className="relative w-full h-72">
        <Image className="rounded-t-lg" src={face} alt="" fill />
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{topic}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <Link href={`/subjects/${normaliseURL(face_emoji)}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Find questions
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
    </div>
  )


}
