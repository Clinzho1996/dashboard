import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <main className="h-screen flex bg-dark-1 w-full items-center justify-center">
      <SignIn />
    </main>
  );
};

export default SignInPage;
