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
    <footer className="relative overflow-hidden">
      {/* Daisy footer background with green foliage */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/photos/footer/daisy-footer.png')]"></div>
        {/* Dark green overlay matching natural foliage for white text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 via-emerald-800/75 to-emerald-900/85"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-white">
              <span className="script-text text-3xl">Daisy&apos;s</span> Foundation
            </h3>
            <p className="text-white/90 text-sm mb-4 leading-relaxed">
              Honoring Grandmother Daisy&apos;s legacy by providing quality early childhood
              education support to families in need.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Heart className="h-4 w-4 text-vintage-gold-400" aria-hidden="true" />
              <span className="accent-text text-white/90">Every child deserves a strong start</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#story"
                  className="text-white/90 hover:text-vintage-gold-400 transition-colors inline-block"
                >
                  The Story of Daisy
                </a>
              </li>
              <li>
                <a
                  href="#mission"
                  className="text-white/90 hover:text-vintage-gold-400 transition-colors inline-block"
                >
                  Mission & Values
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-white/90 hover:text-vintage-gold-400 transition-colors inline-block"
                >
                  Our Programs
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  className="text-white/90 hover:text-vintage-gold-400 transition-colors inline-block"
                >
                  Our Impact
                </a>
              </li>
              <li>
                <a
                  href="#donate"
                  className="text-white/90 hover:text-vintage-gold-400 transition-colors inline-block"
                >
                  Donate
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/90 hover:text-vintage-gold-400 transition-colors inline-block"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-white">Stay Connected</h3>
            <p className="text-white/90 text-sm mb-4 leading-relaxed">
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
                  className="bg-vintage-cream-50 border-vintage-beige-300 text-vintage-brown-600 placeholder:text-vintage-brown-300 focus:border-vintage-gold-400 focus:ring-vintage-gold-400"
                  data-testid="newsletter-email"
                />
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-vintage-gold-500 hover:bg-vintage-gold-600 text-white border-2 border-vintage-gold-600"
                  data-testid="newsletter-submit"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </div>

              {status === "success" && (
                <Alert
                  variant="default"
                  className="bg-white/20 border-vintage-gold-400 text-white"
                  data-testid="newsletter-success"
                >
                  <AlertDescription>{message}</AlertDescription>
                </Alert>
              )}

              {status === "error" && (
                <Alert
                  variant="destructive"
                  className="bg-red-900/20 border-red-400 text-white"
                >
                  <AlertDescription>{message}</AlertDescription>
                </Alert>
              )}
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/80 text-center sm:text-left">
              © {new Date().getFullYear()} Daisy&apos;s Foundation{" "}
              <span className="text-vintage-gold-400">· In Her Name</span>
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> · </span>
              All rights reserved.
            </p>
            <p className="text-xs text-white/70">
              Co-created with{" "}
              <a
                href="https://claude.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vintage-gold-400 hover:text-vintage-gold-300 transition-colors font-semibold"
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
