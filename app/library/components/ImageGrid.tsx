"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ImageGridProps {
  images: string[];
  view: "grid" | "feed";
  onRemove: (index: number) => void;
  onDragStart: (index: number) => void;
  onDragEnter: (index: number) => void;
  onDragEnd: () => void;
  draggedIndex: number | null;
  targetIndex: number | null;
}

export function ImageGrid({ 
  images, 
  view, 
  onRemove,
  onDragStart,
  onDragEnter,
  onDragEnd,
  draggedIndex,
  targetIndex
}: ImageGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4",
        view === "grid"
          ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          : "grid-cols-3",
        view === "feed" && "max-w-[990px] mx-auto"
      )}
    >
      {images.map((image, index) => (
        <div
          key={`image-${index}`}
          draggable
          onDragStart={() => onDragStart(index)}
          onDragEnter={() => onDragEnter(index)}
          onDragEnd={onDragEnd}
          onDragOver={(e) => e.preventDefault()}
          className={cn(
            "aspect-square relative group",
            "transition-all duration-200 ease-in-out",
            "rounded-lg overflow-hidden",
            "cursor-move",
            draggedIndex === index && "opacity-50 scale-95 ring-2 ring-purple-500 ring-offset-2",
            targetIndex === index && "ring-2 ring-purple-500 ring-offset-2 scale-105",
            draggedIndex !== null && draggedIndex !== index && !targetIndex && "hover:ring-2 hover:ring-purple-500 hover:ring-offset-2"
          )}
        >
          <Image
            src={image}
            alt={`Uploaded image ${index + 1}`}
            fill
            className="object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-200 flex items-center justify-center">
            <Button
              variant="destructive"
              size="sm"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                onRemove(index);
              }}
            >
              Remove
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}