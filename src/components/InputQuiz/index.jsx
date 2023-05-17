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
                className="w-full text-base px-4 py-2 focus:outline-none rounded-2xl focus:border-indigo-500" 
                {...field}
                {...props}
                id={props.id}
                type={props.type}
                autoComplete={props.autoComplete}
            />
        {touched[field.name] && errors[field.name] && (<p className='m-3 text-sm font-bold text-red-500 tracking-wide'>{errors[field.name]}</p>) }
    </div>
       
  ) 
}

export default Input