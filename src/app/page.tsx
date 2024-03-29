"use client";

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import { SignInButton } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const createFile = useMutation(api.files.createFile);
  const files = useQuery(api.files.getFiles);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedOut>
        <SignInButton mode="modal">
          <Button>SignIn</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton>
          <Button>SignOut</Button>
        </SignOutButton>
      </SignedIn>

      {files?.map((file)=>{
        return <div key={file._id}>{file.name}</div>
      })}

      <Button
        onClick={() => {
          createFile({
            name: "test.txt",
          });
        }}
      >
        Click Me
      </Button>
    </main>
  );
}
