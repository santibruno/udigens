import React from 'react'
import styles from './NesaWorldDetail.module.css'

export default function NesaWorldDetail(){
  return (
    <div className="section">
      <div className="container">
        <div className={`card ${styles.wrap}`}>
          <div className={styles.mainContent}>
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
            <div className={styles.textSection}>
              <div className={styles.content}>
                <p className="eyebrow">Neuroestimulación no invasiva</p>
                <h2>¿Qué es NesaWorld?</h2>
                <p className={styles.intro}>
                  NesaWorld es una tecnología revolucionaria de neuroestimulación no invasiva 
                  que complementa y potencia los tratamientos tradicionales para adicciones.
                </p>

                <div className={styles.section}>
                  <h3>¿Cómo funciona?</h3>
                  <p>
                    La neuroestimulación utiliza campos electromagnéticos de baja intensidad 
                    para modular la actividad neuronal en áreas específicas del cerebro relacionadas 
                    con la adicción, el estado de ánimo y la toma de decisiones.
                  </p>
                </div>

                <div className={styles.section}>
                  <h3>Beneficios clínicos</h3>
                  <ul className={styles.benefitsList}>
                    <li><strong>Reduce síntomas de abstinencia:</strong> Disminuye ansiedad, irritabilidad y craving</li>
                    <li><strong>Mejora el descanso:</strong> Regula patrones de sueño alterados</li>
                    <li><strong>Equilibrio emocional:</strong> Estabiliza el estado de ánimo</li>
                    <li><strong>Sin efectos secundarios:</strong> Procedimiento indoloro y no invasivo</li>
                    <li><strong>Sin medicación:</strong> No requiere fármacos adicionales</li>
                  </ul>
                </div>

                <div className={styles.actions}>
                  <a className="btn" href="#contacto">Consultar disponibilidad</a>
                  <a className="btn" href="#adicciones">Volver a tratamientos</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}