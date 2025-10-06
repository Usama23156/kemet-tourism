import React from 'react'
import NextTrip from '../../_component/home/nextTrip/page'
import FooterHome from "@/_component/home/FooterHome/page"

function page() {
  return (
    <>
    <div className="bg-fixed bg-no-repeat bg-cover bg-center pt-20">
    <NextTrip/>
    <FooterHome/>
    </div>
    </>
  )
}

export default page