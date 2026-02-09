"use client";

import { Home, Clock, BookOpen, Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ImpactMetrics() {
  const [sectionRef, sectionVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.2 });

  const metrics = [
    {
      value: "50+",
      label: "Families Supported",
      icon: Home,
      description: "Receiving direct program support",
    },
    {
      value: "500+",
      label: "Volunteer Hours",
      icon: Clock,
      description: "Contributed by our community",
    },
    {
      value: "4",
      label: "Active Programs",
      icon: BookOpen,
      description: "Serving our families",
    },
    {
      value: "8",
      label: "Community Partners",
      icon: Building2,
      description: "Working together for impact",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-r from-vintage-sage-200/40 via-daisy-cream-100 to-vintage-sage-200/40 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section intro with animation */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm uppercase tracking-widest text-daisy-gold-600 font-semibold mb-2">
            Our Impact
          </p>
          <div className="flex justify-center items-center gap-3">
            <div className={`h-px bg-daisy-gold-400 transition-all duration-500 delay-300 ${
              sectionVisible ? "w-12" : "w-0"
            }`}></div>
            <span className={`text-daisy-gold-500 text-xl transition-all duration-500 delay-400 ${
              sectionVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}>✿</span>
            <div className={`h-px bg-daisy-gold-400 transition-all duration-500 delay-300 ${
              sectionVisible ? "w-12" : "w-0"
            }`}></div>
          </div>
        </div>

        {/* Metrics grid with staggered entrance */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`flex flex-col items-center text-center p-4 md:p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-daisy-gold-200/50 shadow-sm hover:shadow-lg hover-lift transition-all duration-500 group ${
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: sectionVisible ? `${300 + index * 100}ms` : "0ms",
              }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-vintage-sage-300/30 flex items-center justify-center mb-3 group-hover:bg-vintage-sage-300/50 transition-colors group-hover:scale-110 duration-300">
                <metric.icon
                  className="w-6 h-6 md:w-7 md:h-7 text-daisy-gold-600 group-hover:animate-bounce-gentle"
                  aria-hidden="true"
                />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-daisy-earth-700 font-heading count-up">
                {metric.value}
              </div>
              <div className="text-sm md:text-base font-semibold text-daisy-earth-600 mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-daisy-earth-400 mt-1 hidden md:block">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Growing note with animation */}
        <p className={`text-center text-sm text-daisy-earth-400 mt-8 italic transition-all duration-500 ${
          sectionVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: sectionVisible ? "800ms" : "0ms" }}
        >
          Founded in 2024 and growing every day
        </p>
      </div>
    </section>
  );
}
