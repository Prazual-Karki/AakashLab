import React from 'react'

const CustomTextArea = ({
  name,
  validation,
  register,
  errors,
  placeholder,
  disable,
  col,
  rows,
  defaultvalue,
  className,
}) => {
  return (
    <div className={`w-full ${col}`}>
      <div className={`flex flex-col gap-2`}>
        <textarea
          name={name}
          rows={rows}
          className={`border-none  font-[400]  leading-[18px] focus:outline-none  p-4 text-[13px]   placeholder:font-[400]  ${className}`}
          placeholder={placeholder}
          disabled={disable}
          defaultValue={defaultvalue}
          {...register(name, validation)}
        ></textarea>
        <div className='text-xs mt-3 ml-3 text-left text-red-600'>
          {errors?.[name]?.message}
        </div>
      </div>
    </div>
  )
}

export default CustomTextArea
