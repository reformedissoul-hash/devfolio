import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import WhyMe from '../components/WhyMe.jsx'
import Projects from '../components/Projects.jsx'
import Process from '../components/Process.jsx'
import About from '../components/About.jsx'
import Pricing from '../components/Pricing.jsx'
import Testimonials from '../components/Testimonials.jsx'
import FAQ from '../components/FAQ.jsx'
import Contact from '../components/Contact.jsx'
import CTA from '../components/CTA.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  return (
    <div className="relative min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyMe />
        <Projects />
        <Process />
        <About />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default Home
