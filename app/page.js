
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About' // Added About import
import Features from '../components/Features'
import Empowering from '../components/Empowering'
import Benefits from '../components/Benefits'
import Statistics from '../components/Statistics'
import Team from '../components/Team'
import HowWeWork from '../components/HowWeWork'
import Reviews from '../components/Reviews'
import Blog from '../components/Blog'
import Partners from '../components/Partners'
import CaseStudies from '../components/CaseStudies'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About /> {/* Rendered About component */}
      <Empowering />
      <Benefits />
      <Features />
      {/* <Statistics /> */}
      <Team />
      <HowWeWork />
      <Reviews />
      <Blog />
      <Partners />
      {/* <CaseStudies />
      <Newsletter /> */}
      <Footer />
    </main>
  )
}
