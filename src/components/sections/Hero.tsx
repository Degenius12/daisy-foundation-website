"use client";

import { Heart, Users, BookOpen } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative bg-daisy-cream-50 py-20 lg:py-28 overflow-hidden min-h-[85vh] flex items-center">
      {/* Background image with warm golden overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/photos/hero/daisy-hero-golden.png')] animate-fade-in"></div>
        {/* Warm golden gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-daisy-cream-50/20 via-transparent to-daisy-cream-50/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-daisy-cream-50/25 via-transparent to-daisy-cream-50/10"></div>
      </div>

      {/* Floating decorative daisies in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] w-16 h-16 opacity-25 float-daisy" aria-hidden="true"><img src="/images/decorative/daisy-single.svg" alt="" className="w-full h-full" /></div>
        <div className="absolute top-40 right-[15%] w-10 h-10 opacity-20 float-daisy-delayed" aria-hidden="true"><img src="/images/decorative/daisy-single.svg" alt="" className="w-full h-full" /></div>
        <div className="absolute bottom-32 left-[20%] w-12 h-12 opacity-20 float-daisy" aria-hidden="true"><img src="/images/decorative/daisy-single.svg" alt="" className="w-full h-full" /></div>
        <div className="absolute bottom-48 right-[25%] w-8 h-8 opacity-20 float-daisy-delayed" aria-hidden="true"><img src="/images/decorative/daisy-single.svg" alt="" className="w-full h-full" /></div>
        <div className="absolute top-1/3 left-[40%] w-20 h-20 opacity-[0.08] float-daisy" aria-hidden="true"><img src="/images/decorative/daisy-single.svg" alt="" className="w-full h-full" /></div>
        <div className="absolute bottom-20 right-[35%] w-10 h-10 opacity-[0.12] float-daisy-delayed" aria-hidden="true"><img src="/images/decorative/daisy-single.svg" alt="" className="w-full h-full" /></div>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          {/* Decorative daisy with enhanced animation */}
          <div className="mb-6 animate-fade-in animate-float flex justify-center">
            <img src="/images/decorative/daisy-single.svg" alt="" className="w-10 h-10" aria-hidden="true" />
          </div>

          {/* Main headline - Clear value proposition with staggered animation */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight tracking-tight [text-shadow:_2px_2px_12px_rgb(255_250_240_/_80%),_0_0_20px_rgb(255_250_240_/_60%)] animate-fade-in [animation-delay:200ms] [animation-fill-mode:backwards]">
            <span className="text-daisy-earth-700 inline-block animate-slide-up [animation-delay:300ms] [animation-fill-mode:backwards]">Every child deserves a</span>
            <br />
            <span className="text-daisy-gold-500 inline-block animate-slide-up [animation-delay:500ms] [animation-fill-mode:backwards] [text-shadow:_2px_2px_8px_rgb(255_250_240_/_90%)]">
              Grandmother Daisy
            </span>
          </h1>

          {/* Clear subtitle - What we do */}
          <p className="mt-6 text-lg md:text-xl lg:text-2xl font-sans text-daisy-earth-600 max-w-2xl mx-auto leading-relaxed [text-shadow:_1px_1px_8px_rgb(255_250_240_/_80%)] animate-fade-in [animation-delay:700ms] [animation-fill-mode:backwards]">
            Providing quality early childhood education to families who need it most.
            Honoring a grandmother&apos;s legacy of love, one child at a time.
          </p>

          {/* Three CTAs with staggered entrance */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              onClick={() => scrollToSection("donate")}
              className="flex items-center gap-2 bg-daisy-sage-600 hover:bg-daisy-sage-700 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover-glow animate-scale-in [animation-delay:900ms] [animation-fill-mode:backwards]"
            >
              <Heart className="w-5 h-5 icon-bounce" aria-hidden="true" />
              Donate Now
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white text-daisy-earth-700 font-semibold text-lg px-8 py-4 rounded-full border-2 border-daisy-gold-400 shadow-md hover:shadow-lg transition-all hover-lift animate-scale-in [animation-delay:1000ms] [animation-fill-mode:backwards]"
            >
              <Users className="w-5 h-5 icon-bounce" aria-hidden="true" />
              Volunteer
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("story")}
              className="flex items-center gap-2 text-daisy-earth-600 hover:text-daisy-gold-600 font-semibold text-lg px-6 py-4 transition-colors underline-animate animate-fade-in [animation-delay:1100ms] [animation-fill-mode:backwards]"
            >
              <BookOpen className="w-5 h-5 icon-bounce" aria-hidden="true" />
              Our Story
            </button>
          </div>

          {/* Decorative divider with animation */}
          <div className="flex items-center justify-center my-10 animate-fade-in [animation-delay:1200ms] [animation-fill-mode:backwards]">
            <img src="/images/decorative/floral-divider.svg" alt="" className="h-6 w-auto animate-float" aria-hidden="true" />
          </div>

          {/* Mini impact bar - Social proof */}
          <div className="inline-flex flex-wrap justify-center items-center gap-4 sm:gap-8 bg-white/70 backdrop-blur-sm px-6 py-4 rounded-full border border-daisy-gold-200 shadow-md animate-slide-up [animation-delay:1300ms] [animation-fill-mode:backwards] hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 text-daisy-earth-600">
              <span className="text-xl font-bold text-daisy-gold-600">50+</span>
              <span className="text-sm">Families Supported</span>
            </div>
            <div className="hidden sm:block text-daisy-gold-400">•</div>
            <div className="flex items-center gap-2 text-daisy-earth-600">
              <span className="text-xl font-bold text-daisy-gold-600">500+</span>
              <span className="text-sm">Volunteer Hours</span>
            </div>
            <div className="hidden sm:block text-daisy-gold-400">•</div>
            <div className="flex items-center gap-2 text-daisy-earth-600">
              <span className="text-sm">Founded</span>
              <span className="text-xl font-bold text-daisy-gold-600">2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave/curve */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-vintage-sage-100 to-transparent"></div>
    </section>
  );
}
