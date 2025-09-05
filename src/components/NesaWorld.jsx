import React from 'react'
import styles from './NesaWorld.module.css'

export default function NesaWorld(){
  return (
    <div className="section">
      <div className="container">
        <div className={`card ${styles.wrap}`}>
          <div className={styles.media} aria-hidden="true"/>
          <div className={styles.texts}>
            <p className="eyebrow">Herramientas</p>
            <h2>NesaWorld: neuroestimulación no invasiva</h2>
            <p className={styles.muted}>
              Tecnología innovadora que potencia los tratamientos convencionales:
              ayuda a reducir síntomas de abstinencia, mejora el descanso y el
              equilibrio emocional. Es indolora, no invasiva y sin fármacos.
            </p>

            <div className={styles.grid}>
              <div className={styles.point}>
                <strong>1. Evaluación</strong>
                <span>Historia clínica y plan personalizado.</span>
              </div>
              <div className={styles.point}>
                <strong>2. Sesiones</strong>
                <span>Protocolos de estimulación supervisados.</span>
              </div>
              <div className={styles.point}>
                <strong>3. Integración</strong>
                <span>Se complementa con psicoterapia y hábitos.</span>
              </div>
              <div className={styles.point}>
                <strong>4. Seguimiento</strong>
                <span>Monitoreo de evolución y ajuste del plan.</span>
              </div>
            </div>

            <div className={styles.actions}>
              <a className="btn secondary" href="#contacto">Quiero saber más</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
