export interface Person {
  key: string;
  title: string;
  descendant: Person | null;
  certificates: Certificate[];
}

export interface User {
  email: string;
  family_tree: Person;
}

export interface Certificate {
  title: string;
  steps: Task[];
}

export interface Task {
  title: string;
  checked: boolean;
}
