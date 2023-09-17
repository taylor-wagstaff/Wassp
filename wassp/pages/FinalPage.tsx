'use client'

import './FinalPage.css'
import Image from 'next/image'

export default function FinalPage() {
  return (
    <div className="final-grid-container">
      <div className="content-container">
        <div className="content-text">
          <p>
            Dui duis facilisis id et ullamcorper diam est. Vulputate ac magna in
            id.
          </p>
        </div>
        <button className="final-button">
          <p>Contact</p>
          <Image
            src="/svg/ArrowRight.svg"
            width={29}
            height={29}
            alt="Arrow Down"
          />
        </button>
        <div className="subscribe">
          <a href="">Subscribe to our newsletter</a>
        </div>
      </div>

      <div className="footer-container-links">
        <div className="footer-links">
          <a href="">Home</a>
          <a href="">Products</a>
          <a href="">About ENL</a>
          <a href="">Multibeam Technology</a>
          <a href="">News</a>
          <a href="">Resources</a>
          <a href="">Contact</a>
        </div>

        <div className="footer-links">
          <a href="">Facebook</a>
          <a href="">Instagram</a>
          <a href="">Youtube</a>
        </div>
      </div>

      <div className="footer-container-locations">
        <div className="footer-links">
          <a href="">Offices</a>
          <a href="">Auckland-NZ</a>
          <a href="">Essex-UK</a>
        </div>

        <div className="footer-links">
          <p>©2023WASSAP</p>
        </div>
      </div>

      <div className="footer-bottom-heading">
        <Image
          src="/svg/WasspMultibeam.svg"
          width={1245}
          height={132}
          alt="Wassap Multibeam"
          // style={{ opacity: '0.1',  fill: '#FF5733' }}
        />
      </div>
    </div>
  )
}
