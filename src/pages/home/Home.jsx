import React from 'react'
import NavBar from '../../global/NavBar'
import Banner from '../banner/Banner'
import Products from '../products/Products'

const Home = () => {
  return (
    <div className=''>
        <NavBar />
        <Banner />
        <Products />
    </div>
  )
}

export default Home