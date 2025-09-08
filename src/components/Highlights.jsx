import React from 'react'
import styles from './Highlights.module.css'

const items = [
  { title: '+27 años', desc: 'Experiencia y trayectoria', icon: '🏥', link: '#udigens' },
  { title: 'Equipo', desc: 'Profesionales multidisciplinarios', icon: '🧑‍⚕️', link: '/equipo' },
  { title: 'NesaWorld', desc: 'Innovación no invasiva', icon: '⚡', link: '#herramientas' },
  { title: 'Herramientas', desc: 'Abordaje terapéutico', icon: '🛠️', link: '#abordaje' }
]

export default function Highlights(){
  return (
    <section className="section">
      <div className="container">
        <div className={styles.grid}>
          {items.map((it) => (
            it.link ? (
              <a href={it.link} className={`card ${styles.card} ${styles.clickable}`} key={it.title}>
                <div className={styles.icon} aria-hidden>{it.icon}</div>
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
              </a>
            ) : (
              <article className={`card ${styles.card}`} key={it.title}>
                <div className={styles.icon} aria-hidden>{it.icon}</div>
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
              </article>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
