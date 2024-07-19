import React, { useState } from 'react';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import { useEffect } from 'react';
import { login, logout } from './store/authSlice';
import {Outlet} from 'react-router-dom'

function App() {

  const[loading,setLoading]=useState(true)
  const dispatch=useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])

  return !loading ? (
  <div className=''>
    <Header/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
  </div> 
  ) : null
}

export default App
