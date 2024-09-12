/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Working from './components/Working'
import DashBoard from './components/DashBoard'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Services from './components/Services'
import Team from './components/Team'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
        <div>
          <NavBar></NavBar>
          <Hero></Hero>
          <AboutUs></AboutUs>
          <Working></Working>
          <DashBoard></DashBoard>
          <Projects></Projects>
          <Services></Services>
          <Team></Team>
          <Footer></Footer>
        </div>
)
}

export default App


