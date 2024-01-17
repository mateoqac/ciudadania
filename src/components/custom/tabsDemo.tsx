import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Label} from "@/components/ui/label";

import Italia from "./italia";
import PreViaje from "./previaje";

export default function TabsDemo({avo: avo}: {avo: string}) {
  return (
    <>
      <Label className="text-bold text-brown text-xl">
        Marca lo que ya tenes para saber que cosas te faltan completar 😄
      </Label>
      <Tabs className="items-center" defaultValue="pre-viaje">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="pre-viaje">Pre Viaje</TabsTrigger>
          <TabsTrigger value="italia">Italia</TabsTrigger>
        </TabsList>
        <TabsContent value="pre-viaje">
          <PreViaje avo={avo} />
        </TabsContent>
        <TabsContent value="italia">
          <Italia />
        </TabsContent>
      </Tabs>
    </>
  );
}
