import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: "item-1",
    question: "Milyen gyakran érdemes irodatakarítást kérni?",
    answer: "Ez nagyban függ az iroda méretétől és a napi forgalomtól. Általánosságban egy közepes méretű irodánál a heti 2-3 alkalom ideális a folyamatos tisztaság fenntartásához, de napi takarítást is vállalunk nagyobb igénybevétel esetén.",
  },
  {
    id: "item-2",
    question: "Milyen tisztítószereket használnak?",
    answer: "Kizárólag professzionális, környezetbarát és hatékony tisztítószereket használunk, amelyek biztonságosak az egészségre és kíméletesek a felületekhez. Minden esetben az adott felületnek megfelelő szert választjuk.",
  },
  {
    id: "item-3",
    question: "Vidéken is vállalnak takarítást?",
    answer: "Nem, jelenleg csak Budapest területén vállalunk irodatakarítást. Az időpontokat igyekszünk az Ön igényeihez igazítani, legyen szó rendszeres vagy alkalmi takarításról.",
  },
  {
    id: "item-4",
    question: "Szükséges biztosítanom eszközöket vagy tisztítószereket?",
    answer: "Nem, minden szükséges eszközt, gépet és tisztítószert mi biztosítunk. Önnek semmilyen teendője nincs ezzel kapcsolatban.",
  },
];

const FaqAccordion = () => {
  return (
    <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
      {faqData.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id}>
          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
