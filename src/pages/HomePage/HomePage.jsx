import React from 'react'
import LayoutComponent from '../../components/Shared/LayoutComponent/LayoutComponent'
import Hero from '../../components/Hero/Hero'
import MainSection from '../../components/MainSection/MainSection'
import FeaturedCollection from '../../components/FeaturedCollection/FeaturedCollection'

const HomePage = () => {
    return (
        <LayoutComponent>
            <Hero/>
            <MainSection />
            <FeaturedCollection />
        </LayoutComponent>
    )
}


export default HomePage
