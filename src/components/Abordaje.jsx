import React from 'react'
import styles from './Abordaje.module.css'

export default function Abordaje(){
  return (
    <div className="section">
      <div className="container">
        <div className={`card ${styles.wrap}`}>
          <div className={styles.content}>
            <p className="eyebrow">Herramientas</p>
            <h2>Abordaje terapéutico integral</h2>
            <p className={styles.intro}>
              Nuestro modelo de tratamiento se basa en cuatro pilares fundamentales 
              que trabajan de manera integrada para lograr una recuperación exitosa.
            </p>

            <div className={styles.approaches}>
              <div className={styles.approach}>
                <h3>Abordaje Biológico</h3>
                <p>
                  El manejo de la herramienta psicofarmacológica es fundamental en nuestro esquema de Tratamiento. 
                  Utilizamos la medicación para corregir todos los sistemas endógenos alterados en el proceso de la 
                  Adicción, teniendo en cuenta los estadios emocionales que acompañan este proceso. Acompañamos este 
                  enfoque biológico con una dieta personalizada y natural, con la estimulación de conductas saludables.
                </p>
              </div>

              <div className={styles.approach}>
                <h3>Abordaje Individual</h3>
                <p>
                  Proponemos un trabajo intensivo de al menos cuatro sesiones de psicoterapia individual a la semana, 
                  con técnicas Cognitivo-Conductuales, Manejo de Contingencias, estrategias de Demora en la Gratificación 
                  y trabajo sobre Límites y Desarrollo de Vías Naturales de Recompensa.
                </p>
              </div>

              <div className={styles.approach}>
                <h3>Abordaje Grupal</h3>
                <p>
                  Consideramos que es una poderosa herramienta de tratamiento cuando se aplica con la coordinación de 
                  profesionales especializados y entrenados en este campo. Diariamente se realizan al menos tres sesiones 
                  de psicoterapia grupal diferentes, donde se abordan distintas problemáticas y temáticas.
                </p>
              </div>

              <div className={styles.approach}>
                <h3>Abordaje Familiar</h3>
                <p>
                  Creemos en la necesidad de lograr que el grupo familiar acompañe el proceso de tratamiento, apuntando 
                  a lograr cambios en los modos de comunicación, vinculación, comprensión de la problemática de la Adicción, 
                  enfoque no culposo y erradicación de conductas de co-dependencia.
                </p>
              </div>
            </div>

            <div className={styles.actions}>
              <a className="btn" href="#contacto">Consultar tratamiento</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}