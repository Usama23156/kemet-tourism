"use client"
import React, { useEffect } from 'react'
import Hero from '../_component/Hero/page'
import Welcome from '../_component/home/Welcome/page'
import NextTrip from '../_component/home/nextTrip/page'
import Sail from '../_component/home/sail/page'
import OurClient from '../_component/home/our clinet/page'
import HandelTrip from '../_component/home/handel trip/page'
import Escapes from '../_component/home/EscapsHome/page'
import FooterHome from '../_component/home/FooterHome/page'
import AOS from "aos"
import "aos/dist/aos.css"


export default function Page() {
 useEffect(() => {
   const initAOS = async () => {
      await import("aos");
      AOS.init({
       duration : 1000,
       easing :'ease',
       once : true,
       anchorPlacement : 'top-bottom'
      });
   };
   initAOS();
 }, []);
 

  return (
    <>
    <div className='overflow-hidden '>
    <div className='text-xl text-white overflow-hidden'>
      <Hero/>
      <div className='overflow-hidden'>
              <Welcome/>
              <Escapes/>
              <NextTrip/>
              <HandelTrip/>
              <Sail/>
              <OurClient/>
              <FooterHome/>
            </div>
    </div>
    </div>
    </>
  )
}
