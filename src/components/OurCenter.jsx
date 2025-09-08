import React from 'react'
import styles from './OurCenter.module.css'

export default function OurCenter(){
  return (
    <div className="section">
      <div className="container">
        <div className={`card ${styles.wrap}`}>
          <div className={styles.content}>
            <div className={styles.imageSection}>
              <img src="/images/centro1.jpg" alt="Nuestro centro terapéutico" className={styles.centerImage} />
            </div>
            <div className={styles.textSection}>
              <p className="eyebrow">Instalaciones</p>
              <h2>Nuestro centro terapéutico</h2>
              <p className={styles.description}>
                Contamos con una estructura edilicia única en la Argentina para el tratamiento 
                de las Adicciones. Disponemos de una habitación de características hospitalarias 
                de mediana complejidad o Shock Room, que nos permite la monitorización permanente 
                de parámetros vitales (tensión arterial, frecuencia cardíaca, índice de saturación), 
                con la posibilidad de utilización de Oxígeno al 100% en aquellos pacientes que, 
                por su estado clínico inicial a su llegada a nuestro Centro, necesiten de cuidados 
                médicos especiales.
              </p>
              <p className={styles.description}>
                Asimismo, contamos con un desfibrilador automático para su utilización en casos 
                de arritmias severas que pongan en riesgo de vida a nuestros pacientes, teniendo 
                en cuenta especialmente aquellos casos en que la condición clínica al ingreso lo requiera.
              </p>
              <div className={styles.actions}>
                <a className="btn" href="#contacto">Consultar disponibilidad</a>
                <a className="btn" href="#udigens">Volver</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}