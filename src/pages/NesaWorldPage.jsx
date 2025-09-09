import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './NesaWorldPage.module.css'

export default function NesaWorldPage(){
  useEffect(() => {
    document.body.classList.add('page-with-image-header')
    return () => {
      document.body.classList.remove('page-with-image-header')
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <div className={styles.heroSection}>
          <div className={styles.videoContainer}>
            <video 
              src="/images/video2.mp4" 
              controls 
              preload="auto"
              className={styles.heroVideo}
              poster="/images/nesaworld.jpg"
              onLoadedData={(e) => { e.target.currentTime = 1; }}
            >
              Tu navegador no soporta el elemento de video.
            </video>
            <div className={styles.heroOverlay}>
              <div className="container">
                <div className={styles.heroContent}>
                  <h1>NesaWorld</h1>
                  <p className={styles.heroSubtitle}>
                    Tecnología revolucionaria de neuroestimulación no invasiva
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className={`card ${styles.contentCard}`}>
              <div className={styles.content}>
                <div className={styles.section}>
                  <h2>¿Qué es NesaWorld?</h2>
                  <p>
                    NesaWorld es una tecnología revolucionaria de neuroestimulación no invasiva 
                    que complementa y potencia los tratamientos tradicionales para adicciones. 
                    Esta innovadora herramienta utiliza campos electromagnéticos de baja intensidad 
                    para modular la actividad neuronal en áreas específicas del cerebro.
                  </p>
                </div>

                <div className={styles.section}>
                  <h3>¿Cómo funciona la neuroestimulación?</h3>
                  <p>
                    La neuroestimulación utiliza campos electromagnéticos de baja intensidad 
                    para modular la actividad neuronal en áreas específicas del cerebro relacionadas 
                    con la adicción, el estado de ánimo y la toma de decisiones. Este proceso 
                    ayuda a restaurar el equilibrio neuroquímico alterado por el consumo de sustancias.
                  </p>
                </div>

                <div className={styles.section}>
                  <h3>Beneficios clínicos comprobados</h3>
                  <div className={styles.benefitsGrid}>
                    <div className={styles.benefit}>
                      <h4>Reduce síntomas de abstinencia</h4>
                      <p>Disminuye significativamente la ansiedad, irritabilidad y craving asociados con la desintoxicación.</p>
                    </div>
                    <div className={styles.benefit}>
                      <h4>Mejora la calidad del descanso</h4>
                      <p>Regula los patrones de sueño alterados, promoviendo un descanso reparador fundamental para la recuperación.</p>
                    </div>
                    <div className={styles.benefit}>
                      <h4>Equilibrio emocional</h4>
                      <p>Estabiliza el estado de ánimo y mejora la capacidad de regulación emocional del paciente.</p>
                    </div>
                    <div className={styles.benefit}>
                      <h4>Procedimiento seguro</h4>
                      <p>Completamente indoloro, no invasivo y sin efectos secundarios conocidos.</p>
                    </div>
                    <div className={styles.benefit}>
                      <h4>Sin medicación adicional</h4>
                      <p>No requiere fármacos adicionales, reduciendo la carga farmacológica del tratamiento.</p>
                    </div>
                    <div className={styles.benefit}>
                      <h4>Complemento terapéutico</h4>
                      <p>Se integra perfectamente con psicoterapia individual, grupal y otros abordajes del tratamiento.</p>
                    </div>
                  </div>
                </div>

                <div className={styles.section}>
                  <h3>Proceso de tratamiento</h3>
                  <div className={styles.processGrid}>
                    <div className={styles.processStep}>
                      <div className={styles.stepNumber}>1</div>
                      <h4>Evaluación inicial</h4>
                      <p>Historia clínica completa y diseño de plan personalizado según las necesidades específicas del paciente.</p>
                    </div>
                    <div className={styles.processStep}>
                      <div className={styles.stepNumber}>2</div>
                      <h4>Sesiones de neuroestimulación</h4>
                      <p>Protocolos de estimulación supervisados por profesionales especializados en instalaciones adecuadas.</p>
                    </div>
                    <div className={styles.processStep}>
                      <div className={styles.stepNumber}>3</div>
                      <h4>Integración terapéutica</h4>
                      <p>Se complementa con psicoterapia individual, grupal y desarrollo de hábitos saludables.</p>
                    </div>
                    <div className={styles.processStep}>
                      <div className={styles.stepNumber}>4</div>
                      <h4>Seguimiento continuo</h4>
                      <p>Monitoreo constante de la evolución del paciente y ajustes del plan según los resultados obtenidos.</p>
                    </div>
                  </div>
                </div>

                <div className={styles.section}>
                  <h3>Evidencia científica</h3>
                  <p>
                    Los estudios clínicos han demostrado la eficacia de la neuroestimulación no invasiva 
                    en el tratamiento de adicciones, mostrando mejoras significativas en:
                  </p>
                  <ul className={styles.evidenceList}>
                    <li>Reducción del craving y deseo compulsivo de consumo</li>
                    <li>Mejora en la capacidad de toma de decisiones</li>
                    <li>Estabilización del estado de ánimo</li>
                    <li>Mejor adherencia al tratamiento integral</li>
                    <li>Reducción de recaídas a largo plazo</li>
                  </ul>
                </div>

                <div className={styles.actions}>
                  <a className="btn" href="/#contacto">Consultar disponibilidad</a>
                  <a className="btn secondary" href="/">Volver al inicio</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}