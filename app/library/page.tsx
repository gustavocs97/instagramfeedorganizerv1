"use client";

import { useState } from "react";
import { ImageGrid } from "./components/ImageGrid";
import { UploadZone } from "./components/UploadZone";
import { ViewToggle } from "./components/ViewToggle";

export default function Library() {
  const [images, setImages] = useState<string[]>([]);
  const [view, setView] = useState<"grid" | "feed">("grid");
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [targetIndex, setTargetIndex] = useState<number | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImages(prev => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragEnter = (index: number) => {
    if (draggedIndex === null || draggedIndex === index) return;
    setTargetIndex(index);
  };

  const handleDragEnd = () => {
    if (draggedIndex !== null && targetIndex !== null) {
      setImages(prev => {
        const newImages = [...prev];
        const draggedImage = newImages[draggedIndex];
        newImages[draggedIndex] = newImages[targetIndex];
        newImages[targetIndex] = draggedImage;
        return newImages;
      });
    }
    setDraggedIndex(null);
    setTargetIndex(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Image Library</h1>
          <ViewToggle view={view} onViewChange={setView} />
        </div>

        <UploadZone onUpload={handleFileUpload} />

        <ImageGrid 
          images={images} 
          view={view} 
          onRemove={handleRemoveImage}
          onDragStart={handleDragStart}
          onDragEnter={handleDragEnter}
          onDragEnd={handleDragEnd}
          draggedIndex={draggedIndex}
          targetIndex={targetIndex}
        />
      </div>
    </div>
  );
}