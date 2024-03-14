import AuthForm from "./auth-form";
import SelectAvo from "@/components/custom/selectAvo";

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col gap-4">
      <AuthForm />
      <SelectAvo />
    </div>
  );
}
