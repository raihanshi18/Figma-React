import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import WhatNew from '../components/WhatNew'
import Games from '../components/Games'
import Esport from '../components/Esport'
import Entertain from '../components/Entertain'
import Footer from '../components/Footer'

const Home = () => {
    return (
    <>
    <div className='bg-black'>
        <Header />
        <Banner />
        <WhatNew />
        <Games />
        <Esport />
        <Entertain />
        <Footer />
    </div>
    </>
    )
}

export default Home