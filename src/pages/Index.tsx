
import { CreditCard, PlayCircle, Tv, CheckCircle2, Star, UserRound, Headphones } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import Header from "@/components/Header";
import PaymentButton from "@/components/PaymentButton";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import RefundPolicyDialog from "@/components/RefundPolicyDialog";

const Index = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showIframe, setShowIframe] = useState(false);
  const carouselEndRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      name: "Sarah Mitchell",
      comment: "Best IPTV service I've tried! The streaming quality is exceptional and there's no buffering even in 4K. Worth every penny.",
      date: "January 15, 2024",
      plan: "Premium"
    },
    {
      name: "James Wilson",
      comment: "Finally found a reliable IPTV provider that the whole family loves. Multiple device support is fantastic, and the channel selection is incredible.",
      date: "February 28, 2024",
      plan: "Family"
    },
    {
      name: "Emily Rodriguez",
      comment: "Been using this service for 3 months now and I'm amazed by the content library. Definitely the most stable IPTV service I've experienced.",
      date: "December 13, 2023",
      plan: "Premium"
    },
    {
      name: "Michael Chang",
      comment: "Incredible channel variety and zero lag! This IPTV service has transformed how I watch TV. The picture quality is amazing and the prices are unbeatable.",
      date: "March 2, 2024",
      plan: "Basic"
    },
    {
      name: "Lisa Anderson",
      comment: "Switched from another provider and couldn't be happier! The channel quality and customer support are outstanding. Best IPTV decision I've made.",
      date: "January 21, 2024",
      plan: "Family"
    },
    {
      name: "David Thompson",
      comment: "The interface is super user-friendly and the IPTV stream quality is consistently excellent. Never looking back to cable TV again!",
      date: "February 10, 2024",
      plan: "Basic"
    }
  ];

  const clearBrowserData = () => {
    localStorage.clear();
    sessionStorage.clear();
    document.cookie.split(";").forEach((cookie) => {
      document.cookie = cookie
        .replace(/^ +/, "")
        .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
    });
  };

  const handlePlanClick = () => {
    const timestamp = Date.now();
    const nonce = Math.random().toString(36).substring(7);
    const proxyUrl = `https://pioneerstv.store/?_=${timestamp}&nonce=${nonce}`;

    const securityMeta = document.createElement('meta');
    securityMeta.httpEquiv = 'Content-Security-Policy';
    securityMeta.content = "default-src 'self' 'unsafe-inline' 'unsafe-eval'; frame-src 'self' https://pioneerstv.store/";
    document.head.appendChild(securityMeta);

    window.history.replaceState({}, document.title, window.location.pathname);

    setShowIframe(true);
  };

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

  return (
    <div className="min-h-screen bg-black w-full overflow-hidden">
      <Header />
      <div className="relative w-full">
        <div 
          className="absolute inset-0 z-0 w-full"
          style={{
            backgroundImage: 'url("/lovable-uploads/199f59c2-2889-41de-ae7c-ed253796993b.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '85vh'
          }}
        >
          <div 
            className="absolute inset-0 w-full"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,1) 85%, rgba(0,0,0,1) 100%)'
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
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
                    background: 'linear-gradient(90deg, #000, #7ED321, #000)',
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
                    background: 'linear-gradient(90deg, #000, #7ED321, #000)',
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

      <div className="bg-black py-20 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Works with all devices seamlessly
            </h2>
            <div className="max-w-4xl mx-auto">
              <img 
                src="/lovable-uploads/986d0b73-f833-425b-a4a8-3b263461d169.png"
                alt="Device Compatibility"
                className="w-full h-auto rounded-xl shadow-2xl animate-fade-up"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-3xl font-bold text-white mb-4">
              Stream Like Never Before
            </h2>
            <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary backdrop-blur-sm">
              Why Choose Us
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-up mb-20">
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
              <h3 className="text-xl font-semibold mb-4 text-white">Payment Options</h3>
              <p className="text-white/80">We offer all major payment methods from credit cards and debit and many more.</p>
            </div>
            <div className="p-8 text-center rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all backdrop-blur-md bg-[#221F26]">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                <Headphones className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">24/7 Support</h3>
              <p className="text-white/80">Get instant help anytime. Our support team is always here for you.</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Thousands of Channels</h2>
            <p className="text-white/80 text-sm md:text-base">More endless content, more than 33,000 channels to select from</p>
          </div>
          <div className="relative mb-20 w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-[150px] md:w-[200px] bg-gradient-to-r from-black via-black to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-[150px] md:w-[200px] bg-gradient-to-l from-black via-black to-transparent z-10"></div>
            
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

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Access Your Favorite Movies, Series, Shows
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
                  "/lovable-uploads/e0f17c8c-9b10-40fc-9126-338a0254c79c.png",
                  "/lovable-uploads/b5923dbb-97d6-4219-914e-3a22c2f8842f.png",
                  "/lovable-uploads/3487afa3-a923-40d8-ada3-274927a6a683.png",
                  "/lovable-uploads/a365b485-3595-4e25-9626-937f1a32910e.png",
                  "/lovable-uploads/229628ec-eda5-4c92-b070-81ebce537a4a.png",
                  "/lovable-uploads/f9c74707-3e8a-417c-9ab1-e958d4695aff.png",
                  "/lovable-uploads/e0f17c8c-9b10-40fc-9126-338a0254c79c.png",
                  "/lovable-uploads/b5923dbb-97d6-4219-914e-3a22c2f8842f.png",
                  "/lovable-uploads/3487afa3-a923-40d8-ada3-274927a6a683.png",
                  "/lovable-uploads/a365b485-3595-4e25-9626-937f1a32910e.png",
                  "/lovable-uploads/229628ec-eda5-4c92-b070-81ebce537a4a.png",
                  "/lovable-uploads/f9c74707-3e8a-417c-9ab1-e958d4695aff.png"
                ].map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/5 basis-1/2 pl-4">
                    <div className="overflow-hidden rounded-xl aspect-[3/4] bg-black">
                      <img
                        src={image}
                        alt={`Streaming Service ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="relative mb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                    Watch Sports
                    <br />
                    With No Limits
                  </h2>
                  <p className="text-white/80 text-lg max-w-xl">
                    Discover what everyone's watching right now. Get access to all major sports events, leagues, and tournaments in one place.
                  </p>
                </div>
                <div className="relative">
                  <img
                    src="/lovable-uploads/d11578d8-b9cc-48fa-96af-961d0b3962b8.png"
                    alt="Various Sports Athletes"
                    className="w-full h-auto object-contain mx-auto rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-20 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              All Features Include
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Everything you need for the ultimate entertainment experience
            </p>
          </div>

          <div className="w-full max-w-5xl mx-auto mb-20">
            <div className="flex flex-col md:flex-row gap-8 p-6 rounded-2xl border border-white/10 backdrop-blur-md bg-white/5">
              <div className="md:w-2/5 space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>SD / HD / FULL HD / 4K</span>
                  </li>
                  <li className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>120.000 VOD</span>
                  </li>
                  <li className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>+32 000 CHANNEL</span>
                  </li>
                  <li className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>UPDATED SERIES</span>
                  </li>
                  <li className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>UPDATED MOVIES</span>
                  </li>
                  <li className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Prime Video / Disney+</span>
                  </li>
                  <li className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Support 24/7/365</span>
                  </li>
                  <li className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Adults 18+</span>
                  </li>
                  <li className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>100% Anonymous</span>
                  </li>
                </ul>
              </div>

              <div className="md:w-3/5">
                <img
                  src="/lovable-uploads/f1625f1b-215d-403f-b3fa-c8a432c5fc77.png"
                  alt="Stream on multiple devices"
                  className="w-full h-auto rounded-xl shadow-2xl animate-fade-up"
                  style={{ animationDelay: "0.2s" }}
                />
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <button 
                className="relative overflow-hidden text-white px-12 py-4 rounded-full font-medium transition-all hover:scale-105 w-64 group"
                onClick={handlePlanClick}
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
                      background: 'linear-gradient(90deg, #000, #7ED321, #000)',
                      backgroundSize: '200% 100%',
                      animation: 'snake 4s linear infinite',
                      borderRadius: '9999px',
                    }}
                  ></div>
                </div>
                <span className="relative z-10">Continue to Plans</span>
              </button>
            </div>
          </div>

          <div ref={carouselEndRef} className="h-1 w-full" />

          {showLogo && (
            <div className="flex justify-center items-center mb-2 animate-fade-in">
              <img 
                src="/lovable-uploads/73f47615-a95f-43b5-ab17-4035a79eed56.png"
                alt="Pioneers TV Logo"
                className="w-64 h-auto"
              />
            </div>
          )}

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
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            {Array(5).fill(0).map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 md:w-5 md:h-5 fill-[#F97316] text-[#F97316]"
                              />
                            ))}
                          </div>
                          <div className="flex items-center gap-1.5 text-xs px-2 py-0.5 rounded-full bg-[#1A1F2C] text-primary whitespace-nowrap">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Verified Client</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <UserRound className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-white text-sm md:text-base">{review.name}</p>
                            <span className="text-xs md:text-sm text-white/60">{review.date}</span>
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

      <Dialog open={showIframe} onOpenChange={(open) => {
        if (!open) {
          clearBrowserData();
          window.history.replaceState({}, document.title, window.location.pathname);
        }
        setShowIframe(open);
      }}>
        <DialogContent className="sm:max-w-[90vw] h-[90vh] p-0">
          <iframe
            src="https://pioneerstv.store/"
            className="w-full h-full border-0"
            allow="payment"
            referrerPolicy="no-referrer"
            rel="noopener noreferrer"
            sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-modals"
            loading="lazy"
            title="Payment Page"
            onLoad={(e) => {
              const frame = e.target as HTMLIFrameElement;
              if (frame.contentWindow) {
                frame.contentWindow.postMessage({ type: 'clearHistory' }, '*');
              }
            }}
          />
        </DialogContent>
      </Dialog>

      <footer className="bg-[#1A1F2C] py-16 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <Link to="/">
                <img 
                  src="/lovable-uploads/73f47615-a95f-43b5-ab17-4035a79eed56.png"
                  alt="Pioneers TV Logo"
                  className="w-40 h-auto"
                />
              </Link>
              <p className="text-white/70 text-sm max-w-xs">
                Experience unlimited entertainment at your fingertips. Stream your favorite shows, movies, and exclusive content anytime, anywhere.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:contact@pioneerstv.com" className="text-white/70 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">
                  <Headphones className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Support</h3>
              <ul className="space-y-2">
                <li>
                  <RefundPolicyDialog>
                    <button className="text-white/70 hover:text-primary transition-colors text-sm text-left">
                      Refund Policy
                    </button>
                  </RefundPolicyDialog>
                </li>
                <li className="text-white/70 text-sm">
                  <span className="block">Support Hours:</span>
                  <span className="text-primary">24/7 - Always Available</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white/70">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:contact@pioneerstv.com" className="text-sm hover:text-primary transition-colors">
                    contact@pioneerstv.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Headphones className="w-4 h-4" />
                  <span className="text-sm">24/7 Support Available</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/70 text-sm">
                © 2024 Pioneers TV. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <img 
                  src="/lovable-uploads/6f69184e-d161-4eaa-a3db-b0d0abe59996.png"
                  alt="Payment Methods"
                  className="h-6 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
