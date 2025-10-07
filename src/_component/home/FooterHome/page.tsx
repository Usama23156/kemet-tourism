import React from 'react'

function page() {
  return (
    <>
    <div className="lg:flex justify-center items-center gap-y-6 gap-x-12">
      <div className='  pt-6 gap-x-3 relative'>               
        <img  data-aos="fade-right" src="/IMG_0947.jpg" alt="" className='lg:max-w-xl rounded-lg'/>
        <h3  data-aos="fade-up" className='pt-9 text-2xl md:text-4xl lg:text-5xl absolute bottom-3 left-2'>Let's plan your next trip</h3>
      </div>
      <div className='grid lg:grid-cols-1  grid-cols-2 gap-6 lg:gap-12 p-6 lg:p-12'>
        <div  data-aos="fade-left">
            <p className='text-lg'>123 Anywhere St.</p>
            <p className='text-lg'>Any City</p>
            <p className='text-lg'>ST 12345</p>
            <p className='text-lg'>Country</p>
        </div>
        <div  data-aos="fade-left">
            <p className='text-lg'>Telephone: (123) 456-7890</p>
            <p className='text-lg'>Mobile: (123) 456-7890</p>
            <p className='text-lg'>hello@reallygreatsite.com</p>
        </div>
        <div  data-aos="fade-left">
            <p className='text-lg'>Monday: 8am – 7pm</p>
            <p className='text-lg'>Tuesday: 8am – 5pm</p>
            <p className='text-lg'>Wednesday: 8am – 5pm</p>
            <p className='text-lg'>Thursday: 8am – 7pm</p>
            <p className='text-lg'>Friday: 8am – 5pm</p>
        </div>
      </div>
        </div>  

    </>
  )
}

export default page