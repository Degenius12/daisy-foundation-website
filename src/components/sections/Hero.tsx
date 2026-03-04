"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Sparkles } from "lucide-react";

export function Hero() {
  const values = [
    {
      icon: Heart,
      title: "Love & Care",
      description: "Every family deserves support",
    },
    {
      icon: Users,
      title: "Community",
      description: "We build together",
    },
    {
      icon: Sparkles,
      title: "Hope",
      description: "Brighter futures for all",
    },
  ];

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
      {/* Background daisy photo */}
      <Image
        src="/images/hero/hero-community.png"
        alt="African American multigenerational family gathering outdoors in a sunlit community park with daisy wildflowers"
        fill
        className="object-cover"
        priority
        quality={85}
      />
      {/* Warm cream overlay for text readability */}
      <div className="absolute inset-0 bg-cream-50/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
            Every child deserves{" "}
            <span className="text-daisy-forest-600 block mt-2">love, support & opportunity</span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
            Honoring Grandmother Daisy&apos;s legacy by creating safe, healthy communities
            where families thrive together.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" className="text-lg shadow-lg bg-daisy-forest-600 hover:bg-daisy-forest-700" asChild>
              <a href="#donate">Support Our Mission</a>
            </Button>
            <Button size="xl" variant="outline" className="text-lg border-daisy-forest-600 text-daisy-forest-600 hover:bg-daisy-forest-50 bg-white/70" asChild>
              <a href="#programs">See What We Do</a>
            </Button>
          </div>

          {/* Three Values */}
          <div className="mt-20 grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
            {values.map((value, index) => {
              const colors = [
                { bg: "bg-white/80 backdrop-blur-sm", border: "border-daisy-sunshine-300", icon: "text-daisy-sunshine-700" },
                { bg: "bg-white/80 backdrop-blur-sm", border: "border-daisy-forest-400", icon: "text-daisy-forest-700" },
                { bg: "bg-white/80 backdrop-blur-sm", border: "border-daisy-sunshine-300", icon: "text-daisy-sunshine-600" },
              ];
              return (
                <Card key={value.title} className={`border-2 ${colors[index].border} ${colors[index].bg} shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}>
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                      <value.icon className={`h-8 w-8 ${colors[index].icon}`} aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-gray-900">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
