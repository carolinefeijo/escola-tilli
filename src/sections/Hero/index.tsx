import './styles.css'
import banner from '../../assets/banner.jpeg'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <span className="hero__tag">
          Educação com carinho e propósito
        </span>

        <h1>
          Um lugar para
          <span> aprender, brincar </span>
          e crescer.
        </h1>

        <p>
          Na Tilli, cada criança é acolhida, respeitada e estimulada
          a descobrir o mundo através de experiências, brincadeiras
          e muito carinho.
        </p>

        <div className="hero__actions">
          <a href="#agendamento" className="hero__button">
            Agende uma visita
          </a>

          <a href="#sobre" className="hero__link">
            Conheça a Tilli →
          </a>
        </div>
      </div>

      <div className="hero__image">
  <div className="hero__image-placeholder">
    <img
      src={banner}
      alt="Crianças brincando na Tilli"
    />
  </div>
</div>
    </section>
  )
}

export default Hero