import React from 'react'
import Hero from '../_component/Hero/page'
import Welcome from '../_component/home/Welcome/page'
import NextTrip from '../_component/home/nextTrip/page'
import Sail from '../_component/home/sail/page'
import OurClient from '../_component/home/our clinet/page'
import HandelTrip from '../_component/home/handel trip/page'
import Escapes from '../_component/home/EscapsHome/page'
import FooterHome from '../_component/home/FooterHome/page'

export default function HomePage() {
  return (
    <>
    <div className='text-5xl text-white'>
      <Hero/>
      <div   style={{ backgroundImage: `url(/bg.png)` }}
            className="bg-fixed bg-no-repeat bg-cover bg-center min-h-[100vh]">
              <Welcome/>
              <Escapes/>
              <NextTrip/>
              <HandelTrip/>
              <Sail/>
              <OurClient/>
              <FooterHome/>
            </div>
    </div>
    </>
  )
}
