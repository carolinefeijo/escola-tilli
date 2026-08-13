import { useState } from 'react'

import './styles.css'

import ActivityModal, {
  type ActivityData,
} from '../../assets/components/ActivityModal'

const activities: ActivityData[] = [
  {
    icon: '🎨',
    title: 'Artes e Criatividade',
    description:
      'Um espaço para as crianças explorarem cores, formas, texturas e diferentes maneiras de expressar suas ideias.',
    benefits: [
      'Criatividade',
      'Coordenação motora',
      'Expressão',
      'Imaginação',
    ],
    color: 'coral',
  },

  {
    icon: '🎵',
    title: 'Música',
    description:
      'A música está presente na rotina da Tilli como uma forma divertida de estimular a expressão, o movimento e a percepção.',
    benefits: [
      'Percepção sonora',
      'Coordenação',
      'Expressão corporal',
      'Socialização',
    ],
    color: 'orange',
  },

  {
    icon: '📚',
    title: 'Contação de Histórias',
    description:
      'Histórias que despertam a imaginação, ampliam o vocabulário e ajudam as crianças a compreender diferentes sentimentos e situações.',
    benefits: [
      'Linguagem',
      'Imaginação',
      'Concentração',
      'Criatividade',
    ],
    color: 'blue',
  },

  {
    icon: '🌱',
    title: 'Horta e Natureza',
    description:
      'O contato com a natureza proporciona experiências práticas e ajuda as crianças a desenvolverem cuidado e curiosidade pelo mundo.',
    benefits: [
      'Responsabilidade',
      'Curiosidade',
      'Cuidado',
      'Consciência ambiental',
    ],
    color: 'green',
  },

  {
    icon: '⚽',
    title: 'Movimento e Esporte',
    description:
      'Atividades que envolvem movimento, equilíbrio e coordenação ajudam a criança a conhecer melhor seu corpo enquanto se diverte.',
    benefits: [
      'Coordenação motora',
      'Equilíbrio',
      'Movimento',
      'Cooperação',
    ],
    color: 'coral',
  },

  {
    icon: '🧩',
    title: 'Brincadeiras Educativas',
    description:
      'Brincar também é aprender. Utilizamos jogos e brincadeiras para estimular diferentes habilidades de forma leve e significativa.',
    benefits: [
      'Raciocínio',
      'Autonomia',
      'Socialização',
      'Resolução de problemas',
    ],
    color: 'orange',
  },
]

function Activities() {
  const [selectedActivity, setSelectedActivity] =
    useState<ActivityData | null>(null)

  return (
    <>
      <section className="activities" id="atividades">
        <div className="activities__container">

          <div className="activities__header">

            <span className="activities__tag">
              NOSSO DIA A DIA
            </span>

            <h2>
              Aprender também é{' '}
              <span>brincar.</span>
            </h2>

            <p>
              Na Tilli, cada experiência pode se transformar
              em uma oportunidade de descoberta, criação e
              aprendizado.
            </p>

          </div>

          <div className="activities__grid">

            {activities.map((activity) => (
              <article
                key={activity.title}
                className={`activity-card activity-card--${activity.color}`}
              >

                <div className="activity-card__icon">
                  {activity.icon}
                </div>

                <div className="activity-card__content">

                  <h3>{activity.title}</h3>

                  <p>
                    {activity.description}
                  </p>

                </div>

                <button
                  className="activity-card__button"
                  onClick={() =>
                    setSelectedActivity(activity)
                  }
                >
                  Saiba mais
                  <span>→</span>
                </button>

              </article>
            ))}

          </div>

          <div className="activities__message">

            <span>✦</span>

            <div>
              <strong>
                Cada experiência tem um propósito.
              </strong>

              <p>
                Criamos momentos para que as crianças
                aprendam, explorem e se divirtam.
              </p>
            </div>

          </div>

        </div>
      </section>

      <ActivityModal
        activity={selectedActivity}
        onClose={() => setSelectedActivity(null)}
      />
    </>
  )
}

export default Activities