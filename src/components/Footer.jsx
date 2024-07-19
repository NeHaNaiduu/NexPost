import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-teal-500 flex flex-col px-10'>
        <div className='flex justify-between items-center'>
                <div>
                    <Link to="/">
                        <img src="logo.png" alt="" />
                    </Link>
                </div>
            <div className='flex'>
                <div>
                    <h2 className='text-lg text-gray-300 mb-5'>COMPANY</h2>
                    <ul className='flex flex-col text-lg text-gray-700 '>
                        <li className='cursor-pointer mb-3'>
                            <Link to="/">
                                Features
                            </Link>
                        </li>
                        <li className='cursor-pointer mb-3'>
                            <Link to="/">
                                Pricing
                            </Link>
                        </li>
                        <li className='cursor-pointer mb-3'>
                            <Link to="/">
                                Affiliate Program
                            </Link>
                        </li>
                        <li className='cursor-pointer mb-3'>
                            <Link to="/">
                                Press Kit
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-lg text-gray-300 mb-5'>SUPPORT</h2>
                    <ul className='flex flex-col text-lg text-gray-700 '>
                        <li className='cursor-pointer mb-3'>
                            <Link to="/">
                                Account
                            </Link>
                        </li>
                        <li className='cursor-pointer mb-3'>
                            <Link to="/">
                                Help
                            </Link>
                        </li>
                        <li className='cursor-pointer mb-3'>
                            <Link to="/">
                                Contact Us
                            </Link>
                        </li>
                        <li className='cursor-pointer mb-3'>
                            <Link to="/">
                                Customer Support
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-lg text-gray-300 mb-5'>LEGALS</h2>
                    <ul className='flex flex-col text-lg text-gray-700 '>
                        <li className='cursor-pointer mb-3'>
                            <Link to="/">
                                Terms & Conditions
                            </Link>
                        </li>
                        <li className='cursor-pointer mb-3'>
                            <Link to="/">
                                Privacy Policy
                            </Link>
                        </li>
                        <li className='cursor-pointer mb-3'>
                            <Link to="/">
                                Licensing
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <p>Copyright</p>
        </div>
    </footer>
  )
}

export default Footer