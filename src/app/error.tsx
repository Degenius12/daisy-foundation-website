"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-vintage-cream-100">
      <div className="text-center p-8">
        <h2 className="text-2xl font-heading font-bold text-vintage-brown-600 mb-4">
          Something went wrong
        </h2>
        <p className="text-vintage-brown-500 mb-6">
          We apologize for the inconvenience. Please try again.
        </p>
        <Button onClick={() => reset()} className="vintage-button">
          Try again
        </Button>
      </div>
    </div>
  );
}
