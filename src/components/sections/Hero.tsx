"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Heart, Users, Target } from "lucide-react";
import { formatCurrency } from "@/lib/utils/formatting";

export function Hero() {
  const monthlyGoal = 25000;
  const currentAmount = 17000;
  const progress = (currentAmount / monthlyGoal) * 100;

  const pillars = [
    {
      icon: Heart,
      title: "Direct Support",
      description: "Immediate help for families in need",
    },
    {
      icon: Users,
      title: "Local Partners",
      description: "Collaborating with community organizations",
    },
    {
      icon: Target,
      title: "Lasting Impact",
      description: "Building foundations for lifelong success",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-daisy-forest-50 via-daisy-teal-light/20 to-daisy-sunshine-100 py-20 lg:py-28">
      {/* Decorative circles for playful feel */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-daisy-coral-light/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-daisy-lavender-light/30 rounded-full blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Help every family feel{" "}
              <span className="text-daisy-forest-700">supported</span> — and every
              child feel <span className="text-daisy-coral">seen</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Every child deserves quality early childhood education. We bridge the gap
              for families who need it most.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="shadow-daisy-glow" asChild>
                <a href="#donate">Donate Now</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#programs">Explore Programs</a>
              </Button>
            </div>

            {/* Three Pillars */}
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {pillars.map((pillar, index) => {
                const colors = [
                  { bg: "bg-daisy-coral-light/30", icon: "text-daisy-coral-deep" },
                  { bg: "bg-daisy-teal-light/30", icon: "text-daisy-teal-deep" },
                  { bg: "bg-daisy-lavender-light/30", icon: "text-daisy-lavender-deep" },
                ];
                return (
                  <div key={pillar.title} className="text-center">
                    <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${colors[index].bg} shadow-daisy-sm`}>
                      <pillar.icon className={`h-7 w-7 ${colors[index].icon}`} aria-hidden="true" />
                    </div>
                    <h3 className="mt-3 text-sm font-semibold text-gray-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-600">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Monthly Focus Card */}
          <div>
            <Card className="border-2 border-daisy-sunshine-300 shadow-daisy-xl bg-gradient-to-br from-white to-daisy-sunshine-50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-daisy-forest-700">This Month&apos;s Focus</CardTitle>
                  <span className="rounded-full bg-daisy-sunshine-400 px-3 py-1 text-xs font-semibold text-gray-900 shadow-daisy-sm">
                    Active
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Backpacks & Tutoring Support
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Help us provide school supplies and after-school tutoring for 200
                    students preparing for the new academic year.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-700">Progress</span>
                    <span className="font-semibold text-daisy-forest-700">
                      {Math.round(progress)}%
                    </span>
                  </div>
                  <Progress value={progress} className="h-3" />
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{formatCurrency(currentAmount)} raised</span>
                    <span>Goal: {formatCurrency(monthlyGoal)}</span>
                  </div>
                </div>

                <Button className="w-full" size="lg" asChild>
                  <a href="#donate">Contribute Now</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
