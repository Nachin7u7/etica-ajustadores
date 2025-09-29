import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Coverage from "../components/Coverage"
import Team from "../components/Team"
import Contact from "../components/Contact"
import Locations from "../components/Locations"
import Footer from "../components/Footer"
import InstitutionalCurriculum from "../components/InstitutionalCurriculum"
import Administration from "../components/Administration"

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <InstitutionalCurriculum />
      <Services />
      <Coverage />
      <Administration />
      <Team />
      <Contact />
      <Locations />
      <Footer />
    </>
  )
}

export default Home
