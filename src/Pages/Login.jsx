import React, { useState } from 'react'
import { UserAuth } from '../Context/Auth.Context'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [error,seterror] = useState('')
  const {login} = UserAuth()
  const navigate = useNavigate()
  const handleSubmit = async(e)=>{
      e.preventDefault()
      seterror('')
      try{
          await login(email,password);
          navigate('/')
      }catch(error){
        seterror(error.message)
          console.log(error);
      }
  }
  return (
    <>
    <div className='w-full h-screen'>
       <img className='hidden sm:block absolute w-full h-full object-cover ' src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg" alt="/" />
          <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
          <div className='fixed w-full px-4 py-24 z-50'>
              <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                 <div className='max-w-[320px] mx-auto py-16'>
                  <h1 className='text-3xl font-bold' >Sign In</h1>
                  {error ? <p className='p-3 bg-red-400 my-2'>{error}</p>:""}
                   <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                    <input onChange={(e)=>setemail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email'/>
                      <input onChange={(e)=>setpassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder="Password" autoComplete='current-password' />
                          <button className='bg-red-600 rounded py-3 my-6 font-bold'>Sign In</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                        <p><input className='mr-2' type="checkbox" />Remeber me</p>
                        <p>Need Help</p>

                        </div>
                        <p className='py-8'><span className='text-gray-600' >New to Netflix? </span> 
                        <Link to="/signup">
                         Sign up
                        </Link>
                        </p>
                      </form>           
                 </div>
              </div>
          </div>
      </div>  
  </>
  )
}

export default Login