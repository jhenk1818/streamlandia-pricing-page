
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
  const [showIntermediate, setShowIntermediate] = useState(false);

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

    const meta = document.createElement('meta');
    meta.name = 'referrer';
    meta.content = 'no-referrer';
    document.head.appendChild(meta);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-black via-[#403E43] to-[#1EAEDB]">
        <div className="p-6">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Lock className="w-5 h-5 text-green-500" />
            <h2 className="text-xl font-semibold text-white">Secure Checkout</h2>
          </div>
          {!showIntermediate ? (
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-white">Confirm Your Payment</h3>
              <p className="text-white/80 mb-6">
                You will be redirected to our secure payment processor to complete your subscription.
              </p>
              <div className="mb-6">
                <img
                  src="/lovable-uploads/e95d1082-2c64-41a3-9798-c1ebacbc77c8.png"
                  alt="Credit Cards"
                  className="w-full max-w-[300px] mx-auto mb-6"
                />
              </div>
              <div className="flex justify-center gap-4 mb-6">
                <img
                  src="/lovable-uploads/39e12f88-1320-4aca-9bc1-dfafc46add31.png"
                  alt="Payment Methods"
                  className="w-full max-w-[400px]"
                />
              </div>
              <Button
                onClick={handlePayment}
                className="w-full bg-black hover:bg-black/90 rounded-[20px]"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Processing...
                  </div>
                ) : (
                  "Continue to Payment"
                )}
              </Button>
            </div>
          ) : (
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-white">Ready to Proceed</h3>
              <p className="text-white/80 mb-6">
                You will now be redirected to our secure payment page.
              </p>
              <Button onClick={handleRedirect} className="w-full rounded-[20px]">
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
