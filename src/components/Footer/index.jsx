import React from 'react'
import clsx from 'clsx'

const questionQuantity = [1,2,3,4,5,6,7,8,9,10]

export function Footer() {
  return (
    <footer className="mx-auto max-w-4xl px-2 sm:px-6 lg:px-10 p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <div className="w-full">
        <div className="flex flex-wrap justify-center">
          {questionQuantity.map(item => 
            <div key={questionQuantity} className="w-1/4">
              <div className="relative my-4">
                <div className={clsx('w-8 h-8 mx-auto bg-green-500 rounded-full text-lg text-white flex items-center', {
                  'bg-gray-300': item % 2 === 0 ,
                  })}>
                  <span className="text-center text-white w-full">
                    <svg className="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"/>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="text-xs text-center md:text-base">
                {item}
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer