
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const ZapierWebhook = () => {
  const [webhookUrl, setWebhookUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleTrigger = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!webhookUrl) {
      toast({
        title: "Error",
        description: "Please enter your Zapier webhook URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log("Triggering Zapier webhook:", webhookUrl);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Handle CORS
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          event_type: "test_trigger",
          test_data: {
            customer_email: "test@example.com",
            subscription_type: "premium",
            amount: 19.99
          }
        }),
      });

      toast({
        title: "Request Sent",
        description: "The request was sent to Zapier. Please check your Zap's history to confirm it was triggered.",
      });
    } catch (error) {
      console.error("Error triggering webhook:", error);
      toast({
        title: "Error",
        description: "Failed to trigger the Zapier webhook. Please check the URL and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#221F26] rounded-xl border border-white/10 p-6 space-y-4">
      <h3 className="text-xl font-semibold text-white">Zapier Webhook Configuration</h3>
      <p className="text-white/80 text-sm">
        Configure your Zapier webhook to automate user creation in your IPTV system when a Stripe payment is received.
      </p>
      
      <form onSubmit={handleTrigger} className="space-y-4">
        <div>
          <label htmlFor="webhook" className="block text-sm font-medium text-white/90 mb-1">
            Zapier Webhook URL
          </label>
          <Input
            id="webhook"
            type="url"
            placeholder="https://hooks.zapier.com/..."
            value={webhookUrl}
            onChange={(e) => setWebhookUrl(e.target.value)}
            className="w-full bg-black/50 border-white/10 text-white"
          />
        </div>
        
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Testing Webhook...
            </>
          ) : (
            "Test Webhook"
          )}
        </Button>
      </form>

      <div className="mt-4 text-sm text-white/60">
        <p>After testing, make sure to:</p>
        <ol className="list-decimal list-inside space-y-1 mt-2">
          <li>Configure the Stripe trigger in Zapier</li>
          <li>Set up your IPTV API action in Zapier</li>
          <li>Test the complete automation flow</li>
        </ol>
      </div>
    </div>
  );
};

export default ZapierWebhook;
