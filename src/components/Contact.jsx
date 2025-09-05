import React,{ useState } from 'react'
import styles from './Contact.module.css'

export default function Contact(){
  const [state, setState] = useState({ name:'', email:'', phone:'', message:'' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const onChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending'); setError('')
    try{
      const res = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state)
      })
      if(!res.ok) throw new Error('No se pudo enviar el mensaje.')
      setStatus('success'); setState({ name:'', email:'', phone:'', message:'' })
    }catch(err){
      setStatus('error'); setError(err.message || 'Error desconocido')
    }
  }

  return (
    <div className="section">
      <div className="container">
        <div className={`card ${styles.wrap}`}>
          <div>
            <p className="eyebrow">Contacto</p>
            <h2>Estamos para ayudarte</h2>
            <p className={styles.muted}>
              ¿Necesitás ayuda para vos o un familiar? Contanos tu caso y te
              contactamos a la brevedad.
            </p>
            <ul className={styles.list}>
              <li>📞 <a href="tel:+541132173206">11 3217-3206</a></li>
              <li>📧 <a href="mailto:gensas@yahoo.com">gensas@yahoo.com</a></li>
              <li>💬 <a href="https://wa.me/541132173206" target="_blank" rel="noreferrer">WhatsApp</a></li>
            </ul>
          </div>

          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.row}>
              <input name="name" placeholder="Nombre" required value={state.name} onChange={onChange} />
              <input name="email" type="email" placeholder="Email" required value={state.email} onChange={onChange} />
            </div>
            <input name="phone" placeholder="Teléfono" value={state.phone} onChange={onChange} />
            <textarea name="message" rows="5" placeholder="Contanos qué necesitás" required value={state.message} onChange={onChange}/>
            <button className="btn" disabled={status==='sending'}>
              {status==='sending' ? 'Enviando…' : 'Enviar'}
            </button>
            {status==='success' && <p className={styles.ok}>¡Mensaje enviado! Te contactaremos a la brevedad.</p>}
            {status==='error' && <p className={styles.err}>Ocurrió un error: {error}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}
