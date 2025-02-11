
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, CheckCircle2 } from "lucide-react";

interface LoginDetails {
  username: string;
  password: string;
  expiryDate: string;
}

const GenerateLogins = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginDetails, setLoginDetails] = useState<LoginDetails | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // This is where we'll integrate with your IPTV API
      // For now, we'll simulate the API response
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulated response - will be replaced with actual API call
      const mockResponse = {
        username: "user_" + Math.random().toString(36).substr(2, 9),
        password: Math.random().toString(36).substr(2, 9),
        expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      };
      
      setLoginDetails(mockResponse);
      
      toast({
        title: "Success!",
        description: "Your IPTV login credentials have been generated.",
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
    <div className="min-h-screen bg-black">
      <div className="container max-w-xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Generate My IPTV Logins</h1>
          <p className="text-white/80">
            Enter the email address associated with your subscription to access your IPTV credentials.
          </p>
        </div>

        <div className="bg-[#221F26] rounded-xl border border-white/10 p-6 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                  Verifying...
                </>
              ) : (
                "Generate Logins"
              )}
            </Button>
          </form>

          {loginDetails && (
            <div className="mt-6 p-4 rounded-lg bg-black/30 border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <h3 className="text-white font-medium">Your IPTV Login Details</h3>
              </div>
              <div className="space-y-2">
                <div>
                  <label className="text-sm text-white/60">Username</label>
                  <p className="text-white font-mono bg-black/50 p-2 rounded">{loginDetails.username}</p>
                </div>
                <div>
                  <label className="text-sm text-white/60">Password</label>
                  <p className="text-white font-mono bg-black/50 p-2 rounded">{loginDetails.password}</p>
                </div>
                <div>
                  <label className="text-sm text-white/60">Expiry Date</label>
                  <p className="text-white font-mono bg-black/50 p-2 rounded">{loginDetails.expiryDate}</p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-4 text-sm text-white/60">
            <p>Note: Keep your login credentials safe. Do not share them with others.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateLogins;
