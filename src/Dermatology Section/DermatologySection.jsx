import React from 'react'

import DermatologyHero from './DermatoloyHero'
import ApproachSection from './ApporachSection'
import AnimatedSection from './AnimatedSection'
import Treatments from './Treatments'

import Feacturs from './Feacturs'
import BlogSection from './BlogSection'
import DermatologyFooter from './DermatologyFooter'
import TopSection from '../Home Page/TopSection'
import ServicesSection from './ServiceSection'
import AdvanceDermatology from './AdvanceDermatology'

const DermatologySection = () => {
  return (
    <div>
     <TopSection />
      <DermatologyHero />
      <ServicesSection />
      <ApproachSection />
      <AdvanceDermatology />
      <AnimatedSection />
      {/* <AboutSection /> */}
      <Feacturs />
      <BlogSection />
      <DermatologyFooter />
    </div>
  )
}

export default DermatologySection
