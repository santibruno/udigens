import React from "react";
import styles from "./UdiGens.module.css";

export default function UdiGens() {
  return (
    <div className="section">
      <div className="container">
        <div className={`card ${styles.wrap}`}>
          <div className={styles.content}>
            <div className={styles.imageSection}>
              <img
                src="/images/logo2.png"
                alt="UDI GENS"
                className={styles.logoImage}
              />
            </div>
            <div className={styles.textSection}>
              <h2>Somos UDI GENS</h2>
              <p className={styles.genesis}>
                UDI-GENS significa la cristalización de un proyecto gestado tras
                36 años de ejercicio profesional como Médico Psiquiatra
                especializado en Adicciones. UDI, Unidad de Desintoxicación
                Intensiva, representa la herramienta más novedosa a nivel
                Institucional para abordar el problema de las Adicciones a
                Sustancias, Alcohol, Adicciones Comportamentales, Trastornos de
                la Alimentación y otros Trastornos del espectro
                Impulsivo-Compulsivo. Significa disponer de un Centro y un
                Equipo Terapéutico altamente especializado y entrenado para
                ayudar a nuestros pacientes a lograr un Cambio en su
                Funcionamiento Bio-Psico-Emocional que permita poner fin a las
                conductas derivadas de aquello a lo que llamamos Adicción.
              </p>
              <div className={styles.actions}>
                <a className="btn" href="#nuestro-centro">
                  Saber Más
                </a>
              </div>
            </div>
          </div>
          <div className={styles.cardsRow}>
            <div className={styles.infoCard}>
              <h3>Misión</h3>
              <p>
                En Udi Gens, nos comprometemos a brindar un tratamiento integral
                y personalizado para las adicciones, apoyando a nuestros
                pacientes en su camino hacia la recuperación y la reintegración
                en la sociedad. Con un equipo de profesionales altamente
                capacitados y una infraestructura de excelencia, trabajamos para
                mejorar la calidad de vida de nuestros pacientes y sus familias
                Nuestra misión es proporcionar un entorno seguro y apoyo para
                que las personas con adicciones puedan superar sus desafíos y
                alcanzar una vida plena y saludable. Con la dirección del Dr.
                Guillermo Dorado y un equipo de expertos, nos esforzamos por
                ofrecer un tratamiento de alta calidad y compasivo.
              </p>
            </div>
            <div className={styles.infoCard}>
              <h3>Visión</h3>
              <p>
                Ser reconocidos como el centro de tratamiento en adicciones
                líder en Argentina, conocido por nuestra excelencia en la
                atención médica y nuestro compromiso con la innovación y la
                investigación. Queremos ser un referente en la región y un
                modelo a seguir para otras instituciones. Nuestra visión es
                crear un futuro donde las personas con adicciones puedan acceder
                a un tratamiento de alta calidad y lograr una recuperación
                duradera. Queremos ser un faro de esperanza para aquellos que
                buscan superar sus desafíos y vivir una vida plena y saludable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
