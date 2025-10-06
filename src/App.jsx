import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import UdiGens from './components/UdiGens'
import AboutAddictions from './components/AboutAddictions'
import Abordaje from './components/Abordaje'
import NesaWorld from './components/NesaWorld'
import PsychoEdu from './components/PsychoEdu'
import AboutUs from './components/AboutUs'
import OurCenter from './components/OurCenter'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/sections.css'

export default function App(){
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <section id="udigens"><UdiGens /></section>
        <section id="herramientas"><NesaWorld /></section>
        <section id="abordaje"><Abordaje /></section>
        <section id="adicciones"><AboutAddictions /></section>       
        <section id="material-psicoeducativo"><PsychoEdu /></section>
        <section id="nosotros"><AboutUs /></section>
        <section id="nuestro-centro"><OurCenter /></section>
        <section id="contacto"><Contact /></section>
      </main>
      <Footer />
    </>
  )
}
