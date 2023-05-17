import React, {useEffect, useCallback} from 'react'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Menu({user, loadUser}) {

  const navigate = useNavigate();

//   const loadData = useCallback(async() => {
//     await Promise.all([ loadUser(user) ])
// },[loadUser, user])

// useEffect(() => {
//     loadData();
// },[loadData]);

  function onStart(){
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
                          <p className="text-gray-600 text-4xl font-bold text-secondary-100">{user.name}</p>
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

Menu.propTypes = {
  user: PropTypes.shape({}),
};

Menu.defaultProps = {
  user: null,
};

export default Menu