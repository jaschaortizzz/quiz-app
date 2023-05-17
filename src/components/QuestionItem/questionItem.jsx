import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

function QuestionItem({questions, user}) {

  return (
    <div className="mx-auto max-w-4xl px-2 sm:px-6 lg:px-10 p-4 bg-white rounded-lg md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <div className="w-full">
      <h1 className="font-bold flex justify-center font-semibold text-2xl text-primary-200">{`Question #${user.bookmark}`}</h1>
        <div className="my-10">
            
          
          {questions.map(question => {
            if(question.id === user.bookmark){
            return (
              <>
                <div className="flex text-xs text-center md:text-base justify-center">
                  <p key={question.id} className="font-bold text-2xl">{question.question}</p>
                </div>
                <div className="flex text-xs text-center md:text-base justify-center">
                  <div className="w-2/6 mt-10">
                    {question.options.map(option => 
                      <div 
                        key={option.id}
                          // className={clsx('bg-primary-100 hover:bg-primary-200 rounded my-2', {
                          //   'bg-secondary-300' : result[trace] === option.id,
                          // })}
                        className="bg-primary-100 hover:bg-primary-200 rounded my-2"
                        >
                        <input 
                          className="hidden"
                          id={option.value} 
                          type="radio" 
                          name="options"
                          value={false}
                          // onChange={()=> onSelect(option.id)}
                          />
                        <label className="rounded flex flex-col p-2 border-2 border-primary-200 cursor-pointer" htmlFor={option.value}>
                          <p className="font-bold text-xl text-white">{option.value}</p>
                        </label>
                      </div>
                    )}
                    </div>
                </div>
              </>
              
            )
          }
            return null
          })}
           
        </div>
      </div>
    </div>
  )
}


export default QuestionItem;