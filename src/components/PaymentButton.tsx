
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

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
      <DialogContent className="sm:max-w-md">
        <div className="p-6">
          {!showIntermediate ? (
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Confirm Your Payment</h3>
              <p className="text-gray-600 mb-6">
                You will be redirected to our secure payment processor to complete your subscription.
              </p>
              <Button
                onClick={handlePayment}
                className="w-full"
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
              <h3 className="text-lg font-semibold mb-4">Ready to Proceed</h3>
              <p className="text-gray-600 mb-6">
                You will now be redirected to our secure payment page.
              </p>
              <Button onClick={handleRedirect} className="w-full">
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
        className={`w-full py-3 rounded-lg transition-transform hover:scale-105 ${className}`}
      >
        Get Started
      </button>
      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default PaymentButton;
