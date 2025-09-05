import React from 'react'
import styles from './Footer.module.css'

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.mark}>UDI</div>
            <div>
              <strong>UDI GENS</strong>
              <p>Unidad de Desintoxicación Intensiva</p>
            </div>
          </div>
          <nav className={styles.nav}>
            <a href="#adicciones">Adicciones</a>
            <a href="#centro">Centro</a>
            <a href="#herramientas">Herramientas</a>
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <div className={styles.legal}>
            <small>© {new Date().getFullYear()} UDI GENS. Todos los derechos reservados.</small>
          </div>
        </div>
      </div>
    </footer>
  )
}
