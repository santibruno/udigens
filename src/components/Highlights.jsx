import React from 'react'
import styles from './Highlights.module.css'

const items = [
  { title: '+27 años', desc: 'Experiencia y trayectoria', icon: '🏥' },
  { title: 'Equipo', desc: 'Profesionales multidisciplinarios', icon: '🧑‍⚕️' },
  { title: 'NesaWorld', desc: 'Innovación no invasiva', icon: '⚡' },
  { title: 'Acompañamiento', desc: 'Atención personalizada', icon: '🤝' }
]

export default function Highlights(){
  return (
    <section className="section">
      <div className="container">
        <div className={styles.grid}>
          {items.map((it) => (
            <article className={`card ${styles.card}`} key={it.title}>
              <div className={styles.icon} aria-hidden>{it.icon}</div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
