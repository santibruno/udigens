import React from 'react'
import styles from './UdiGens.module.css'

export default function UdiGens(){
  return (
    <div className="section">
      <div className="container">
        <div className={`card ${styles.wrap}`}>
          <div className={styles.content}>
            <div className={styles.imageSection}>
              <img src="/images/logo2.png" alt="UDI GENS" className={styles.logoImage} />
            </div>
            <div className={styles.textSection}>
              <h2>Somos UDI GENS</h2>
              <p className={styles.genesis}>
                UDI-GENS significa la cristalización de un proyecto gestado tras 36 años de ejercicio 
                profesional como Médico Psiquiatra especializado en Adicciones. UDI, Unidad de 
                Desintoxicación Intensiva, representa la herramienta más novedosa a nivel Institucional 
                para abordar el problema de las Adicciones a Sustancias, Alcohol, Adicciones 
                Comportamentales, Trastornos de la Alimentación y otros Trastornos del espectro 
                Impulsivo-Compulsivo. Significa disponer de un Centro y un Equipo Terapéutico altamente 
                especializado y entrenado para ayudar a nuestros pacientes a lograr un Cambio en su 
                Funcionamiento Bio-Psico-Emocional que permita poner fin a las conductas derivadas 
                de aquello a lo que llamamos Adicción.
              </p>
              <div className={styles.actions}>
                <a className="btn" href="#nuestro-centro">Saber Más</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}