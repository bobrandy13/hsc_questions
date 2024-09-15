import React from 'react';
import { useParams } from 'next/navigation';
import { api } from "~/trpc/server";
import Question_collapsible from '~/components/question_collapsible';
import PaginationControls from '~/components/Pagination';

export default async function ModulePage({ params }: { params: { module: string } }) {
    console.log("params", parseInt(params.module))

    const questions = await api.topics.fetch_sciences.query({
        subject: "phys",
        module: parseInt(params.module),
    });

    if (questions.length === 0) {
        return <div>No quetions</div>
    }

    return (
        <div>
            <div>
                {questions
                    .map((question, key: number) => {
                        return (
                            <div key={key}>
                                <Question_collapsible question={question} key={key} />
                            </div>
                        );
                    })}


            </div>
        </div>
    );






};
