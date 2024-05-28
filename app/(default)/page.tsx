
export const metadata = {
  title: 'GoldenSys',
  description: 'Home Page',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'


export default function Home() {
  return (
    <>
    
      <Hero />
      <FeaturesBlocks />
      <Features />
      {/* <Testimonials /> */}
      <Contact />
    </>
  )
}
