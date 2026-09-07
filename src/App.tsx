import Header from './sections/Header'
import Hero from './sections/Hero'
import ProblemStatement from './sections/ProblemStatement'
import Features from './sections/Features'
import MoneyLeak from './sections/MoneyLeak'
import CtaBand from './sections/CtaBand'
import FinalCta from './sections/FinalCta'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ProblemStatement />
        <Features />
        <MoneyLeak />
        <CtaBand />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
