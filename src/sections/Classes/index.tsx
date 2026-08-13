import { useState } from 'react'

import './styles.css'

import ClassModal, {
  type ClassData,
} from '../../assets/components/ClassModal'

const classes: ClassData[] = [
  {
    icon: '👶',
    title: 'Berçário',
    age: '4 meses a 1 ano',
    description:
      'Um ambiente acolhedor e seguro para os primeiros momentos de descobertas, vínculos e desenvolvimento. Cada experiência é planejada para respeitar o ritmo individual da criança.',
    development: [
      'Coordenação motora',
      'Percepção sensorial',
      'Vínculos afetivos',
      'Comunicação',
      'Descoberta do próprio corpo',
      'Desenvolvimento emocional',
    ],
    activities: [
      'Estímulos sensoriais',
      'Musicalização',
      'Psicomotricidade',
      'Brincadeiras',
      'Histórias',
    ],
    color: 'coral',
  },

  {
    icon: '🧸',
    title: 'Maternal',
    age: '1 a 3 anos',
    description:
      'Uma fase cheia de descobertas, onde brincar, explorar e interagir fazem parte de cada aprendizado. Incentivamos a autonomia e a construção de vínculos.',
    development: [
      'Autonomia',
      'Linguagem',
      'Coordenação motora',
      'Socialização',
      'Expressão emocional',
      'Curiosidade',
    ],
    activities: [
      'Brincadeiras educativas',
      'Contação de histórias',
      'Música',
      'Artes',
      'Atividades sensoriais',
    ],
    color: 'green',
  },

  {
    icon: '🎨',
    title: 'Pré I',
    age: '4 anos',
    description:
      'Experiências que estimulam a criatividade, a autonomia e a curiosidade através de atividades significativas e projetos que despertam o interesse das crianças.',
    development: [
      'Criatividade',
      'Comunicação',
      'Raciocínio',
      'Coordenação motora',
      'Autonomia',
      'Convivência',
    ],
    activities: [
      'Artes',
      'Música',
      'Projetos',
      'Jogos educativos',
      'Educação física',
    ],
    color: 'orange',
  },

  {
    icon: '🌱',
    title: 'Pré II',
    age: '5 anos',
    description:
      'Uma etapa de grandes descobertas e preparação para novos desafios, fortalecendo a autonomia, a confiança e o prazer em aprender.',
    development: [
      'Autonomia',
      'Raciocínio lógico',
      'Linguagem',
      'Criatividade',
      'Concentração',
      'Preparação para alfabetização',
    ],
    activities: [
      'Literatura',
      'Projetos',
      'Jogos',
      'Atividades educativas',
      'Exploração',
    ],
    color: 'blue',
  },
]

function Classes() {
  const [selectedClass, setSelectedClass] =
    useState<ClassData | null>(null)

  return (
    <>
      <section className="classes" id="turmas">

        <div className="classes__container">

          <div className="classes__header">

            <span className="classes__tag">
              NOSSAS TURMAS
            </span>

            <h2>
              Cada fase tem seu{' '}
              <span>tempo.</span>
            </h2>

            <p>
              Na Tilli, cada turma possui uma proposta pensada
              especialmente para a fase de desenvolvimento
              das crianças.
            </p>

          </div>

          <div className="classes__grid">

            {classes.map((item) => (
              <article
                key={item.title}
                className={`class-card class-card--${item.color}`}
              >

                <div className="class-card__top">

                  <div className="class-card__icon">
                    {item.icon}
                  </div>

                  <span className="class-card__age">
                    {item.age}
                  </span>

                </div>

                <h3>{item.title}</h3>

                <div className="class-card__line" />

                <p className="class-card__description">
                  {item.description}
                </p>

                <div className="class-card__activities">

                  <strong>
                    Atividades
                  </strong>

                  <ul>
                    {item.activities.map((activity) => (
                      <li key={activity}>
                        <span>✓</span>
                        {activity}
                      </li>
                    ))}
                  </ul>

                </div>

                <button
                  className="class-card__button"
                  onClick={() => setSelectedClass(item)}
                >
                  Conheça a turma
                  <span>→</span>
                </button>

              </article>
            ))}

          </div>

          <div className="classes__footer">

            <div>
              <span>♡</span>

              <p>
                Encontrou a turma ideal para sua criança?
              </p>
            </div>

            <a href="#agendamento">
              Agende uma visita
              <span>→</span>
            </a>

          </div>

        </div>

      </section>

      <ClassModal
        classData={selectedClass}
        onClose={() => setSelectedClass(null)}
      />
    </>
  )
}

export default Classes