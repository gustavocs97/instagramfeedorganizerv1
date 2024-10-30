"use client";

import { Button } from "@/components/ui/button";
import { Grid, LayoutGrid } from "lucide-react";

interface ViewToggleProps {
  view: "grid" | "feed";
  onViewChange: (view: "grid" | "feed") => void;
}

export function ViewToggle({ view, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex gap-4">
      <Button
        variant={view === "grid" ? "default" : "outline"}
        onClick={() => onViewChange("grid")}
      >
        <Grid className="mr-2 h-4 w-4" />
        Grid View
      </Button>
      <Button
        variant={view === "feed" ? "default" : "outline"}
        onClick={() => onViewChange("feed")}
      >
        <LayoutGrid className="mr-2 h-4 w-4" />
        Feed View
      </Button>
    </div>
  );
}