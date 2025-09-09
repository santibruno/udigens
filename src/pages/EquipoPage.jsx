import React, { useEffect } from 'react'
import Header from '../components/Header'
import Equipo from '../components/Equipo'
import Footer from '../components/Footer'

export default function EquipoPage(){
  useEffect(() => {
    document.body.classList.add('page-with-image-header')
    return () => {
      document.body.classList.remove('page-with-image-header')
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Equipo />
      </main>
      <Footer />
    </>
  )
}