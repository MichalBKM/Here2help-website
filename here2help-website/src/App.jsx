import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Technology from './components/Technology.jsx'
import UseCases from './components/UseCases.jsx'
import Team from './components/Team.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="technology">
        <Technology />
      </div>
      <div id="use-cases">
        <UseCases />
      </div>
      <div id="team">
        <Team />
      </div>
      <Footer />
    </div>
  )
}

export default App
