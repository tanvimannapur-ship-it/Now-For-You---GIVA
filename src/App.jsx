import Nav from './components/Nav'
import Hero from './components/Hero'
import MarqueeBanner from './components/MarqueeBanner'
import TheBrand from './components/TheBrand'
import TheProblem from './components/TheProblem'
import TheInsight from './components/TheInsight'
import NowForYou from './components/NowForYou'
import Roadmap from './components/Roadmap'
import AboutTanvi from './components/AboutTanvi'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '56px' }}>
        <Hero />
        <MarqueeBanner />
        <TheBrand />
        <TheProblem />
        <TheInsight />
        <NowForYou />
        <Roadmap />
        <AboutTanvi />
      </main>
      <Footer />
    </>
  )
}
