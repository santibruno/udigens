import React from 'react'
import styles from './AddictionsApproach.module.css'

export default function AddictionsApproach(){
  return (
    <div className="section">
      <div className="container">
        <div className={`card ${styles.wrap}`}>
          <div className={styles.content}>
            <p className="eyebrow">Abordaje integral</p>
            <h2>Bio-psico-social en adicciones</h2>
            <p className={styles.intro}>
              Nuestro enfoque integral reconoce que las adicciones afectan múltiples dimensiones 
              de la persona. Por eso trabajamos desde tres aspectos fundamentales e interconectados.
            </p>

            <div className={styles.dimensions}>
              <div className={styles.dimension}>
                <h3>Aspecto Biológico</h3>
                <ul>
                  <li>Evaluación médica integral y detoxificación</li>
                  <li>Tratamiento de síntomas de abstinencia</li>
                  <li>Neuroestimulación no invasiva (NesaWorld)</li>
                  <li>Restauración del equilibrio neuroquímico</li>
                </ul>
              </div>

              <div className={styles.dimension}>
                <h3>Aspecto Psicológico</h3>
                <ul>
                  <li>Psicoterapia individual y grupal</li>
                  <li>Terapia cognitivo-conductual</li>
                  <li>Manejo de emociones y estrés</li>
                  <li>Desarrollo de estrategias de afrontamiento</li>
                </ul>
              </div>

              <div className={styles.dimension}>
                <h3>Aspecto Social</h3>
                <ul>
                  <li>Terapia familiar y de pareja</li>
                  <li>Reconstrucción de vínculos saludables</li>
                  <li>Habilidades sociales y comunicación</li>
                  <li>Reinserción laboral y comunitaria</li>
                </ul>
              </div>
            </div>

            <div className={styles.actions}>
              <a className="btn" href="#contacto">Iniciar evaluación</a>
              <a className="btn" href="#adicciones">Volver</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}