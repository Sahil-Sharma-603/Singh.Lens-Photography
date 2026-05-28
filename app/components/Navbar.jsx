'use client';

import {useState, useEffect} from 'react';
import {motion} from "framer-motion";

//Smooth Scroll helper
const scrollToSection = (id) => {
    const element = document.querySelector(id);

    if(element){
        element.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'start',
            });
    }
}

export const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    },[]);

   return(
   <motion.nav 
    initial = {{y:-100}}
    animate = {{y:0}}
    transition = {{duration: 0.5, ease: 'easeOut'}}
    className = "fixed top-0 right-0 left-0 z-50"
   >


    <header className = {`fixed top-0 right-0 left-0 z-50 transition-all${
        scrolled
        ? 'bg-background/85 backdrop-blur-md border-b border-border'
        : 'bg-transparent'
    }`}>

    <nav className=" flex h-16 items-center justify-between px-8 ">

    {/* <div className = "text-2xl font-bold ">SinghLens Photography </div> */}
    <a href="#hero" onClick={(e) => {
            e.preventDefault();
            scrollToSection('#hero')}} 
            className="text-2xl font-bold">
            SinghLens Photography
    </a>


    <ul className="hidden lg:flex flex-1 justify-center space-x-10 text-lg font-bold">
      <li>
        <a href="#hero" onClick={(e) => {
            e.preventDefault();
            scrollToSection('#hero')}} 
            className="text-black-700 hover:text-gray-900">
          Home
        </a>
      </li>
      <li>
        <a href="#portfolio" onClick={(e)=>{
            e.preventDefault();
            scrollToSection('#portfolio') }}
            className="text-black-700 hover:text-gray-900">
          Portfolio
        </a>
      </li>
      <li>
        <a href="#about" onClick={(e) => {
            e.preventDefault();
            scrollToSection('#about')
        }}
        className="text-black-700 hover:text-gray-900">
          About
        </a>
      </li>
      <li>
        <a href="#contact" onClick={(e)=>{
            e.preventDefault(); 
            scrollToSection('#contact')}} 
            className="text-black-700 hover:text-gray-900">
          Contact
        </a>
      </li>
      </ul>



     {/* Moblie Menu */}
     <button className='lg:hidden font-pixel text-[20px] px-2 py-2 border' onClick={()=>setOpen(!open)}> 
        ☰ 
    </button>
    

    </nav>


    {open && (
        <ul className="lg:hidden flex flex-col items-center absolute top-16 left-0 w-full  backdrop-blur border-t border-border py-3 gap-3">
        <li>
            <a href="#hero" onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
                setOpen(false);
            }} 
            className="text-white text-lg hover:text-gray-300">
            Home
            </a>
        </li>
        <li>
            <a href="#portfolio" onClick={(e)=>{
                e.preventDefault();
                scrollToSection('#portfolio');
                setOpen(false);
            }}
            className="text-white text-lg hover:text-gray-300">
            Portfolio
            </a>
        </li>
        <li>
            <a href="#about" onClick={(e) => {
                e.preventDefault();
                scrollToSection('#about');
                setOpen(false);
            }}
            className="text-white text-lg hover:text-gray-300">
            About
            </a>
        </li>
        <li>
            <a href="#contact" onClick={(e)=>{
                e.preventDefault(); 
                scrollToSection('#contact');
                setOpen(false);
            }} 
            className="text-white text-lg hover:text-gray-300">
            Contact
            </a>
        </li>
        </ul>

    )}

    </header>

    </motion.nav>
   )
}