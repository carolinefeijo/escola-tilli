import './styles.css'

const pillars = [
  {
    icon: '🎨',
    title: 'Criatividade',
    text: 'Estimulamos a imaginação e a expressão através de atividades artísticas, musicais e culturais que despertam o olhar curioso para o mundo.',
    color: 'coral',
  },
  {
    icon: '🧠',
    title: 'Desenvolvimento',
    text: 'Promovemos o desenvolvimento cognitivo, motor, emocional e social por meio de experiências planejadas que respeitam cada fase da infância.',
    color: 'green',
  },
  {
    icon: '🤝',
    title: 'Socialização',
    text: 'Incentivamos a convivência, o respeito e a empatia, criando laços e aprendizados que acompanham a criança para a vida toda.',
    color: 'orange',
  },
  {
    icon: '🌱',
    title: 'Autonomia',
    text: 'Apoiamos a criança a ganhar confiança, fazer escolhas e descobrir suas habilidades, tornando-se protagonista da própria jornada.',
    color: 'blue',
  },
]

function Methodology() {
  return (
    <section className="methodology" id="metodologia">

      <div className="methodology__decor methodology__decor--left" />
      <div className="methodology__decor methodology__decor--right" />

      <div className="methodology__container">

        <div className="methodology__header">

          <span className="methodology__tag">
            <span>♡</span>
            METODOLOGIA
          </span>

          <h2>
            Aprender também é{' '}
            <span>brincar.</span>
          </h2>

          <p>
            Nossa metodologia valoriza o desenvolvimento integral
            da criança, unindo aprendizado, brincadeiras e
            experiências significativas todos os dias.
          </p>

        </div>

        <div className="methodology__cards">

          {pillars.map((pillar) => (
            <article
              className={`methodology__card methodology__card--${pillar.color}`}
              key={pillar.title}
            >

              <div className="methodology__icon">
                {pillar.icon}
              </div>

              <h3>{pillar.title}</h3>

              <div className="methodology__line" />

              <p>{pillar.text}</p>

            </article>
          ))}

        </div>

        <div className="methodology__cta">

          <div className="methodology__cta-decoration">
            <span>✈</span>
          </div>

          <p>
            Aqui na Tilli, cada conquista é celebrada e{' '}
            <strong>
              cada etapa é vivida com carinho e propósito.
            </strong>
          </p>

          <a href="#agendamento">
            <span>□</span>
            Agende uma visita
          </a>

          <div className="methodology__hearts">
            <span>♡</span>
            <span>♡</span>
            <span>♡</span>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Methodology