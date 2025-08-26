export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
            <span className="text-white font-bold text-sm">D</span>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Loading Bright Smile
        </h2>
        <p className="text-gray-600">
          Please wait while we prepare your experience...
        </p>
      </div>
    </div>
  )
}
