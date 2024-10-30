"use client";

import { Card } from "@/components/ui/card";
import { ImagePlus } from "lucide-react";

interface UploadZoneProps {
  onUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function UploadZone({ onUpload }: UploadZoneProps) {
  return (
    <Card className="p-8 mb-8 bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <ImagePlus className="w-12 h-12 mb-4 text-gray-500" />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            type="file"
            className="hidden"
            multiple
            accept="image/*"
            onChange={onUpload}
          />
        </label>
      </div>
    </Card>
  );
}