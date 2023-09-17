'use client'

import Image from 'next/image'
import './NewsPage.css'

import ImageScroller from '../components/ImageScroller'

export default function NewsPage() {
  return (
    <div className="news-grid-container">
      <div className="news-container">
        <div className="news-pagnation">
          <p>05</p>
          <p>LATEST NEWS</p>
        </div>
      </div>
      <div className="news-images-container">
        <div className="news-images-content">
          <div className="image-1"></div>
          <p>South Pacific reopens for superyachts, a top charter spot.</p>
          <div className="view-items">
            <p>View</p>
            <Image
              src="/svg/ArrowRight.svg"
              width={29}
              height={29}
              alt="Arrow Down"
            />
          </div>
        </div>

        <div className="news-images-content">
          <div className="image-2"></div>
          <p>WASSP’s Bluebeam brings major feature advancements</p>
          <div className="view-items">
            <p>View</p>
            <Image
              src="/svg/ArrowRight.svg"
              width={29}
              height={29}
              alt="Arrow Down"
            />
          </div>
        </div>

        <div className="news-images-content">
          <div className="image-3"></div>
          <p>WASSP’s Bluebeam brings major feature advancements</p>
          <div className="view-items">
            <p>View</p>
            <Image
              src="/svg/ArrowRight.svg"
              width={29}
              height={29}
              alt="Arrow Down"
            />
          </div>
        </div>
      </div>
      <div className="image-animation">
        <ImageScroller />
      </div>
    </div>
  )
}
