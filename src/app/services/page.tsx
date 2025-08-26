import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Services - Bright Smile Dental Clinic",
  description: "Comprehensive dental services including general dentistry, cosmetic dentistry, orthodontics, and emergency care. Book your appointment today.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive dental care services to meet all your oral health needs.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-700 text-lg leading-relaxed">
            At Bright Smile Dental Clinic, we offer a wide range of dental services to help you 
            maintain optimal oral health and achieve the smile you've always wanted. From routine 
            checkups to advanced cosmetic procedures, our experienced team is here to serve you.
          </p>
        </div>
      </div>
    </div>
  );
}
