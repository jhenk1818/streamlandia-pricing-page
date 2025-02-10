
import { CreditCard, PlayCircle, Tv, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Basic",
      price: isAnnual ? 99 : 9.99,
      features: [
        "HD streaming",
        "Watch on 1 device",
        "Cancel anytime",
        "First month free",
      ],
      color: "bg-white",
      hover: "hover:border-primary",
    },
    {
      name: "Premium",
      price: isAnnual ? 199 : 19.99,
      features: [
        "4K Ultra HD",
        "Watch on 4 devices",
        "Cancel anytime",
        "First month free",
        "Offline downloads",
        "No ads",
      ],
      color: "bg-primary",
      textColor: "text-white",
      hover: "hover:bg-primary/90",
      popular: true,
    },
    {
      name: "Family",
      price: isAnnual ? 299 : 29.99,
      features: [
        "4K Ultra HD",
        "Watch on 6 devices",
        "Cancel anytime",
        "First month free",
        "Offline downloads",
        "No ads",
        "Family sharing",
      ],
      color: "bg-white",
      hover: "hover:border-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-white">
      <div className="relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://pioneerstv.com/wp-content/uploads/2024/01/hero.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '85vh'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center animate-fade-up">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary backdrop-blur-sm">
              Stream Smarter
            </span>
            
            <div className="flex justify-center items-center mb-8">
              <div className="w-32 h-32">
                <img 
                  src="/lovable-uploads/c677c336-9244-464b-9bd2-56be914a50cc.png" 
                  alt="Star Rating" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Unlimited Entertainment
              <br /> at Your Fingertips
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Stream your favorite shows, movies, and exclusive content. Start watching today with our risk-free trial.
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-medium transition-all hover:bg-primary/90 hover:scale-105">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stream Like Never Before
            </h2>
            <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary backdrop-blur-sm">
              Why Choose Us
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-up">
            <div className="p-8 text-center glass rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all backdrop-blur-md bg-white/5">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                <PlayCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Watch Anywhere</h3>
              <p className="text-white/80">Stream on your phone, tablet, laptop, and TV without paying more.</p>
            </div>
            <div className="p-8 text-center glass rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all backdrop-blur-md bg-white/5">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                <Tv className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">4K Quality</h3>
              <p className="text-white/80">Enjoy crystal clear quality with 4K Ultra HD streaming.</p>
            </div>
            <div className="p-8 text-center glass rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all backdrop-blur-md bg-white/5">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Cancel Anytime</h3>
              <p className="text-white/80">No long-term contracts. No commitments. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Simple Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-8">
            Select the perfect plan for your entertainment needs
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${!isAnnual ? 'text-primary font-medium' : 'text-muted'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors ${
                isAnnual ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <div
                className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-transform ${
                  isAnnual ? 'right-1' : 'left-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-primary font-medium' : 'text-muted'}`}>Annual</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border transition-all duration-300 animate-fade-up ${
                plan.color
              } ${plan.hover} ${plan.textColor || 'text-gray-900'}`}
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              {plan.popular && (
                <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-white/20 text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-sm opacity-80">/{isAnnual ? 'year' : 'month'}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className={`w-5 h-5 ${plan.textColor || 'text-primary'}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg transition-transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-white text-primary'
                    : 'bg-primary text-white'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
