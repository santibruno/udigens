import React from 'react'
import styles from './AboutAddictions.module.css'

export default function AboutAddictions(){
  return (
    <div className="section">
      <div className="container">
        <div className={`card ${styles.wrap}`}>
          <div className={styles.imageContainer}>
            <img src="/images/adicciones.jpg" alt="Sobre las adicciones" className={styles.image} />
          </div>
          <div className={styles.content}>
            <h2>Abordaje integral bio-psico-social</h2>
            <p className={styles.muted}>
              Las adicciones impactan la salud física, mental y social de la
              persona y su familia. En UDI GENS tratamos sustancias, conductuales,
              alimentarias y trastornos impulsivos-compulsivos, con un enfoque
              humano y personalizado.
            </p>
            <ul className={styles.list}>
              <li><strong>Sustancias:</strong> alcohol, drogas legales e ilegales.</li>
              <li><strong>Conductuales:</strong> juego, compras, uso problemático de internet.</li>
              <li><strong>Alimentarias:</strong> anorexia, bulimia, atracón.</li>
              <li><strong>Impulsivos-compulsivos:</strong> tricotilomanía, cleptomanía y otros.</li>
            </ul>
            <div className={styles.buttons}>
              <a className="btn" href="#contacto">Contactanos</a>
              <a className="btn" href="/adicciones">Saber Más</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
