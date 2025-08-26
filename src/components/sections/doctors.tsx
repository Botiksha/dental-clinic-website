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
import { Badge } from '@/components/ui/badge'
import { Star, MapPin, Calendar, ArrowRight } from 'lucide-react'

const doctors = [
  {
    name: 'Dr. Sarah Johnson',
    specialty: 'General Dentistry',
    experience: '15+ years',
    education: 'DDS, Harvard School of Dental Medicine',
    rating: 4.9,
    reviews: 127,
    image: '👩‍⚕️',
    description:
      'Specializes in comprehensive dental care and preventive treatments.',
    specialties: ['General Dentistry', 'Preventive Care', 'Restorative'],
    location: 'Main Office',
  },
  {
    name: 'Dr. Michael Chen',
    specialty: 'Orthodontics',
    experience: '12+ years',
    education: 'DDS, Orthodontics, UCLA',
    rating: 4.8,
    reviews: 89,
    image: '👨‍⚕️',
    description:
      'Expert in modern orthodontic solutions including Invisalign and traditional braces.',
    specialties: ['Orthodontics', 'Invisalign', 'Early Treatment'],
    location: 'Main Office',
  },
  {
    name: 'Dr. Emily Rodriguez',
    specialty: 'Cosmetic Dentistry',
    experience: '10+ years',
    education: 'DDS, Cosmetic Dentistry, NYU',
    rating: 4.9,
    reviews: 156,
    image: '👩‍⚕️',
    description:
      'Dedicated to creating beautiful smiles through advanced cosmetic procedures.',
    specialties: ['Cosmetic Dentistry', 'Veneers', 'Teeth Whitening'],
    location: 'Main Office',
  },
  {
    name: 'Dr. David Thompson',
    specialty: 'Oral Surgery',
    experience: '18+ years',
    education: 'DDS, Oral Surgery, Johns Hopkins',
    rating: 4.7,
    reviews: 73,
    image: '👨‍⚕️',
    description:
      'Specializes in complex oral surgeries and emergency dental procedures.',
    specialties: ['Oral Surgery', 'Emergency Care', 'Implants'],
    location: 'Main Office',
  },
]

export function Doctors() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-600 to-blue-500 rounded-full mb-6">
            <div className="text-2xl">👨‍⚕️</div>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our highly qualified and experienced dental professionals are
            committed to providing you with the highest quality dental care.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}>
              <Card className="h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center text-5xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg border-4 border-white">
                    {doctor.image}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {doctor.name}
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-semibold text-lg">
                    {doctor.specialty}
                  </CardDescription>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900">
                      {doctor.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({doctor.reviews} reviews)
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="text-sm text-gray-600">
                      <p className="font-medium">Experience:</p>
                      <p>{doctor.experience}</p>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p className="font-medium">Education:</p>
                      <p>{doctor.education}</p>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p className="font-medium">Location:</p>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{doctor.location}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-900">
                        Specialties:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {doctor.specialties.map((specialty) => (
                          <Badge
                            key={specialty}
                            variant="secondary"
                            className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {doctor.description}
                    </p>

                    <div className="pt-4 space-y-2">
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        size="sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Appointment
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                        size="sm">
                        View Profile
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Meet Our Team?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Schedule a consultation with one of our experienced dental
              professionals and take the first step towards a healthier, more
              beautiful smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100">
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600">
                Meet All Doctors
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
