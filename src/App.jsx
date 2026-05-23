import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TrendyPlants from './components/TrendyPlants.jsx'
import TopSelling from './components/TopSelling.jsx'
import CustomerReview from './components/CustomerReview.jsx'
import BestO2 from './components/BestO2.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div style={{ background: '#1a2d1a', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      <main>
        <Hero />
        <TrendyPlants />
        <TopSelling />
        <CustomerReview />
        <BestO2 />
      </main>
      <Footer />
    </div>
  )
}
