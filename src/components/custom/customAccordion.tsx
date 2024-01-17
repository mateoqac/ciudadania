import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CustomAccordion({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string | undefined;
}) {
  return (
    <Accordion collapsible type="single">
      <AccordionItem value={title + "_1"}>
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
