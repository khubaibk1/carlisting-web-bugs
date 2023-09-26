import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import PageNav from '@/components/navbar/PageNav'
import Favourite from '@/components/home/Favourite'
import React from 'react'

const index = () => {
  return (
    <div>
        <Navbar/>
        <Favourite/>
        <Footer/>
    </div>
  )
}

export default index