import type {Task} from "@/types";

import api from "@/api";

import CheckboxList from "./checkboxList";

const italianTasks: Task[] = api.italy.tasks();

export default function Italia() {
  return <CheckboxList list={italianTasks} />;
}
