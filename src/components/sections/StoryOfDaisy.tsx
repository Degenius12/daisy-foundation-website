"use client";

import Image from 'next/image';

export function StoryOfDaisy() {
  return (
    <section id="story" className="relative bg-vintage-beige-100 py-20 lg:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-vintage-brown-600 leading-tight">
            The Story of Daisy
          </h2>
          <div className="mt-6 flex items-center justify-center">
            <div className="h-px w-16 bg-vintage-gold-400"></div>
            <div className="mx-3 h-2 w-2 rounded-full bg-vintage-gold-500"></div>
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
                  {/* Founder Portrait - Grandmother Daisy */}
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/images/photos/team/founder-portrait.png"
                      alt="Grandmother Daisy - Beloved matriarch and foundation inspiration"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 320px, 384px"
                      priority
                    />
                  </div>
                </div>
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
                <div className="mx-4 h-1.5 w-1.5 rounded-full bg-vintage-gold-500"></div>
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
                <div className="mx-4 h-1.5 w-1.5 rounded-full bg-vintage-gold-500"></div>
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
                <div className="mx-4 h-1.5 w-1.5 rounded-full bg-vintage-gold-500"></div>
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
