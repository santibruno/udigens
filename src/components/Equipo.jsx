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
    name: 'Maria Eva Palopoli',
    role: 'Lic. En Psicología (Universidad de Buenos Aires) STAFF',
    description: [
      'Especialización en terapia de pareja y familia, clínica de niños, adolescentes y adultos (Institución Fernando Ulloa).',
      'Licenciatura en Psicología en la Universidad de Buenos Aires.',
      'Curso de extensión "Análisis e intervención sobre patologías narcisistas" (Institución Fernando Ulloa).',
      'Curso sobre estrategias de intervención en consumo problemático de sustancias (en curso).'
    ],
    image: '/images/Staff3.jpg'
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
    name: 'María Constanza Guarnaccia',
    role: 'Lic. en Psicología. MN 82542. STAFF',
    description: [
      'Diplomatura en Psicodiagnóstico de Rorschach (UCES).',
      'Licenciada en Psicología Clínica (UCES).',
      'Prácticas profesionales en el Instituto Fernando Ulloa y en Hospital José Tiburcio Borda.',
      'Prácticas en clínica de niños en el Centro Terapéutico Proyecto Puente Symbolon.'
    ],
    image: '/images/Staff6.jpg'
  },
  {
    name: 'Carlos Alberto Papay',
    role: 'Estudiante psicología U.B.A STAFF',
    description: [
      'Coordinación y acompañamiento en centro comunitario de Adicciones en C.A.B.A - 10 años.'
    ],
    image: '/images/Staff7.jpg'
  },
  {
    name: 'Anabella Cardarilli',
    role: 'Licenciada en Psicología (Universidad del Salvador) STAFF',
    description: [
      'Postgrado en psicoterapias cognitivas conductuales contemporáneas (Fundación Foro).',
      'Especialización en psicooncología en ISEP.',
      'Curso de Equinoterapia en Fundación al Reparo.',
      'Curso de acompañamiento terapéutico en patologías neuropsiquiátricas en INECO.',
      'Seminario en pericias psicológicas en niños y adolescentes.'
    ],
    image: '/images/Staff8.jpg'
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
                <h2>Profesionales multidisciplinarios</h2>
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