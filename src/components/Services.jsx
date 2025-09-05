import React from 'react'
import styles from './Services.module.css'

const services = [
  { title: 'Internación', desc: 'Programas personalizados, acompañamiento 24/7 en entorno controlado y seguro.' },
  { title: 'Tratamiento ambulatorio', desc: 'Sesiones regulares con seguimiento médico y terapéutico.' },
  { title: 'Post-alta', desc: 'Acompañamiento continuo para sostener el cambio y prevenir recaídas.' },
  { title: 'Acompañamiento familiar', desc: 'Espacios de orientación y contención para la familia.' }
]

export default function Services(){
  return (
    <div className="section">
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow">Servicios</p>
          <h2>Modalidades y programas</h2>
          <p className={styles.muted}>UDI GENS + NesaWorld: innovación y contención en cada etapa del proceso.</p>
        </div>
        <div className={styles.grid}>
          {services.map(s => (
            <article key={s.title} className={`card ${styles.card}`}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
