import './styles.css'

interface Testimonial {
  id: number
  name: string
  role: string
  initials: string
  text: string
  color: 'coral' | 'green' | 'orange' | 'blue'
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mariana Souza',
    role: 'Mãe da Helena • Maternal',
    initials: 'MS',
    text:
      'Desde o primeiro dia, fomos recebidos com muito carinho. A equipe da Tilli é atenciosa, acolhedora e realmente acompanha cada etapa do desenvolvimento da nossa filha.',
    color: 'coral',
  },
  {
    id: 2,
    name: 'Rafael Oliveira',
    role: 'Pai do Lucas • Pré I',
    initials: 'RO',
    text:
      'O que mais gostamos na Tilli é perceber que nosso filho aprende enquanto brinca. Ele chega em casa contando tudo o que fez e sempre está animado para voltar no dia seguinte.',
    color: 'green',
  },
  {
    id: 3,
    name: 'Camila Martins',
    role: 'Mãe da Sofia • Pré II',
    initials: 'CM',
    text:
      'A escola se tornou uma extensão da nossa casa. Temos muita tranquilidade em saber que nossa filha está em um ambiente seguro, acolhedor e preparado para ela.',
    color: 'orange',
  },
]

function Testimonials() {
  return (
    <section className="testimonials" id="depoimentos">
      <div className="testimonials__container">

        <div className="testimonials__header">

          <span className="testimonials__tag">
            QUEM VIVE A TILLI
          </span>

          <h2>
            Histórias que
            <span> aquecem o coração.</span>
          </h2>

          <p>
            A melhor parte do nosso trabalho é acompanhar
            cada descoberta e fazer parte da história de
            tantas famílias.
          </p>

        </div>

        <div className="testimonials__grid">

          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className={`testimonial-card testimonial-card--${testimonial.color}`}
            >

              <div className="testimonial-card__top">

                <div className="testimonial-card__quote">
                  “
                </div>

                <div className="testimonial-card__stars">
                  ★ ★ ★ ★ ★
                </div>

              </div>

              <p className="testimonial-card__text">
                {testimonial.text}
              </p>

              <div className="testimonial-card__author">

                <div className="testimonial-card__avatar">
                  {testimonial.initials}
                </div>

                <div>
                  <strong>
                    {testimonial.name}
                  </strong>

                  <span>
                    {testimonial.role}
                  </span>
                </div>

              </div>

            </article>
          ))}

        </div>

        <div className="testimonials__footer">

          <div className="testimonials__footer-icon">
            💛
          </div>

          <div>
            <strong>
              Cada família faz parte da nossa história.
            </strong>

            <p>
              Obrigado por confiar na Tilli para acompanhar
              momentos tão importantes da infância.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Testimonials