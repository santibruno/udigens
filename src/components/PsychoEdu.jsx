import React from 'react'
import styles from './PsychoEdu.module.css'

export default function PsychoEdu() {
  const resources = [
    {
      title: "Videos Educativos",
      description: "Mirá material audiovisual psicoeducativo en nuestro canal de YouTube.",
      link: "https://www.youtube.com/tu-canal", // reemplazar con tu link
      type: "video"
    },
    {
      title: "Papers Académicos",
      description: "Accedé a documentos y artículos científicos en PDF.",
      link: "https://drive.google.com/tu-carpeta", // reemplazar con tu link
      type: "paper"
    },
    {
      title: "Recursos Complementarios",
      description: "Bibliografía y herramientas de interés para profundizar.",
      link: "https://tu-sitio.com/otros-recursos", // reemplazar con tu link
      type: "link"
    }
  ]

  return (
    <section className={styles.psychoEdu}>
      <div className="container">
        <h2>Material Psicoeducativo</h2>
        <p className={styles.intro}>
          Accedé a videos, papers y otros recursos externos seleccionados para complementar tu tratamiento y aprendizaje.
        </p>
        <div className={styles.grid}>
          {resources.map((res, idx) => (
            <a 
              key={idx} 
              href={res.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.card}
            >
              <h3>{res.title}</h3>
              <p>{res.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
