'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-red-600" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Something went wrong!
        </h1>

        <p className="text-gray-600 mb-8">
          We're sorry, but something unexpected happened. Please try again or
          contact us if the problem persists.
        </p>

        <div className="space-y-4">
          <Button
            onClick={reset}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>

          <Button
            variant="outline"
            className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
            onClick={() => (window.location.href = '/')}>
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </Button>
        </div>

        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-500">
            Error ID: {error.digest || 'Unknown'}
          </p>
        </div>
      </div>
    </div>
  )
}
