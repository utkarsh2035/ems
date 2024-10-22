import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <h1 className='text-5xl'>Login Page</h1>
      <div className=" border-red-600 border-4 mt-10">
        <h1 className='text-3xl mt-6'>Log In</h1>
        <form className='flex flex-col gap-8 mt-40 ml-8 mr-8'>
          <input type="email" name="email" placeholder='Email' className='p-2 border-4 border-gray-400 rounded-md bg-transparent'/>
          <input type="password" name="password" placeholder='Password' className='p-2 border-4 border-gray-400 rounded bg-transparent'/>
          <button type="submit" className='p-2 border-4 bg-red-400 rounded border-gray-800 mb-12
          '>Log In</button>
        </form>
      </div>
    </div>
  )
} 

export default Login
