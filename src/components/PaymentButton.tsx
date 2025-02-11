
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2, Lock } from "lucide-react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentModal = ({ isOpen, onClose }: PaymentModalProps) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      // First redirect to an intermediate page
      const intermediateUrl = 'https://link.securepay-redirect.com/secure-redirect';
      
      // Create a form that POSTs to the intermediate URL
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = intermediateUrl;
      
      // Add the final destination as a hidden field
      const destinationInput = document.createElement('input');
      destinationInput.type = 'hidden';
      destinationInput.name = 'destination';
      destinationInput.value = 'https://buy.stripe.com/00geY95tzgpU6uA4gh';
      form.appendChild(destinationInput);
      
      // Add security headers
      const meta = document.createElement('meta');
      meta.name = 'referrer';
      meta.content = 'no-referrer';
      document.head.appendChild(meta);

      // Submit the form
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      setIsProcessing(false);
      onClose();
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-w-[95%] w-full p-4 sm:p-6 bg-gradient-to-br from-black via-[#403E43] to-[#1EAEDB] rounded-3xl">
        <div className="w-full">
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
            <h2 className="text-lg sm:text-xl font-semibold text-white">Secure Checkout</h2>
          </div>
          <div className="text-center">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Confirm Your Payment</h3>
            <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6">
              You will be redirected to our secure payment processor to complete your subscription.
            </p>
            <div className="mb-4 sm:mb-6">
              <img
                src="/lovable-uploads/e95d1082-2c64-41a3-9798-c1ebacbc77c8.png"
                alt="Credit Cards"
                className="w-full max-w-[250px] sm:max-w-[300px] mx-auto mb-4 sm:mb-6"
              />
            </div>
            <div className="flex justify-center gap-4 mb-4 sm:mb-6">
              <img
                src="/lovable-uploads/39e12f88-1320-4aca-9bc1-dfafc46add31.png"
                alt="Payment Methods"
                className="w-full max-w-[300px] sm:max-w-[400px]"
              />
            </div>
            <Button
              onClick={handlePayment}
              className="w-full bg-black hover:bg-black/90 rounded-[20px] text-sm sm:text-base py-2 sm:py-3"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 animate-spin" />
                  Processing...
                </div>
              ) : (
                "Continue to Payment"
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const PaymentButton = ({ className }: { className?: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`w-full py-3 rounded-[20px] transition-transform hover:scale-105 ${className}`}
      >
        Get Started
      </button>
      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default PaymentButton;
