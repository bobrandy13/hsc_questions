"use client";
import React, { FC } from 'react'
import { useRouter, useSearchParams } from "next/navigation"

interface PaginationProps {
  subject_name: string; topic_name: string; total_items: number; hasPrev: boolean, hasNext: boolean
}

const PaginationControls: FC<PaginationProps> = ({ subject_name, topic_name, total_items, hasNext, hasPrev }) => {
  const router = useRouter()
  const searchParams = useSearchParams();

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '5'

  return (
    <div className='flex gap-2 m-4 items-center'>
      <button className='bg-blue-500 text-white p-3 rounded-sm' disabled={!hasPrev} onClick={() => {
        window.location.replace(`/subjects/${subject_name}/topics/${topic_name}/?page=${Number(page) - 1}&per_page=${per_page}`)
      }}>
        prev page</button>

      <div className='p-2 font-mono'>{page}/{Math.ceil(total_items / Number(per_page))}</div>

      <button className='bg-blue-500 text-white p-3 rounded-sm' disabled={!hasNext} onClick={() => {
        window.location.replace(`/subjects/${subject_name}/topics/${topic_name}/?page=${Number(page) + 1}&per_page=${per_page}`)
      }}>
        next page</button>
    </div>

  )

}


export default PaginationControls;
