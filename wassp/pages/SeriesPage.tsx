"use client"

import './SeriesPage.css'
import Link from 'next/link'



export default function SeriesPage() {


  return (
    <div className='series-grid-container'>


      <div className='series-content-container'>

        <div className='series-header'>
        <div>
        <p>01</p>
        <p>03</p>
        </div>
        <div>
          <p>(FISHING SERIES)</p>
        </div>
        <div>
          <h1>f - series</h1>
        </div>
        </div>

        <div className='series-content'>
          <div>
            <p>F - SERIES</p>
          </div>
          <div>
          <p>WASSP Multibeam finds fish and habitat over a wider area than single-beam systems.</p>
          </div>
          <div>
          <Link className="series-content-link" href="/">Explore Now</Link>
          </div>

        </div>



      </div>

     

    </div>

 
  )
}