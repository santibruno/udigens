import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './InstalacionesPage.module.css'

export default function InstalacionesPage(){
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
            <h1>Un recorrido por Gens</h1>
          </div>
        </div>
        
        <div className="section">
          <div className="container">
            <div className={`card ${styles.wrap}`}>
              <div className={styles.content}>

                <div className={styles.section}>
                  <div className={styles.sectionContent}>
                    <div className={styles.imageSection}>
                      <img src="/images/habitacion.jpg" alt="Habitaciones y espacios de descanso" className={styles.sectionImage} />
                    </div>
                    <div className={styles.textSection}>
                      <h2>Habitaciones y espacios de descanso</h2>
                      <p>
                        Disponemos de habitaciones individuales, de dos camas y hasta de hasta tres personas, 
                        con sommiers de plaza y media de calidad hotelera, baños en suite y aire acondicionado 
                        individual. Salón de televisión y cine con equipo marca Samsung de 8k de resolución y 
                        barra de sonido.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.section}>
                  <div className={styles.sectionContent}>
                    <div className={styles.imageSection}>
                      <img src="/images/comedor.jpg" alt="Áreas de recreación y bienestar" className={styles.sectionImage} />
                    </div>
                    <div className={styles.textSection}>
                      <h2>Áreas de recreación y bienestar</h2>
                      <p>
                        Área de Comedor con mesa de Billar y Ping-Pong, área de parrilla y quincho, área de 
                        SPA con sauna y camilla de relajación. Área de gimnasio totalmente equipado con cinta 
                        para running, elíptico, ruck de ejercitación muscular multiproposito, bolsa de boxeo 
                        y todo tipo de mancuernas, barras y pesas rusas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.section}>
                  <div className={styles.sectionContent}>
                    <div className={styles.imageSection}>
                      <img src="/images/recreativo.jpg" alt="Espacios acuáticos y exteriores" className={styles.sectionImage} />
                    </div>
                    <div className={styles.textSection}>
                      <h2>Espacios acuáticos y exteriores</h2>
                      <p>
                        Jacuzzi de exteriores para hasta cuatro personas. Piscina climatizada con equipamiento 
                        para nado contracorriente. Amplio parque con área para fogón y reuniones grupales al 
                        aire libre. Playón para la práctica de volley, fútbol y basket.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.section}>
                  <div className={styles.sectionContent}>
                    <div className={styles.imageSection}>
                      <img src="/images/habitacion5.jpg" alt="Shock Room y Cámara Hiperbárica" className={styles.sectionImage} />
                    </div>
                    <div className={styles.textSection}>
                      <h2>Shock Room y Cámara Hiperbárica</h2>
                      <p>
                        Disponemos de una habitación de características hospitalarias y de mediana complejidad, 
                        que nos permite la monitorización permanente de pacientes con situaciones clínicas de 
                        riesgo. Podemos de este modo asistir al paciente que lo necesite con medición constante 
                        de parámetros vitales como frecuencia cardíaca, tensión arterial, saturación de oxígeno, 
                        temperatura corporal y, de ser necesario, oxigenoterapia. Disponemos además de un 
                        desfibrilador automático para su utilización de urgencia, dispositivo imprescindible 
                        para la tranquilidad de los pacientes y sus familias.
                      </p>
                      <p>
                        Contamos con un equipo de Cámara Hiperbárica Uniplaza. Consiste en una camilla con un 
                        tubo plástico transparente y hermético donde la persona se recuesta, la presión de aire 
                        se eleva a 1,5 atmósferas y se aplica oxígeno al 100%, permaneciendo en estas condiciones 
                        alrededor de 60 minutos. Es un procedimiento seguro y sin complicaciones que contribuye a 
                        mejorar la oxigenación tisular y cerebral, y que acelera los mecanismos de recuperación 
                        en pacientes en tratamiento de desintoxicación.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.section}>
                  <div className={styles.sectionContent}>
                    <div className={styles.imageSection}>
                      <img src="/images/patio.jpg" alt="Gastronomía" className={styles.sectionImage} />
                    </div>
                    <div className={styles.textSection}>
                      <h2>Gastronomía</h2>
                      <p>
                        Disponemos de viandas personalizadas para una alimentación rica, sana y ajustada a las 
                        necesidades y gustos individuales para el almuerzo y cena. Nuestro menú semanal incluye 
                        la preparación en nuestra parrilla de carnes rojas, pollo y pescados. Las infusiones que 
                        se sirven en nuestros desayunos y meriendas son sin cafeína ni estimulantes similares, 
                        con jugos naturales y delicias de nuestra pastelera.
                      </p>
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