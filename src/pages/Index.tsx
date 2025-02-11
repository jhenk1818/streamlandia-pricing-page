import { CreditCard, PlayCircle, Tv, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
            <span className="relative inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-black via-[#1EAEDB] to-black opacity-70"
              ></div>
              <div 
                className="absolute inset-0"
                style={{
                  padding: '2px',
                  background: 'linear-gradient(90deg, #000, #1EAEDB, #000)',
                  backgroundSize: '200% 100%',
                  animation: 'gradient 3s ease infinite',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  borderRadius: '9999px',
                }}
              >
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, #000, #1EAEDB, #000)',
                    backgroundSize: '200% 100%',
                    animation: 'snake 4s linear infinite',
                    borderRadius: '9999px',
                  }}
                ></div>
              </div>
              <span className="relative z-10 text-white">Works with all devices</span>
            </span>

            <div className="flex justify-center items-center mb-4">
              <img 
                src="/lovable-uploads/9a4b3b59-98c2-4039-9ef2-f1a80f8b9c93.png" 
                alt="Platform Logos" 
                className="h-8 object-contain"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Unlimited Entertainment
              <br /> at Your Fingertips
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Stream your favorite shows, movies, and exclusive content. Start watching today with our risk-free trial.
            </p>
            <button 
              className="relative overflow-hidden text-white px-12 py-4 rounded-full font-medium transition-all hover:scale-105 mb-8 w-64 group"
            >
              <div 
                className="absolute inset-0 bg-gradient-to-r from-black via-[#1EAEDB] to-black opacity-70"
              ></div>
              <div 
                className="absolute inset-0"
                style={{
                  padding: '2px',
                  background: 'linear-gradient(90deg, #000, #1EAEDB, #000)',
                  backgroundSize: '200% 100%',
                  animation: 'gradient 3s ease infinite',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  borderRadius: '9999px',
                  transform: 'rotate(0deg)',
                }}
              >
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, #000, #1EAEDB, #000)',
                    backgroundSize: '200% 100%',
                    animation: 'snake 4s linear infinite',
                    borderRadius: '9999px',
                  }}
                ></div>
              </div>
              <span className="relative z-10">Discover Plans</span>
            </button>

            <div className="flex justify-center items-center gap-4">
              <div className="w-32 h-32">
                <img 
                  src="/lovable-uploads/c677c336-9244-464b-9bd2-56be914a50cc.png" 
                  alt="Star Rating" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-medium text-lg">10,000+ Happy Users</span>
            </div>
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
            <div className="p-8 text-center rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all backdrop-blur-md bg-gradient-to-br from-black/40 via-[#403E43]/40 to-[#1EAEDB]/20">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                <PlayCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Watch Anywhere</h3>
              <p className="text-white/80">Stream on your phone, tablet, laptop, and TV without paying more.</p>
            </div>
            <div className="p-8 text-center rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all backdrop-blur-md bg-gradient-to-br from-black/40 via-[#403E43]/40 to-[#1EAEDB]/20">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                <Tv className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">4K Quality</h3>
              <p className="text-white/80">Enjoy crystal clear quality with 4K Ultra HD streaming.</p>
            </div>
            <div className="p-8 text-center rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all backdrop-blur-md bg-gradient-to-br from-black/40 via-[#403E43]/40 to-[#1EAEDB]/20">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Cancel Anytime</h3>
              <p className="text-white/80">No long-term contracts. No commitments. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/95 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Anyshow, Anytime
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Join our community of content creators sharing their amazing stories. 
                Experience a world of unlimited entertainment at your fingertips.
              </p>
              <p className="text-white/80 text-lg mb-8">
                Whether you're into action, drama, comedy, or documentaries, 
                find your perfect match in our vast collection of shows and movies.
              </p>
              <button 
                className="relative overflow-hidden text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105 group"
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-black via-[#1EAEDB] to-black opacity-70"
                ></div>
                <div 
                  className="absolute inset-0"
                  style={{
                    padding: '2px',
                    background: 'linear-gradient(90deg, #000, #1EAEDB, #000)',
                    backgroundSize: '200% 100%',
                    animation: 'gradient 3s ease infinite',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    borderRadius: '9999px',
                  }}
                >
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(90deg, #000, #1EAEDB, #000)',
                      backgroundSize: '200% 100%',
                      animation: 'snake 4s linear infinite',
                      borderRadius: '9999px',
                    }}
                  ></div>
                </div>
                <span className="relative z-10">Browse Collection</span>
              </button>
            </div>

            <div className="relative h-[600px] overflow-hidden rounded-xl">
              <div className="auto-scroll-horizontal flex gap-6">
                {[
                  "/lovable-uploads/2f9cded1-7111-45fe-836f-494ff689d4ce.png",
                  "/lovable-uploads/4ca9e7dd-034b-4bf2-a91e-67fef2437351.png",
                  "/lovable-uploads/1ccf077f-c2a0-4bc1-b8d5-f0c8080e7316.png",
                  "/lovable-uploads/5fb4ef41-cb8a-49c7-84b8-8328b0fd0511.png",
                  "/lovable-uploads/eb8d75c5-7465-4b73-9d1a-d02e35f9ce67.png",
                  "/lovable-uploads/6581727c-e3dd-4779-bb48-d8bb3895ee1f.png",
                  // Duplicate images for seamless loop
                  "/lovable-uploads/2f9cded1-7111-45fe-836f-494ff689d4ce.png",
                  "/lovable-uploads/4ca9e7dd-034b-4bf2-a91e-67fef2437351.png",
                  "/lovable-uploads/1ccf077f-c2a0-4bc1-b8d5-f0c8080e7316.png",
                  "/lovable-uploads/5fb4ef41-cb8a-49c7-84b8-8328b0fd0511.png",
                  "/lovable-uploads/eb8d75c5-7465-4b73-9d1a-d02e35f9ce67.png",
                  "/lovable-uploads/6581727c-e3dd-4779-bb48-d8bb3895ee1f.png"
                ].map((image, index) => (
                  <div key={index} className="flex flex-col gap-4 shrink-0">
                    {[0, 1, 2].map((offset) => {
                      const imageIndex = (index + offset) % 6;
                      const imageSrc = [
                        "/lovable-uploads/2f9cded1-7111-45fe-836f-494ff689d4ce.png",
                        "/lovable-uploads/4ca9e7dd-034b-4bf2-a91e-67fef2437351.png",
                        "/lovable-uploads/1ccf077f-c2a0-4bc1-b8d5-f0c8080e7316.png",
                        "/lovable-uploads/5fb4ef41-cb8a-49c7-84b8-8328b0fd0511.png",
                        "/lovable-uploads/eb8d75c5-7465-4b73-9d1a-d02e35f9ce67.png",
                        "/lovable-uploads/6581727c-e3dd-4779-bb48-d8bb3895ee1f.png"
                      ][imageIndex];
                      return (
                        <div key={offset} className="w-[300px] h-[180px]">
                          <img
                            src={imageSrc}
                            alt={`Content ${imageIndex + 1}`}
                            className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/95 to-transparent z-10"></div>
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/95 to-transparent z-10"></div>
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
