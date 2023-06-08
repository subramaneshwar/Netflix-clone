import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../Context/Auth.Context'

function Protectedroute({children}) { 
    const {user} = UserAuth()
    if(!user){
        return <Navigate to="/login" />
    }else{
        return children
    }
}

export default Protectedroute