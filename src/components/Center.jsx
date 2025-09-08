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
          <figure className={styles.item}>
            <img src="/images/comedor.jpg" alt="Sala de estar" />
            <figcaption>Sala de estar</figcaption>
          </figure>
          <figure className={styles.item}>
            <img src="/images/recreativo.jpg" alt="Espacios recreativos" />
            <figcaption>Espacios recreativos</figcaption>
          </figure>
          <figure className={styles.item}>
            <img src="/images/habitaciones.jpg" alt="Habitaciones" />
            <figcaption>Habitaciones</figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}
