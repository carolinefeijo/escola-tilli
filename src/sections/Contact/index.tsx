import './styles.css'

function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="contact__container">

        <div className="contact__content">

          <span className="contact__tag">
            FALE COM A TILLI
          </span>

          <h2>
            Vamos conhecer
            <span> sua família?</span>
          </h2>

          <p className="contact__description">
            Estamos prontos para conversar, tirar suas dúvidas
            e apresentar de perto tudo o que a Tilli prepara
            para os pequenos.
          </p>

          <div className="contact__info">

            {/* <a
              href="https://wa.me/5548999999999"
              target="_blank"
              rel="noreferrer"
              className="contact__item"
            >
              <span className="contact__item-icon">
                💬
              </span>

              <div>
                <strong>WhatsApp</strong>
                <span>Fale com nossa equipe</span>
              </div>
            </a> */}

            <a
              href="tel:+5548999999999"
              className="contact__item"
            >
              <span className="contact__item-icon">
                📞
              </span>

              <div>
                <strong>Telefone</strong>
                <span>(48) 99999-9999</span>
              </div>
            </a>

            <a
              href="mailto:contato@tilli.com.br"
              className="contact__item"
            >
              <span className="contact__item-icon">
                ✉️
              </span>

              <div>
                <strong>E-mail</strong>
                <span>contato@tilli.com.br</span>
              </div>
            </a>

            <div className="contact__item">
              <span className="contact__item-icon">
                📍
              </span>

              <div>
                <strong>Onde estamos</strong>
                <span>Rua da Tilli, 123 — Tubarão/SC</span>
              </div>
            </div>

          </div>

          <a
            href="#agendamento"
            rel="noreferrer"
            className="contact__button"
          >
            Agende uma visita
            <span>→</span>
          </a>

        </div>

        <div className="contact__visual">

          <div className="contact__visual-circle">
            🏡
          </div>

          <div className="contact__visual-card">
            <span>💛</span>

            <div>
              <strong>
                Será um prazer receber vocês!
              </strong>

              <p>
                Venha conhecer a Tilli de pertinho.
              </p>
            </div>
          </div>

          <div className="contact__star contact__star--one">
            ✦
          </div>

          <div className="contact__star contact__star--two">
            ✦
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact