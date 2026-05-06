
import TransparentNavbar from '@/Components/Global/TransNav'
import React from 'react'
import Banner from './Banner'
import Features from './Features'
import AboutSection from './About'
import PoolSection from './PoolSection'
import VillasSlider from './VillaSlider'
import DiningSection from './DiningSection'
import WeddingsSection from './WeddingsSection'
import DetailBanner from './DetailBanner'
import SpaWellness from './SpaWellness'
import ActivitiesSection from './ActivitiesSection'
import TestimonialSlider from './Testimonials'
import CurvedGallerySection from './Gallery'

const Homepage = () => {
  return (
    <div>
      <TransparentNavbar />
      <Banner />
      <Features />
      <AboutSection />
      <PoolSection />
      <VillasSlider />
      <DiningSection />
      <WeddingsSection />
      <DetailBanner />
      <SpaWellness />
      <ActivitiesSection />
      <TestimonialSlider />
      <CurvedGallerySection />
    </div>
  )
}

export default Homepage;