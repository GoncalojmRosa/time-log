"use client";
import React from "react";
import { Timer } from "lucide-react";
import { Button } from "./ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const path = usePathname();
  const supabase = createClientComponentClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  const isAuthPage = path === "/auth";

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center">
        <Timer />
        <h1>Time</h1>
      </div>

      {!isAuthPage && (
        <Button variant={"default"} onClick={handleLogout}>
          Logout
        </Button>
      )}
    </div>
  );
}
