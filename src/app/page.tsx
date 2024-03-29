"use client"

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedOut>
        <SignInButton mode="modal"/>
      </SignedOut>
      <SignedIn>
        <SignOutButton/>
      </SignedIn>
      <Button>Click me!</Button>
    </main>
  );
}
