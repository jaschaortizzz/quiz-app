import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
// import QuestionItem from '../QuestionItem'
// import Result from '../Result'

function Question({loadQuestions, loadUser, user, questions, nextQuestion, prevQuestion}) {

    const loadData = useCallback(async() => {
        await Promise.all([ loadQuestions(), loadUser(user) ])
    },[ loadQuestions, loadUser, user])

    useEffect(() => {
        loadData();
    },[loadData]);


  return (
    <div>
      <div>
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
        <div className="mx-auto mb-6 max-w-4xl px-2 sm:px-6 lg:px-10 p-4 bg-white rounded-lg md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <div className="w-full">
            <div className="flex flex-wrap justify-center">
              <div className="flex text-xs text-center md:text-base justify-center">
                  <button
                    type="button" 
                    onClick={() => 
                      prevQuestion({
                        ...user,
                        bookmark: user.bookmark - 1
                    })}
                    className="w-48 h-20 mx-2 font-bold py-2 px-4 rounded bg-primary-100 text-white hover:bg-primary-200">
                    Previous
                  </button>
                  <button 
                    type="button" 
                    onClick={() => 
                      nextQuestion({
                        ...user,
                        bookmark: user.bookmark + 1
                    })}
                    className="w-48 mx-2 font-bold py-2 px-4 rounded bg-primary-100 text-white hover:bg-primary-200">
                    Next
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Question