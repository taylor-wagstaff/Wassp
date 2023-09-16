"use client"

import './WelcomePage.css'
import Link from 'next/link'
import Image from 'next/image'


export default function WelcomePage() {


  return (
    <div className='welcome-grid-container'>


      <div className='welcome-header'>
      <h1>welcome to the world of</h1>
      <h1> wassp multibeam</h1>
      </div>

     

      <div className='welcome-content-container'>

      <div className='welcome-about-container'>
        <p>01</p>
        <p>about wassp</p>
      </div>

        <div className='welcome-content-text'>
        <p>WASSP, a powerful multi-beam sounder with 120-degree coverage and models for deep exploration, offers unparalleled accuracy, detail, and versatility. Target fish with steerable sounders, generate real-time 3D charts, map fish in water, and make better decisions with the user-friendly advanced mode.</p>

        <button className="welcome-button">
          <p>Our Story</p>
        <Image
            src="/svg/ArrowRight.svg"
            width={29}
            height={29}
            alt="Arrow Down"
               />
    </button>
        </div>
        
      </div>
    </div>

 
  )
}