
import { Monitor, Home, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-4 left-4 right-4 z-50 bg-black/90 backdrop-blur-md border-2 border-primary/50 rounded-full shadow-[0_0_15px_rgba(126,211,33,0.3)] transition-shadow duration-500 hover:shadow-[0_0_25px_rgba(126,211,33,0.5)] animate-border-glow">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ml-4">
            <img 
              src="/lovable-uploads/4f38d6c5-c0e1-496d-9aaf-9c4b5fcc7ef1.png" 
              alt="KickItv Logo" 
              className="h-8"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-white hover:text-primary transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link 
              to="/#devices" 
              className="flex items-center gap-2 text-white hover:text-primary transition-colors"
            >
              <Monitor className="w-4 h-4" />
              <span>Devices</span>
            </Link>
            <Link 
              to="/#pricing" 
              className="flex items-center gap-2 text-white hover:text-primary transition-colors"
            >
              <CreditCard className="w-4 h-4" />
              <span>Pricing</span>
            </Link>
          </nav>

          <div className="md:hidden">
            <button className="text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
