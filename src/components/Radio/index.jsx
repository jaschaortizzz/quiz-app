import React from 'react'

function Radio({
    field: { name, value }, //{name,value,onChange,onBlur}
    form: { touched, errors, setFieldValue, setFieldTouched }, //{values, sexXXXX, handleXXXX, dirty, isValid, status}
    meta,
    label,
    className,
    options,
    ...props
}) {


  return (
        <fieldset className="my-3">
                <legend className="ml-3 text-sm font-bold text-gray-700 tracking-wide">{label}</legend>
                <div className="flex justify-between">
                {options.map(x => (
                    
                        <div key={x.id}>
                            <input className="border ml-5 border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-primary-100 py-1 px-1.5 text-primary-100" 
                                    type="radio" name={name} id={x.id} checked={value === x.id} onChange={()=>{
                                    setFieldValue(name, x.id)
                                    setFieldTouched(name, x.id)
                            }}
                                />
                            <label className="mb-2 ml-1 text-xs font-semibold" htmlFor={x.id}>{x.text}</label>
                        </div>
                    
                    ))}
                    </div>
        </fieldset>   
  )
}

export default Radio