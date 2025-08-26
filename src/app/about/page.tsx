import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Bright Smile Dental Clinic",
  description: "Learn about Bright Smile Dental Clinic's history, mission, and commitment to providing exceptional dental care with modern technology and compassionate service.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Bright Smile</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to providing exceptional dental care with modern technology and compassionate service.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to Bright Smile Dental Clinic, where we combine cutting-edge dental technology 
            with a warm, caring approach to dental health. Our mission is to help you achieve and 
            maintain a healthy, beautiful smile that you can be proud of.
          </p>
        </div>
      </div>
    </div>
  );
}
