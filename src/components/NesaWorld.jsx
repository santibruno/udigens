import React from 'react'
import styles from './NesaWorld.module.css'

export default function NesaWorld(){
  return (
    <div className="section">
      <div className="container">
        <div className={`card ${styles.wrap}`}>
          <div className={styles.content}>
            <div className={styles.videoSection}>
              <video 
                src="/images/video2.mp4" 
                controls 
                preload="auto"
                className={styles.video}
                poster="/images/nesaworld.jpg"
                onLoadedData={(e) => { e.target.currentTime = 1; }}
              >
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <div className={styles.texts}>
              <p className="eyebrow">NesaWorld</p>
              <h2>Neuroestimulación no invasiva</h2>
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
                <a className="btn secondary" href="/nesaworld">Quiero saber más</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
