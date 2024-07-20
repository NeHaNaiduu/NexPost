import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='relative w-full bg-purple-800 flex flex-col'>
        <div className='absolute -left-40 bg-purple-400 w-96 h-96 rounded-full'></div>
        <div className='flex justify-between  px-10 pt-20 pb-20'>
            <div>
                <Link to="/">
                    <img src="logo.png" alt="" className='w-2/4'/>
                </Link>
            </div>
            <div className='flex justify-between w-5/12'>
                <div>
                    <div className='relative mb-7'>
                        <h2 className='text-lg text-white font-bold'>
                            COMPANY
                        </h2>
                        <div className='absolute w-1/2 bg-gray-300 h-1 -bottom-2'></div>
                    </div>
                    <ul className='flex flex-col text-lg text-white'>
                        <li className='cursor-pointer mb-3 hover:text-gray-400'>
                            <Link to="/">
                                Features
                            </Link>
                        </li>
                        <li className='cursor-pointer mb-3 hover:text-gray-400'>
                            <Link to="/">
                                Pricing
                            </Link>
                        </li>
                        <li className='cursor-pointer mb-3 hover:text-gray-400'>
                            <Link to="/">
                                Affiliate Program
                            </Link>
                        </li>
                        <li className='cursor-pointer mb-3 hover:text-gray-400'>
                            <Link to="/">
                                Press Kit
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className='relative mb-7'>
                        <h2 className='text-lg text-white font-bold'>
                            SERVICES
                        </h2>
                        <div className='absolute w-1/2 bg-gray-300 h-1 -bottom-2'></div>
                    </div>
                    <ul className='flex flex-col text-lg text-white'>
                        <li className='cursor-pointer mb-3 hover:text-gray-400'>
                            <Link to="/">
                                Account
                            </Link>
                        </li>
                        <li className='cursor-pointer mb-3 hover:text-gray-400'>
                            <Link to="/">
                                Help
                            </Link>
                        </li>
                        <li className='cursor-pointer mb-3 hover:text-gray-400'>
                            <Link to="/">
                                Contact Us
                            </Link>
                        </li>
                        <li className='cursor-pointer mb-3 hover:text-gray-400'>
                            <Link to="/">
                                Customer Support
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className='relative mb-7'>
                        <h2 className='text-lg text-white font-bold'>
                            LEGALS
                        </h2>
                        <div className='absolute w-1/2 bg-gray-300 h-1 -bottom-2'></div>
                    </div>
                    <ul className='flex flex-col text-lg text-white'>
                        <li className='cursor-pointer mb-3 hover:text-gray-400'>
                            <Link to="/">
                                Terms & Conditions
                            </Link>
                        </li>
                        <li className='cursor-pointer mb-3 hover:text-gray-400'>
                            <Link to="/">
                                Privacy Policy
                            </Link>
                        </li>
                        <li className='cursor-pointer mb-3 hover:text-gray-400'>
                            <Link to="/">
                                Licensing
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h2 className='text-2xl mb-4'>LET'S CHAT</h2>
                <p className='mb-4'>Have a support question?</p>
                <button className='bg-purple-500 shadow-lg shadow-black py-3 px-5 rounded-3xl cursor-pointer hover:text-purple-300 hover:shadow-none border border-2 hover:border-purple-200'>GET IN TOUCH</button>
            </div>
        </div>
        <div className='bg-purple-400 p-3 text-center text-purple-600'>
            <p className=''>Copyright | Designed by : Neha Naidu | All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer