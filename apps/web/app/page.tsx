"use client";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <>
      <Authenticated>
        <div className="flex items-center justify-center min-h-svh">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">
              app/web <UserButton />
            </h1>

            <Button onClick={() => addUser()}>Add user</Button>
            {JSON.stringify(users)}
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        Must be signed in
        <SignInButton />
      </Unauthenticated>
    </>
  );
}
