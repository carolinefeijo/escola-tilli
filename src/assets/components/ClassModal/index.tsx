import './styles.css'

export interface ClassData {
  icon: string
  title: string
  age: string
  description: string
  activities: string[]
  development: string[]
  color: 'coral' | 'green' | 'orange' | 'blue'
}

interface ClassModalProps {
  classData: ClassData | null
  onClose: () => void
}

function ClassModal({ classData, onClose }: ClassModalProps) {
  if (!classData) {
    return null
  }

  return (
    <div
      className="class-modal__overlay"
      onClick={onClose}
    >
      <div
        className={`class-modal class-modal--${classData.color}`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="class-modal__close"
          onClick={onClose}
          aria-label="Fechar"
        >
          ×
        </button>

        <div className="class-modal__header">
          <div className="class-modal__icon">
            {classData.icon}
          </div>

          <div>
            <span className="class-modal__label">
              NOSSA TURMA
            </span>

            <h2>{classData.title}</h2>

            <span className="class-modal__age">
              {classData.age}
            </span>
          </div>
        </div>

        <div className="class-modal__content">

          <section>
            <h3>Sobre a turma</h3>

            <p>
              {classData.description}
            </p>
          </section>

          <section>
            <h3>O que desenvolvemos</h3>

            <ul className="class-modal__list">
              {classData.development.map((item) => (
                <li key={item}>
                  <span>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3>Como aprendemos</h3>

            <ul className="class-modal__activities">
              {classData.activities.map((activity) => (
                <li key={activity}>
                  {activity}
                </li>
              ))}
            </ul>
          </section>

        </div>

        <div className="class-modal__footer">
          <p>
            Quer conhecer nossa escola de perto?
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

export default ClassModal