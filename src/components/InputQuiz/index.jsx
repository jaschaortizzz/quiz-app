import React from 'react'


function Input({
    field,
    form: { touched, errors },
    meta,
    className,
    ...props
  }) {

  return (
    <div>
        <input type="hidden" name="remember" value="true"/>
            <label htmlFor={props.id} className="ml-3 text-sm font-bold text-gray-700 tracking-wide">{props.label}</label>
            <input 
                {...field}
                {...props}
                id={props.id}
                type={props.id}
                autoComplete={props.id}
                className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500" 
            />
        {touched[field.name] && errors[field.name] && (<p className='m-3 text-sm font-bold text-red-500 tracking-wide'>{errors[field.name]}</p>) }
    </div>
       
  ) 
}

export default Input