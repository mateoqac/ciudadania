import type {Person, Certificate} from "@/types";

import api from "@/api";
import {Label} from "@/components/ui/label";

import CheckboxList from "./checkboxList";
import CustomAccordion from "./customAccordion";

export default function PreViaje({avo: avo}: {avo: string}) {
  const family_tree: Person[] = api.famiy_tree();

  const italian = family_tree.filter((person) => person.key === avo)[0];
  let descendant: Person | null = italian.descendant;

  const descendants: Person[] = [italian];

  while (descendant?.descendant !== undefined) {
    descendants.push(descendant);
    descendant = descendant.descendant;
  }

  return (
    <div className="space-y-4">
      <div className="rounded-lg border p-4">
        <div className="mt-2 space-y-2 pl-6">
          {descendants.map((person: Person) => (
            <CustomAccordion key={person.title} title={person.title}>
              <section>
                {person.certificates.map(({title, steps}: Certificate) => (
                  <div key={title + title}>
                    <Label>{title}</Label>
                    <CheckboxList list={steps} />
                  </div>
                ))}
              </section>
            </CustomAccordion>
          ))}
        </div>
      </div>
    </div>
  );
}
