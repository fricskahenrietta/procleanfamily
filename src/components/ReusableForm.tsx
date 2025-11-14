'use client';
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import HCaptcha from "@hcaptcha/react-hcaptcha";

interface ReusableFormProps {
  onFormChange?: (formData: any) => void;
}

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  company: "",
  address: "",
  size: "",
  frequency: "",
  startDate: "",
  privacyAccepted: false,
};

const ReusableForm: React.FC<ReusableFormProps> = ({ onFormChange }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);
  const isCaptchaEnabled = process.env.NEXT_PUBLIC_ENABLE_CAPTCHA === 'true';

  useEffect(() => {
    onFormChange?.(formData);
  }, [formData, onFormChange]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) {
      toast({
        title: "Hiba",
        description: "Az ajánlatkéréshez el kell fogadnia az adatvédelmi tájékoztatót.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Összeállítjuk a message-t az extra mezőkkel
      const message = `
Cég neve: ${formData.company}
Iroda címe: ${formData.address}
Iroda nagysága: ${formData.size} m²
Rendszeresség: ${formData.frequency === 'daily' ? 'Napi' : 
                 formData.frequency === 'weekly' ? 'Heti' : 
                 formData.frequency === 'biweekly' ? 'Kéthetente' : 
                 formData.frequency === 'monthly' ? 'Havi' : 'Egyszeri'}
Legkorábbi kezdés: ${formData.startDate}
      `.trim();

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: message,
          subject: `Új ajánlatkérés - ${formData.company}`,
          ...(isCaptchaEnabled && { 'h-captcha-response': captchaToken }),
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Köszönjük az érdeklődést!",
          description: "Hamarosan felvesszük Önnel a kapcsolatot.",
        });
        setFormData(initialFormData);
        setCaptchaToken(null);
        if (isCaptchaEnabled) {
          captchaRef.current?.resetCaptcha();
        }
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Hiba történt",
        description: "Kérjük próbálja újra később.",
        variant: "destructive",
      });
      if (isCaptchaEnabled) {
        captchaRef.current?.resetCaptcha();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Név *</Label>
          <Input id="name" required value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} />
        </div>
        <div>
          <Label htmlFor="phone">Telefonszám *</Label>
          <Input id="phone" type="tel" required value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="email">Email cím *</Label>
          <Input id="email" type="email" required value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} />
        </div>
        <div>
          <Label htmlFor="company">Cég neve *</Label>
          <Input id="company" required value={formData.company} onChange={(e) => handleInputChange("company", e.target.value)} />
        </div>
      </div>
      <div>
        <Label htmlFor="address">Iroda címe *</Label>
        <Input id="address" required value={formData.address} onChange={(e) => handleInputChange("address", e.target.value)} />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="size">Iroda nagysága (m²) *</Label>
          <Input id="size" type="number" required value={formData.size} onChange={(e) => handleInputChange("size", e.target.value)} />
        </div>
        <div>
          <Label htmlFor="frequency">Rendszeresség *</Label>
          <Select value={formData.frequency} onValueChange={(value) => handleInputChange("frequency", value)} required>
            <SelectTrigger><SelectValue placeholder="Válasszon..." /></SelectTrigger>
            <SelectContent className="bg-popover z-50">
              <SelectItem value="daily">Napi</SelectItem>
              <SelectItem value="weekly">Heti</SelectItem>
              <SelectItem value="biweekly">Kéthetente</SelectItem>
              <SelectItem value="monthly">Havi</SelectItem>
              <SelectItem value="oneoff">Egyszeri</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label htmlFor="startDate">Legkorábbi kezdés *</Label>
        <Select value={formData.startDate} onValueChange={(value) => handleInputChange("startDate", value)} required>
          <SelectTrigger id="startDate"><SelectValue placeholder="Válasszon időpontot..." /></SelectTrigger>
          <SelectContent className="bg-popover z-50">
            {Array.from({ length: 7 }, (_, i) => 16 + i).map((hour) => (
              <SelectItem key={hour} value={`${hour}:00`}>
                {`${hour}:00`}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex sm:items-center sm:space-x-2">
        <Checkbox id="privacy" onCheckedChange={(checked) => handleInputChange("privacyAccepted", checked as boolean)} checked={formData.privacyAccepted} />
        <Label htmlFor="privacy" className="text-sm font-normal text-muted-foreground">
          Elfogadom az <a href="/adatvedelem" target="_blank" className="underline hover:text-primary">Adatvédelmi Tájékoztatót</a>.
        </Label>
      </div>

      {isCaptchaEnabled && (
        <div className="flex justify-center">
          <HCaptcha
            ref={captchaRef}
            sitekey={process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ''}
            onVerify={handleCaptchaVerify}
          />
        </div>
      )}

      <Button type="submit" variant="hero" size="lg" className="w-full" disabled={!formData.privacyAccepted || (isCaptchaEnabled && !captchaToken) || isSubmitting}>
        {isSubmitting ? 'Küldés...' : 'Ajánlat Kérése'}
      </Button>
    </form>
  );
};

export default ReusableForm;
