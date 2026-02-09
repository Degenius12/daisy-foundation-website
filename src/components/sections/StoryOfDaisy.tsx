"use client";

import Image from 'next/image';
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function StoryOfDaisy() {
  const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>();
  const [photoRef, photoVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const [textRef, textVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const [polaroidsRef, polaroidsVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="story" className="relative bg-vintage-beige-100 py-20 lg:py-32 overflow-hidden">
      {/* Decorative corner daisies with float animation */}
      <div className="absolute top-8 left-8 text-6xl text-daisy-gold-400/20 hidden lg:block float-daisy">✿</div>
      <div className="absolute top-8 right-8 text-6xl text-daisy-gold-400/20 hidden lg:block float-daisy-delayed">✿</div>
      <div className="absolute bottom-8 left-8 text-6xl text-daisy-gold-400/20 hidden lg:block float-daisy-delayed">✿</div>
      <div className="absolute bottom-8 right-8 text-6xl text-daisy-gold-400/20 hidden lg:block float-daisy">✿</div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading with animation */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-daisy-earth-700 leading-tight">
            The Story of Daisy
          </h2>
          <div className="mt-6 flex items-center justify-center">
            <div className={`h-px bg-daisy-gold-400 transition-all duration-500 delay-300 ${
              headerVisible ? "w-16" : "w-0"
            }`}></div>
            <span className={`mx-3 text-daisy-gold-500 text-xl transition-all duration-500 delay-400 ${
              headerVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 rotate-180"
            }`}>✿</span>
            <div className={`h-px bg-daisy-gold-400 transition-all duration-500 delay-300 ${
              headerVisible ? "w-16" : "w-0"
            }`}></div>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo column - left with animation */}
          <div
            ref={photoRef}
            className={`relative flex justify-center lg:justify-end order-2 lg:order-1 transition-all duration-700 ${
              photoVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative group">
              {/* Vintage frame effect with hover animation */}
              <div className="absolute -inset-4 bg-vintage-beige-300 border-4 border-vintage-brown-400 shadow-vintage-lg transform rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
              <div className="relative bg-vintage-cream-50 p-3 border-2 border-vintage-brown-300 shadow-vintage-md group-hover:shadow-vintage-xl transition-shadow duration-300">
                <div className="relative w-80 h-96 md:w-96 md:h-[480px] overflow-hidden">
                  {/* Founder Portrait - Grandmother Daisy */}
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/images/photos/team/founder-portrait.png"
                      alt="Grandmother Daisy - Beloved matriarch and foundation inspiration"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 320px, 384px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Story text column - right with animation */}
          <div
            ref={textRef}
            className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${
              textVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="prose prose-vintage max-w-none">
              <p className="text-lg md:text-xl font-sans leading-relaxed text-vintage-brown-600">
                <span className="script-text text-3xl text-vintage-gold-500">Born</span> in the vibrant heart of Jamaica,
                Daisy grew up surrounded by community, music, and the rhythm of island life. From an early age,
                she carried a deep compassion for others and a natural gift for nurturing those around her.
              </p>

              {/* Decorative divider */}
              <div className="flex items-center my-6">
                <div className="h-px flex-1 bg-vintage-sage-300"></div>
                <span className="mx-4 text-daisy-gold-500">✿</span>
                <div className="h-px flex-1 bg-vintage-sage-300"></div>
              </div>

              <p className="text-lg md:text-xl font-sans leading-relaxed text-vintage-brown-600">
                <span className="script-text text-3xl text-vintage-gold-500">Migrating</span> to the United States,
                Daisy brought with her the warmth and wisdom of her Jamaican heritage. She built a new life in Miami,
                where she pursued her calling as a pediatric nurse. Her gentle hands and patient spirit made her
                beloved by countless families who trusted her with their most precious treasures—their children.
              </p>

              {/* Decorative divider */}
              <div className="flex items-center my-6">
                <div className="h-px flex-1 bg-vintage-sage-300"></div>
                <span className="mx-4 text-daisy-gold-500">✿</span>
                <div className="h-px flex-1 bg-vintage-sage-300"></div>
              </div>

              <p className="text-lg md:text-xl font-sans leading-relaxed text-vintage-brown-600">
                <span className="script-text text-3xl text-vintage-gold-500">As a mother</span> to nine children,
                Daisy&apos;s home was a sanctuary of love and laughter. She worked tirelessly as a caregiver, not just
                for her own family, but for the entire Miami community. Her kitchen always smelled of home-cooked
                meals, her door was always open, and her embrace was a safe haven for anyone who needed comfort.
              </p>

              {/* Decorative divider */}
              <div className="flex items-center my-6">
                <div className="h-px flex-1 bg-vintage-sage-300"></div>
                <span className="mx-4 text-daisy-gold-500">✿</span>
                <div className="h-px flex-1 bg-vintage-sage-300"></div>
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

        {/* Family Legacy Polaroids - CSS-styled with labels and animations */}
        <div ref={polaroidsRef} className="mt-20">
          <div className="flex flex-wrap justify-center items-end gap-4 md:gap-8 lg:gap-12 mx-auto max-w-4xl">
            {/* Left Polaroid */}
            <figure className={`polaroid-card -rotate-6 hover:-rotate-3 transition-all duration-500 hover-lift ${
              polaroidsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: polaroidsVisible ? "0ms" : "0ms" }}>
              <div className="bg-white p-3 pb-16 relative">
                <div className="w-48 h-48 md:w-56 md:h-56 overflow-hidden bg-vintage-beige-200">
                  <Image
                    src="/images/photos/polaroids/grandma-me.png"
                    alt="A Black grandmother holding a young child"
                    width={224}
                    height={224}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="absolute bottom-4 left-0 right-0 text-center font-handwriting text-lg md:text-xl text-vintage-brown-600">
                  Grandma &amp; Me
                </p>
              </div>
            </figure>

            {/* Center Polaroid */}
            <figure className={`polaroid-card rotate-2 hover:rotate-0 transition-all duration-500 -mt-4 hover-lift ${
              polaroidsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: polaroidsVisible ? "150ms" : "0ms" }}>
              <div className="bg-white p-3 pb-16 relative">
                <div className="w-48 h-48 md:w-56 md:h-56 overflow-hidden bg-vintage-beige-200">
                  <Image
                    src="/images/photos/polaroids/learning-together.png"
                    alt="A mother reading to children at a table"
                    width={224}
                    height={224}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="absolute bottom-4 left-0 right-0 text-center font-handwriting text-lg md:text-xl text-vintage-brown-600">
                  Learning Together
                </p>
              </div>
            </figure>

            {/* Right Polaroid */}
            <figure className={`polaroid-card rotate-6 hover:rotate-3 transition-all duration-500 hover-lift ${
              polaroidsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: polaroidsVisible ? "300ms" : "0ms" }}>
              <div className="bg-white p-3 pb-16 relative">
                <div className="w-48 h-48 md:w-56 md:h-56 overflow-hidden bg-vintage-beige-200">
                  <Image
                    src="/images/photos/polaroids/family-love.png"
                    alt="Multiple generations of a Black family gathered together"
                    width={224}
                    height={224}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="absolute bottom-4 left-0 right-0 text-center font-handwriting text-lg md:text-xl text-vintage-brown-600">
                  Family Love
                </p>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
