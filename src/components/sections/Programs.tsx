"use client";

import Image from 'next/image';
import { Heart, GraduationCap, Users, Sprout } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Programs() {
  const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>();
  const [gridRef, gridVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 });
  const [partnerRef, partnerVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const programs = [
    {
      image: "/images/photos/programs/healthy-beginnings-new.png",
      icon: Heart,
      title: "Healthy Beginnings",
      category: "Wellness",
      description: "Nurturing the health and well-being of families through nutrition support, wellness education, and care resources.",
      bullets: [
        "Family wellness kits with essential supplies",
        "Nutrition workshops and cooking classes",
        "Health screenings and preventive care resources",
      ],
    },
    {
      image: "/images/photos/programs/bloom-scholarships-new.png",
      icon: GraduationCap,
      title: "Bloom Scholarships",
      category: "Education",
      description: "Helping children flourish through access to quality early education, tutoring support, and enrichment opportunities.",
      bullets: [
        "Pre-K tuition subsidies for qualifying families",
        "School supplies and educational materials",
        "After-school tutoring and mentorship programs",
      ],
    },
    {
      image: "/images/photos/programs/hands-hearts-new.png",
      icon: Users,
      title: "Hands & Hearts",
      category: "Community",
      description: "Building connections through volunteer outreach, community events, and neighbor-to-neighbor support networks.",
      bullets: [
        "Monthly community resource fairs and drives",
        "Volunteer opportunities for all ages",
        "Emergency family assistance and referrals",
      ],
    },
    {
      image: "/images/photos/programs/green-daisy-new.png",
      icon: Sprout,
      title: "Green Daisy",
      category: "Environment",
      description: "Cultivating healthier neighborhoods through community gardens, environmental education, and sustainability initiatives.",
      bullets: [
        "Community garden plots and workshops",
        "Youth environmental leadership clubs",
        "Neighborhood beautification and clean-up events",
      ],
    },
  ];

  return (
    <section id="programs" className="relative bg-gradient-to-b from-vintage-cream-100 via-vintage-sage-100/50 to-vintage-cream-100 py-20 lg:py-32 overflow-hidden">
      {/* Floating decorative daisies */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-16 left-[6%] text-5xl text-daisy-gold-400/12 float-daisy" aria-hidden="true">✿</div>
        <div className="absolute top-32 right-[4%] text-4xl text-vintage-sage-400/15 float-daisy-delayed" aria-hidden="true">✿</div>
        <div className="absolute bottom-24 right-[10%] text-3xl text-daisy-gold-400/10 float-daisy" aria-hidden="true">✿</div>
        <div className="absolute bottom-40 left-[3%] text-6xl text-vintage-sage-400/8 float-daisy-delayed" aria-hidden="true">✿</div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading with animation */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-vintage-brown-600 leading-tight">
            Our Programs
          </h2>
          <div className="mt-6 flex items-center justify-center">
            <div className={`h-px bg-daisy-gold-400 transition-all duration-500 delay-300 ${
              headerVisible ? "w-24" : "w-0"
            }`}></div>
            <span className={`mx-3 text-daisy-gold-500 text-xl transition-all duration-500 delay-400 ${
              headerVisible ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 rotate-180"
            }`}>✿</span>
            <div className={`h-px bg-daisy-gold-400 transition-all duration-500 delay-300 ${
              headerVisible ? "w-24" : "w-0"
            }`}></div>
          </div>
          <p className={`mt-6 text-lg md:text-xl font-sans leading-relaxed text-vintage-brown-600 max-w-3xl mx-auto transition-all duration-700 delay-500 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Honoring Grandmother Daisy&apos;s legacy by supporting families through education, wellness, community connection, and environmental stewardship.
          </p>
        </div>

        {/* Programs grid with staggered animations */}
        <div
          ref={gridRef}
          className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2"
        >
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`relative flex flex-col bg-vintage-cream-50 border-2 border-vintage-beige-300 shadow-vintage-md hover:shadow-vintage-lg transition-all duration-500 hover:-translate-y-2 overflow-hidden group ${
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: gridVisible ? `${index * 150}ms` : "0ms" }}
            >
              {/* Program photo with hover zoom */}
              {program.image && (
                <div className="relative h-56 w-full overflow-hidden bg-vintage-beige-100">
                  <Image
                    src={program.image}
                    alt={`${program.title} - ${program.category} program`}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}

              <div className="p-8">
                {/* Icon and category badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-vintage-gold-400 border-2 border-vintage-gold-600 shadow-vintage-sm group-hover:scale-110 group-hover:shadow-vintage-glow transition-all duration-300">
                    <program.icon className="h-7 w-7 text-vintage-brown-600 group-hover:animate-bounce-gentle" aria-hidden="true" />
                  </div>
                  <span className="inline-flex items-center rounded-full bg-vintage-beige-200 border border-vintage-brown-300 px-3 py-1 text-xs font-semibold font-heading text-vintage-brown-600">
                    {program.category}
                  </span>
                </div>

                {/* Program title */}
                <h3 className="text-2xl font-heading font-bold text-vintage-brown-600 mb-4">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-base font-sans leading-relaxed text-vintage-brown-600 mb-6">
                  {program.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-3 mb-6">
                  {program.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm font-sans text-vintage-brown-600">
                      <div className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-vintage-sage-400"></div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn more button */}
                <a
                  href="#contact"
                  className="inline-block w-full text-center px-6 py-2.5 border-2 border-vintage-brown-400 text-vintage-brown-600 hover:bg-vintage-beige-100 font-semibold font-heading text-sm transition-all duration-200"
                >
                  Learn More / Volunteer
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership callout with animation */}
        <div
          ref={partnerRef}
          className={`mt-20 text-center max-w-2xl mx-auto transition-all duration-700 ${
            partnerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="bg-vintage-beige-100 border-2 border-vintage-brown-300 shadow-vintage-lg p-10 hover:shadow-vintage-xl transition-shadow duration-300">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-vintage-brown-600 mb-4">
              Partner With Us
            </h3>
            <p className="text-lg font-sans text-vintage-brown-600 leading-relaxed mb-6">
              We collaborate with schools, businesses, and nonprofits to expand our impact. Together, we can create lasting change in our community.
            </p>
            <a
              href="#contact"
              className="vintage-button text-base px-8 py-3 hover-glow"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
