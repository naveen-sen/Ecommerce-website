import { Button, Grid, TextField, Typography, Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, register } from '../../store/Auth/action';
import { store } from '../../store/store';

function SignupForm({handleClose}) {
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  const {auth} = useSelector(store => store)
  useEffect(()=>{
    if(jwt && auth){
      dispatch(getUser(jwt))
    }
  },[jwt,auth])

  

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const user = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    const result = dispatch(register(user))

    if(result?.token){
      localStorage.setItem("jwt",result.token)
      handleClose()
      navigate("/")
    }
    
  };

  return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center px-4">
        <div className="bg-[#1a1a1a] p-8 rounded-2xl shadow-2xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Sign up</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              id='firstName'
              name='firstName'
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="text"
              id='lastName'
              name='lastName'
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="email"
              id='email'
              name='email'
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="password"
              id='password'
              name='password'
              placeholder="Create Password"
              className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-orange-500 via-red-800 to-purple-800 text-white rounded-lg font-semibold hover:opacity-90 transition"
            >
              Create Account
            </button>
            <div>
              <div className="flex items-center justify-center">
                <p className="text-gray-400 text-center">Already have an account?</p>
                <Button onClick={()=>navigate('/login')}>Sign in</Button>
              </div>
            </div>
          </form>
  
          <div className="flex items-center justify-center my-5 text-gray-400">
            <span className="border-t border-gray-600 w-1/4"></span>
            <span className="mx-4">OR</span>
            <span className="border-t border-gray-600 w-1/4"></span>
          </div>
  
          <div className="flex justify-center space-x-4">
            <button className="bg-[#2a2a2a] p-4 rounded-sm text-white hover:bg-gray-700">
              G
            </button>
            <button className="bg-[#2a2a2a] p-4 rounded-sm text-white hover:bg-gray-700">
              f
            </button>
            <button className="bg-[#2a2a2a] p-4 rounded-sm text-white hover:bg-gray-700">
              t
            </button>
          </div>
        </div>
      </div>
    );
}

export default SignupForm;
