import React from 'react'
import styles from './Abordaje.module.css'

export default function Abordaje(){
  return (
    <div className="section">
      <div className="container">
        <div className={`card ${styles.wrap}`}>
          <div className={styles.content}>
            <div className={styles.imageSection}>
              <img src="/images/portada.jpg" alt="Herramientas terapéuticas" className={styles.herramientasImage} />
            </div>
            <div className={styles.textSection}>
              <h2>Abordaje terapéutico integral</h2>
              <p className={styles.intro}>
                Creemos que la recuperación de las Adicciones debe lograrse utilizando cuatro herramientas 
                terapéuticas fundamentales; todas ellas deben ser realizadas por profesionales altamente 
                especializados y entrenados en la materia.
              </p>

              <div className={styles.actions}>
                <a className="btn" href="/abordajes">Ver abordajes detallados</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}