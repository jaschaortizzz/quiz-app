import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetAllAction } from '../../redux/question_reducer';
import { resetResultAction, setUserId } from '../../redux/result_reducer';
import { useAuthContext } from '../../contexts/authContext';

function Result() {

  const { user } = useAuthContext();
  const dispatch = useDispatch()
  const navigate = useNavigate();

  // useEffect(() => {
  //     console.log(user.user.name);
  // })

  function onStart(){
    dispatch(setUserId(user.user.name))
    dispatch(resetAllAction());
    dispatch(resetResultAction());
    navigate("/home/questions");
  }


  return (
    <div className="mx-auto mb-6 max-w-4xl px-2 sm:px-6 lg:px-10 p-4 bg-white rounded-lg md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <div className="w-full">
        <div className="flex flex-wrap justify-center">
            <div className="flex text-xs text-center md:text-base justify-center">
                <div className="bg-white p-10 rounded-lg shadow-md">
                        <h1 className="text-3xl font-bold mb-5">Welcome!</h1>
                        <div className="mt-4 mb-5">
                          <p className="text-gray-600 text-4xl font-bold text-secondary-100">{user.user.name}</p>
                        </div>
                        <h2 className="tracking-wide">
                            Science Category
                        <br />
                            (Challenge)
                        </h2>
                    <button
                        onClick={onStart}
                        type="button" 
                        className="bg-primary-100 py-3 px-16 mt-4 rounded text-white text-sm font-semibold hover:bg-primary-200">
                        Start
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Result