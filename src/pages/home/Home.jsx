import React from 'react'
import NavBar from '../../global/NavBar'
import Banner from '../banner/Banner'
import Footer from '../footer/Footer'
import Popular from '../popular/Popular'
import Products from '../products/Products'

const Home = () => {
  return (
    <div className=' scroll-smooth relative'>
        <NavBar />
        <Banner />
        <Popular />
        <Products />
        <Footer />
    </div>
  )
}

export default Home