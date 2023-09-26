import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import PageNav from '@/components/navbar/PageNav'
import CarGarage from '@/components/home/Grage'
import React from 'react'

const index = () => {
  return (
    <div>
        <Navbar/>
        <CarGarage/>
        <Footer/>
    </div>
  )
}

export default index