"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Instagram } from "lucide-react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
        <div className="flex flex-col items-center space-y-6">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full">
            <Instagram className="h-6 w-6 text-white" />
          </div>
          
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-gray-500 dark:text-gray-400">Sign in to your account</p>
          </div>

          <form className="w-full space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoCapitalize="none"
                autoComplete="current-password"
                autoCorrect="off"
              />
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
              Sign In
            </Button>
          </form>

          <div className="flex items-center space-x-2">
            <div className="bg-gray-200 h-px flex-1 dark:bg-gray-700"></div>
            <span className="text-gray-500 text-sm dark:text-gray-400">OR</span>
            <div className="bg-gray-200 h-px flex-1 dark:bg-gray-700"></div>
          </div>

          <Link href="/library" className="w-full">
            <Button variant="outline" className="w-full">
              Continue without login
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}