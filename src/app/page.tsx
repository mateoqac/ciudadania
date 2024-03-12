import SelectAvo from "@/components/custom/selectAvo";

import AuthForm from "./auth-form";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="col-6 auth-widget">
        <AuthForm />
      </div>
      <SelectAvo />
    </div>
  );
}
