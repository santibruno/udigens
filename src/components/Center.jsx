import React from 'react'
import styles from './Center.module.css'

export default function Center(){
  return (
    <div className="section">
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow">Centro terapéutico</p>
          <h2>Infraestructura médica y entorno de contención</h2>
          <p className={styles.muted}>
            Shock Room de mediana complejidad con monitoreo, desfibrilador
            automático, consultorios privados, salas grupales con soporte audiovisual,
            áreas de recreación, gimnasio, SPA y hotelería/gastronomía de alto nivel.
          </p>
        </div>

        <div className={styles.gallery}>
          <figure className={styles.item}><img src="/images/center-1.jpg" alt="Sala de shock room" /></figure>
          <figure className={styles.item}><img src="/images/center-2.jpg" alt="Espacios recreativos" /></figure>
          <figure className={styles.item}><img src="/images/services.jpg" alt="Hotelería y gastronomía" /></figure>
        </div>
      </div>
    </div>
  )
}
