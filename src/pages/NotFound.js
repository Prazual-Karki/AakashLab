import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='h-[400px] m-auto py-5'>
      <h1 className='font-bold text-[100px] '>404</h1>
      <h5 className='text-[40px]'>Not Found</h5>
      <p className='text-zinc-600 mt-10 mb-5'>
        {' '}
        The page you requested does not exist. Click below to go to Home Page
      </p>
      <Link to={"/"}>
        <button className='text-white mx-auto h-[45px] w-[200px] text-[14px] rounded-3xl bg-blue-500 hover:bg-blue-400 text-center items-center my-4'>
          Go to home page
        </button>
      </Link>
    </div>
  )
}

export default NotFound;
