import React from 'react'
import Hero from '../../Components/Hero/Hero'
import CategoryHome from '../../Components/CategoryHome/CategoryHome'
import FeatureListHome from '../../Components/FeatureListHome/FeatureListHome'
import PartnerHome from '../../Components/PartnerHome/PartnerHome'
import FAQ from '../../Components/FAQ/FAQ'
import FeatureAuthorHome from '../../Components/FeatureAuthorHome/FeatureAuthorHome'

function Home() {
  return (
    <div>
      <Hero />
      <CategoryHome />
      <FeatureListHome />
      <FeatureAuthorHome />
      <PartnerHome />
      <FAQ />
    </div>
  )
}

export default Home
