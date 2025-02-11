
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const GenerateLogins = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // This is where you would integrate with your third-party service
      // For now, we'll simulate a response
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Login Details Generated",
        description: "Your IPTV login credentials have been sent to your email.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to verify subscription. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container max-w-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Generate My IPTV Logins</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="text-gray-600 mb-6">
          Enter the email address associated with your subscription to generate your IPTV login credentials.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verifying...
              </>
            ) : (
              "Generate Logins"
            )}
          </Button>
        </form>

        <div className="mt-6 text-sm text-gray-500">
          <p>Note: Your login credentials will be sent to the email address associated with your subscription.</p>
        </div>
      </div>
    </div>
  );
};

export default GenerateLogins;
