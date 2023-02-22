import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import QuestionItem from '../QuestionItem'
import { MoveNextQuestion, MovePrevQuestion } from '../../hooks/FetchQuestions'
import { PushAnswer } from '../../hooks/setResult'
import Result from '../Result'

function Question() {


  const result = useSelector(state => state.result.result)
  const state = useSelector(state => state)
  const { queue, trace} = useSelector(state => state.questions)
  const dispatch = useDispatch();
  const [ check, setChecked ] = useState(undefined)

  useEffect(() => {
    console.log(state);
  },)

  function onChecked(check){
    setChecked(check)
  }

  function onNext(){
    if (trace < queue.length) {
      dispatch(MoveNextQuestion())
      if (result.length <= trace) {
        dispatch(PushAnswer(check))
      }
    }
    setChecked(undefined)
  }
  function onPrev(){
    if (trace > 0) {
      dispatch(MovePrevQuestion())
    }
  }

  return (
    <div>
    {trace && trace >= queue.length ? 
    (<Result/>) 
    : 
    (
    <div>
      <QuestionItem onChecked={onChecked}/>
      <div className="mx-auto mb-6 max-w-4xl px-2 sm:px-6 lg:px-10 p-4 bg-white rounded-lg md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <div className="w-full">
        <div className="flex flex-wrap justify-center">
        <div className="flex text-xs text-center md:text-base justify-center">
          {trace > 0 ? 
                <button
                onClick={onPrev}
                type="button" 
                className="w-48 h-20 mx-2 font-bold py-2 px-4 rounded bg-primary-100 text-white hover:bg-primary-200">
                Previous
              </button>
          :
          <></>
          }
              <button 
                onClick={onNext}
                type="button" 
                className="w-48 mx-2 font-bold py-2 px-4 rounded bg-primary-100 text-white hover:bg-primary-200">
                Next
              </button>
              </div>
        </div>
      </div>
    </div>
    </div>
    )}
    </div>
    
  )
}

export default Question