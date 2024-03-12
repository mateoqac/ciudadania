"use client";
import type {Database} from "../types/supabase";

import {Auth} from "@supabase/auth-ui-react";
import {ThemeSupa} from "@supabase/auth-ui-shared";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>();

  return (
    <Auth
      appearance={{theme: ThemeSupa}}
      providers={[]}
      redirectTo="http://localhost:3000/auth/callback"
      showLinks={false}
      supabaseClient={supabase}
      theme="dark"
      view="magic_link"
    />
  );
}
