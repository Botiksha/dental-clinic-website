'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Dr. Johnson and her team are absolutely amazing! They made my dental experience comfortable and pain-free. My smile has never looked better!',
    service: 'Cosmetic Dentistry',
    image: '👩',
  },
  {
    id: 2,
    name: 'Michael R.',
    rating: 5,
    text: 'The staff here is incredibly professional and caring. They took the time to explain everything and made sure I was comfortable throughout the entire process.',
    service: 'General Dentistry',
    image: '👨',
  },
  {
    id: 3,
    name: 'Emily T.',
    rating: 5,
    text: "I was terrified of going to the dentist, but Dr. Chen and his team completely changed that. They're gentle, patient, and truly care about their patients.",
    service: 'Orthodontics',
    image: '👩',
  },
  {
    id: 4,
    name: 'David L.',
    rating: 5,
    text: 'Outstanding service! The modern technology they use makes everything so much more comfortable. Highly recommend Bright Smile Dental Clinic!',
    service: 'Emergency Care',
    image: '👨',
  },
  {
    id: 5,
    name: 'Jennifer K.',
    rating: 5,
    text: "The best dental experience I've ever had. Dr. Rodriguez transformed my smile and boosted my confidence. The entire team is wonderful!",
    service: 'Cosmetic Dentistry',
    image: '👩',
  },
  {
    id: 6,
    name: 'Robert P.',
    rating: 5,
    text: "Professional, clean, and caring environment. They made my root canal procedure as comfortable as possible. I'm grateful for their expertise.",
    service: 'General Dentistry',
    image: '👨',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + testimonials.length) % testimonials.length
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our patients have to
            say about their experience at Bright Smile Dental Clinic.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-96 overflow-hidden rounded-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="absolute w-full h-full">
                <Card className="h-full bg-white shadow-xl">
                  <CardContent className="h-full flex flex-col justify-center p-8">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center text-2xl">
                        {testimonials[currentIndex].image}
                      </div>

                      <div className="flex justify-center mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current"
                            />
                          )
                        )}
                      </div>

                      <Quote className="w-8 h-8 text-blue-200 mx-auto mb-4" />

                      <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                        "{testimonials[currentIndex].text}"
                      </blockquote>

                      <div className="space-y-2">
                        <p className="font-semibold text-gray-900">
                          {testimonials[currentIndex].name}
                        </p>
                        <p className="text-sm text-blue-600">
                          {testimonials[currentIndex].service}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50"
            onClick={() => paginate(-1)}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50"
            onClick={() => paginate(1)}>
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
            <div className="text-gray-600">Happy Patients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Years of Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
