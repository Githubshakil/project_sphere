import React from 'react'
import HeaderSection from '../components/homePage/HeaderSection'
import BannerSection from '../components/homePage/BannerSection'
import WeProvide from '../components/homePage/WeProvide'
import ArrivalSection from '../components/homePage/ArrivalSection'
import Event from '../components/homePage/Event'
import BestSellers from '../components/homePage/BestSellers'
import GatwaySearch from '../components/homePage/GatwaySearch'
import Footer from '../components/homePage/Footer'
const HomePage = () => {
  return (
    <>
        <HeaderSection />
        <BannerSection />
        <WeProvide />
        <ArrivalSection />
        <Event />
        <BestSellers />
        <GatwaySearch />
        <Footer />
    </>
  )
}

export default HomePage