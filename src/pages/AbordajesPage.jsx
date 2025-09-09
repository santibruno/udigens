import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './AbordajesPage.module.css'

export default function AbordajesPage(){
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
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h1>Abordaje terapéutico integral</h1>
            <p className={styles.intro}>
              Nuestro modelo de tratamiento se basa en cuatro pilares fundamentales 
              que trabajan de manera integrada para lograr una recuperación exitosa.
              Cada herramienta es aplicada por profesionales altamente especializados 
              y entrenados específicamente en el tratamiento de adicciones.
            </p>
          </div>
        </div>
        
        <div className="section">
          <div className="container">
            <div className={`card ${styles.wrap}`}>
              <div className={styles.content}>

                <div className={styles.approaches}>
                  <div className={styles.approach}>
                    <div className={styles.approachContent}>
                      <div className={styles.approachImage}>
                        <img src="/images/biologico.jpg" alt="Abordaje Biológico" className={styles.approachImg} />
                      </div>
                      <div className={styles.approachText}>
                        <div className={styles.approachHeader}>
                          <div className={styles.approachNumber}>01</div>
                          <h3>Abordaje Biológico</h3>
                        </div>
                        <p>
                          El manejo de la herramienta psicofarmacológica es fundamental en nuestro esquema de tratamiento. 
                          Utilizamos la medicación para corregir todos los sistemas endógenos alterados en el proceso de la 
                          adicción, teniendo en cuenta los estadios emocionales que acompañan este proceso.
                        </p>
                        <ul className={styles.approachDetails}>
                          <li>Evaluación médica integral y seguimiento psiquiátrico especializado</li>
                          <li>Corrección de desequilibrios neuroquímicos mediante psicofármacos específicos</li>
                          <li>Dieta personalizada y natural adaptada a cada caso</li>
                          <li>Estimulación de conductas saludables y hábitos de vida</li>
                          <li>Monitoreo constante de parámetros vitales y respuesta al tratamiento</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className={styles.approach}>
                    <div className={styles.approachContent}>
                      <div className={styles.approachImage}>
                        <img src="/images/individual.jpg" alt="Abordaje Individual" className={styles.approachImg} />
                      </div>
                      <div className={styles.approachText}>
                        <div className={styles.approachHeader}>
                          <div className={styles.approachNumber}>02</div>
                          <h3>Abordaje Individual</h3>
                        </div>
                        <p>
                          Proponemos un trabajo psicoterapéutico intensivo y personalizado, adaptado a las necesidades 
                          específicas de cada paciente, utilizando técnicas basadas en evidencia científica.
                        </p>
                        <ul className={styles.approachDetails}>
                          <li>Al menos cuatro sesiones de psicoterapia individual por semana</li>
                          <li>Técnicas Cognitivo-Conductuales para modificar patrones de pensamiento</li>
                          <li>Manejo de Contingencias para reforzar comportamientos positivos</li>
                          <li>Estrategias de Demora en la Gratificación</li>
                          <li>Trabajo sobre límites personales y desarrollo de vías naturales de recompensa</li>
                          <li>Manejo de emociones, estrés y situaciones de riesgo</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className={styles.approach}>
                    <div className={styles.approachContent}>
                      <div className={styles.approachImage}>
                        <img src="/images/grupal.jpg" alt="Abordaje Grupal" className={styles.approachImg} />
                      </div>
                      <div className={styles.approachText}>
                        <div className={styles.approachHeader}>
                          <div className={styles.approachNumber}>03</div>
                          <h3>Abordaje Grupal</h3>
                        </div>
                        <p>
                          Consideramos la terapia grupal como una herramienta poderosa de tratamiento cuando se aplica 
                          con la coordinación de profesionales especializados y entrenados en dinámicas grupales.
                        </p>
                        <ul className={styles.approachDetails}>
                          <li>Tres sesiones diarias de psicoterapia grupal con diferentes enfoques</li>
                          <li>Grupos de proceso para explorar dinámicas interpersonales</li>
                          <li>Grupos temáticos sobre prevención de recaídas</li>
                          <li>Talleres de habilidades sociales y comunicación efectiva</li>
                          <li>Grupos de autoayuda y contención mutua</li>
                          <li>Actividades recreativas y terapéuticas grupales</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className={styles.approach}>
                    <div className={styles.approachContent}>
                      <div className={styles.approachImage}>
                        <img src="/images/familiar.jpg" alt="Abordaje Familiar" className={styles.approachImg} />
                      </div>
                      <div className={styles.approachText}>
                        <div className={styles.approachHeader}>
                          <div className={styles.approachNumber}>04</div>
                          <h3>Abordaje Familiar</h3>
                        </div>
                        <p>
                          Creemos en la necesidad fundamental de lograr que el grupo familiar acompañe el proceso 
                          de tratamiento, generando un ambiente de contención y apoyo para la recuperación.
                        </p>
                        <ul className={styles.approachDetails}>
                          <li>Sesiones de terapia familiar sistémica regulares</li>
                          <li>Psicoeducación sobre la problemática de la adicción</li>
                          <li>Trabajo en modos de comunicación y vinculación saludables</li>
                          <li>Enfoque no culposo y comprensión de la enfermedad</li>
                          <li>Erradicación de conductas de co-dependencia</li>
                          <li>Construcción de redes de apoyo familiares sólidas</li>
                          <li>Talleres para familiares y grupos de contención</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.integration}>
                  <h3>Integración de las herramientas</h3>
                  <p>
                    Estos cuatro abordajes no funcionan de manera aislada, sino que se integran de forma 
                    sinérgica para crear un plan de tratamiento holístico. La combinación de todos los 
                    enfoques permite abordar la adicción desde múltiples dimensiones, aumentando 
                    significativamente las posibilidades de una recuperación exitosa y sostenible en el tiempo.
                  </p>
                </div>

                <div className={styles.actions}>
                  <a className="btn" href="/#contacto">Consultar tratamiento</a>
                  <a className="btn secondary" href="/">Volver al inicio</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}