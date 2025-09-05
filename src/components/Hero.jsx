import React from 'react'
import styles from './Hero.module.css'

export default function Hero(){
  return (
    <section id="top" className={styles.hero} aria-label="UDI GENS">
      <div className={styles.bg} aria-hidden="true" />
      <div className="container">
        <div className={styles.inner}>
          <p className="eyebrow">Centro terapéutico</p>
          <h1>Innovamos en el cuidado integral de las adicciones</h1>
          <p>
            27 años de experiencia, equipo multidisciplinario y tecnología
            <strong> NesaWorld</strong> para un tratamiento humano y eficaz.
          </p>
          <div className={styles.ctas}>
            <a href="#contacto" className="btn">Contactanos</a>
            <a href="#herramientas" className="btn secondary">Conocé NesaWorld</a>
          </div>
        </div>
      </div>
    </section>
  )
}
