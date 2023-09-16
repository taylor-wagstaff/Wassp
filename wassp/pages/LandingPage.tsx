"use client"

import './LandingPage.css'
import Link from 'next/link'
import Image from 'next/image'


export default function LandingPage() {


  return (
    <div className='grid-container'>
    <div className='header-container'>
      <div className="logo">
      <Image
      src="/svg/Logo.svg"
      width={201}
      height={36}
      alt="Logo"
    />
    </div>
    <nav className='navigation'>
      
    <Link className="navigation-links" href="/">SEARCH</Link>
    <Link className="navigation-links" href="/">LOGIN</Link>
    <Link className="navigation-links" href="/">EN</Link>
    <Image
      src="/svg/ArrowDown.svg"
      width={20}
      height={20}
      alt="Arrow Down"
    />
     <Image
      src="/svg/Menu.svg"
      width={25}
      height={21}
      alt="Arrow Down"
    />
    </nav>
    </div>

    <div className='landing-content'>
      <p>SEE IT ALL</p>
      <h1>MULTIBEAM SONAR</h1>
      <h1>PRODUCTS & SOLUTIONS.</h1>
    </div>


    <div className='landing-content-bottom'>
      <div className='landing-content-bottom-text'>
    <p>WASSP multi-beam enables sustainable fishing, exploration, and surveys with versatility and detail.</p>
    </div>
    
    <button className="landing-button">
    <p>Contact Us</p>
    <Image
      src="/svg/ArrowRight.svg"
      width={29}
      height={29}
      alt="Arrow Down"
    />
    </button>

    </div>


    </div>

 
  )
}