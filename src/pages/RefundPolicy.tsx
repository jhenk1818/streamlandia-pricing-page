
import { Mail, Headphones } from "lucide-react";
import Header from "@/components/Header";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Refund Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-primary mb-4">7 Days Money Back Guarantee</h2>
            
            <p className="text-white/80 mb-6">
              At domain, we want to ensure that you are 100% happy with our service. If you have any technical queries, 
              do not hesitate to contact us. Our tech team will not leave your side until you're watching TV! However, 
              if you feel the service you purchased are not the best fit for your requirements and you attempted to resolve 
              issues with our support staff, we want to make things right.
            </p>

            <p className="text-white/80 mb-6">
              Although we'd love to know where things went wrong, or how we can improve, follow the steps below for full 
              refund within 7 days of your date purchase. If the 7 days has been passed and you have a problem you can 
              contact at any time via our WhatsApp or via Email to fix your problem.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Requesting a Refund Steps:</h3>
            <ul className="list-disc pl-6 text-white/80 space-y-2 mb-8">
              <li>Contact us via WhatsApp or via our support email.</li>
              <li>Use the same email address you use to buy our services.</li>
              <li>Include your invoice number</li>
            </ul>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Need Help?</h4>
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="w-5 h-5" />
                <a href="mailto:contact@pioneerstv.com" className="hover:text-primary transition-colors">
                  contact@pioneerstv.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#1A1F2C] py-16 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/73f47615-a95f-43b5-ab17-4035a79eed56.png"
                alt="Pioneers TV Logo"
                className="w-40 h-auto"
              />
              <p className="text-white/70 text-sm max-w-xs">
                Experience unlimited entertainment at your fingertips. Stream your favorite shows, movies, and exclusive content anytime, anywhere.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">
                  <Headphones className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#/refund-policy" className="text-white/70 hover:text-primary transition-colors text-sm">Refund Policy</a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">FAQ</a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white/70">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:contact@pioneerstv.com" className="text-sm hover:text-primary transition-colors">
                    contact@pioneerstv.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Headphones className="w-4 h-4" />
                  <span className="text-sm">24/7 Support Available</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/70 text-sm">
                © 2024 Pioneers TV. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <img 
                  src="/lovable-uploads/6f69184e-d161-4eaa-a3db-b0d0abe59996.png"
                  alt="Payment Methods"
                  className="h-6 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RefundPolicy;
