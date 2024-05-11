import React from 'react'
import { Biography, Hero ,Navbar} from '../../components/home-components'

function About() {
  return (
    <div>
      <Navbar />
      <Hero title='learn more about us | zee care medical institute' imageUrl='/public/hero.png' />
      <Biography imageUrl='/public/whoweare.png' />
    </div >
  )
}

export default About
