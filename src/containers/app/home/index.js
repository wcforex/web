import React from 'react'
import Hero from '../../../components/Hero'
import { Faq } from '../../../components/Faq'
import PriceTab from '../../../components/PriceTab'
import CalculatePrice from '../../../components/CalculatePrice'
import About from '../../../components/About'
import Banner from '../../../components/Banner'

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <PriceTab />
      <CalculatePrice />
      <Faq />
      <Banner />
    </div>
  )
}
