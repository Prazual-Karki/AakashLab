import React from 'react'

const CustomInputField = ({
  type, // type of input field
  name, // name of input field
  validation, // validation for input field
  register, // react hook form register
  errors, // react hook form errors
  placeholder, // placeholder for input field
  disable, // boolean value for disable input field
  col,
  className, // class for input field
}) => {
  return (
    <div className={`w-full h-fit ${col}`}>
      <div className={`flex flex-col `}>
       
        <input
          type={type}
          className={`border-none focus:outline-none bg-background p-4 text-sm leading-4  ${className}`}
          placeholder={placeholder}
          disabled={disable}
          readOnly={disable}
          {...register(name, validation)}
        />

        {errors && (
          <div className='text-xs  text-red-600 mt-3 ml-3 text-left'>
            {errors?.[name]?.message}
          </div>
        )}
      </div>
    </div>
  )
}

export default CustomInputField
