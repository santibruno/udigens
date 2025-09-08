import React, { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact(){
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    caso: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    // Aquí se implementaría el envío del formulario
    alert('Gracias por contactarnos. Te contactaremos a la brevedad.')
    setFormData({ nombre: '', telefono: '', email: '', caso: '' })
  }

  return (
    <div className="section">
      <div className="container">
        <div className={`card ${styles.wrap}`}>
          <div className={styles.content}>
            <p className="eyebrow">Contacto</p>
            <h2>Estamos para ayudarte</h2>
            <p className={styles.description}>
              ¿Necesitás ayuda para vos o un familiar? Contanos tu caso y te contactamos.
            </p>
            
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <input 
                  type="text" 
                  name="nombre" 
                  placeholder="Nombre" 
                  required 
                  value={formData.nombre}
                  onChange={handleChange}
                />
                <input 
                  type="tel" 
                  name="telefono" 
                  placeholder="Teléfono" 
                  required 
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </div>
              
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
              
              <textarea 
                name="caso" 
                rows="4" 
                placeholder="Breve descripción del caso" 
                required 
                value={formData.caso}
                onChange={handleChange}
              />
              
              <div className={styles.buttonContainer}>
                <button type="submit" className="btn">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}