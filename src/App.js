import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Clients from './components/Clients'
import Community from './components/Community'
import Unlock from './components/Unlock'
import Achievements from './components/Achievements'
import Calendar from './components/Calendar'
import Customers from './components/Customers'
import Demo from './components/Demo'
import Footer from './components/Footer'
import UpdatesCards from './components/UpdatesCards'

const App = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Clients/>
        <Community/>
        <Unlock/>
        <Achievements/>
        <Calendar/>
        <Customers/>
        <UpdatesCards/>
        <Demo/>
        <Footer/>
    </div>
  )
}

export default App