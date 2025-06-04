import Navbar from '../app/components/Navbar'
import Hero from '../app/components/Hero'
import Introductions from './components/Introdution'
import MyVision from './components/Vision'
import Mission from './components/Mission'
import Portfolio from './components/Portofolio'
import Contact from './components/Contact'
import ThankYou from './components/Thank'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Introductions/>
      <Portfolio />
      <MyVision />
      <Mission />
      <Contact />
      <ThankYou />
      <Footer />

    </>
  )
}
