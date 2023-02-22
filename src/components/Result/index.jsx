import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetAllAction } from '../../redux/question_reducer';
import { resetResultAction } from '../../redux/result_reducer';
import { attempts_Number, earnMarks_Number } from '../../helper/helper';

function Result() {

    const dispatch = useDispatch()
    const { questions: { queue, answers}, result : { result, userId} } = useSelector(state => state)

    useEffect(() => {
        console.log(earnMarks);
    })

    const totalMarks = queue.length *10;
    const attempts = attempts_Number(result)
    const earnMarks = earnMarks_Number(result, answers)

    function onReset(){
        dispatch(resetAllAction());
        dispatch(resetResultAction());
    }


  return (
    <div className="mx-auto mb-6 max-w-4xl px-2 sm:px-6 lg:px-10 p-4 bg-white rounded-lg md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <div className="w-full">
        <div className="flex flex-wrap justify-center">
            <div className="flex text-xs text-center md:text-base justify-center">
                <div className="bg-white p-10 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold">Finished!</h1>
                    <div className="mt-4 mb-10">
                        <p className="text-gray-600">{`Total marks ${earnMarks}`}</p>
                        <div className="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                            <div className="bg-secondary-200 w-3/4 h-full rounded-lg shadow-md" />
                        </div>
                    </div>
                        <h3 className="text-xs uppercase">Congratulations</h3>
                        <h2 className="tracking-wide">
                            Science Category
                        <br />
                            (Challenge)
                        </h2>
                    <button
                        onClick={onReset}
                        type="button" 
                        className="bg-primary-100 py-3 px-16 mt-4 rounded text-white text-sm font-semibold hover:bg-primary-200">
                        Start Again
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Result