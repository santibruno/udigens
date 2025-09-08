import React from 'react'
import styles from './Footer.module.css'

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <div className={styles.brand}>
              <h3 className={styles.brandTitle}>UDI GENS</h3>
            </div>
            
            <nav className={styles.navigation}>
              <a href="#adicciones" className={styles.navLink}>Acerca de las adicciones</a>
              <a href="#centro" className={styles.navLink}>Centro terapéutico</a>
              <a href="#herramientas" className={styles.navLink}>Herramientas de trabajo</a>
              <a href="#servicios" className={styles.navLink}>Servicios</a>
              <a href="#nosotros" className={styles.navLink}>Nosotros</a>
            </nav>
          </div>

          <div className={styles.centerColumn}>
            <div className={styles.contactSection}>
              <h4 className={styles.contactTitle}>Contacto</h4>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <svg className={styles.whatsappIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488"/>
                  </svg>
                  <a href="https://wa.me/541132173206" target="_blank" rel="noreferrer" className={styles.link}>
                    11 3217-3206
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.icon}>✉️</span>
                  <a href="mailto:gensas@yahoo.com" className={styles.link}>gensas@yahoo.com</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.rightColumn}>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.8827!2d-58.5569!3d-34.5524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb1df9e3e7b67%3A0x7e3a8e3e5b9c8e4f!2sLope%20de%20Vega%2040%2C%20B1609CIB%20Boulogne%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2s!4v1635789012345!5m2!1ses!2s"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.mapIframe}
              />
              <div className={styles.mapAddress}>
                <small>Lope de Vega 40<br />Boulogne, Pcia. Buenos Aires</small>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.legal}>
          <div className="container">
            <small>© {new Date().getFullYear()} UDI GENS. Todos los derechos reservados.</small>
          </div>
        </div>
      </div>
    </footer>
  )
}
