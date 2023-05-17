import React from 'react'
import '../../style.css'
import PropTypes from 'prop-types'
import { loginFields, loginInitialValues } from './loginFields'
import CustomFormQuiz from '../../components/CustomFormQuiz'

function Login({login}) {


  return (
    
    <div className="relative min-h-screen flex ">
    <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
      <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative">
        <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0" />
        <div className="w-full  max-w-md z-10">
          <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">Want to take a quiz..?</div>
          <div className="sm:text-sm xl:text-md text-gray-200 font-normal">Do you want to create and take quizzes? With the help of Quiz App this becomes all very simple. With this app you can create, take and share quizzes.
          Getting started is simple. You create a quiz and give it a name. Then you can add questions and their answers to the quiz. When you&apos;re done you can take the quiz in normal or random order. You can also share the quiz with others.This is very useful for learning languages or other school subjects.</div>
        </div>

      </div>
      <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Welcome Back!
            </h2>
            <p className="mt-2 text-sm text-gray-500">Please sign in to your account</p>
          </div>
        <CustomFormQuiz
            initialValues={loginInitialValues}
            onSubmit={login}
            fields={loginFields}
            >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember_me" name="remember_me" type="checkbox"
                  className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"/>
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="/" className="text-indigo-400 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button type="submit"
                className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                Sign in
              </button>
            </div>
            <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
              <span>Don&apos; have an account?</span>
              <a href="/register"
                className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign
                up</a>
            </p>
        </CustomFormQuiz> 
        </div>
      </div>
    </div>
  </div>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired
}

export default Login