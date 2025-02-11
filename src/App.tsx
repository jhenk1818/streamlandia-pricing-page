
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GenerateLogins from "./pages/GenerateLogins";
import { Chatbot } from "./components/Chatbot";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/generate-logins" element={<GenerateLogins />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
        <Chatbot />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
