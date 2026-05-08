import TransparentNavbar from '@/Components/Global/TransNav'
import React from 'react'
import Banner from './Banner'
import Features from './Features'
import AboutSection from './About'
import TripAdvisorStrip from './TripAdvisorStrip'
import PoolSection from './PoolSection'
import VillasSlider from './VillaSlider'
import DiningSection from './DiningSection'
import PetVegSection from './PetVegSection'
import WeddingsSection from './WeddingsSection'
import DetailBanner from './DetailBanner'
import SpaWellness from './SpaWellness'
import ActivitiesSection from './ActivitiesSection'
import BBCDocumentary from './BBCDocumentary'
import LocationStrip from './LocationStrip'
import VideoTestimonials from './VideoTestimonials'
import MeetTeamSection from './MeetTeamSection'
import GoogleReviews from './GoogleReviews'
import OurClients from './OurClients'
import CurvedGallerySection from './Gallery'

const Homepage = () => {
  return (
    <div>
      <TransparentNavbar />
      <Banner />
      <Features />
      <AboutSection />
      <TripAdvisorStrip />
      <PoolSection />
      <VillasSlider />
      <DiningSection />
      <PetVegSection />
      <WeddingsSection />
      <DetailBanner />
      <SpaWellness />
      <ActivitiesSection />
      <BBCDocumentary />
      <LocationStrip />
      <VideoTestimonials />
      <MeetTeamSection />
      <GoogleReviews />
      <OurClients />
      <CurvedGallerySection />
    </div>
  )
}

export default Homepage;
