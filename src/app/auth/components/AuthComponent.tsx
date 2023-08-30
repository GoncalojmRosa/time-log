"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import React from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AuthComponent() {
  const supabase = createClientComponentClient();

  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };
  return (
    <div className="p-5">
      <Navbar />
      <div className="flex items-center justify-center h-80vh">
        <div className="text-center space-y-5">
          <p>
            Remember, time is your most valuable asset. <br /> Invest it wisely
            with our Time Log App.
          </p>
          <Button onClick={handleLogin}>Login with Github</Button>
        </div>
      </div>
    </div>
  );
}
