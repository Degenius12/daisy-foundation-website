"use client";

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
    <section className="relative bg-vintage-cream-100 py-20 lg:py-32 overflow-hidden">
      {/* Daisy field banner background with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/photos/hero/daisy-field-banner.png')]"></div>
        {/* Gradient overlay for readability - reduced opacity to show daisies */}
        <div className="absolute inset-0 bg-gradient-to-br from-vintage-cream-50/40 via-vintage-cream-100/35 to-vintage-beige-200/40"></div>
      </div>


      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          {/* Main Tagline - "In Her Name" */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-vintage-brown-600 leading-tight tracking-tight [text-shadow:_2px_2px_8px_rgb(250_248_243_/_80%),_0_0_12px_rgb(250_248_243_/_60%)]">
            In Her Name
          </h1>

          {/* Decorative divider */}
          <div className="flex items-center justify-center my-8">
            <div className="h-px w-32 bg-vintage-gold-400"></div>
            <div className="mx-4 h-2 w-2 rounded-full bg-vintage-gold-500"></div>
            <div className="h-px w-32 bg-vintage-gold-400"></div>
          </div>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-heading italic text-vintage-brown-500 leading-relaxed [text-shadow:_1px_1px_6px_rgb(250_248_243_/_70%),_0_0_8px_rgb(250_248_243_/_50%)]">
            Rooted in love. Growing in community.
          </p>

          {/* Mission intro about Grandmother Daisy */}
          <p className="mt-8 text-lg md:text-xl font-sans leading-relaxed text-vintage-brown-600 max-w-3xl mx-auto [text-shadow:_1px_1px_4px_rgb(250_248_243_/_70%),_0_0_6px_rgb(250_248_243_/_50%)]">
            Grandmother Daisy believed every child deserves to be seen, heard, and cherished.
            Her home was a sanctuary where favorite meals were always ready, where listening ears
            were always available, and where love was abundant. Today, we honor her legacy by
            supporting families with quality early childhood education, nurturing the next
            generation just as she nurtured us.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              onClick={() => scrollToSection("donate")}
              className="vintage-button text-lg px-8 py-3"
            >
              Support Our Mission
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("story")}
              className="vintage-button-outline text-lg px-8 py-3"
            >
              Learn About Daisy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
