import './styles.css'

function About() {
  return (
    <section className="about" id="sobre">
      <div className="about__container">

        <div className="about__header">
          <span className="about__tag">
            Sobre a Tilli
          </span>

          <h2>
            Um ambiente onde cada criança
            <span> pode ser quem é.</span>
          </h2>

          <p>
            A Tilli nasceu para oferecer uma educação acolhedora,
            afetiva e significativa, respeitando o tempo e a
            individualidade de cada criança.
          </p>
        </div>

        <div className="about__content">

          <div className="about__text">
            <h3>
              Educação que vai além da sala de aula
            </h3>

            <p>
              Acreditamos que a infância é uma fase única e cheia
              de descobertas. Por isso, criamos experiências que
              estimulam a curiosidade, a criatividade, a autonomia
              e o desenvolvimento de cada criança.
            </p>

            <p>
              Nossa proposta une aprendizado, brincadeiras,
              convivência e afeto em um ambiente seguro,
              preparado para que as crianças possam explorar,
              experimentar e aprender todos os dias.
            </p>
          </div>

          <div className="about__cards">

            <article className="about__card">
              <span className="about__card-icon">♡</span>

              <h3>Missão</h3>

              <p>
                Promover uma educação acolhedora que respeite
                cada criança e incentive seu desenvolvimento
                integral.
              </p>
            </article>

            <article className="about__card">
              <span className="about__card-icon">✦</span>

              <h3>Visão</h3>

              <p>
                Ser um espaço de referência em educação infantil,
                unindo afeto, inovação e aprendizagem.
              </p>
            </article>

            <article className="about__card">
              <span className="about__card-icon">♡</span>

              <h3>Valores</h3>

              <p>
                Respeito, carinho, confiança, criatividade,
                autonomia e parceria com as famílias.
              </p>
            </article>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About