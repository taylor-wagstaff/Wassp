'use client'

import './FeaturesPage.css'
import BasicTabs from '../components/BasicTabs'

export default function FeaturesPage() {
  return (
    <div className="features-grid-container">
      <div className="features-pagnation">
        <p>01</p>
        <p>FEATURES</p>
      </div>
      <div className="features-nav-container">
        <div className="features-nav-content">
          <BasicTabs />
        </div>
      </div>
    </div>
  )
}
