import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Bright Smile Dental Clinic",
  description: "Contact Bright Smile Dental Clinic to schedule your appointment. We're here to help with all your dental care needs.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to schedule your appointment or ask any questions.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-700 text-lg leading-relaxed">
            We're here to help you with all your dental care needs. Contact us today to schedule 
            your appointment or to learn more about our services. Our friendly staff is ready to 
            assist you and answer any questions you may have.
          </p>
        </div>
      </div>
    </div>
  );
}
