import React from 'react'
import styles from './AboutUs.module.css'

export default function AboutUs(){
  return (
    <div className="section">
      <div className="container">
        <div className={`card ${styles.wrap}`}>
          <div className={styles.pic} aria-hidden="true">
            <img src="/images/doc.jpg" alt="Director Médico UDI GENS" />
          </div>
          <div>
            <h2>Trayectoria, equipo y dirección médica</h2>
            <p className={styles.muted}>
              Desde hace más de 27 años ofrecemos un espacio de recuperación integral
              para personas con adicciones y sus familias. Combinamos tradición,
              experiencia y tecnología de vanguardia.
            </p>
            <div className={styles.boxes}>
              <div className={styles.box}>
                <strong>Dirección Médica</strong>
                <span>Prof. Dr. Guillermo F. Dorado</span>
                <small>Médico psiquiatra (UBA), Especialista en Psiquiatría, Magíster en Psiconeurofarmacología (Univ. Favaloro), Profesor titular de Adicciones I y II (USAL).</small>
              </div>
              <div className={styles.box}>
                <strong>Valores</strong>
                <span>Innovación, confianza, contención, excelencia profesional.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
