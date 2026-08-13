import { useState } from 'react'

import './styles.css'

function Appointment() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setSubmitted(true)
  }

  return (
    <section className="appointment" id="agendamento">
      <div className="appointment__container">

        {/* LADO ESQUERDO */}

        <div className="appointment__content">

          <span className="appointment__tag" >
            AGENDE UMA VISITA
          </span>

          <h2>
            Venha conhecer a
            <span> Tilli de pertinho.</span>
          </h2>

          <p className="appointment__description">
            Quer conhecer nossa estrutura, conversar com
            nossa equipe e descobrir como podemos fazer
            parte da jornada do seu pequeno?
          </p>

          <div className="appointment__benefits">

            <div className="appointment__benefit">
              <span>🏡</span>

              <div>
                <strong>
                  Conheça nossa estrutura
                </strong>

                <p>
                  Veja de perto os espaços preparados
                  para receber as crianças.
                </p>
              </div>
            </div>

            <div className="appointment__benefit">
              <span>💛</span>

              <div>
                <strong>
                  Converse com nossa equipe
                </strong>

                <p>
                  Tire suas dúvidas e conheça nossa
                  proposta pedagógica.
                </p>
              </div>
            </div>

            <div className="appointment__benefit">
              <span>🌱</span>

              <div>
                <strong>
                  Encontre a turma ideal
                </strong>

                <p>
                  Vamos entender as necessidades
                  da sua família.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* FORMULÁRIO */}

        <div className="appointment__form-wrapper">

          {submitted ? (
            <div className="appointment__success">

              <div className="appointment__success-icon">
                ✓
              </div>

              <h3>
                Solicitação enviada!
              </h3>

              <p>
                Obrigado pelo interesse na Tilli.
                Nossa equipe entrará em contato
                para confirmar o melhor dia e horário
                para sua visita.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
              >
                Fazer outra solicitação
              </button>

            </div>
          ) : (
            <form
              className="appointment__form"
              onSubmit={handleSubmit}
            >

              <div className="appointment__form-header">
                <h3>
                  Agende sua visita
                </h3>

                <p>
                  Preencha os dados abaixo e
                  entraremos em contato.
                </p>
              </div>

              <div className="appointment__fields">

                <div className="appointment__field">
                  <label htmlFor="name">
                    Seu nome
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Digite seu nome"
                    required
                  />
                </div>

                <div className="appointment__field">
                  <label htmlFor="phone">
                    Telefone / WhatsApp
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(48) 99999-9999"
                    required
                  />
                </div>

              </div>

              <div className="appointment__field">
                <label htmlFor="email">
                  E-mail
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seuemail@email.com"
                  required
                />
              </div>

              <div className="appointment__fields">

                <div className="appointment__field">
                  <label htmlFor="childName">
                    Nome da criança
                  </label>

                  <input
                    id="childName"
                    name="childName"
                    type="text"
                    placeholder="Nome da criança"
                    required
                  />
                </div>

                <div className="appointment__field">
                  <label htmlFor="age">
                    Idade
                  </label>

                  <select
                    id="age"
                    name="age"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione
                    </option>

                    <option value="0-1">
                      Até 1 ano
                    </option>

                    <option value="1-2">
                      1 a 2 anos
                    </option>

                    <option value="2-3">
                      2 a 3 anos
                    </option>

                    <option value="3-4">
                      3 a 4 anos
                    </option>

                    <option value="4-5">
                      4 a 5 anos
                    </option>

                    <option value="5+">
                      5 anos ou mais
                    </option>
                  </select>
                </div>

              </div>

              <div className="appointment__field">
                <label htmlFor="class">
                  Turma de interesse
                </label>

                <select
                  id="class"
                  name="class"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione uma turma
                  </option>

                  <option value="bercario">
                    Berçário
                  </option>

                  <option value="maternal">
                    Maternal
                  </option>

                  <option value="pre1">
                    Pré I
                  </option>

                  <option value="pre2">
                    Pré II
                  </option>

                  <option value="duvida">
                    Ainda não sei
                  </option>
                </select>
              </div>

              <div className="appointment__fields">

                <div className="appointment__field">
                  <label htmlFor="date">
                    Melhor dia
                  </label>

                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                  />
                </div>

                <div className="appointment__field">
                  <label htmlFor="time">
                    Melhor horário
                  </label>

                  <select
                    id="time"
                    name="time"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione
                    </option>

                    <option value="morning">
                      Manhã
                    </option>

                    <option value="afternoon">
                      Tarde
                    </option>
                  </select>
                </div>

              </div>

              <div className="appointment__field">
                <label htmlFor="message">
                  Alguma dúvida?
                  <span> opcional</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Conte um pouco mais sobre o que você gostaria de saber..."
                />
              </div>

              <button
                type="submit"
                className="appointment__submit"
              >
                Solicitar visita
                <span>→</span>
              </button>

              <p className="appointment__privacy">
                Seus dados serão utilizados apenas para
                entrar em contato sobre o agendamento.
              </p>

            </form>
          )}

        </div>

      </div>
    </section>
  )
}

export default Appointment