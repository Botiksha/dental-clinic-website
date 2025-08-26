'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone, Calendar, ArrowRight, Star } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20"></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20"
          style={{ animationDelay: '2s' }}></div>
        <div
          className="absolute -bottom-8 left-40 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20"
          style={{ animationDelay: '4s' }}></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-200 to-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center space-x-2 text-blue-600 font-semibold">
              <Star className="w-5 h-5 fill-current" />
              <span>Trusted by 10,000+ Patients</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Perfect Smile
              <span className="block text-blue-600">Starts Here</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-gray-600 leading-relaxed">
              Experience exceptional dental care with modern technology and
              compassionate service. Our team of experts is dedicated to giving
              you the smile you deserve.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Same Day Emergency Care</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Modern Technology</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105">
              <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 rounded-2xl p-8 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                <div className="relative z-10">
                  <div className="text-6xl mb-6 animate-bounce">🦷</div>
                  <h3 className="text-2xl font-bold mb-3">Professional Care</h3>
                  <p className="text-blue-100 text-lg">
                    State-of-the-art dental technology
                  </p>
                  <div className="mt-6 flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                    <div
                      className="w-2 h-2 bg-white/60 rounded-full animate-pulse"
                      style={{ animationDelay: '0.2s' }}></div>
                    <div
                      className="w-2 h-2 bg-white/60 rounded-full animate-pulse"
                      style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Floating Elements */}
            <motion.div
              animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -left-6 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full p-5 shadow-xl">
              <div
                className="text-3xl animate-spin"
                style={{ animationDuration: '3s' }}>
                ⭐
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full p-5 shadow-xl">
              <div className="text-3xl animate-pulse">💎</div>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
              }}
              className="absolute top-1/2 -right-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full p-4 shadow-lg">
              <div className="text-2xl">🦷</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
