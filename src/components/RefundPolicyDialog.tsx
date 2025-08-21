
import { Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface RefundPolicyDialogProps {
  children: React.ReactNode;
}

const RefundPolicyDialog = ({ children }: RefundPolicyDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-black text-white border border-white/10">
        <DialogHeader>
          <DialogTitle className="text-4xl font-bold text-white">Återbetalningspolicy</DialogTitle>
        </DialogHeader>
        
        <div className="prose prose-invert max-w-none mt-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">7 Dagars Pengarna-Tillbaka-Garanti</h2>
          
          <p className="text-white/80 mb-6">
            På domain vill vi säkerställa att du är 100% nöjd med vår tjänst. Om du har några tekniska frågor, 
            tveka inte att kontakta oss. Vårt tekniska team kommer inte att lämna din sida förrän du tittar på TV! Men 
            om du känner att tjänsten du köpt inte är den bästa passformen för dina krav och du försökt lösa 
            problem med vår supportpersonal, vill vi göra det rätt.
          </p>

          <p className="text-white/80 mb-6">
            Även om vi skulle älska att veta var det gick fel, eller hur vi kan förbättra, följ stegen nedan för full 
            återbetalning inom 7 dagar från ditt köpdatum. Om de 7 dagarna har passerat och du har ett problem kan du 
            kontakta oss när som helst via vårt WhatsApp eller via E-post för att lösa ditt problem.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">Steg för Att Begära Återbetalning:</h3>
          <ul className="list-disc pl-6 text-white/80 space-y-2 mb-8">
            <li>Kontakta oss via WhatsApp eller via vår support-e-post.</li>
            <li>Använd samma e-postadress som du använde för att köpa våra tjänster.</li>
            <li>Inkludera ditt fakturanummer</li>
          </ul>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mt-8">
            <h4 className="text-lg font-semibold text-white mb-4">Behöver Du Hjälp?</h4>
            <div className="flex items-center gap-2 text-white/80">
              <Mail className="w-5 h-5" />
              <a href="mailto:contact@pioneerstv.com" className="hover:text-primary transition-colors">
                contact@pioneerstv.com
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RefundPolicyDialog;
