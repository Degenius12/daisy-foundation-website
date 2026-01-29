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

      {/* Repeating daisy pattern background */}
      <div className="absolute inset-0 opacity-15 bg-[url('/images/textures/daisy-pattern.svg')] bg-repeat [background-size:200px_200px]"></div>

      {/* Decorative daisy clusters in corners */}
      <div className="absolute top-8 left-8 opacity-20 pointer-events-none">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Large daisy cluster - top left */}
          <g transform="translate(40, 40)">
            {/* Center daisy */}
            <ellipse cx="0" cy="-15" rx="6" ry="15" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
            <ellipse cx="0" cy="15" rx="6" ry="15" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
            <ellipse cx="-15" cy="0" rx="15" ry="6" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
            <ellipse cx="15" cy="0" rx="15" ry="6" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
            <ellipse cx="-11" cy="-11" rx="13" ry="5" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" transform="rotate(-45 -11 -11)" />
            <ellipse cx="11" cy="-11" rx="13" ry="5" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" transform="rotate(45 11 -11)" />
            <ellipse cx="-11" cy="11" rx="13" ry="5" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" transform="rotate(45 -11 11)" />
            <ellipse cx="11" cy="11" rx="13" ry="5" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" transform="rotate(-45 11 11)" />
            <circle r="8" fill="#C9A961" stroke="#A68952" strokeWidth="1.5" />
          </g>
          {/* Smaller daisies around */}
          <g transform="translate(100, 20)">
            <ellipse cx="0" cy="-8" rx="3" ry="8" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
            <ellipse cx="0" cy="8" rx="3" ry="8" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
            <ellipse cx="-8" cy="0" rx="8" ry="3" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
            <ellipse cx="8" cy="0" rx="8" ry="3" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
            <circle r="4" fill="#C9A961" stroke="#A68952" strokeWidth="1" />
          </g>
          <g transform="translate(20, 100)">
            <ellipse cx="0" cy="-8" rx="3" ry="8" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
            <ellipse cx="0" cy="8" rx="3" ry="8" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
            <ellipse cx="-8" cy="0" rx="8" ry="3" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
            <ellipse cx="8" cy="0" rx="8" ry="3" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
            <circle r="4" fill="#C9A961" stroke="#A68952" strokeWidth="1" />
          </g>
        </svg>
      </div>

      <div className="absolute bottom-8 right-8 opacity-20 pointer-events-none">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Large daisy cluster - bottom right */}
          <g transform="translate(140, 140)">
            {/* Center daisy */}
            <ellipse cx="0" cy="-15" rx="6" ry="15" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
            <ellipse cx="0" cy="15" rx="6" ry="15" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
            <ellipse cx="-15" cy="0" rx="15" ry="6" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
            <ellipse cx="15" cy="0" rx="15" ry="6" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
            <ellipse cx="-11" cy="-11" rx="13" ry="5" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" transform="rotate(-45 -11 -11)" />
            <ellipse cx="11" cy="-11" rx="13" ry="5" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" transform="rotate(45 11 -11)" />
            <ellipse cx="-11" cy="11" rx="13" ry="5" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" transform="rotate(45 -11 11)" />
            <ellipse cx="11" cy="11" rx="13" ry="5" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" transform="rotate(-45 11 11)" />
            <circle r="8" fill="#C9A961" stroke="#A68952" strokeWidth="1.5" />
          </g>
          {/* Smaller daisies around */}
          <g transform="translate(80, 160)">
            <ellipse cx="0" cy="-8" rx="3" ry="8" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
            <ellipse cx="0" cy="8" rx="3" ry="8" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
            <ellipse cx="-8" cy="0" rx="8" ry="3" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
            <ellipse cx="8" cy="0" rx="8" ry="3" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
            <circle r="4" fill="#C9A961" stroke="#A68952" strokeWidth="1" />
          </g>
          <g transform="translate(160, 80)">
            <ellipse cx="0" cy="-8" rx="3" ry="8" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
            <ellipse cx="0" cy="8" rx="3" ry="8" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
            <ellipse cx="-8" cy="0" rx="8" ry="3" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
            <ellipse cx="8" cy="0" rx="8" ry="3" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
            <circle r="4" fill="#C9A961" stroke="#A68952" strokeWidth="1" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          {/* Main Tagline - "In Her Name" */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-vintage-brown-600 leading-tight tracking-tight [text-shadow:_2px_2px_8px_rgb(250_248_243_/_80%),_0_0_12px_rgb(250_248_243_/_60%)]">
            In Her Name
          </h1>

          {/* Decorative divider with single daisy */}
          <div className="flex items-center justify-center my-8">
            <div className="h-px w-20 bg-vintage-gold-400"></div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-4"
            >
              <g transform="translate(20, 20)">
                <ellipse cx="0" cy="-8" rx="3" ry="8" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
                <ellipse cx="0" cy="8" rx="3" ry="8" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
                <ellipse cx="-8" cy="0" rx="8" ry="3" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
                <ellipse cx="8" cy="0" rx="8" ry="3" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
                <ellipse cx="-6" cy="-6" rx="7" ry="3" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" transform="rotate(-45 -6 -6)" />
                <ellipse cx="6" cy="-6" rx="7" ry="3" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" transform="rotate(45 6 -6)" />
                <ellipse cx="-6" cy="6" rx="7" ry="3" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" transform="rotate(45 -6 6)" />
                <ellipse cx="6" cy="6" rx="7" ry="3" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" transform="rotate(-45 6 6)" />
                <circle r="4" fill="#C9A961" stroke="#A68952" strokeWidth="1" />
              </g>
            </svg>
            <div className="h-px w-20 bg-vintage-gold-400"></div>
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
