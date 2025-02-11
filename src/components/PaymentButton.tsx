
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2, Lock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentModal = ({ isOpen, onClose }: PaymentModalProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showIntermediate, setShowIntermediate] = useState(false);
  const { toast } = useToast();

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setShowIntermediate(true);
      setIsProcessing(false);
    }, 1500);
  };

  const handleRedirect = () => {
    const form = document.createElement('form');
    form.method = 'GET';
    form.action = 'https://buy.stripe.com/00geY95tzgpU6uA4gh';
    form.target = '_blank';
    form.rel = 'noopener noreferrer';

    // Set a flag in localStorage when redirecting to Stripe
    localStorage.setItem('stripeRedirectTime', new Date().toISOString());

    const meta = document.createElement('meta');
    meta.name = 'referrer';
    meta.content = 'no-referrer';
    document.head.appendChild(meta);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    onClose();
  };

  // Check if user is returning from Stripe
  useEffect(() => {
    const checkStripeReturn = () => {
      const stripeRedirectTime = localStorage.getItem('stripeRedirectTime');
      
      if (stripeRedirectTime) {
        // Check if the URL contains success parameters
        const urlParams = new URLSearchParams(window.location.search);
        const isSuccess = urlParams.get('success');
        
        if (isSuccess === 'true') {
          toast({
            title: "Thank you for your purchase!",
            description: "Your payment was successful.",
          });
          // Clear the flag
          localStorage.removeItem('stripeRedirectTime');
        }
      }
    };

    // Check when component mounts
    checkStripeReturn();

    // Also check when window gains focus (user returns from Stripe tab)
    const handleFocus = () => {
      checkStripeReturn();
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [toast]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-w-[95%] w-full p-4 sm:p-6 bg-gradient-to-br from-black via-[#403E43] to-[#1EAEDB] rounded-3xl">
        <div className="w-full">
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
            <h2 className="text-lg sm:text-xl font-semibold text-white">Secure Checkout</h2>
          </div>
          {!showIntermediate ? (
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
          ) : (
            <div className="text-center">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Ready to Proceed</h3>
              <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6">
                You will now be redirected to our secure payment page.
              </p>
              <Button 
                onClick={handleRedirect} 
                className="w-full rounded-[20px] text-sm sm:text-base py-2 sm:py-3"
              >
                Proceed to Payment
              </Button>
            </div>
          )}
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
