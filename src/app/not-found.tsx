import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Search, Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Search className="w-12 h-12 text-blue-600" />
        </div>

        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist. It might have been moved,
          deleted, or you entered the wrong URL.
        </p>

        <div className="space-y-4">
          <Button
            asChild
            className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>

          <Button
            variant="outline"
            className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
            onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">
            Looking for something specific?
          </h3>
          <div className="space-y-2 text-sm">
            <Link
              href="/services"
              className="block text-blue-600 hover:text-blue-800">
              Our Services
            </Link>
            <Link
              href="/doctors"
              className="block text-blue-600 hover:text-blue-800">
              Meet Our Doctors
            </Link>
            <Link
              href="/contact"
              className="block text-blue-600 hover:text-blue-800">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
