import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <main className="h-screen bg-dark-1 flex w-full items-center justify-center">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
