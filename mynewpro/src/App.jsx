import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Company from './components/Company'
import Purpose from './components/Purpose'
import Features from './components/Features'
import Schedule from './components/Schedule'
import MonitorSection from './components/MonitorSection'
import Pricing from './components/Pricing'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <Company />
        <Purpose />
        <Features />
        <Schedule />
        <MonitorSection />
        <Pricing />
        <Services />
        <Testimonials />
        <Newsletter />
        <Footer />
      </div>
    </main>
  )
}

export default App
