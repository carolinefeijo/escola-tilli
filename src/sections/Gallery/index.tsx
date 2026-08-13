import { useState } from 'react'

import './styles.css'

interface GalleryItem {
  id: number
  image: string
  title: string
  category: string
  categoryLabel: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image:
      'https://www.afasc.com.br/foto_g/16c7c942be212bc9.jpeg',
    title: 'Momentos de descoberta',
    category: 'atividades',
    categoryLabel: 'Atividades',
  },
  {
    id: 2,
    image:
      'https://www.caraguatatuba.sp.gov.br/pmc/wp-content/uploads/2023/06/Foto-2.jpeg',
    title: 'Contato com a natureza',
    category: 'natureza',
    categoryLabel: 'Natureza',
  },
  {
    id: 3,
    image:
      'https://s2.glbimg.com/1rHG-S9RRBy9y5_SofmzNgjCsWo=/e.glbimg.com/og/ed/f/original/2021/01/20/projeto_de_lei_enviado_a_camara_amplia_atendimento_de_criancas.jpg',
    title: 'Aprender brincando',
    category: 'sala',
    categoryLabel: 'Sala de aula',
  },
  {
    id: 4,
    image:
      'https://f.hubspotusercontent20.net/hubfs/7233321/Imported_Blog_Media/alex-libotte-photography-escola-viva-select-day-2-081-1280x853.jpg',
    title: 'Criatividade em ação',
    category: 'atividades',
    categoryLabel: 'Atividades',
  },
  {
    id: 5,
    image:
      'https://www.afasc.com.br/foto_g/eff327176c0aaaff.jpg',
    title: 'Pequenos momentos',
    category: 'momentos',
    categoryLabel: 'Momentos',
  },
  {
    id: 6,
    image:
      'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia13297/reproducao-educacao-ambiental-infantil-artigos-cpt.jpg',
    title: 'Explorando o mundo',
    category: 'natureza',
    categoryLabel: 'Natureza',
  },
  {
    id: 7,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcvgD3dQG0JkQZMqGFReluAfRkfEkBL1LXU7TKuomFcI8qiZaXMz50R4&s=10',
    title: 'Hora da história',
    category: 'sala',
    categoryLabel: 'Sala de aula',
  },
  {
    id: 8,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwrLfpVTs9gbp_-1ENAXieFQ84laIpH2sR-5PlSseZQfmgdCFSgeAMO8&s=10',
    title: 'Diversão na Tilli',
    category: 'momentos',
    categoryLabel: 'Momentos',
  },
]

const filters = [
  { value: 'todos', label: 'Todos' },
  { value: 'sala', label: 'Sala de aula' },
  { value: 'atividades', label: 'Atividades' },
  { value: 'natureza', label: 'Natureza' },
  { value: 'momentos', label: 'Momentos' },
]

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('todos')
  const [selectedImage, setSelectedImage] =
    useState<GalleryItem | null>(null)

  const filteredItems =
    activeFilter === 'todos'
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeFilter
        )

  return (
    <>
      <section className="gallery" id="galeria">
        <div className="gallery__container">

          {/* HEADER */}

          <div className="gallery__header">

            <span className="gallery__tag">
              MOMENTOS DA TILLI
            </span>

            <h2>
              Pequenos momentos,
              <span> grandes memórias.</span>
            </h2>

            <p>
              Um pouco do nosso dia a dia, das nossas
              descobertas e de todos aqueles momentos
              que tornam a infância tão especial.
            </p>

          </div>

          {/* FILTROS */}

          <div className="gallery__filters">
            {filters.map((filter) => (
              <button
                key={filter.value}
                className={
                  activeFilter === filter.value
                    ? 'gallery__filter gallery__filter--active'
                    : 'gallery__filter'
                }
                onClick={() =>
                  setActiveFilter(filter.value)
                }
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* GRID */}

          <div className="gallery__grid">

            {filteredItems.map((item, index) => (
              <button
                key={item.id}
                className={`gallery-card gallery-card--${index % 4}`}
                onClick={() =>
                  setSelectedImage(item)
                }
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="gallery-card__overlay">

                  <span>
                    {item.categoryLabel}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <div className="gallery-card__zoom">
                    +
                  </div>

                </div>

              </button>
            ))}

          </div>

          {/* FRASE */}

          <div className="gallery__message">

            <span>📸</span>

            <div>
              <strong>
                Cada dia tem uma história para contar.
              </strong>

              <p>
                Na Tilli, valorizamos cada descoberta,
                cada sorriso e cada nova conquista.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* MODAL DA IMAGEM */}

      {selectedImage && (
        <div
          className="gallery-modal"
          onClick={() => setSelectedImage(null)}
        >

          <div
            className="gallery-modal__content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="gallery-modal__close"
              onClick={() =>
                setSelectedImage(null)
              }
              aria-label="Fechar imagem"
            >
              ×
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="gallery-modal__caption">

              <span>
                {selectedImage.categoryLabel}
              </span>

              <h3>
                {selectedImage.title}
              </h3>

            </div>

          </div>

        </div>
      )}
    </>
  )
}

export default Gallery