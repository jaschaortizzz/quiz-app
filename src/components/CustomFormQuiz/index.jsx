import React from 'react'
import { Formik, Field, Form } from 'formik'

function CustomForm({ fields,children, btnText ,...props }) {
  return (
    <Formik
        {...props}
    >
        {({ errors}) =>(
            <Form className="mt-8 space-y-6">
                {errors.serverError && <p className='text-center font-semibold text-red-500 text-sm'>{errors.serverError}</p>}
                {fields.map(item => 
                    <Field
                        key={item.name}
                        {...item}
                    />
                )}
                {children}
            </Form>
        )}
        </Formik>
  )
}

export default CustomForm


