import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import AboutAddictions from './components/AboutAddictions'
import Center from './components/Center'
import NesaWorld from './components/NesaWorld'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <section id="adicciones"><AboutAddictions /></section>
        <section id="centro"><Center /></section>
        <section id="herramientas"><NesaWorld /></section>
        <section id="servicios"><Services /></section>
        <section id="nosotros"><AboutUs /></section>
        <section id="contacto"><Contact /></section>
      </main>
      <Footer />
    </>
  )
}
