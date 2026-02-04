"use client";

import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Testimonials() {
  const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>();
  const [gridRef, gridVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 });
  const testimonials = [
    {
      quote:
        "Daisy's Foundation gave our family hope when we needed it most. The scholarship program allowed my daughter to attend a wonderful pre-K program that set her up for success.",
      author: "Maria S.",
      role: "Parent, Bloom Scholarships Recipient",
      initial: "M",
    },
    {
      quote:
        "Volunteering here reminds me of my own grandmother. The warmth and genuine care for every family is what makes this place special. It truly feels like family.",
      author: "James T.",
      role: "Community Volunteer",
      initial: "J",
    },
    {
      quote:
        "The wellness kits and family support have been a blessing. My children are thriving because of programs like Healthy Beginnings. We're so grateful.",
      author: "Keisha W.",
      role: "Program Participant",
      initial: "K",
    },
  ];

  return (
    <section className="py-20 bg-daisy-cream-50 relative overflow-hidden">
      {/* Testimonial background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 pointer-events-none z-0"
        style={{ backgroundImage: "url('/images/photos/background/testimonial-bg.png')" }}
      ></div>

      {/* Animated decorative background daisies */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 text-[200px] text-daisy-gold-500 float-daisy">✿</div>
        <div className="absolute bottom-10 right-10 text-[200px] text-daisy-gold-500 float-daisy-delayed">✿</div>
        <div className="absolute top-1/2 left-1/4 text-[100px] text-daisy-gold-400 float-daisy-delayed opacity-50">✿</div>
        <div className="absolute top-1/3 right-1/4 text-[80px] text-daisy-gold-400 float-daisy opacity-40">✿</div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header with scroll animation */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-daisy-earth-700 mb-4">
            Voices from Our Community
          </h2>
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className={`h-px bg-daisy-gold-400 transition-all duration-700 delay-300 ${
              headerVisible ? "w-16" : "w-0"
            }`}></div>
            <span className={`text-daisy-gold-500 text-xl transition-all duration-500 delay-500 ${
              headerVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 rotate-180"
            }`}>✿</span>
            <div className={`h-px bg-daisy-gold-400 transition-all duration-700 delay-300 ${
              headerVisible ? "w-16" : "w-0"
            }`}></div>
          </div>
          <p className={`text-daisy-earth-500 max-w-2xl mx-auto transition-all duration-700 delay-500 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Real stories from the families and volunteers who make our mission possible.
          </p>
        </div>

        {/* Testimonials grid - Polaroid style with staggered animations */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-3 gap-8 md:gap-10"
        >
          {testimonials.map((testimonial, index) => (
            <figure
              key={index}
              className={`polaroid-card hover-lift ${
                index === 0 ? '-rotate-2' : index === 1 ? 'rotate-1' : 'rotate-2'
              } hover:rotate-0 transition-all duration-300 ${
                gridVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: gridVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              <div className="bg-white p-4 pb-6 relative group">
                {/* Inner content area mimicking polaroid photo */}
                <div className="bg-vintage-beige-100 p-5 mb-4">
                  {/* Quote icon with hover animation */}
                  <div className="flex justify-center mb-3">
                    <div className="w-10 h-10 bg-daisy-gold-400 rounded-full flex items-center justify-center group-hover:animate-pulse-gentle transition-transform group-hover:scale-110">
                      <Quote className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Quote text */}
                  <p className="text-daisy-earth-600 italic leading-relaxed text-center text-sm md:text-base">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                {/* Author - handwriting style like polaroid label */}
                <div className="text-center">
                  <p className="font-handwriting text-lg md:text-xl text-vintage-brown-600">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-daisy-gold-600 mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </figure>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-daisy-earth-500 mb-4">
            Want to share your story?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-daisy-gold-600 hover:text-daisy-gold-700 font-semibold transition-colors"
          >
            Get in touch with us
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
