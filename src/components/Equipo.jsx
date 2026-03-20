import React from 'react'
import styles from './Equipo.module.css'

const teamMembers = [
  {
    name: 'Prof. Dr. Guillermo F. Dorado',
    role: 'Director Médico',
    description: [
      'Médico. Universidad de BsAs. Especialista en Psiquiatría, Ministerio De Salud de la Nación.',
      'Magister en Neuropsicofarmacologia, Universidad Favaloro.',
      'Profesor Titular Adicciones I y II, Maestría en Drogodependencias, Facultad de Medicina, Universidad del Salvador.',
      'Prof. Titular Adicciones, Maestría en Neuropsicofarmacologia, Universidad Favaloro.',
      'Prof. Invitado, Universidad Cayetano Heredia (Lima, Perú).',
      'Prof. Invitado, Universidad San Pablo (La Paz, Bolivia).',
      'Ex-Presidente del Colegio Latinoamericano de Neuropsicofarmacologia (CLANP).'
    ],
    image: '/images/director.jpg'
  },
  {
    name: 'Carina M. Leocadio',
    role: 'Psicóloga y Directora Institucional',
    description: [
      'Magíster en PsicoInmunoNeuroEndocrinología (Universidad Favaloro).',
      'Magíster en Prevención y Asistencia de la Drogodependencia (Universidad del Salvador).',
      'Postgrado en Psicofarmacología, Facultad de Medicina (UNR).',
      'Postgrado en Neuropsicología, Diagnóstico y Tratamiento (Hospital Italiano Buenos Aires).'
    ],
    image: '/images/directora.jpg'
  },
  {
    name: 'Diego Sriel Fernandez Lloret',
    role: 'Lic. en Psicología. Coordinador General',
    description: [
      'Expositor V Congreso FLAPPSIP.',
      'Expositor V CONGRESO AUDEPP.',
      'Especialidad en psicoanálisis con niños (UCES).',
      'X Congreso Latinoamericano de sexología y Educación Sexual (2000).',
      'II Curso de Neuropsicología (2001).',
      'Seminario sobre Suicidio (CPPL).'
    ],
    image: '/images/coordinador.jpg'
  },
  {
    name: 'Carolina Casillo',
    role: 'Lic. en psicología (Universidad de Buenos Aires) STAFF',
    description: [
      'Formación en clínica de adultos y adolescentes (UBA).',
      'Formación en terapia de familia (Institución Fernando Ulloa).',
      'Formación en consumo problemático (Colegio de Psicólogos de la Provincia de Buenos Aires).'
    ],
    image: '/images/staff1.jpg'
  },
  {
    name: 'Nicole Cordido',
    role: 'Licenciada en Psicología (Universidad de Morón) STAFF',
    description: [
      'Maestría en Prevención y asistencia de las drogadependencias | Universidad del Salvador - en curso.',
      'Diplomatura en "Tratamiento de las Adicciones" | Escuela Sistémica Argentina - 2020.',
      'Formación en Salud Sexual y Reproductiva dentro del Plan ENIA | Ministerio de Salud de la Nación (2018-2023).',
      'Formación en Psicodrama | Centro Argentino en Psicodrama Psicoanalítico (2018).',
      'Acompañamiento Terapéutico | Universidad de Morón (2016).',
      'Seminario "La conflictividad familiar en el mito" | Universidad de Morón (2013).'
    ],
    image: '/images/staff2.jpg'
  },

  {
    name: 'Lic. Martín Moguel',
    role: 'Psicólogo especialista en sistémica STAFF',
    description: [
      'Maestría PINE en Universidad Favaloro.',
      'Psicólogo deportivo en Barça Innovation Hub.',
      'Investigador del Síndrome de Staff Burnout.',
      'Terapeuta vincular - Taller de vínculos.',
      'Psicólogo clínico en Grupo Médico del niño y la familia Francisco Maglio.',
      'Coordinador de grupo terapéutico en Fundación 90 Días.',
      'Psicólogo deportivo en Racing Club de Avellaneda.',
      'Psicólogo comunitario en Fundación Salud Mental y Deporte.'
    ],
    image: '/images/Staff4.jpg'
  },
  {
    name: 'Jesús Vizcarra',
    role: 'Licenciado en Psicología (UBA) Orientación Psicoanalítica. STAFF',
    description: [
      'Abordaje de trastornos de adicciones y patologías de la Clínica contemporánea.',
      'Trabajo con niños, adolescentes y adultos.',
      'Crítico de Arte.'
    ],
    image: '/images/Staff5.jpg'
  },
  {
    name: 'Marina Muñoz',
    role: 'Licenciada en psicología (Universidad de Buenos Aires) Profesorado de Ashtanga Yoga.',
    description: [
      'Posgrado en psicoanálisis "Dr. Arturo Ameghino".',
      'Residencia en psicología clínica "Hospital Araoz Alfaro".',
      'Clínica en consultorio.',
      'Tallerista de yoga en: Clínica Las Heras, Frenopático, Interea Hospital de Día.',
      'Coordinadora Hospital de Día Interea.',
      'Psicoterapeuta en Hospital de Día y Half Way House, San Francisco, California, USA.'
    ],
    image: '/images/Staff9.jpg'
  },
  {
    name: 'Faccini Paola',
    role: 'Personal Administrativo',
    description: '',
    image: '/images/Staff10.jpg'
  },
  {
    name: 'Alejandro Seftel',
    role: 'Personal Administrativo',
    description: '',
    image: '/images/Staff11.jpg'
  },
  {
    name: 'Nadin Hadbe',
    role: 'Asistente de compras',
    description: '',
    image: '/images/Staff12.jpg'
  },
  {
    name: 'Lucas Bindi',
    role: 'Licenciado en psicología',
    description: [
      'Terapias individuales',
      'Terapias vinculares',
      'Terapias grupales'
    ],
    image: '/images/Staff13.jpeg'
  },
  {
    name: 'Natalia Bousquet',
    role: 'Licenciada en psicología',
    description: [
      'Terapia Cognitivo Conductual para Trastornos de Ansiedad y Depresión',
      'Trastorno por Estrés Postraumático', 'Acompañar las discapacidades', 'Nuevas amenazas para los jóvenes” Comisión organizadora.', 'Adicciones', 'Autismo y TDAH.'
    ],
    image: '/images/Staff14.jpg'
  }, {
    name: 'Walter Lagos',
    role: 'Licenciado en psicología',
    description: [
      'Coordinador de grupos terapéuticos de pacientes internados. ',
      'Coordinador de grupo de pacientes externados',
      'Coordinador de grupo de pacientes externados',
      'Psicoterapeuta de terapias vinculares',
      'Psicólogo de guardia diurna y nocturna.',
      'Entrevista de admisiones.',
    ],
    image: '/images/Staff15.jpeg'
  },
  {
    name: 'Agustina Garcia Lopez Boero',
    role: 'Licenciada en psicología',
    description: ['Acompañante terapeutica en Desir Salud', 'Coordinadora de espacios grupales y talleres'],
    image: '/images/Staff16.jpeg'
  }, {
    name: 'Daniel Montoya',
    role: 'Licenciado en psicología',
    description: ['Formacion en neurociencias', 'Psicoterapia individual'],
    image: '/images/Staff17.jpeg'
  },
  {
    name: 'Ludmila Rueda',
    role: 'Licenciada en psicología',
    description: ['Técnicas Psicométricas y Proyectivas', 'Autismo', 'Terapia Cognitivo Conductual', 'Selección de personal y Psicotécnicos'],
    image: '/images/Staff18.jpeg'
  },
  {
    name: 'Paula Santini',
    role: 'Licenciada en psicología',
    description: ['Coordinación de grupos de pacientes', 'Coordinación de grupos de familias', 'Terapia individual'],
    image: '/images/Staff19.jpg'
  },
  {
    name: 'Adrian Grande Tylor',
    role: 'Licenciado en psicología por la UNT',
    description:
      ['Psicoterapia individual', 'Terapias vinculares', 'Coordinador de grupos', 'Co-coordinador de grupo de externados.'],
    image: '/images/Staff20.jpg'
  }
]


export default function Equipo() {
  return (
    <div className="section">
      <div className={styles.fullWidth}>
        <div className={styles.wrap}>
          <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.headerContent}>
                <h2>Equipo profesional multidisciplinarios</h2>
                <p className={styles.intro}>
                  Contamos con un equipo de profesionales altamente capacitados y especializados
                  en el tratamiento integral de adicciones, comprometidos con la recuperación
                  y el bienestar de nuestros pacientes.
                </p>
              </div>
            </div>

            <div className={styles.teamGrid}>
              {teamMembers.map((member, index) => (
                <div key={index} className={styles.teamMember}>
                  <div className={styles.imageContainer}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className={styles.memberImage}
                    />
                  </div>
                  <div className={styles.memberInfo}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberRole}>{member.role}</p>

                    <div className={styles.memberDescription}>
                      {Array.isArray(member.description) ? (
                        <ul>
                          {member.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{member.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.actions}>
              <a className="btn" href="/">Volver</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}