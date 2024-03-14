import Link from "next/link";
import api from "@/api";

import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";

import type { Person } from "@/types";

export default function SelectAvo(): JSX.Element {
  const family_tree: Person[] = api.famiy_tree();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Por quien vas a solicitar tu ciudadania?</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        {family_tree
          .filter((person) => person.title !== "Yo")
          .map(({ title, key }) => (
            <Link
              className="border rounded-sm p-2 hover:bg-primary-foreground"
              href={{ pathname: "/todos", query: { avo: key } }}
              key={key}
              prefetch={false}
            >
              {title}
            </Link>
          ))}
      </CardContent>
    </Card>
  );
}
