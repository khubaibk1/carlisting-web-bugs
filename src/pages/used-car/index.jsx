import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import PageNav from '@/components/navbar/PageNav'
import UsedCar from '@/components/usedcar/UsedCar'
import React from 'react'

const index = () => {
  return (
    <div>
        <Navbar/>
        <UsedCar/>
        <Footer/>
    </div>
  )
}

export default index