import React from 'react'
import { Contact, FeaturedProducts, Hero, Services } from '../components'

const HomePage = () => {
  return (
    <main>
      <Hero/>
      <FeaturedProducts/>
      <Services/>
      <Contact/>
    </main>
  )
}

export default HomePage