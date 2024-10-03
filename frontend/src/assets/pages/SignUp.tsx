import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell } from 'lucide-react';
import Link from 'next/link';

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Sign In/Sign Up Form */}
      <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <div className="flex items-center mb-8">
            <Dumbbell className="h-8 w-8 text-primary mr-2" />
            <span className="text-2xl font-bold">FitnessPro</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">
            {isSignIn ? "Welcome back" : "Keep your fitness journey organized"}
          </h1>
          <p className="text-muted-foreground mb-8">
            {isSignIn
              ? "Sign in to continue your fitness journey"
              : "Sign up to start your 30 days free trial"}
          </p>

          <Button variant="outline" className="w-full mb-4">
            <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
            {isSignIn ? "Sign in with Google" : "Sign up with Google"}
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-muted-foreground/20"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <form className="space-y-4">
            {!isSignIn && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <Input id="password" type="password" placeholder="Enter your password" required />
            </div>
            {isSignIn && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-muted-foreground/20 text-primary focus:ring-primary"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link href="/forgot-password" className="text-primary hover:underline">
                    Forgot your password?
                  </Link>
                </div>
              </div>
            )}
            <Button className="w-full">
              {isSignIn ? "Sign In" : "Create Account"}
            </Button>
          </form>

          <p className="mt-4 text-center text-sm">
            {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={toggleForm}
              className="text-primary hover:underline"
            >
              {isSignIn ? "Sign Up Here" : "Login Here"}
            </button>
          </p>
        </div>
      </div>

      {/* Right side - Testimonial and Stats */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-purple-400 to-purple-600 p-12 items-center justify-center">
        <div className="max-w-md">
          <Card className="mb-8 bg-white/10 backdrop-blur-sm text-white">
            <CardContent className="p-6">
              <p className="text-lg mb-4">
                {isSignIn
                  ? `"FitnessPro keeps me motivated and on track with my fitness goals."`
                  : `"FitnessPro helps me keep all my workout and nutrition stuff in one place."`}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 mr-4"></div>
                <div>
                  <p className="font-semibold">
                    {isSignIn ? "Sarah Johnson" : "David Miller"}
                  </p>
                  <p className="text-sm opacity-75">
                    {isSignIn ? "Marathon Runner" : "Fitness Enthusiast"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm text-white">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">
                {isSignIn ? "ENGAGEMENT" : "GROWTH"}
              </h3>
              <p className="text-4xl font-bold mb-2">
                {isSignIn ? "+78.12%" : "+21.35%"}
              </p>
              <p className="text-sm opacity-75">vs last month</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
