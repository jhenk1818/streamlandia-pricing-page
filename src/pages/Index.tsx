import { CreditCard, PlayCircle, Tv, CheckCircle2, Star, UserRound } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Header from "@/components/Header";
import PaymentButton from "@/components/PaymentButton";
import { Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const carouselEndRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowLogo(true);
          } else {
            setShowLogo(false);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (carouselEndRef.current) {
      observer.observe(carouselEndRef.current);
    }

    return () => {
      if (carouselEndRef.current) {
        observer.unobserve(carouselEndRef.current);
      }
    };
  }, []);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
      color: "bg-black",
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
      color: "bg-black",
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
      color: "bg-black",
      hover: "hover:border-primary",
    },
  ];

  const reviews = [
    {
      name: "Sarah Mitchell",
      comment: "The streaming quality is exceptional! I've never experienced such crisp 4K content before.",
      date: "March 15, 2024",
      plan: "Premium"
    },
    {
      name: "James Wilson",
      comment: "Being able to watch on multiple devices is a game-changer for our family. Worth every penny!",
      date: "March 14, 2024",
      plan: "Family"
    },
    {
      name: "Emily Rodriguez",
      comment: "The content library is massive and there's always something new to watch. Highly recommend!",
      date: "March 13, 2024",
      plan: "Premium"
    },
    {
      name: "Michael Chang",
      comment: "Perfect for my needs. The offline downloads feature is super convenient for my commute.",
      date: "March 12, 2024",
      plan: "Basic"
    },
    {
      name: "Lisa Anderson",
      comment: "Customer service is outstanding, and the streaming quality never disappoints.",
      date: "March 11, 2024",
      plan: "Family"
    },
    {
      name: "David Thompson",
      comment: "Easy to use interface and great selection of shows. Exactly what I was looking for!",
      date: "March 10, 2024",
      plan: "Basic"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/lovable-uploads/199f59c2-2889-41de-ae7c-ed253796993b.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '85vh'
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,1) 85%, rgba(0,0,0,1) 100%)'
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
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
              #1 IPTV Provider Worldwide.
              <br />
              Stream your favorite shows, movies, and exclusive content. Start watching today.
            </p>
            <button 
              className="relative overflow-hidden text-white px-12 py-4 rounded-full font-medium transition-all hover:scale-105 mb-4 w-64 group"
              onClick={scrollToPricing}
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
              <span className="relative z-10">Discover Plans</span>
            </button>

            <div className="flex justify-center items-center gap-2 md:gap-4">
              <div className="w-24 md:w-32 h-24 md:h-32">
                <img 
                  src="/lovable-uploads/c677c336-9244-464b-9bd2-56be914a50cc.png" 
                  alt="Star Rating" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-medium text-base md:text-lg">10,000+ Happy Users</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-12 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">Our Partners</h2>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10"></div>
            
            <div className="flex space-x-12 animate-scroll">
              <div className="flex space-x-12 min-w-full">
                {[
                  "/lovable-uploads/b10a0c35-fd06-449d-aea4-6c5fadf5ea53.png",
                  "/lovable-uploads/89bb007c-1f13-45ee-87db-d0b932f43f8a.png",
                  "/lovable-uploads/42f6a867-eca3-4a9f-8b77-648ad3e69a6b.png",
                  "/lovable-uploads/82731197-4770-4d28-8b67-32a63cd99e86.png",
                  "/lovable-uploads/b0d1d466-08f9-4ec0-ae80-59adc02ae8a8.png",
                  "/lovable-uploads/de083d82-479c-4897-a78c-b34bdea316a1.png",
                  "/lovable-uploads/29356aab-3e13-4cd0-9b58-3a80dd75d872.png",
                ].map((logo, index) => (
                  <div key={index} className="flex-shrink-0">
                    <img 
                      src={logo} 
                      alt={`Partner Logo ${index + 1}`} 
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
              <div className="flex space-x-12 min-w-full">
                {[
                  "/lovable-uploads/b10a0c35-fd06-449d-aea4-6c5fadf5ea53.png",
                  "/lovable-uploads/89bb007c-1f13-45ee-87db-d0b932f43f8a.png",
                  "/lovable-uploads/42f6a867-eca3-4a9f-8b77-648ad3e69a6b.png",
                  "/lovable-uploads/82731197-4770-4d28-8b67-32a63cd99e86.png",
                  "/lovable-uploads/b0d1d466-08f9-4ec0-ae80-59adc02ae8a8.png",
                  "/lovable-uploads/de083d82-479c-4897-a78c-b34bdea316a1.png",
                  "/lovable-uploads/29356aab-3e13-4cd0-9b58-3a80dd75d872.png",
                ].map((logo, index) => (
                  <div key={`duplicate-${index}`} className="flex-shrink-0">
                    <img 
                      src={logo} 
                      alt={`Partner Logo ${index + 1}`} 
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
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

          <div className="grid md:grid-cols-3 gap-8 animate-fade-up mb-20">
            <div className="p-8 text-center rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all backdrop-blur-md bg-[#221F26]">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                <PlayCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Watch Anywhere</h3>
              <p className="text-white/80">Stream on your phone, tablet, laptop, and TV without paying more.</p>
            </div>
            <div className="p-8 text-center rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all backdrop-blur-md bg-[#221F26]">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                <Tv className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">4K Quality</h3>
              <p className="text-white/80">Enjoy crystal clear quality with 4K Ultra HD streaming.</p>
            </div>
            <div className="p-8 text-center rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all backdrop-blur-md bg-[#221F26]">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Cancel Anytime</h3>
              <p className="text-white/80">No long-term contracts. No commitments. Cancel anytime.</p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Trending Now
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Join our community of content creators sharing their amazing stories
            </p>
          </div>

          <div className="relative overflow-hidden mb-20">
            <div className="absolute left-0 top-0 bottom-0 w-40 fade-overlay-left z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-40 fade-overlay-right z-10"></div>
            
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
                containScroll: false,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 gap-6 auto-scroll">
                {[
                  "/lovable-uploads/2f9cded1-7111-45fe-836f-494ff689d4ce.png",
                  "/lovable-uploads/4ca9e7dd-034b-4bf2-a91e-67fef2437351.png",
                  "/lovable-uploads/1ccf077f-c2a0-4bc1-b8d5-f0c8080e7316.png",
                  "/lovable-uploads/5fb4ef41-cb8a-49c7-84b8-8328b0fd0511.png",
                  "/lovable-uploads/eb8d75c5-7465-4b73-9d1a-d02e35f9ce67.png",
                  // Duplicate images for seamless loop
                  "/lovable-uploads/2f9cded1-7111-45fe-836f-494ff689d4ce.png",
                  "/lovable-uploads/4ca9e7dd-034b-4bf2-a91e-67fef2437351.png",
                  "/lovable-uploads/1ccf077f-c2a0-4bc1-b8d5-f0c8080e7316.png",
                  "/lovable-uploads/5fb4ef41-cb8a-49c7-84b8-8328b0fd0511.png",
                  "/lovable-uploads/eb8d75c5-7465-4b73-9d1a-d02e35f9ce67.png"
                ].map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/5 basis-1/2 pl-4">
                    <div className="overflow-hidden rounded-xl aspect-[3/4] bg-black">
                      <img
                        src={image}
                        alt={`Creator ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Popular Shows
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Discover what everyone's watching right now
            </p>
          </div>

          <div className="relative overflow-hidden mb-20">
            <div className="absolute left-0 top-0 bottom-0 w-40 fade-overlay-left z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-40 fade-overlay-right z-10"></div>
            
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
                containScroll: false,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 gap-6 auto-scroll-reverse">
                {[
                  "/lovable-uploads/2f9cded1-7111-45fe-836f-494ff689d4ce.png",
                  "/lovable-uploads/4ca9e7dd-034b-4bf2-a91e-67fef2437351.png",
                  "/lovable-uploads/1ccf077f-c2a0-4bc1-b8d5-f0c8080e7316.png",
                  "/lovable-uploads/5fb4ef41-cb8a-49c7-84b8-8328b0fd0511.png",
                  "/lovable-uploads/eb8d75c5-7465-4b73-9d1a-d02e35f9ce67.png",
                  // Duplicate images for seamless loop
                  "/lovable-uploads/2f9cded1-7111-45fe-836f-494ff689d4ce.png",
                  "/lovable-uploads/4ca9e7dd-034b-4bf2-a91e-67fef2437351.png",
                  "/lovable-uploads/1ccf077f-c2a0-4bc1-b8d5-f0c8080e7316.png",
                  "/lovable-uploads/5fb4ef41-cb8a-49c7-84b8-8328b0fd0511.png",
                  "/lovable-uploads/eb8d75c5-7465-4b73-9d1a-d02e35f9ce67.png"
                ].map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/5 basis-1/2 pl-4">
                    <div className="overflow-hidden rounded-xl aspect-[3/4] bg-black">
                      <img
                        src={image}
                        alt={`Show ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="text-center mb-12 mt-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Watch Everywhere
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Stream seamlessly across all your favorite devices - from phones to tablets and smart TVs
            </p>
          </div>

          <div className="w-full max-w-5xl mx-auto mb-20 bg-[#221F26] p-12 rounded-2xl">
            <img
              src="/lovable-uploads/f1625f1b-215d-403f-b3fa-c8a432c5fc77.png"
              alt="Stream on multiple devices"
              className="w-full h-auto rounded-xl shadow-2xl animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            />
          </div>

          <div ref={carouselEndRef} className="h-1 w-full" />

          {showLogo && (
            <div className="flex justify-center items-center mb-20 animate-fade-in">
              <img 
                src="/lovable-uploads/73f47615-a95f-43b5-ab17-4035a79eed56.png"
                alt="Pioneers TV Logo"
                className="w-64 h-auto"
              />
            </div>
          )}
        </div>
      </div>

      <div className="bg-black">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-12 animate-fade-up" ref={pricingRef} style={{ animationDelay: "0.4s" }}>
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Simple Pricing
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Choose Your Plan</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto mb-8">
              Select the perfect plan for your entertainment needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6 p-8 rounded-2xl border border-white/10 backdrop-blur-md bg-white/5">
              <h3 className="text-2xl font-bold text-white mb-6">All Features Include:</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>4K Ultra HD Streaming Quality</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Watch on Multiple Devices</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Offline Downloads</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Ad-Free Entertainment</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Cancel Anytime</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>24/7 Customer Support</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Regular Content Updates</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Family Sharing Available</span>
                </li>
              </ul>
              <PaymentButton className="w-full mt-8 bg-primary text-white" />
            </div>

            <div className="relative h-full">
              <img 
                src="/lovable-uploads/2ba0c9ba-923f-463d-a214-c35c66239dbf.png"
                alt="Pricing Plans"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </div>

          <div className="mt-32">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                What Our Users Say
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Join thousands of satisfied subscribers enjoying our premium content
              </p>
            </div>

            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 fade-overlay-left z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 fade-overlay-right z-10"></div>
              
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                  dragFree: true,
                  containScroll: false,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4 gap-3 md:gap-6 auto-scroll">
                  {[...reviews, ...reviews].map((review, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] md:basis-1/3">
                      <div className="p-4 md:p-6 rounded-xl border border-white/10 backdrop-blur-md bg-white/5 h-full">
                        <div className="flex items-center gap-2 mb-4">
                          {Array(5).fill(0).map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 md:w-5 md:h-5 fill-[#F97316] text-[#F97316]"
                            />
                          ))}
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <UserRound className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-white text-sm md:text-base">{review.name}</p>
                            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                              <span className="text-xs md:text-sm text-white/60">{review.date}</span>
                              <span className="text-xs px-2 py-0.5 rounded-full bg-[#1A1F2C] text-primary whitespace-nowrap">
                                Verified {review.plan} User
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm md:text-base text-white/80">{review.comment}</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#1A1F2C] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/73f47615-a95f-43b5-ab17-4035a79eed56.png"
                alt="Pioneers TV Logo"
                className="w-40 h-auto"
              />
              <p className="text-white/70 text-sm max-w-xs">
                Experience unlimited entertainment at your fingertips. Stream your favorite shows, movies, and exclusive content anytime, anywhere.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white/70">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:contact@pioneerstv.com" className="hover:text-primary transition-colors">
                    contact@pioneerstv.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <MapPin className="w-4 h-4" />
                  <span>123 Streaming Street, Digital City, DC 12345</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Business Hours</h3>
              <div className="space-y-2 text-white/70">
                <p>Customer Support Available:</p>
                <p>Monday - Friday: 9:00 AM - 8:00 PM EST</p>
                <p>Saturday - Sunday: 10:00 AM - 6:00 PM EST</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
            <p>© {new Date().getFullYear()} Pioneers TV. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
