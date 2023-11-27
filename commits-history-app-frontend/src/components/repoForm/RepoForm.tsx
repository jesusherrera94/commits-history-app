import React from 'react'

export default function RepoForm() {
  return (
    <div className="lg:w-2/3 sm:w-full my-4 mx-2 rounded-lg bg-white py-3 px-8 drop-shadow-xl divide-y divide-gray-200">
        <div className='flex flex-col'>
            <label className='mt-2 font-semibold'>GitHub User</label>
                <input className="w-1/2 inline-flex justify-center mt-1 px-4 py-2 text-sm font-medium text-gray-700 bg-slate-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-500" type='text' />
            <label className='mt-2 font-semibold'>Repository Name</label>
                <input className="w-1/2 inline-flex justify-center mt-1 px-4 py-2 text-sm font-medium text-gray-700 bg-slate-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-500" type='text' />
            <label className='mt-2 font-semibold'>Github token</label>
                <input className="w-2/3 inline-flex justify-center mt-1 px-4 py-2 text-sm font-medium text-gray-700 bg-slate-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-500" type='text' />

            <button className='rounded-lg border w-52 h-10 my-4 bg-green-300 font-semibold hover:bg-green-400'>Search Commits</button>
        </div>
    </div>
  )
}
