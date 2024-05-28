'use client'

import EmblaCarousel from './utils/EmblaCarousel'
import SolutionsCard from './utils/SolutionsCard'
import { EmblaOptionsType } from 'embla-carousel'
import { services } from './constants/'


const OPTIONS: EmblaOptionsType = { align: 'start', loop: true }

const Slide: React.FC<{ index: number }> = ({ index }) => <SolutionsCard styleProps={services[index]} />;

const SLIDES = services.map((_, index) => () => <Slide index={index} />);



export default function FeaturesBlocks() {
  return (
    <section className="relative" id="services-blocks">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" className="h2 mb-4">Nossas soluções</h2>
            <p data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="text-xl text-gray-600">Desevolvemos aplicações customizadas para atender a sua necessidade.</p>
          </div>

          {/* Items */}
         
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />

          

        </div>
      </div>
    </section>
  )
}