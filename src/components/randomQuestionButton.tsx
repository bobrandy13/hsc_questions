"use client";
import React from "react";
import getRandomQuestion from "~/server/randomQuestion";
import { useRouter } from "next/navigation"

export default function RandomQuestionButton({ content_level, topic }: { content_level: string, topic?: string }) {
    const router = useRouter();
    const handleClick = async () => {
        const randomQuestion = await getRandomQuestion(content_level, topic);

        if (!randomQuestion) {
            return;
        }

        router.replace(
            `/question/${randomQuestion.id}`,
        );
    };

    return (
        <div className="flex items-center">
            <button className="flex items-center hover:bg-slate-100 p-4" onClick={handleClick}>
                <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    stroke="lightgreen"
                    strokeWidth="1.5"
                    className="hover:stroke-green-500"
                >
                    <path d="M21.67 3.955l-2.825-2.202.665-.753 4.478 3.497-4.474 3.503-.665-.753 2.942-2.292h-4.162c-3.547.043-5.202 3.405-6.913 7.023 1.711 3.617 3.366 6.979 6.913 7.022h4.099l-2.883-2.247.665-.753 4.478 3.497-4.474 3.503-.665-.753 2.884-2.247h-4.11c-3.896-.048-5.784-3.369-7.461-6.858-1.687 3.51-3.592 6.842-7.539 6.858h-2.623v-1h2.621c3.6-.014 5.268-3.387 6.988-7.022-1.72-3.636-3.388-7.009-6.988-7.023h-2.621v-1h2.623c3.947.016 5.852 3.348 7.539 6.858 1.677-3.489 3.565-6.81 7.461-6.858h4.047z" />
                </svg>
                <p className="pl-4">Random Question</p>
            </button>
        </div>
    )
}