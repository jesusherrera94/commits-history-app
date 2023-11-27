import React from 'react'
import { commitsInterface, commitsProp } from '../../types/commitsResponse'

export default function Card(props: commitsProp) {
  return (
    <span className="relative block py-3 px-8 overflow-hidden border bg-white border-slate-100 rounded-lg my-4 drop-shadow-xl">
        <div className="justify-between sm:flex">
            <div>
            <h5 className="text-xl font-bold text-slate-900">
                {props.commit.message}
            </h5>
            <p className="mt-1 text-xs font-medium text-green-600">By {props.commit.author.name} - {props.commit.author.email}</p>
            </div>
        </div>

        <div className="flex mt-2">
            <div className="flex flex-col-reverse mr-6">
            <p className="text-sm font-medium text-green-600">Published Date</p>
            <p className="text-xs text-slate-500">{props.commit.author.date.substring(0,10)}</p>
            </div>
            <div className="flex flex-col-reverse">
            <p className="text-sm font-medium text-green-600">SHA</p>
            <p className="text-xs text-slate-500">{props.commit.sha}</p>
            </div>
        </div>

    </span>
  )
}
