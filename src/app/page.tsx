import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Doctors } from '@/components/sections/doctors'
import { Testimonials } from '@/components/sections/testimonials'
import { ContactForm } from '@/components/sections/contact-form'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Doctors />
      <Testimonials />
      <ContactForm />
    </div>
  )
}
