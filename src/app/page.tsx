import Navbar from '../app/components/Navbar'
import Hero from '../app/components/Hero'
import Introductions from './components/Introdution'
import MyVision from './components/Vision'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Introductions/>
      <MyVision />
      
    </>
  )
}
