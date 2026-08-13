import './styles.css'

export interface ActivityData {
  icon: string
  title: string
  description: string
  benefits: string[]
  color: 'coral' | 'green' | 'orange' | 'blue'
}

interface ActivityModalProps {
  activity: ActivityData | null
  onClose: () => void
}

function ActivityModal({
  activity,
  onClose,
}: ActivityModalProps) {
  if (!activity) {
    return null
  }

  return (
    <div
      className="activity-modal__overlay"
      onClick={onClose}
    >
      <div
        className={`activity-modal activity-modal--${activity.color}`}
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        <button
          className="activity-modal__close"
          onClick={onClose}
          aria-label="Fechar"
        >
          ×
        </button>

        <div className="activity-modal__header">

          <div className="activity-modal__icon">
            {activity.icon}
          </div>

          <div>
            <span>
              ATIVIDADE
            </span>

            <h2>
              {activity.title}
            </h2>
          </div>

        </div>

        <div className="activity-modal__content">

          <section>
            <h3>
              Sobre a atividade
            </h3>

            <p>
              {activity.description}
            </p>
          </section>

          <section>
            <h3>
              O que desenvolvemos
            </h3>

            <ul>
              {activity.benefits.map(
                (benefit) => (
                  <li key={benefit}>
                    <span>✓</span>
                    {benefit}
                  </li>
                )
              )}
            </ul>
          </section>

        </div>

        <div className="activity-modal__footer">

          <p>
            Quer conhecer nossa proposta?
          </p>

          <a
            href="#agendamento"
            onClick={onClose}
          >
            Agende uma visita
            <span>→</span>
          </a>

        </div>

      </div>
    </div>
  )
}

export default ActivityModal