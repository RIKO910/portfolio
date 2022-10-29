import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a href='home#portfolio'>Portfolio</a></li>
                        <li><a>Service</a></li>
                        <li><a>About</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">RiKo</a>
            </div>
            <div className="navbar-center hidden lg:flex pr-7">
                <ul className="menu menu-horizontal p-0">
                    <li><a>Home</a></li>
                    <li><Link to="home#portfolio">Portfolio</Link></li>
                    <li><a>Service</a></li>
                    <li><a>About</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact</a></li>

                </ul>
            </div>

            <div className="navbar-end">
                <a className="btn btn-primary mr-8" href="https://drive.google.com/file/d/1QdyTq8_1RlaWxOjcMXTg1kyAZmdyHCAd/view?usp=sharing">

                    <button class=" text-gray-800 font-bold  rounded inline-flex items-center">
                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        <span>Download Resume</span>
                    </button>

                </a>
            </div>
        </div>
    );
};

export default Navbar;