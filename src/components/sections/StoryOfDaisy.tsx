"use client";

export function StoryOfDaisy() {
  return (
    <section id="story" className="relative bg-vintage-beige-100 py-20 lg:py-32 overflow-hidden">
      {/* Daisy photo background with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/photos/daisies/story-daisies.jpg')]"></div>
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-vintage-beige-100/92 via-vintage-beige-200/88 to-vintage-cream-200/90"></div>
      </div>

      {/* Repeating daisy pattern background */}
      <div className="absolute inset-0 opacity-12 bg-[url('/images/textures/daisy-pattern.svg')] bg-repeat [background-size:200px_200px]"></div>

      {/* Decorative daisy cluster in corner */}
      <div className="absolute top-12 right-12 opacity-15 pointer-events-none hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(60, 60)">
            {/* Large decorative daisy */}
            <ellipse cx="0" cy="-20" rx="8" ry="20" fill="#FDFCFA" stroke="#6B5744" strokeWidth="2" />
            <ellipse cx="0" cy="20" rx="8" ry="20" fill="#FDFCFA" stroke="#6B5744" strokeWidth="2" />
            <ellipse cx="-20" cy="0" rx="20" ry="8" fill="#FDFCFA" stroke="#6B5744" strokeWidth="2" />
            <ellipse cx="20" cy="0" rx="20" ry="8" fill="#FDFCFA" stroke="#6B5744" strokeWidth="2" />
            <ellipse cx="-14" cy="-14" rx="16" ry="6" fill="#FDFCFA" stroke="#6B5744" strokeWidth="2" transform="rotate(-45 -14 -14)" />
            <ellipse cx="14" cy="-14" rx="16" ry="6" fill="#FDFCFA" stroke="#6B5744" strokeWidth="2" transform="rotate(45 14 -14)" />
            <ellipse cx="-14" cy="14" rx="16" ry="6" fill="#FDFCFA" stroke="#6B5744" strokeWidth="2" transform="rotate(45 -14 14)" />
            <ellipse cx="14" cy="14" rx="16" ry="6" fill="#FDFCFA" stroke="#6B5744" strokeWidth="2" transform="rotate(-45 14 14)" />
            <circle r="10" fill="#C9A961" stroke="#A68952" strokeWidth="2" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-vintage-brown-600 leading-tight">
            The Story of Daisy
          </h2>
          <div className="mt-6 flex items-center justify-center">
            <div className="h-px w-16 bg-vintage-gold-400"></div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-3"
            >
              <g transform="translate(16, 16)">
                <ellipse cx="0" cy="-6" rx="2" ry="6" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
                <ellipse cx="0" cy="6" rx="2" ry="6" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
                <ellipse cx="-6" cy="0" rx="6" ry="2" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
                <ellipse cx="6" cy="0" rx="6" ry="2" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
                <circle r="3" fill="#C9A961" stroke="#A68952" strokeWidth="1" />
              </g>
            </svg>
            <div className="h-px w-16 bg-vintage-gold-400"></div>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo column - left */}
          <div className="relative flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              {/* Vintage frame effect */}
              <div className="absolute -inset-4 bg-vintage-beige-300 border-4 border-vintage-brown-400 shadow-vintage-lg transform rotate-2"></div>
              <div className="relative bg-vintage-cream-50 p-3 border-2 border-vintage-brown-300 shadow-vintage-md">
                <div className="relative w-80 h-96 md:w-96 md:h-[480px]">
                  {/* Placeholder for Grandmother Daisy's photo */}
                  <div className="w-full h-full bg-vintage-beige-200 flex items-center justify-center border border-vintage-brown-200">
                    <div className="text-center p-8">
                      <svg
                        width="80"
                        height="80"
                        viewBox="0 0 80 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto mb-4"
                      >
                        <g transform="translate(40, 40)">
                          <ellipse cx="0" cy="-12" rx="5" ry="12" fill="#FDFCFA" stroke="#6B5744" strokeWidth="2" />
                          <ellipse cx="0" cy="12" rx="5" ry="12" fill="#FDFCFA" stroke="#6B5744" strokeWidth="2" />
                          <ellipse cx="-12" cy="0" rx="12" ry="5" fill="#FDFCFA" stroke="#6B5744" strokeWidth="2" />
                          <ellipse cx="12" cy="0" rx="12" ry="5" fill="#FDFCFA" stroke="#6B5744" strokeWidth="2" />
                          <circle r="6" fill="#C9A961" stroke="#A68952" strokeWidth="2" />
                        </g>
                      </svg>
                      <p className="text-sm font-heading text-vintage-brown-400 italic">
                        Grandmother Daisy
                      </p>
                      <p className="text-xs text-vintage-brown-300 mt-2">
                        Photo to be added
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative corner accent */}
              <div className="absolute -bottom-6 -right-6 opacity-30">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(30, 30)">
                    <ellipse cx="0" cy="-10" rx="4" ry="10" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
                    <ellipse cx="0" cy="10" rx="4" ry="10" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
                    <ellipse cx="-10" cy="0" rx="10" ry="4" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
                    <ellipse cx="10" cy="0" rx="10" ry="4" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
                    <circle r="5" fill="#C9A961" stroke="#A68952" strokeWidth="1.5" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Story text column - right */}
          <div className="order-1 lg:order-2">
            <div className="prose prose-vintage max-w-none">
              <p className="text-lg md:text-xl font-sans leading-relaxed text-vintage-brown-600">
                <span className="script-text text-3xl text-vintage-gold-500">Born</span> in the vibrant heart of Jamaica,
                Daisy grew up surrounded by community, music, and the rhythm of island life. From an early age,
                she carried a deep compassion for others and a natural gift for nurturing those around her.
              </p>

              {/* Decorative divider */}
              <div className="flex items-center my-6">
                <div className="h-px flex-1 bg-vintage-beige-300"></div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-4">
                  <g transform="translate(12, 12)">
                    <ellipse cx="0" cy="-5" rx="2" ry="5" fill="#C9A961" stroke="#A68952" strokeWidth="1" />
                    <ellipse cx="0" cy="5" rx="2" ry="5" fill="#C9A961" stroke="#A68952" strokeWidth="1" />
                    <ellipse cx="-5" cy="0" rx="5" ry="2" fill="#C9A961" stroke="#A68952" strokeWidth="1" />
                    <ellipse cx="5" cy="0" rx="5" ry="2" fill="#C9A961" stroke="#A68952" strokeWidth="1" />
                    <circle r="2" fill="#6B5744" />
                  </g>
                </svg>
                <div className="h-px flex-1 bg-vintage-beige-300"></div>
              </div>

              <p className="text-lg md:text-xl font-sans leading-relaxed text-vintage-brown-600">
                <span className="script-text text-3xl text-vintage-gold-500">Migrating</span> to the United States,
                Daisy brought with her the warmth and wisdom of her Jamaican heritage. She built a new life in Miami,
                where she pursued her calling as a pediatric nurse. Her gentle hands and patient spirit made her
                beloved by countless families who trusted her with their most precious treasures—their children.
              </p>

              {/* Decorative divider */}
              <div className="flex items-center my-6">
                <div className="h-px flex-1 bg-vintage-beige-300"></div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-4">
                  <g transform="translate(12, 12)">
                    <ellipse cx="0" cy="-5" rx="2" ry="5" fill="#C9A961" stroke="#A68952" strokeWidth="1" />
                    <ellipse cx="0" cy="5" rx="2" ry="5" fill="#C9A961" stroke="#A68952" strokeWidth="1" />
                    <ellipse cx="-5" cy="0" rx="5" ry="2" fill="#C9A961" stroke="#A68952" strokeWidth="1" />
                    <ellipse cx="5" cy="0" rx="5" ry="2" fill="#C9A961" stroke="#A68952" strokeWidth="1" />
                    <circle r="2" fill="#6B5744" />
                  </g>
                </svg>
                <div className="h-px flex-1 bg-vintage-beige-300"></div>
              </div>

              <p className="text-lg md:text-xl font-sans leading-relaxed text-vintage-brown-600">
                <span className="script-text text-3xl text-vintage-gold-500">As a mother</span> to nine children,
                Daisy&apos;s home was a sanctuary of love and laughter. She worked tirelessly as a caregiver, not just
                for her own family, but for the entire Miami community. Her kitchen always smelled of home-cooked
                meals, her door was always open, and her embrace was a safe haven for anyone who needed comfort.
              </p>

              {/* Decorative divider */}
              <div className="flex items-center my-6">
                <div className="h-px flex-1 bg-vintage-beige-300"></div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-4">
                  <g transform="translate(12, 12)">
                    <ellipse cx="0" cy="-5" rx="2" ry="5" fill="#C9A961" stroke="#A68952" strokeWidth="1" />
                    <ellipse cx="0" cy="5" rx="2" ry="5" fill="#C9A961" stroke="#A68952" strokeWidth="1" />
                    <ellipse cx="-5" cy="0" rx="5" ry="2" fill="#C9A961" stroke="#A68952" strokeWidth="1" />
                    <ellipse cx="5" cy="0" rx="5" ry="2" fill="#C9A961" stroke="#A68952" strokeWidth="1" />
                    <circle r="2" fill="#6B5744" />
                  </g>
                </svg>
                <div className="h-px flex-1 bg-vintage-beige-300"></div>
              </div>

              <p className="text-lg md:text-xl font-sans leading-relaxed text-vintage-brown-600">
                <span className="script-text text-3xl text-vintage-gold-500">Her legacy</span> lives on through
                this foundation. Daisy taught us that every child deserves to feel valued, every parent deserves
                support, and every community thrives when we care for one another. Through <span className="accent-text">Daisy&apos;s Foundation</span>,
                we continue her mission of creating spaces where families feel seen, supported, and celebrated.
              </p>

              {/* Pull quote */}
              <blockquote className="mt-8 border-l-4 border-vintage-gold-400 pl-6 italic">
                <p className="text-xl font-accent text-vintage-brown-500 leading-relaxed">
                  &ldquo;Love is not just a feeling—it&apos;s action. It&apos;s showing up. It&apos;s making room at the table.
                  It&apos;s listening when someone needs to be heard.&rdquo;
                </p>
                <footer className="mt-3 text-base font-heading text-vintage-brown-400">
                  — Grandmother Daisy
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
