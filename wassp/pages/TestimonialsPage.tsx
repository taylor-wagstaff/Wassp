'use client'

import './TestimonialsPage.css'
import TextScroller from '../components/TextScroller'

export default function TestimonalsPage() {
  return (
    <div className="testimonal-grid-container">
      <div className="testimonal-animation">
        <TextScroller />
      </div>

      <div className="testimonal-container">
        <div className="testimonal-pagnation">
          <p>04</p>
          <p>TESTIMONIALS</p>
        </div>
      </div>
      <div className="testimonal-text">
        <h1>
          “WASSP LETS ME GO TO WHERE I WOULD NEVER HAVE FISHED BEFORE, GIVING ME
          A HIGHER CATCH WITH REDUCED FUEL CONSUMPTION.”
        </h1>
        <p>Dominique Faou Owner/Skipper, France</p>
      </div>
    </div>
  )
}
