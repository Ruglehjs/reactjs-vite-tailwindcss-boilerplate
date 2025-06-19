import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'
import Home from 'pages/Home'
import Services from 'pages/Services'
import Plans from 'pages/Plans'
import About from 'pages/About'
import Contact from 'pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-black">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/planes" element={<Plans />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
