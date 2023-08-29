import React from "react";
import { Timer } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center">
        <Timer />
        <h1>Time</h1>
      </div>
      <Button variant={"default"}>Logout</Button>
    </div>
  );
}
