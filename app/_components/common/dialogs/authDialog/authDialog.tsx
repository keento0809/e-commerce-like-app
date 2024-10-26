"use client";

import { useState } from "react";

import { Button } from "../../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../ui/dialog";
import { LoginForm } from "../../forms/loginForm/loginForm";
import { SignUpForm } from "../../forms/signupForm/signupForm";

export function AuthDialog() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Sign In</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isLogin ? "Sign In" : "Create Account"}</DialogTitle>
          <DialogDescription>
            {isLogin
              ? "Enter your credentials to access your account"
              : "Fill in the information below to create your account"}
          </DialogDescription>
        </DialogHeader>
        {isLogin ? <LoginForm /> : <SignUpForm />}
        <Button
          variant="link"
          className="mt-2"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Don't have an account? Sign up"
            : "Already have an account? Sign in"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
