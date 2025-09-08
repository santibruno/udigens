import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'

export default function Header(){
  const [open, setOpen] = useState(false)

  // Bloquear scroll de fondo cuando el menú está abierto (mobile)
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [open])

  // Cerrar al cambiar tamaño a desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 980 && open) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [open])

  return (
    <header className={`site-header ${styles.header}`}>
      <div className="container">
        <div className={styles.row}>
          <a href="/" className={styles.logo} aria-label="UDI GENS Inicio">
            <img src="/images/logo.png" alt="Logo UDI GENS" />
          </a>

          <button
            className={styles.burger}
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen(v => !v)}
          >
            <span/><span/><span/>
          </button>

          <nav
            id="site-nav"
            className={`${styles.nav} ${open ? styles.navOpen : ''}`}
            aria-hidden={!open}
          >
            <a href="#adicciones" onClick={()=>setOpen(false)}>Adicciones</a>
            <a href="#centro" onClick={()=>setOpen(false)}>Centro</a>
            <a href="#herramientas" onClick={()=>setOpen(false)}>Herramientas</a>
            <a href="#servicios" onClick={()=>setOpen(false)}>Servicios</a>
            <a href="/equipo" onClick={()=>setOpen(false)}>Equipo</a>
            <a href="#nosotros" onClick={()=>setOpen(false)}>Nosotros</a>
            <a href="#contacto" className="btn" onClick={()=>setOpen(false)}>Contactanos</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
