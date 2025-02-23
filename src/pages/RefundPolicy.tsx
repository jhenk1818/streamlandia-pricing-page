
import { Mail } from "lucide-react";
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
    </div>
  );
};

export default RefundPolicy;
