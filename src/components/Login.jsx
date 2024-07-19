import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'
import authService from '../appwrite/auth'
import {login as authLogin} from '../store/authSlice'
import Input from './Input'
import Button from './Button'

function Login() {

    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {register, handleSubmit}=useForm()
    const[error,setError]=useState("")
    
    const login=async(data)=>{
        setError("")
        try {
            const session=await authService.login(data)
            if(session){
                const userData=await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));                    
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='w-1/4 rounded bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 text-gray-200 flex items-center justify-center relative'>
        <div className='flex flex-col justify-between items-center h-full w-full m-5'>
            <h2 className='text-lg font-bold text-teal-600 my-3 bg-teal-200 py-4 px-6 absolute -top-10'>SIGN IN</h2>
            <p className='mt-5 mb-3'>
                Don't have an account?
                <Link to='/signup'
                className='text-blue-600 underline'>
                    Sign up
                </Link>
            </p>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit(login)}>
                <div className='flex flex-col'>
                    <Input 
                    className="mb-2"
                    label="Email : "
                    placeholder="Enter your email"
                    type="email"
                    {...register("email",{
                        required:true,
                        validate:{
                            matchPattern:(value)=> /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email must be valid"
                        }
                    })}
                    />
                    <Input
                    className="mb-2"
                    label="Password : "
                    type="password"
                    placeholder="Enter password"
                    {...register("password",{
                        required:true
                    })}
                    />
                    <Button type='submit'>
                        Sign in
                    </Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login