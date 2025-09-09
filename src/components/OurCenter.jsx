import React from 'react'
import styles from './OurCenter.module.css'

export default function OurCenter(){
  return (
    <div className="section">
      <div className="container">
        <div className={`card ${styles.wrap}`}>
          <div className={styles.content}>
            <div className={styles.imageSection}>
              <img src="/images/habitaciones.jpg" alt="Infraestructura médica y entorno de contención" className={styles.centerImage} />
            </div>
            <div className={styles.textSection}>
              <h2>Infraestructura médica y entorno de contención</h2>
              <p className={styles.description}>
                Shock Room de mediana complejidad con monitoreo, desfibrilador automático, 
                consultorios privados, salas grupales con soporte audiovisual, áreas de recreación, 
                gimnasio, SPA y hotelería/gastronomía de alto nivel.
              </p>
              <div className={styles.actions}>
                <a className="btn" href="/instalaciones">Ver más instalaciones</a>
                <a className="btn" href="#udigens">Volver</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}