import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/Auth.Context'
function NavBar() {

    const {user,logout}=UserAuth()
    const navigate = useNavigate();
    const [show, handleshow] = useState(false)

    const transistionNavbar = ()=>{
        if(window.scrollY > 100){
          handleshow(true)
        }else{
          handleshow(false)
        }
      }
    const handleLogout = async ()=>{
        console.log(user,"skjjjjjjjjjjjjjjjj");
        try {
            await logout()
            navigate('/')
            
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(()=>{ 
        window.addEventListener("scroll",transistionNavbar);
        return () => window.removeEventListener("scroll",transistionNavbar)
      },[]);
  return (
    <div className={`fixed flex items-center justify-between p-4 z-[100] w-full ${show ? "bg-black/60":""}`}  >
    <Link to="/">
    <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>Nflix</h1>
    </Link>
    {
        user?.email ?  (<div>
        <Link to="/account">
        <button className='text-white  pr-4' >Account</button>
        </Link>
        <button onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white' >Logout</button>
    </div>) :
    
    (<div>
        <Link to="/login">
        <button className='text-white  pr-4' >Sign In</button>
        </Link>
        <Link to="/signup">
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white' >Sign up</button>
        </Link>
    </div>)}
</div>
    )
}

export default NavBar