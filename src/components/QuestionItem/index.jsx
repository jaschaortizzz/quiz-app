import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFetchQuestion } from '../../hooks/FetchQuestions'
import { updateResult } from '../../hooks/setResult'

function QuestionItem({onChecked}) {

  const [checked, setChecked] = useState(undefined)
  const {trace} = useSelector(state => state.questions)
  const result = useSelector(state => state.result.result)
  const [ {isLoading, apiData, serverError}] = useFetchQuestion()
  const dispatch = useDispatch()
  const questions  = useSelector(state => state.questions.queue[state.questions.trace])
 

  function onSelect(id){
    onChecked(id)
    setChecked(id)
    dispatch(updateResult({trace, checked}))
  }

  // useEffect(() => {
  //   console.log(trace, checked);
  // },[checked])

  if (isLoading) return <h3>Loading...</h3>
  if (serverError) return <h3>{serverError || "Unknown Error"}</h3>
  

  return (
    <div className="mx-auto max-w-4xl px-2 sm:px-6 lg:px-10 p-4 bg-white rounded-lg md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <div className="w-full">
      <h1 className="font-bold flex justify-center font-semibold text-2xl text-primary-200">Question #1</h1>
        <div className="my-10">
            
          <div className="flex text-xs text-center md:text-base justify-center">
          
            <p className="font-bold text-2xl">{questions?.question}</p>
          </div>
        <div className="flex text-xs text-center md:text-base justify-center">
            <div className="w-2/6 mt-10">
                {questions?.options.map(option => 
                    <div key={option.id}
                    className={clsx('bg-primary-100 hover:bg-primary-200 rounded my-2', {
                      'bg-secondary-300' : result[trace] === option.id,
                    })}
                    >
                        <input 
                            className="hidden"
                            id={option.value} 
                            type="radio" 
                            name="options"
                            value={false}
                            onChange={()=> onSelect(option.id)}
                        />
                        <label className="rounded flex flex-col p-2 border-2 border-primary-200 cursor-pointer" htmlFor={option.value}>
                        <p className="font-bold text-xl text-white">{option.value}</p>
                        </label>
                    </div>
                )}
            </div>
        </div> 
        </div>
      </div>
    </div>
  )
}

export default QuestionItem