"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Heart, Mail } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Successfully subscribed to newsletter!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Failed to subscribe. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("An error occurred. Please try again.");
    }

    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 5000);
  };

  return (
    <footer className="bg-gradient-to-br from-daisy-forest-700 via-daisy-teal to-daisy-forest-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Daisy Foundation</h3>
            <p className="text-white/90 text-sm mb-4">
              Honoring Grandmother Daisy&apos;s legacy by providing quality early childhood
              education support to families in need.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Heart className="h-4 w-4" aria-hidden="true" />
              <span>Every child deserves a strong start</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#mission" className="text-white/90 hover:text-white transition-colors">
                  Mission & Values
                </a>
              </li>
              <li>
                <a href="#programs" className="text-white/90 hover:text-white transition-colors">
                  Our Programs
                </a>
              </li>
              <li>
                <a href="#impact" className="text-white/90 hover:text-white transition-colors">
                  Our Impact
                </a>
              </li>
              <li>
                <a href="#donate" className="text-white/90 hover:text-white transition-colors">
                  Donate
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/90 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-white/90 text-sm mb-4">
              Get updates on our programs and impact stories.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === "loading"}
                  className="bg-white text-gray-900"
                  data-testid="newsletter-email"
                />
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  variant="secondary"
                  data-testid="newsletter-submit"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </div>

              {status === "success" && (
                <Alert variant="success" data-testid="newsletter-success">
                  <AlertDescription>{message}</AlertDescription>
                </Alert>
              )}

              {status === "error" && (
                <Alert variant="destructive">
                  <AlertDescription>{message}</AlertDescription>
                </Alert>
              )}
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/80">
              © {new Date().getFullYear()} Daisy Foundation. All rights reserved.
            </p>
            <p className="text-xs text-white/70">
              Co-created with{" "}
              <a
                href="https://claude.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-daisy-sunshine-light hover:text-white transition-colors font-semibold"
              >
                Claude Code
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
