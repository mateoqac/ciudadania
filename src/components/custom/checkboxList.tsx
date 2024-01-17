import type {Task} from "@/types";

import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";

export default function CheckboxList({list}: {list: Task[]}) {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border p-4">
        <div className="mt-2 space-y-2 pl-6">
          {list.map(({title}: Task, index: number) => (
            <div key={title + index.toString()} className="flex items-center space-x-2">
              <Checkbox id={title} />
              <Label htmlFor={title}>{title}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
