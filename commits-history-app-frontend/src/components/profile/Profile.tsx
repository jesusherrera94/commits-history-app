import React from 'react'
import { userProp } from '../../types/userResponse'

export default function Profile(props: userProp) {

  return (
    <div
    className="lg:w-1/3 sm:w-full my-4 mx-2 rounded-lg bg-white p-3 drop-shadow-xl divide-y divide-green-400"
    >
    <div className="flex space-x-4 items-center p-4">
      <div className="flex mr-auto items-center space-x-4">
        <img
          src={props.user.profileAvatar}
          className="w-16 h-16 shrink-0 rounded-full"
        />
        <div className="space-y-2 flex flex-col flex-1">
          <div className="font-medium relative text-xl leading-tight text-gray-900">
            <span className="flex">
              <span className="relative pr-8">
                {props.user.name}
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
          <svg className='w-8 h-8' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#000000"/>
            <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="#000000"/>
            <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#000000"/>
          </svg>
          <span>{props.user.location}</span>
        </span>
        <span
          className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 rounded-md"
        >
          <svg className='w-8 h-8' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.7 15C4.03377 15.6353 3 16.5205 3 17.4997C3 19.4329 7.02944 21 12 21C16.9706 21 21 19.4329 21 17.4997C21 16.5205 19.9662 15.6353 18.3 15M12 9H12.01M18 9C18 13.0637 13.5 15 12 18C10.5 15 6 13.0637 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9ZM13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Since {props.user.creationDate.substring(0,10)} on GitHub</span>
        </span>
      </div>
    </div>
  </div>
  )
}
