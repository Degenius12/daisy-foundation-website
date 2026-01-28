"use client";

export function Board() {
  const boardMembers = [
    {
      name: "Trisha Curtis-Cornelius",
      title: "Founder & President",
      quote: "Honoring Grandmother Daisy's love through family support and community connection.",
      isFeatured: true,
    },
    {
      name: "Shellie Ransom-Jackson",
      title: "Secretary",
    },
    {
      name: "Gary Cornelius",
      title: "Grants & Treasurer",
    },
    {
      name: "Nya Thomas",
      title: "Community Engagement",
    },
    {
      name: "Curtis McFarlane",
      title: "Board Officer",
    },
    {
      name: "E'lisa Cornelius",
      title: "Board Officer",
    },
    {
      name: "Matthew Johnson",
      title: "Board Officer",
    },
  ];

  return (
    <section id="board" className="relative bg-vintage-beige-50 py-20 lg:py-32 overflow-hidden">
      {/* Decorative daisy pattern in background */}
      <div className="absolute top-40 right-20 opacity-10 pointer-events-none hidden lg:block">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(40, 40)">
            <ellipse cx="0" cy="-10" rx="4" ry="10" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
            <ellipse cx="0" cy="10" rx="4" ry="10" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
            <ellipse cx="-10" cy="0" rx="10" ry="4" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
            <ellipse cx="10" cy="0" rx="10" ry="4" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
            <circle r="5" fill="#C9A961" stroke="#A68952" strokeWidth="1.5" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-vintage-brown-600 leading-tight">
            Our Board
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
            Dedicated leaders carrying forward Daisy&apos;s vision of compassion, community, and care.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          {/* Featured Founder */}
          <div className="mb-16">
            <div className="relative bg-vintage-cream-50 border-3 border-vintage-gold-400 shadow-vintage-lg overflow-hidden">
              {/* Decorative daisy accents in corners */}
              <div className="absolute top-4 left-4 opacity-15 pointer-events-none">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(25, 25)">
                    <ellipse cx="0" cy="-8" rx="3" ry="8" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
                    <ellipse cx="0" cy="8" rx="3" ry="8" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
                    <ellipse cx="-8" cy="0" rx="8" ry="3" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
                    <ellipse cx="8" cy="0" rx="8" ry="3" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
                    <circle r="4" fill="#C9A961" stroke="#A68952" strokeWidth="1" />
                  </g>
                </svg>
              </div>
              <div className="absolute bottom-4 right-4 opacity-15 pointer-events-none">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(25, 25)">
                    <ellipse cx="0" cy="-8" rx="3" ry="8" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
                    <ellipse cx="0" cy="8" rx="3" ry="8" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
                    <ellipse cx="-8" cy="0" rx="8" ry="3" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
                    <ellipse cx="8" cy="0" rx="8" ry="3" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1" />
                    <circle r="4" fill="#C9A961" stroke="#A68952" strokeWidth="1" />
                  </g>
                </svg>
              </div>

              <div className="relative p-10 lg:p-12 text-center">
                {/* Decorative daisy icon */}
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-vintage-gold-400 border-2 border-vintage-gold-600 shadow-vintage-md mb-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(20, 20)">
                      <ellipse cx="0" cy="-7" rx="3" ry="7" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
                      <ellipse cx="0" cy="7" rx="3" ry="7" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
                      <ellipse cx="-7" cy="0" rx="7" ry="3" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
                      <ellipse cx="7" cy="0" rx="7" ry="3" fill="#FDFCFA" stroke="#6B5744" strokeWidth="1.5" />
                      <circle r="4" fill="#6B5744" />
                    </g>
                  </svg>
                </div>

                <h3 className="text-3xl md:text-4xl font-heading font-bold text-vintage-brown-600 mb-2">
                  {boardMembers[0].name}
                </h3>
                <p className="text-xl font-heading font-semibold text-vintage-gold-500 mb-6">
                  {boardMembers[0].title}
                </p>

                {/* Decorative divider */}
                <div className="flex items-center justify-center my-6">
                  <div className="h-px w-12 bg-vintage-beige-300"></div>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-3">
                    <g transform="translate(10, 10)">
                      <ellipse cx="0" cy="-4" rx="1.5" ry="4" fill="#C9A961" stroke="#A68952" strokeWidth="0.5" />
                      <ellipse cx="0" cy="4" rx="1.5" ry="4" fill="#C9A961" stroke="#A68952" strokeWidth="0.5" />
                      <ellipse cx="-4" cy="0" rx="4" ry="1.5" fill="#C9A961" stroke="#A68952" strokeWidth="0.5" />
                      <ellipse cx="4" cy="0" rx="4" ry="1.5" fill="#C9A961" stroke="#A68952" strokeWidth="0.5" />
                      <circle r="1.5" fill="#6B5744" />
                    </g>
                  </svg>
                  <div className="h-px w-12 bg-vintage-beige-300"></div>
                </div>

                <blockquote className="text-lg md:text-xl font-accent italic text-vintage-brown-500 leading-relaxed max-w-2xl mx-auto">
                  &ldquo;{boardMembers[0].quote}&rdquo;
                </blockquote>
              </div>
            </div>
          </div>

          {/* Other Board Members */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {boardMembers.slice(1).map((member) => (
              <div
                key={member.name}
                className="relative bg-vintage-cream-50 border-2 border-vintage-beige-300 shadow-vintage-md hover:shadow-vintage-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Small decorative corner flourish */}
                <div className="absolute top-2 right-2 opacity-15 pointer-events-none">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(15, 15)">
                      <ellipse cx="0" cy="-5" rx="2" ry="5" fill="#FDFCFA" stroke="#6B5744" strokeWidth="0.8" />
                      <ellipse cx="0" cy="5" rx="2" ry="5" fill="#FDFCFA" stroke="#6B5744" strokeWidth="0.8" />
                      <ellipse cx="-5" cy="0" rx="5" ry="2" fill="#FDFCFA" stroke="#6B5744" strokeWidth="0.8" />
                      <ellipse cx="5" cy="0" rx="5" ry="2" fill="#FDFCFA" stroke="#6B5744" strokeWidth="0.8" />
                      <circle r="2.5" fill="#C9A961" stroke="#A68952" strokeWidth="0.8" />
                    </g>
                  </svg>
                </div>

                <div className="p-6 text-center">
                  <h4 className="text-xl font-heading font-bold text-vintage-brown-600 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-sm font-heading font-semibold text-vintage-brown-500">
                    {member.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
