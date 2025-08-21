
// Updated pricing system with device count selection

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
  const [deviceCount, setDeviceCount] = useState(1);
  const [showLogo, setShowLogo] = useState(false);
  const [showIframe, setShowIframe] = useState(false);
  const carouselEndRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      name: "Sarah Mitchell",
      comment: "Bästa IPTV-tjänsten jag provat! Streamingkvaliteten är exceptionell och det finns ingen buffring ens i 4K. Värt varje krona.",
      date: "15 januari 2024",
      plan: "Bästa IPTV"
    },
    {
      name: "James Wilson",
      comment: "Äntligen hittat en pålitlig IPTV-leverantör som hela familjen älskar. Stöd för flera enheter är fantastiskt och kanalurvalet är otroligt.",
      date: "28 februari 2024",
      plan: "Familj"
    },
    {
      name: "Emily Rodriguez",
      comment: "Har använt denna tjänst i 3 månader nu och jag är förvånad över innehållsbiblioteket. Definitivt den mest stabila IPTV-tjänsten jag upplevt.",
      date: "13 december 2023",
      plan: "Bästa IPTV"
    },
    {
      name: "Michael Chang",
      comment: "Otroligt kanalutbud och noll fördröjning! Denna IPTV-tjänst har förvandlat hur jag tittar på TV. Bildkvaliteten är fantastisk och priserna är oslagbara.",
      date: "2 mars 2024",
      plan: "Basic"
    },
    {
      name: "Lisa Anderson",
      comment: "Bytte från en annan leverantör och kunde inte vara gladare! Kanalkvaliteten och kundsupporten är enastående. Bästa IPTV-beslutet jag gjort.",
      date: "21 januari 2024",
      plan: "Familj"
    },
    {
      name: "David Thompson",
      comment: "Gränssnittet är supervänligt och IPTV-streamkvaliteten är konsekvent utmärkt. Kommer aldrig att gå tillbaka till kabel-TV igen!",
      date: "10 februari 2024",
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

  const getPricing = (months: number) => {
    const basePrices = {
      3: { 1: 399, 2: 499, 3: 599, 4: 699 },
      6: { 1: 599, 2: 699, 3: 799, 4: 899 },
      12: { 1: 899, 2: 1399, 3: 1599, 4: 1799 }
    };
    return basePrices[months][deviceCount];
  };

  const getDeviceText = () => {
    return deviceCount === 1 ? "En Enhet" : `${deviceCount} Enheter`;
  };

  const handlePlanClick = (months: number) => {
    // Check for specific plan and device combinations that use Whop checkout
    if (deviceCount === 1) {
      if (months === 3) {
        // 3 months / 1 device
        window.open('https://whop.com/checkout/1aiEcEBqwI4dcNBZi9-Tmyt-DjYq-59Pt-5yvjdsiz2wp7/', '_blank');
        return;
      } else if (months === 6) {
        // 6 months / 1 device
        window.open('https://whop.com/checkout/586MtwIuCqqNpqdJAZ-NX2F-IaZ5-X4qs-fPx7x2XUEfdU/', '_blank');
        return;
      } else if (months === 12) {
        // 1 year / 1 device
        window.open('https://whop.com/checkout/plan_O43DRFVobHaq3/?d2c=true', '_blank');
        return;
      }
    }

    // Default behavior for other plans (multiple devices)
    const timestamp = Date.now();
    const nonce = Math.random().toString(36).substring(7);
    const proxyUrl = `https://kickitv.store/?_=${timestamp}&nonce=${nonce}`;

    const securityMeta = document.createElement('meta');
    securityMeta.httpEquiv = 'Content-Security-Policy';
    securityMeta.content = "default-src 'self' 'unsafe-inline' 'unsafe-eval'; frame-src 'self' https://kickitv.store/";
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
                className="absolute inset-0 bg-gradient-to-r from-black via-[#7ED321] to-black opacity-70"
              ></div>
              <div 
                className="absolute inset-0"
                style={{
                  padding: '2px',
                  background: 'linear-gradient(90deg, #000, #7ED321, #000)',
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
              <span className="relative z-10 text-white">Fungerar med alla enheter</span>
            </span>

            <div className="flex justify-center items-center mb-4">
              <img 
                src="/lovable-uploads/9a4b3b59-98c2-4039-9ef2-f1a80f8b9c93.png" 
                alt="Platform Logos" 
                className="h-8 object-contain"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Bästa IPTV-tjänsten
              <br /> Obegränsad Underhållning
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              KickITV - Din pålitliga IPTV-leverantör med bästa IPTV-abonnemangsplaner.
              <br />
              Streama 32,000+ kanaler i 4K-kvalitet. Den mest pålitliga IPTV-tjänsten världen över.
            </p>
            <button 
              className="relative overflow-hidden text-white px-12 py-4 rounded-full font-medium transition-all hover:scale-105 mb-4 w-64 group"
              onClick={scrollToPricing}
            >
              <div 
                className="absolute inset-0 bg-gradient-to-r from-black via-[#7ED321] to-black opacity-70"
              ></div>
              <div 
                className="absolute inset-0"
                style={{
                  padding: '2px',
                  background: 'linear-gradient(90deg, #000, #7ED321, #000)',
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
              <span className="relative z-10">Upptäck Planer</span>
            </button>

            <div className="flex justify-center items-center gap-2 md:gap-4">
              <div className="w-24 md:w-32 h-24 md:h-32">
                <img 
                  src="/lovable-uploads/c677c336-9244-464b-9bd2-56be914a50cc.png" 
                  alt="Star Rating" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-medium text-base md:text-lg">10,000+ Nöjda Användare</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-20 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Premium IPTV-streamingtjänst Kompatibel med Alla Enheter
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8">
              Upplev den bästa IPTV-tjänsten med vår toppbetygsatta IPTV-leverantör. Vårt pålitliga IPTV-abonnemang fungerar sömlöst på alla plattformar - från smart-TV:ar och streamingenheter till mobiltelefoner och datorer. Njut av obegränsad IPTV-streaming med vår professionella IPTV-tjänst.
            </p>
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
              Varför Välja KickITV - Den Bästa IPTV-tjänsteleverantören
            </h2>
            <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary backdrop-blur-sm">
              Ledande IPTV-leverantör Funktioner & Fördelar
            </span>
            <p className="text-white/70 text-lg max-w-4xl mx-auto mb-8">
              KickITV utmärker sig som den ledande IPTV-tjänsteleverantören och erbjuder de mest omfattande IPTV-abonnemangsplanerna med oöverträffad tillförlitlighet. Vår IPTV-streamingtjänst levererar premiumunderhållning med professionell infrastruktur.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-up mb-20">
            <div className="p-8 text-center rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all backdrop-blur-md bg-[#221F26]">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                <Tv className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">4K IPTV-streaming</h3>
              <p className="text-white/80">Upplev den bästa IPTV-tjänsten med kristallklar 4K Ultra HD-streamingkvalitet.</p>
            </div>
            <div className="p-8 text-center rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all backdrop-blur-md bg-[#221F26]">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Flexibla IPTV-abonnemangsbetalningar</h3>
              <p className="text-white/80">Säkra IPTV-abonnemangsbetalningar med alla större kreditkort, betalkort och digitala betalningsmetoder.</p>
            </div>
            <div className="p-8 text-center rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all backdrop-blur-md bg-[#221F26]">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                <Headphones className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">24/7 IPTV-support</h3>
              <p className="text-white/80">Professionell IPTV-tjänstsupport tillgänglig 24/7. Vårt expertteam säkerställer att ditt IPTV-abonnemang fungerar smidigt.</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">32,000+ IPTV-kanaler</h2>
            <p className="text-white/80 text-sm md:text-base">Upplev den största IPTV-tjänstsamlingen med över 32,000 bästa IPTV-kanaler från din pålitliga IPTV-leverantör</p>
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
                      alt={`IPTV Service Partner ${index + 1}`}
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
                      alt={`IPTV Service Partner ${index + 1}`} 
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Få Tillgång till Dina Favoritfilmer, Serier, Program
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Gå med i vår gemenskap av innehållsskapare som delar sina fantastiska berättelser
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
                    Titta på Sport
                    <br />
                    Utan Begränsningar
                  </h2>
                  <p className="text-white/80 text-lg max-w-xl">
                    Upptäck vad alla tittar på just nu. Få tillgång till alla stora sportevenemang, ligor och turneringar på ett ställe.
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

          {showLogo && (
            <div className="flex justify-center items-center mb-8 animate-fade-in">
              <img 
                src="/lovable-uploads/73f47615-a95f-43b5-ab17-4035a79eed56.png"
                alt="KickITV IPTV Service Logo"
                className="w-64 h-auto"
              />
            </div>
          )}

          {/* All Devices Section */}
          <div className="max-w-6xl mx-auto px-4 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                TITTA ÖVERALLT NÄR SOM HELST
              </h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto mb-12">
                Vår IPTV-tjänst är designad för sömlös kompatibilitet över alla dina enheter. 
                Oavsett om du är hemma vid din smart-TV, pendlar med din surfplatta eller kopplar av 
                med din smartphone, njut av ditt favoritinnehåll när som helst, var som helst med kristallklar 
                kvalitet och omedelbar åtkomst.
              </p>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/bc9a3e71-328d-4d49-b294-a49c62566aa0.png"
                alt="Watch on all devices - laptop, tablet, and smartphone"
                className="w-full max-w-3xl h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              IPTV-abonnemangsplaner
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Välj den perfekta IPTV-abonnemangsplanen för dina streamingbehov
            </p>
            
            {/* Device Selection */}
            <div className="flex items-center justify-center gap-2 mb-12">
              {[1, 2, 3, 4].map((count) => (
                <button
                  key={count}
                  onClick={() => setDeviceCount(count)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    deviceCount === count 
                      ? 'bg-primary text-white' 
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {count} Enhet{count > 1 ? 'er' : ''}
                </button>
              ))}
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            {/* 3 Months Plan */}
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">3 Månader</h3>
                <div className="text-3xl font-bold text-primary mb-1">
                  {getPricing(3)}KR
                </div>
                <p className="text-white/70 text-sm">
                  {getDeviceText()}
                </p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>SD / HD / FULL HD / 4K</span>
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>120,000 VOD</span>
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>+32,000 CHANNELS</span>
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>UPDATED SERIES</span>
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>UPDATED MOVIES</span>
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Prime Video / Disney+</span>
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Support 24/7/365</span>
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Adults 18+</span>
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>100% Anonymous</span>
                </li>
              </ul>
              
              <button 
                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors mb-4"
                onClick={() => handlePlanClick(3)}
              >
                Välj Plan
              </button>
              
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/2ed83f5d-0d57-4ad6-b149-d698a8b3594c.png"
                  alt="Payment Methods"
                  className="h-6 w-auto object-contain opacity-70"
                />
              </div>
            </div>

            {/* 6 Months Plan */}
            <div className="relative bg-white/5 backdrop-blur-md border-2 border-primary rounded-2xl p-6 scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-black px-4 py-1 rounded-full text-xs font-medium">
                  MEST POPULÄR
                </span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">6 Månader</h3>
                <div className="text-3xl font-bold text-primary mb-1">
                  {getPricing(6)}KR
                </div>
                <p className="text-white/70 text-sm">
                  {getDeviceText()}
                </p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>SD / HD / FULL HD / 4K</span>
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>120,000 VOD</span>
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>+32,000 CHANNELS</span>
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>UPDATED SERIES</span>
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>UPDATED MOVIES</span>
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Prime Video / Disney+</span>
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Support 24/7/365</span>
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Adults 18+</span>
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>100% Anonymous</span>
                </li>
              </ul>
              
              <button 
                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors mb-4"
                onClick={() => handlePlanClick(6)}
              >
                Välj Plan
              </button>
              
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/2ed83f5d-0d57-4ad6-b149-d698a8b3594c.png"
                  alt="Payment Methods"
                  className="h-6 w-auto object-contain opacity-70"
                />
              </div>
            </div>

            {/* 1 Year Plan */}
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">1 År</h3>
                <div className="text-3xl font-bold text-primary mb-1">
                  {getPricing(12)}KR
                </div>
                <p className="text-white/70 text-sm">
                  {getDeviceText()}
                </p>
                <span className="inline-block bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium mt-2">
                  BÄSTA VÄRDET
                </span>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>SD / HD / FULL HD / 4K</span>
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>120,000 VOD</span>
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>+32,000 CHANNELS</span>
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>UPDATED SERIES</span>
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>UPDATED MOVIES</span>
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Prime Video / Disney+</span>
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Support 24/7/365</span>
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Adults 18+</span>
                </li>
                <li className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>100% Anonymous</span>
                </li>
              </ul>
              
              <button 
                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors mb-4"
                onClick={() => handlePlanClick(12)}
              >
                Välj Plan
              </button>
              
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/2ed83f5d-0d57-4ad6-b149-d698a8b3594c.png"
                  alt="Payment Methods"
                  className="h-6 w-auto object-contain opacity-70"
                />
              </div>
            </div>
          </div>

          <div ref={carouselEndRef} className="h-1 w-full" />


          <div className="mt-32">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Vad Våra Användare Säger
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Gå med tusentals nöjda prenumeranter som njuter av vårt bästa IPTV-innehåll
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
            src="https://kickitv.store/"
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

      <footer className="bg-black py-16 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <Link to="/">
                <img 
                  src="/lovable-uploads/6c30340b-8121-4f91-85ed-03d1903b5356.png"
                  alt="KickItv Logo"
                  className="w-40 h-auto"
                />
              </Link>
              <p className="text-white/70 text-sm max-w-xs">
                KickITV - Bästa IPTV-tjänsteleverantör som erbjuder obegränsad underhållning. Streama 32,000+ kanaler och VOD-innehåll med vårt pålitliga IPTV-abonnemang.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:contact@kickitv.com" className="text-white/70 hover:text-primary transition-colors">
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
                  <span className="text-primary">24/7 - Alltid Tillgänglig</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Kontakta Oss</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white/70">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:contact@kickitv.com" className="text-sm hover:text-primary transition-colors">
                    contact@kickitv.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Headphones className="w-4 h-4" />
                  <span className="text-sm">24/7 Support Tillgänglig</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/70 text-sm">
                © 2024 KickItv. All rights reserved.
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
