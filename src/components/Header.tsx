
import { Monitor, Home, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-4 left-4 right-4 z-50 bg-black/90 backdrop-blur-md border border-white/10 rounded-full animate-border-glow">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ml-4">
            <img 
              src="/lovable-uploads/293ee0b8-86b2-47bb-a202-64407806b5fc.png" 
              alt="Pioneers TV Logo" 
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
