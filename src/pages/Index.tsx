
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
      name: "Sara Andersson",
      comment: "Bästa IPTV-leverantören i Sverige! Streamingkvaliteten är exceptionell och det finns ingen buffering ens i 4K. Värt varje krona.",
      date: "15 januari, 2024",
      plan: "Premium"
    },
    {
      name: "Johan Eriksson",
      comment: "Äntligen hittat en pålitlig IPTV-leverantör som hela familjen älskar. Stöd för flera enheter är fantastiskt, och kanalutbudet är otroligt.",
      date: "28 februari, 2024",
      plan: "Familj"
    },
    {
      name: "Emma Lindqvist",
      comment: "Har använt denna tjänst i 3 månader nu och jag är imponerad av innehållsbiblioteket. Definitivt den mest stabila IPTV-tjänsten jag upplevt.",
      date: "13 december, 2023",
      plan: "Premium"
    },
    {
      name: "Mikael Johansson",
      comment: "Otrolig kanalvariation och noll fördröjning! Denna IPTV-tjänst har förvandlat hur jag tittar på TV. Bildkvaliteten är fantastisk och priserna oslagbara.",
      date: "2 mars, 2024",
      plan: "Bas"
    },
    {
      name: "Lisa Pettersson",
      comment: "Bytte från en annan leverantör och kunde inte vara gladare! Kanalkvaliteten och kundsupporten är enastående. Bästa IPTV-beslutet jag fattat.",
      date: "21 januari, 2024",
      plan: "Familj"
    },
    {
      name: "David Nilsson",
      comment: "Gränssnittet är super användarvänligt och IPTV-streamkvaliteten är genomgående excellent. Tittar aldrig tillbaka på kabel-TV igen!",
      date: "10 februari, 2024",
      plan: "Bas"
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
                    background: 'linear-gradient(90deg, #000, #1EAEDB, #000)',
                    backgroundSize: '200% 100%',
                    animation: 'snake 4s linear infinite',
                    borderRadius: '9999px',
                  }}
                ></div>
              </div>
              <span className="relative z-10 text-white">Fungerar med alla enheter</span>
            </span>

            <div className="flex justify-center items-center mb-4">
              <img 
                src="/lovable-uploads/9a4b3b59-98c2-4039-9ef2-f1a80f8b9c93.png" 
                alt="IPTV Sverige Plattformar" 
                className="h-8 object-contain"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Bästa IPTV Sverige
              <br /> IPTV Nordic Streaming
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              #1 IPTV-leverantören i Sverige och Nordic regionen.
              <br />
              Streama dina favoritprogram, filmer och exklusivt innehåll. IPTV bäst i test - börja titta idag.
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
              <span className="relative z-10">Upptäck Abonnemang</span>
            </button>

            <div className="flex justify-center items-center gap-2 md:gap-4">
              <div className="w-24 md:w-32 h-24 md:h-32">
                <img 
                  src="/lovable-uploads/c677c336-9244-464b-9bd2-56be914a50cc.png" 
                  alt="Star Rating" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-medium text-base md:text-lg">10,000+ Nöjda Användare i Sverige</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-20 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Fungerar sömlöst med alla enheter
            </h2>
            <div className="max-w-4xl mx-auto">
              <img 
                src="/lovable-uploads/986d0b73-f833-425b-a4a8-3b263461d169.png"
                alt="IPTV Sverige Enhetskompatibilitet"
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
              Streama som aldrig förr med IPTV Sverige
            </h2>
            <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary backdrop-blur-sm">
              Varför välja bästa IPTV-leverantören
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-up mb-20">
            <div className="p-8 text-center rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all backdrop-blur-md bg-[#221F26]">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                <Tv className="w-8 h-8 text-primary" />
              </div>
               <h3 className="text-xl font-semibold mb-4 text-white">4K Kvalitet</h3>
               <p className="text-white/80">Njut av kristallklar kvalitet med 4K Ultra HD streaming från bästa IPTV Sverige.</p>
            </div>
            <div className="p-8 text-center rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all backdrop-blur-md bg-[#221F26]">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
               <h3 className="text-xl font-semibold mb-4 text-white">Betalningsalternativ</h3>
               <p className="text-white/80">Vi erbjuder alla större betalningsmetoder från kreditkort, Swish, banköverföring och många fler för ditt IPTV abonnemang Sverige.</p>
            </div>
            <div className="p-8 text-center rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all backdrop-blur-md bg-[#221F26]">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                <Headphones className="w-8 h-8 text-primary" />
              </div>
               <h3 className="text-xl font-semibold mb-4 text-white">24/7 Support på Svenska</h3>
               <p className="text-white/80">Få omedelbar hjälp när som helst. Vårt supportteam finns alltid här för dig med svensktalande support.</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Tusentals Svenska och Internationella Kanaler</h2>
            <p className="text-white/80 text-sm md:text-base">Oändligt innehåll med över 33,000 kanaler att välja mellan - Sveriges största IPTV-utbud</p>
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
                      alt={`IPTV Sverige Partner Logo ${index + 1}`}
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
                      alt={`IPTV Sverige Partner Logo ${index + 1}`} 
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Tillgång till dina favoritfilmer, serier och program
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Gå med i vår community med Sveriges bästa IPTV-utbud och upplev innehåll i världsklass
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
                        alt={`IPTV Sverige Streaming Tjänst ${index + 1}`}
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
                    Se Sport
                    <br />
                    Utan Begränsningar
                  </h2>
                  <p className="text-white/80 text-lg max-w-xl">
                    Upptäck vad alla tittar på just nu. Få tillgång till alla stora sportevenemang, ligor och turneringar på ett ställe. Allsvenskan, SHL, Champions League och mycket mer med Sveriges bästa IPTV.
                  </p>
                </div>
                <div className="relative">
                  <img
                    src="/lovable-uploads/d11578d8-b9cc-48fa-96af-961d0b3962b8.png"
                    alt="IPTV Sverige Sport - Allsvenskan, SHL, Champions League"
                    className="w-full h-auto object-contain mx-auto rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-20 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Alla funktioner ingår i IPTV Sverige
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Allt du behöver för den ultimata underhållningsupplevelsen med bästa IPTV-leverantören i Sverige
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
                    <span>120.000 VOD (Video på Begäran)</span>
                  </li>
                  <li className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>+32 000 KANALER från hela världen</span>
                  </li>
                  <li className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>UPPDATERADE SERIER dagligen</span>
                  </li>
                  <li className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>UPPDATERADE FILMER konstant</span>
                  </li>
                  <li className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Prime Video / Disney+ / Netflix innehåll</span>
                  </li>
                  <li className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Support 24/7/365 på svenska</span>
                  </li>
                  <li className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Vuxeninnehåll 18+</span>
                  </li>
                  <li className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>100% Anonymt</span>
                  </li>
                </ul>
              </div>

              <div className="md:w-3/5">
                <img
                  src="/lovable-uploads/f1625f1b-215d-403f-b3fa-c8a432c5fc77.png"
                  alt="IPTV Sverige - Streama på flera enheter"
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
                      background: 'linear-gradient(90deg, #000, #1EAEDB, #000)',
                      backgroundSize: '200% 100%',
                      animation: 'snake 4s linear infinite',
                      borderRadius: '9999px',
                    }}
                  ></div>
                </div>
                <span className="relative z-10">Fortsätt till IPTV Abonnemang</span>
              </button>
            </div>
          </div>

          <div ref={carouselEndRef} className="h-1 w-full" />

          {showLogo && (
            <div className="flex justify-center items-center mb-2 animate-fade-in">
              <img 
                src="/lovable-uploads/73f47615-a95f-43b5-ab17-4035a79eed56.png"
                alt="Pioneers TV - Bästa IPTV Sverige Logo"
                className="w-64 h-auto"
              />
            </div>
          )}

          <div className="mt-32">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Vad våra svenska användare säger
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Gå med tusentals nöjda prenumeranter som njuter av vårt premium IPTV Sverige-innehåll
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
                            <span>Verifierad Kund</span>
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
                  alt="Pioneers TV - Bästa IPTV Sverige Logo"
                  className="w-40 h-auto"
                />
              </Link>
              <p className="text-white/70 text-sm max-w-xs">
                Upplev obegränsad underhållning till hands. Streama dina favoritprogram, filmer och exklusivt innehåll när och var som helst med bästa IPTV Sverige.
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
                      Återbetalningspolicy
                    </button>
                  </RefundPolicyDialog>
                </li>
                <li className="text-white/70 text-sm">
                  <span className="block">Supporttider:</span>
                  <span className="text-primary">24/7 - Alltid Tillgänglig på Svenska</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Kontakta Oss</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white/70">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:contact@pioneerstv.com" className="text-sm hover:text-primary transition-colors">
                    contact@pioneerstv.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Headphones className="w-4 h-4" />
                  <span className="text-sm">24/7 Support Tillgänglig på Svenska</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/70 text-sm">
                © 2024 Pioneers TV - Bästa IPTV Sverige. Alla rättigheter förbehållna.
              </p>
              <div className="flex items-center gap-6">
                <img 
                  src="/lovable-uploads/6f69184e-d161-4eaa-a3db-b0d0abe59996.png"
                  alt="Betalningsmetoder för IPTV Sverige"
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
