import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

// https://stackoverflow.com/questions/56685305/how-to-create-moving-text-from-right-to-left-using-react-spring
// How to create moving text from right to left using react-spring?

import './TextScroller.css'
import Image from 'next/image'

const TextScroller = () => {
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
    <div className="animation-container" key={key}>
      <animated.div style={scrolling}>
        <div className="animation-content">
          <h1>SBG SYSTEMS</h1>

          <button className="animation-button">
            <Image
              src="/svg/SbgSystems.svg"
              width={61}
              height={13}
              alt="Arrow Down"
            />
          </button>

          <h1>gpa seabots</h1>

          <button className="animation-button">
            <Image
              src="/svg/Seabots.svg"
              width={61}
              height={11}
              alt="Arrow Down"
            />
          </button>

          <h1>HEMISPHERE</h1>

          <button className="animation-button">
            <Image
              src="/svg/Hemisphere.svg"
              width={61}
              height={13}
              alt="Arrow Down"
            />
          </button>

          <h1>SBG SYSTEMS</h1>
          <button className="animation-button">
            <Image
              src="/svg/SbgSystems.svg"
              width={61}
              height={13}
              alt="Arrow Down"
            />
          </button>
          <h1>gpa seabots</h1>
          <button className="animation-button">
            <Image
              src="/svg/Seabots.svg"
              width={61}
              height={11}
              alt="Arrow Down"
            />
          </button>
          <h1>HEMISPHERE</h1>
          <button className="animation-button">
            <Image
              src="/svg/Hemisphere.svg"
              width={61}
              height={13}
              alt="Arrow Down"
            />
          </button>
        </div>
      </animated.div>
    </div>
  )
}

export default TextScroller
