import Header from './assets/components/Header'
import About from './sections/About'
import Activities from './sections/Activities'
import Appointment from './sections/Appointment'
import Classes from './sections/Classes'
import Contact from './sections/Contact'
import Gallery from './sections/Gallery'
import Hero from './sections/Hero'
import Methodology from './sections/Methodology'
import Testimonials from './sections/Testimonials'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
         <About />
                 <Methodology />
                 <Classes />
                 <Activities />
                 <Gallery />
                 <Testimonials />
                 <Contact />
                 <Appointment />

      </main>
    </>
  )
}

export default App