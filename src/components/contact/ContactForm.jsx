import React from 'react'
import CustomInputField from '../common/CustomInputField'
import { useForm } from 'react-hook-form'
import { requiredValidation } from '../../utils/validation'
import CustomTextArea from '../common/CustomTextArea'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    alert(`${data.name} ${data.email} ${data.phone} ${data.subject} ${data.description}`)
    console.log(data)
  }
  return (
    <div className='mx-4'>
      <h1 className='sm:text-[32px] text-[28px] pt-6 pb-10 font-PlayFair '>
        <span className='text-zinc-700 '>SEND US</span>{' '}
        <span className=' text-cyan-800'>A MESSAGE</span>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
          <CustomInputField
            name='name'
            className='w-full rounded-lg'
            placeholder='full name *'
            type='text'
            register={register}
            validation={requiredValidation('Full Name')}
            errors={errors}
          />
          <CustomInputField
            name='email'
            className='w-full rounded-lg'
            placeholder='email *'
            type='email'
            register={register}
            validation={requiredValidation('email')}
            errors={errors}
          />
          <CustomInputField
            name='phone'
            className='w-full rounded-lg'
            placeholder='phone number *'
            type='number'
            register={register}
            validation={requiredValidation('phone number')}
            errors={errors}
          />
          <CustomInputField
            name='subject'
            className='w-full rounded-lg'
            placeholder='subject'
            type='text'
            register={register}
            errors={errors}
          />
        </div>
        <div className='my-3'>
          <CustomTextArea
            name='description'
            className='rounded-lg'
            placeholder='write a message'
            register={register}
            rows={6}
          />
        </div>
        <button type='submit' className='text-white mx-auto h-[45px] w-full  text-[14px] rounded-lg bg-cyan-800 hover:bg-cyan-700 text-center items-center my-4'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
