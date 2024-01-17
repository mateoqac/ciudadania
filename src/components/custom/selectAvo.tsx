/* eslint-disable @typescript-eslint/no-misused-promises */
import type {Person} from "@/types";

import {redirect} from "next/navigation";

import api from "@/api";
import {CardTitle, CardHeader, CardContent, Card, CardFooter} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {RadioGroupItem, RadioGroup} from "@/components/ui/radio-group";

export default async function SelectAvo() {
  const family_tree: Person[] = api.famiy_tree();

  async function handleChoosenAvo(formData: FormData) {
    "use server";
    const value = formData.get("avo");

    const searchParams = new URLSearchParams();

    searchParams.append("avo", value as string);

    redirect(`/todos?${searchParams.toString()}`);
  }

  return (
    <section>
      <form action={handleChoosenAvo} className="w-full">
        <Card>
          <CardHeader>
            <CardTitle>Por quien vas a solicitar tu ciudadania?</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="" name="avo">
              {family_tree
                .filter((person) => person.title !== "Yo")
                .map(({title, key}) => (
                  <div key={key} className="flex items-center space-x-2">
                    <RadioGroupItem id={key} value={key} />
                    <Label htmlFor={key}>{title}</Label>
                  </div>
                ))}
            </RadioGroup>
          </CardContent>
          <CardFooter>
            <Button type="submit">Seleccionar</Button>
          </CardFooter>
        </Card>
      </form>
    </section>
  );
}
