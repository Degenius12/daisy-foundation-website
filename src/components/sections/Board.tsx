import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

export function Board() {
  const boardMembers = [
    {
      name: "Trisha Curtis-Cornelius",
      title: "Founder & President",
      quote: "Honoring Daisy's love through family support.",
      isFeatured: true,
    },
    {
      name: "Shellie Ransom-Jackson",
      title: "Secretary",
    },
    {
      name: "Gary Cornelius",
      title: "Grants/Treasurer",
    },
    {
      name: "Nya Thomas",
      title: "Community Engagement",
    },
    {
      name: "Curtis McFarlane",
      title: "Officer",
    },
    {
      name: "E'lisa Cornelius",
      title: "Officer",
    },
    {
      name: "Matthew Johnson",
      title: "Officer",
    },
  ];

  return (
    <section id="board" className="relative py-24 overflow-hidden">
      {/* Subtle daisy background */}
      <Image
        src="/images/backgrounds/divider-daisies.jpg"
        alt=""
        fill
        className="object-cover"
        quality={70}
      />
      <div className="absolute inset-0 bg-cream-50/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-daisy-forest-700 sm:text-6xl">
            Our Board
          </h2>
          <p className="mt-6 text-xl md:text-2xl leading-relaxed text-gray-700">
            Dedicated leaders committed to honoring Daisy&apos;s legacy.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          {/* Featured Founder */}
          <div className="mb-16">
            <Card className="border-3 border-daisy-sunshine-400 bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-10 lg:p-12 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg mb-6">
                  <Heart className="h-10 w-10 text-daisy-sunshine-700" aria-hidden="true" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {boardMembers[0].name}
                </h3>
                <p className="text-xl font-semibold text-daisy-forest-700 mb-6">
                  {boardMembers[0].title}
                </p>
                <blockquote className="text-lg md:text-xl italic text-gray-700">
                  &ldquo;{boardMembers[0].quote}&rdquo;
                </blockquote>
              </CardContent>
            </Card>
          </div>

          {/* Other Board Members */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {boardMembers.slice(1).map((member, index) => {
              const borders = [
                "border-daisy-forest-400",
                "border-daisy-sunshine-300",
                "border-daisy-lavender",
                "border-daisy-teal",
                "border-daisy-forest-400",
                "border-daisy-sunshine-300",
              ];
              return (
                <Card key={member.name} className={`${borders[index]} border-2 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-2xl`}>
                  <CardContent className="p-6 text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h4>
                    <p className="text-sm font-semibold text-gray-600">
                      {member.title}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
