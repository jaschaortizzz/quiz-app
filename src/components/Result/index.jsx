import React, { useEffect, useState } from 'react'
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux'
import { useAuthContext } from '../../contexts/authContext';
// import { usePublishResult } from '../../hooks/setResult';

function Result() {


    const [data, setData] = useState([]);
    const dispatch = useDispatch()
    const { user } = useAuthContext();
    const { questions: { queue, answers}, result : { result, userId} } = useSelector(state => state)
    // usePublishResult({ result, username : userId, attempts, points : earnPoints});

    useEffect(() => {
       getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`,(res) => {
        setData(res)
       })
    })

    const totalMarks = queue.length *10;
    const attempts = attempts_Number(result)
    const earnMarks = earnMarks_Number(result, answers)
    const progressBar = Math.floor((earnMarks/totalMarks) * 100)


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
                        {data.map(ress => 
                            <div>
                                <div className="mt-4">
                                    <p className="text-4xl font-bold text-secondary-100">{`Total Marks ${ress?.points}`}</p>
                                </div>
                                <div className="mt-4 mb-5">
                                    <p className="text-gray-600 text-2xl font-bold text-secondary-100">{ress.username}</p>
                                </div>
                            </div>
                        )}
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