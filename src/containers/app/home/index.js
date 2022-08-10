import React from 'react'
import Hero from '../../../components/Hero'
import AboutUs from '../../../components/AboutUs'
import { Faq } from '../../../components/Faq'
import Prices from "../../../components/Prices"
import { Pricing } from '../../../components/Pricing'
import { Feature } from '../../../components/Feature'
import { Featurex } from '../../../components/Featurex'
import { Content } from '../../../components/Content'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Content/>
      <Feature/>
      <Pricing/>
      <Featurex/>
      <Faq/>
    </div>
  )
}
