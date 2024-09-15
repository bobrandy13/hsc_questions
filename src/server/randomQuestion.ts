"use server";
import { PrismaClient } from "@prisma/client";

interface Question {
    id: number;
    content_level: string;
    topic?: string;
    // Add other fields as necessary
}

function randomChoice(questions: { id: string; title: string; content_level: string; topic: string; name: string; createdAt: string; question_url: string; answer_url: string; likes: number; dislikes: number; }[]) {
    return questions[Math.floor(questions.length * Math.random())];
}

export default async function getRandomQuestion(content_level: string, topic?: string) {
    const prisma = new PrismaClient();

    const questions = await prisma.question.findMany({
        where: {
            AND: [
                { content_level: content_level },
                topic ? { topic: topic } : {}
            ],
        }
    });

    return randomChoice(questions);



    return;

}