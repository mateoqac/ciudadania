import { SelectAvoBis } from "@/components/custom/selectAvo";

import AuthForm from "./auth-form";

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col gap-4">
      <AuthForm />

      {/* <SelectAvo /> */}

      <SelectAvoBis />
    </div>
  );
}
