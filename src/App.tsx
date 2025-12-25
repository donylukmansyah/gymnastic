import Layout from './components/Layout'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WhyChooseUs } from './components/WhyChooseUs'
import { BodyTransformation } from './components/BodyTransformation'
import { MembershipPricing } from './components/MembershipPricing'
import { Testimonials } from './components/Testimonials'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <BodyTransformation />
      <MembershipPricing />
      <Testimonials />
      <CTA />
      <Footer />
    </Layout>
  )
}

export default App