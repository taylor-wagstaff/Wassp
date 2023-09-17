'use client'

import styles from './page.module.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import LandingPage from '../../pages/LandingPage'
import WelcomePage from '../../pages/WelcomePage'
import SeriesPage from '../../pages/SeriesPage'
import FeaturesPage from '../../pages/FeaturesPage'
import TestimonalsPage from '../../pages/TestimonialsPage'
import NewsPage from '../../pages/NewsPage'
import FinalPage from '../../pages/FinalPage'

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ width: '100%', height: '100%' }}>
        <Parallax pages={7} style={{ top: '0', left: '0' }}>
          <ParallaxLayer
            offset={0}
            speed={0.4}
            style={{
              backgroundImage:
                'linear-gradient(to bottom, rgba(5, 33, 51, 0), rgba(5, 33, 51, 0.9)), url(/assets/01.jpg)',
              backgroundSize: 'cover',
            }}
          >
            <LandingPage />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.4}
            style={{
              backgroundSize: 'cover',
            }}
          >
            <WelcomePage />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={0.2}
            style={{
              backgroundImage:
                'linear-gradient(180deg, #041D2F 0%, rgba(4, 29, 47, 0) 28.65%, rgba(4, 25, 43, 0) 73.18%, #04192B 100%),url(/assets/02.jpg)',
              backgroundSize: 'cover',
            }}
          >
            <SeriesPage />
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={0.4}
            style={{
              backgroundSize: 'cover',
            }}
          >
            <FeaturesPage />
          </ParallaxLayer>

          <ParallaxLayer
            offset={4}
            speed={0.2}
            style={{
              backgroundSize: 'cover',
            }}
          >
            <TestimonalsPage />
          </ParallaxLayer>

          <ParallaxLayer
            offset={5}
            speed={0.2}
            style={{
              // backgroundImage: 'url(/assets/01.jpg)',
              backgroundSize: 'cover',
            }}
          >
            <NewsPage />
          </ParallaxLayer>

          <ParallaxLayer
            offset={6}
            speed={0.2}
            style={{
              // backgroundImage: 'url(/assets/01.jpg)',
              backgroundSize: 'cover',
            }}
          >
            <FinalPage />
          </ParallaxLayer>
        </Parallax>
      </div>
    </main>
  )
}
