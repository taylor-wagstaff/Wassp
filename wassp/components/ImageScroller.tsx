import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

// https://stackoverflow.com/questions/56685305/how-to-create-moving-text-from-right-to-left-using-react-spring
// How to create moving text from right to left using react-spring?

import './ImageScroller.css'
import Image from 'next/image'

const ImageScroller = () => {
  const [key, setKey] = useState(1)

  const scrolling = useSpring({
    from: { transform: 'translateX(0%)' },
    to: { transform: 'translateX(-50%)' },
    config: { duration: 25000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1)
    },
  })

  return (
    <div className="animation-image-container" key={key}>
      <animated.div style={scrolling}>
        <div className="animation-image-content">
          <div className="animation-image">
            <Image
              src="/assets/05.jpg"
              width={121}
              height={121}
              alt="Arrow Down"
            />
          </div>

          <div className="animation-image">
            <Image
              src="/assets/06.jpg"
              width={121}
              height={121}
              alt="Arrow Down"
            />
          </div>

          <div className="animation-image">
            <Image
              src="/assets/07.jpg"
              width={121}
              height={121}
              alt="Arrow Down"
            />
          </div>

          <div className="animation-image">
            <Image
              src="/assets/08.jpg"
              width={121}
              height={121}
              alt="Arrow Down"
            />
          </div>

          <div className="animation-image">
            <Image
              src="/assets/09.jpg"
              width={121}
              height={121}
              alt="Arrow Down"
            />
          </div>

          <div className="animation-image">
            <Image
              src="/assets/10.jpg"
              width={121}
              height={121}
              alt="Arrow Down"
            />
          </div>

          <div className="animation-image">
            <Image
              src="/assets/11.jpg"
              width={121}
              height={121}
              alt="Arrow Down"
            />
          </div>

          <div className="animation-image">
            <Image
              src="/assets/12.jpg"
              width={121}
              height={121}
              alt="Arrow Down"
            />
          </div>

          <div className="animation-image">
            <Image
              src="/assets/13.jpg"
              width={121}
              height={121}
              alt="Arrow Down"
            />
          </div>

          <div className="animation-image">
            <Image
              src="/assets/14.jpg"
              width={121}
              height={121}
              alt="Arrow Down"
            />
          </div>

          {/* repeat  */}

          <div className="animation-image">
            <Image
              src="/assets/05.jpg"
              width={121}
              height={121}
              alt="Arrow Down"
            />
          </div>

          <div className="animation-image">
            <Image
              src="/assets/06.jpg"
              width={121}
              height={121}
              alt="Arrow Down"
            />
          </div>

          <div className="animation-image">
            <Image
              src="/assets/07.jpg"
              width={121}
              height={121}
              alt="Arrow Down"
            />
          </div>

          <div className="animation-image">
            <Image
              src="/assets/08.jpg"
              width={121}
              height={121}
              alt="Arrow Down"
            />
          </div>

          <div className="animation-image">
            <Image
              src="/assets/09.jpg"
              width={121}
              height={121}
              alt="Arrow Down"
            />
          </div>

          <div className="animation-image">
            <Image
              src="/assets/10.jpg"
              width={121}
              height={121}
              alt="Arrow Down"
            />
          </div>

          <div className="animation-image">
            <Image
              src="/assets/11.jpg"
              width={121}
              height={121}
              alt="Arrow Down"
            />
          </div>

          <div className="animation-image">
            <Image
              src="/assets/12.jpg"
              width={121}
              height={121}
              alt="Arrow Down"
            />
          </div>

          <div className="animation-image">
            <Image
              src="/assets/13.jpg"
              width={121}
              height={121}
              alt="Arrow Down"
            />
          </div>

          <div className="animation-image">
            <Image
              src="/assets/14.jpg"
              width={121}
              height={121}
              alt="Arrow Down"
            />
          </div>
        </div>
      </animated.div>
    </div>
  )
}

export default ImageScroller
