"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImagePlus, LogIn } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Plan Your Perfect
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Instagram Feed</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Design, organize, and visualize your Instagram content before posting. Create stunning feeds that tell your story.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/library">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <ImagePlus className="mr-2 h-5 w-5" />
                Start Planning
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg">
                <LogIn className="mr-2 h-5 w-5" />
                Sign In
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6 bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
            <h3 className="text-xl font-semibold mb-3">Quick Access</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Start planning immediately - no login required. Your work is saved locally.
            </p>
          </Card>

          <Card className="p-6 bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
            <h3 className="text-xl font-semibold mb-3">Image Library</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Upload, organize, and manage your photos with our intuitive drag-and-drop interface.
            </p>
          </Card>

          <Card className="p-6 bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
            <h3 className="text-xl font-semibold mb-3">Feed Preview</h3>
            <p className="text-gray-600 dark:text-gray-300">
              See exactly how your feed will look. Rearrange posts until it's perfect.
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}