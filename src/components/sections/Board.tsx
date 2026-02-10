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
    <section id="board" className="relative bg-gradient-to-br from-vintage-beige-100 to-vintage-sage-100/60 py-20 lg:py-32 overflow-hidden">
      {/* Floating decorative daisies */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-12 right-12 text-4xl text-daisy-gold-400/15 hidden lg:block float-daisy" aria-hidden="true">✿</div>
        <div className="absolute bottom-16 left-16 text-5xl text-vintage-sage-400/12 hidden lg:block float-daisy-delayed" aria-hidden="true">✿</div>
        <div className="absolute top-1/2 right-[8%] text-3xl text-daisy-gold-400/10 hidden lg:block float-daisy" aria-hidden="true">✿</div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-vintage-brown-600 leading-tight">
            Our Board
          </h2>
          <div className="mt-6 flex items-center justify-center">
            <div className="h-px w-16 bg-vintage-gold-400"></div>
            <span className="mx-3 text-daisy-gold-500 text-lg" aria-hidden="true">✿</span>
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
              <div className="relative p-10 lg:p-12 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-vintage-gold-400 border-2 border-vintage-gold-600 shadow-vintage-md mb-6">
                  <span className="text-2xl font-heading font-bold text-vintage-brown-600">TCC</span>
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
                  <div className="mx-3 h-1.5 w-1.5 rounded-full bg-vintage-gold-500"></div>
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
