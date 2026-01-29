"use client";

import Image from 'next/image';
import { Heart, GraduationCap, Users, Sprout } from "lucide-react";

export function Programs() {
  const programs = [
    {
      image: "/images/photos/programs/family-support.png",
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
      image: "/images/photos/programs/youth-empowerment.png",
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
      image: "/images/photos/programs/elder-outreach.png",
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
      image: null,
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
    <section id="programs" className="relative bg-vintage-cream-100 py-20 lg:py-32 overflow-hidden">
      {/* Daisy photo background with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/photos/daisies/programs-daisies.jpg')]"></div>
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-vintage-cream-100/93 via-vintage-cream-200/90 to-vintage-beige-100/87"></div>
      </div>

      {/* Repeating daisy pattern background */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/textures/daisy-pattern.svg')] bg-repeat [background-size:200px_200px]"></div>

      {/* Subtle decorative daisies in background */}
      <div className="absolute top-20 left-10 opacity-10 pointer-events-none hidden lg:block">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(50, 50)">
            <ellipse cx="0" cy="-12" rx="5" ry="12" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
            <ellipse cx="0" cy="12" rx="5" ry="12" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
            <ellipse cx="-12" cy="0" rx="12" ry="5" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
            <ellipse cx="12" cy="0" rx="12" ry="5" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
            <circle r="6" fill="#C9A961" stroke="#A68952" strokeWidth="1.5" />
          </g>
        </svg>
      </div>

      <div className="absolute bottom-20 right-10 opacity-10 pointer-events-none hidden lg:block">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(50, 50)">
            <ellipse cx="0" cy="-12" rx="5" ry="12" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
            <ellipse cx="0" cy="12" rx="5" ry="12" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
            <ellipse cx="-12" cy="0" rx="12" ry="5" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
            <ellipse cx="12" cy="0" rx="12" ry="5" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
            <circle r="6" fill="#C9A961" stroke="#A68952" strokeWidth="1.5" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-vintage-brown-600 leading-tight">
            Our Programs
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
          <p className="mt-6 text-lg md:text-xl font-sans leading-relaxed text-vintage-brown-600 max-w-3xl mx-auto">
            Honoring Grandmother Daisy&apos;s legacy by supporting families through education, wellness, community connection, and environmental stewardship.
          </p>
        </div>

        {/* Programs grid */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2">
          {programs.map((program) => (
            <div
              key={program.title}
              className="relative flex flex-col bg-vintage-cream-50 border-2 border-vintage-beige-300 shadow-vintage-md hover:shadow-vintage-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Decorative corner daisy */}
              <div className="absolute top-3 right-3 opacity-20 pointer-events-none">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(20, 20)">
                    <ellipse cx="0" cy="-7" rx="3" ry="7" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
                    <ellipse cx="0" cy="7" rx="3" ry="7" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
                    <ellipse cx="-7" cy="0" rx="7" ry="3" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
                    <ellipse cx="7" cy="0" rx="7" ry="3" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
                    <circle r="4" fill="#C9A961" stroke="#A68952" strokeWidth="1" />
                  </g>
                </svg>
              </div>

              {/* Program photo */}
              {program.image && (
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={program.image}
                    alt={`${program.title} - ${program.category} program`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Subtle overlay for text readability on subsequent content */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-vintage-cream-50/30"></div>
                </div>
              )}

              <div className="p-8">
                {/* Icon and category badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-vintage-gold-400 border-2 border-vintage-gold-600 shadow-vintage-sm">
                    <program.icon className="h-7 w-7 text-vintage-brown-600" aria-hidden="true" />
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
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 mt-0.5"
                      >
                        <g transform="translate(10, 10)">
                          <ellipse cx="0" cy="-3" rx="1" ry="3" fill="#C9A961" stroke="#A68952" strokeWidth="0.5" />
                          <ellipse cx="0" cy="3" rx="1" ry="3" fill="#C9A961" stroke="#A68952" strokeWidth="0.5" />
                          <ellipse cx="-3" cy="0" rx="3" ry="1" fill="#C9A961" stroke="#A68952" strokeWidth="0.5" />
                          <ellipse cx="3" cy="0" rx="3" ry="1" fill="#C9A961" stroke="#A68952" strokeWidth="0.5" />
                          <circle r="1.5" fill="#6B5744" />
                        </g>
                      </svg>
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

        {/* Partnership callout */}
        <div className="mt-20 text-center max-w-2xl mx-auto">
          <div className="bg-vintage-beige-100 border-2 border-vintage-brown-300 shadow-vintage-lg p-10">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-vintage-brown-600 mb-4">
              Partner With Us
            </h3>
            <p className="text-lg font-sans text-vintage-brown-600 leading-relaxed mb-6">
              We collaborate with schools, businesses, and nonprofits to expand our impact. Together, we can create lasting change in our community.
            </p>
            <a
              href="#contact"
              className="vintage-button text-base px-8 py-3"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
