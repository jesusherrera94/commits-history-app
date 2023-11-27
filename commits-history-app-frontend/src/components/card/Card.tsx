import React from 'react'

export default function Card() {
  return (
    <span className="relative block py-3 px-8 overflow-hidden border bg-white border-slate-100 rounded-lg my-4 drop-shadow-xl">
        <div className="justify-between sm:flex">
            <div>
            <h5 className="text-xl font-bold text-slate-900">
                Building a beautiful product as a software developer
            </h5>
            <p className="mt-1 text-xs font-medium text-green-600">By Ana Doe</p>
            </div>
        </div>

        <div className="flex mt-2">
            <div className="flex flex-col-reverse">
            <p className="text-sm font-medium text-green-600">Published Date</p>
            <p className="text-xs text-slate-500">31st June, 2022</p>
            </div>
        </div>
    </span>
  )
}
