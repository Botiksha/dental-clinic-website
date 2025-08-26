'use client'

import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Sparkles, Braces, Shield, Heart, Zap, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'General Dentistry',
    description:
      'Comprehensive dental care including cleanings, fillings, and preventive treatments.',
    features: [
      'Dental Cleanings',
      'Cavity Fillings',
      'Root Canals',
      'Extractions',
    ],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Sparkles,
    title: 'Cosmetic Dentistry',
    description:
      'Transform your smile with advanced cosmetic dental procedures.',
    features: [
      'Teeth Whitening',
      'Veneers',
      'Dental Bonding',
      'Smile Makeovers',
    ],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Braces,
    title: 'Orthodontics',
    description: 'Straighten your teeth with modern orthodontic solutions.',
    features: [
      'Traditional Braces',
      'Invisalign',
      'Retainers',
      'Early Treatment',
    ],
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Shield,
    title: 'Preventive Care',
    description:
      'Protect your oral health with comprehensive preventive treatments.',
    features: ['Dental Exams', 'X-Rays', 'Sealants', 'Fluoride Treatment'],
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Heart,
    title: 'Emergency Care',
    description: '24/7 emergency dental care when you need it most.',
    features: ['Tooth Pain', 'Broken Teeth', 'Lost Fillings', 'Dental Trauma'],
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Zap,
    title: 'Advanced Technology',
    description:
      'State-of-the-art dental technology for precise and comfortable treatment.',
    features: ['Digital X-Rays', '3D Imaging', 'Laser Dentistry', 'CAD/CAM'],
    color: 'from-orange-500 to-orange-600',
  },
]

export function Services() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full mb-6">
            <div className="text-2xl">🦷</div>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Our Dental Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive dental care services to meet all your oral health
            needs. From routine checkups to advanced cosmetic procedures.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}>
              <Card className="h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 font-semibold py-3">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            <div className="relative z-10">
              <div className="text-4xl mb-6">✨</div>
              <h3 className="text-3xl font-bold mb-6">
                Ready to Transform Your Smile?
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Schedule your consultation today and take the first step towards
                a healthier, more beautiful smile.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Book Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 text-lg transition-all duration-300">
                  View All Services
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
