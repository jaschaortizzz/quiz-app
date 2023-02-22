import React from 'react'
import { useErrorContext } from '../../contexts/errorContext';


function ErrorDisplay() 
{
    const { errors } = useErrorContext();

  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                            <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                Looks like you&apos;ve found the
                                doorway to the great nothing
                            </h1>
                            {errors.map(x => (
                                <p key={x.action} className="my-2 text-gray-800">{x.message}</p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <img alt="error" src="https://i.ibb.co/G9DC8S0/404-2.png" />
                    </div>
                </div>
            </div>
            <div>
                <img alt="error"src="https://i.ibb.co/ck1SGFJ/Group.png" />
            </div>
        </div>
  )
}

export default ErrorDisplay