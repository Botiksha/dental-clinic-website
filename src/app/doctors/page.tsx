import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Doctors - Bright Smile Dental Clinic",
  description: "Meet our experienced team of dental professionals at Bright Smile Dental Clinic. Our doctors are committed to providing exceptional care and personalized treatment.",
};

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Doctors</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our experienced team of dental professionals dedicated to your oral health.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-700 text-lg leading-relaxed">
            Our team of highly qualified and experienced dental professionals is committed to 
            providing you with the highest quality dental care in a comfortable and welcoming 
            environment. Each member of our team brings unique expertise and a passion for 
            helping patients achieve their best smile.
          </p>
        </div>
      </div>
    </div>
  );
}
