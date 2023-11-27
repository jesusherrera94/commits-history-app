import React from 'react'

export default function Profile() {
  return (
    <div
    className="lg:w-1/3 sm:w-full my-4 mx-2 rounded-lg bg-white p-3 drop-shadow-xl divide-y divide-green-400"
    >
    <div className="flex space-x-4 items-center p-4">
      <div className="flex mr-auto items-center space-x-4">
        <img
          src="https://avatars.githubusercontent.com/u/499550?v=4"
          className="w-16 h-16 shrink-0 rounded-full"
        />
        <div className="space-y-2 flex flex-col flex-1 truncate">
          <div className="font-medium relative text-xl leading-tight text-gray-900">
            <span className="flex">
              <span className="truncate relative pr-8">
                Evan You
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="py-2">
      <div className="grid gap-1">
        <span
          className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-7 h-7"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M9.785 6l8.215 8.215l-2.054 2.054a5.81 5.81 0 1 1 -8.215 -8.215l2.054 -2.054z"
            ></path>
            <path d="M4 20l3.5 -3.5"></path>
            <path d="M15 4l-3.5 3.5"></path>
            <path d="M20 9l-3.5 3.5"></path>
          </svg>
          <span>Here location</span>
        </span>
        <span
          className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-7 h-7"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M9.785 6l8.215 8.215l-2.054 2.054a5.81 5.81 0 1 1 -8.215 -8.215l2.054 -2.054z"
            ></path>
            <path d="M4 20l3.5 -3.5"></path>
            <path d="M15 4l-3.5 3.5"></path>
            <path d="M20 9l-3.5 3.5"></path>
          </svg>
          <span>Here create at</span>
        </span>
      </div>
    </div>
  </div>
  )
}
