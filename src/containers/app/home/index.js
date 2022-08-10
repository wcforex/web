import React from 'react'
import Hero from '../../../components/Hero'
import AboutUs from '../../../components/AboutUs'
import { Faq } from '../../../components/Faq'
import Prices from "../../../components/Prices"

export default function Home() {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <Prices/>
      <Faq/>
    </div>
  )
}
