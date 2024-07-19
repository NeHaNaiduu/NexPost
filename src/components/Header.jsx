import React from 'react'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import LogoutBtn from './LogoutBtn'
import Container from './Container'

function Header() {

    const authStatus=useSelector((state)=>state.auth.status)
    const navigate =useNavigate()
    
    const navItems=[
        {
            name:"Home",
            slug:"/",
            active:true
        },
        {
            name:"Login",
            slug:"/login",
            active:!authStatus
        },
        {
            name:"Signup",
            slug:"/signup",
            active:!authStatus
        },
        {
            name:"All Posts",
            slug:"/all-posts",
            active:authStatus
        },
        {
            name:"Add Post",
            slug:"/add-post",
            active:authStatus
        }
    ]

  return (
    <header className='bg-teal-400 w-full'>
        <Container>
            <nav className='flex justify-between items-center'>
                <div>
                    <Link to="/">
                        <img src="logo.png" alt="" />
                    </Link>
                </div>
                
                <ul className='flex w-5/12 justify-between'>
                    {navItems.map((item)=>
                    item.active ? (
                        <li key={item.name}>
                            <button onClick={()=>navigate(item.slug)}>
                                {item.name}
                            </button>
                        </li>
                    ) : null)}

                    {authStatus && (
                        <li>
                            <LogoutBtn/>
                        </li>
                    )}
                </ul>            
            </nav>
        </Container>
    </header>
  )
}

export default Header