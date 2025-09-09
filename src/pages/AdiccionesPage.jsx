import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './AdiccionesPage.module.css'

export default function AdiccionesPage(){
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
            <h1>La Adicción Como Enfermedad Crónica</h1>
            <p className={styles.intro}>
              Las adicciones son enfermedades crónicas del cerebro que afectan la capacidad de 
              tomar decisiones, controlar impulsos y mantener relaciones saludables. 
              Comprender su naturaleza es fundamental para un tratamiento efectivo.
            </p>
          </div>
        </div>
        
        <div className="section">
          <div className="container">
            <div className={`card ${styles.wrap}`}>
              <div className={styles.content}>

                <div className={styles.section}>
                  <h2>¿Qué es la adicción?</h2>
                  <p>
                    La adicción es una enfermedad crónica y recurrente del cerebro que se caracteriza por 
                    la búsqueda y el uso compulsivo de sustancias o la realización de comportamientos, 
                    a pesar de las consecuencias dañinas. No es una falla moral ni una falta de voluntad, 
                    sino una condición médica compleja que requiere tratamiento profesional especializado.
                  </p>
                </div>

                <div className={styles.section}>
                  <h3>El desarrollo neuroplástico de la adicción</h3>
                  <p>
                    El desarrollo de la Adicción significa que se han instalado, lenta y progresivamente, 
                    cambios neuroplásticos en el cerebro y que ya no pueden revertirse. Estos cambios afectan 
                    el Circuito de Recompensa, el Circuito de Control Cognitivo, el Circuito de Deseo y 
                    Motivación y un Circuito de Memorias Condicionadas.
                  </p>
                  <p>
                    Entender este proceso como una Condición Crónica, significa entender también que los 
                    cuidados y el tratamiento deberán ser también crónicos, es decir de por vida. Si la 
                    persona en tratamiento logra entender este proceso y modificar las conductas de riesgo 
                    que culminan en las recaídas frecuentes, podrá entonces modificar el curso crónico y 
                    recidivante que puede presentar muchas veces la Adicción.
                  </p>
                </div>

                <div className={styles.section}>
                  <h3>Los circuitos cerebrales afectados</h3>
                  <div className={styles.characteristics}>
                    <div className={styles.characteristic}>
                      <h4>Circuito de Recompensa</h4>
                      <p>
                        La capacidad de experimentar placer frente a distintas situaciones naturales depende 
                        de la activación de este circuito, siendo la dopamina el principal neurotransmisor 
                        involucrado. El uso de sustancias activa este circuito excesivamente (percepción de placer) 
                        pero lo va modificando progresivamente, por lo que el adicto va perdiendo el interés por 
                        los placeres naturales y se vuelve dependiente del placer inducido por las sustancias. 
                        Estos cambios en el funcionamiento cerebral son lentos y progresivos, pero una vez 
                        instalados no pueden revertirse y determinan la conducta de búsqueda de drogas.
                      </p>
                    </div>
                    <div className={styles.characteristic}>
                      <h4>Circuito de Control Cognitivo</h4>
                      <p>
                        El desarrollo de la Adicción implica también cambios en distintas estructuras de la 
                        Corteza cerebral, especialmente la Corteza Prefrontal y la Corteza Cingulada Anterior. 
                        Estos cambios afectan la capacidad de tomar decisiones racionales, controlar impulsos 
                        y mantener el autocontrol frente a las sustancias.
                      </p>
                    </div>
                    <div className={styles.characteristic}>
                      <h4>Circuito de Deseo y Motivación</h4>
                      <p>
                        Las alteraciones en este circuito generan un intenso deseo (craving) por la sustancia, 
                        que se mantiene incluso después de largos períodos de abstinencia. Este circuito es 
                        responsable de la motivación patológica hacia el consumo.
                      </p>
                    </div>
                    <div className={styles.characteristic}>
                      <h4>Circuito de Memorias Condicionadas</h4>
                      <p>
                        Los estímulos ambientales asociados al consumo quedan grabados en la memoria y pueden 
                        desencadenar deseo intenso y recaídas incluso después de períodos prolongados de 
                        abstinencia. Estas memorias condicionadas son muy persistentes.
                      </p>
                    </div>
                  </div>
                </div>


                <div className={styles.section}>
                  <h3>Tipos de adicciones que tratamos</h3>
                  <div className={styles.addictionTypes}>
                    <div className={styles.addictionType}>
                      <h4>Adicciones a sustancias</h4>
                      <p>Alcohol, drogas legales e ilegales, medicamentos, nicotina y otras sustancias químicas.</p>
                    </div>
                    <div className={styles.addictionType}>
                      <h4>Adicciones comportamentales</h4>
                      <p>Juego patológico, compras compulsivas, uso problemático de internet y tecnologías.</p>
                    </div>
                    <div className={styles.addictionType}>
                      <h4>Trastornos alimentarios</h4>
                      <p>Anorexia, bulimia, trastorno por atracón y otros comportamientos alimentarios disfuncionales.</p>
                    </div>
                    <div className={styles.addictionType}>
                      <h4>Trastornos impulsivo-compulsivos</h4>
                      <p>Tricotilomanía, cleptomanía y otros comportamientos compulsivos que interfieren con la vida diaria.</p>
                    </div>
                  </div>
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