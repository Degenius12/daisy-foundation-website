import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function Board() {
  const boardMembers = [
    {
      name: "Trisha Curtis-Cornelius",
      title: "Founder & President",
      quote: "Honoring Daisy's love through family support.",
      isFeatured: true,
      bio: `Trisha Cornelius is a dedicated childcare professional, community advocate, and entrepreneur whose lifelong passion for nurturing children has shaped every chapter of her career.

Born to Caribbean immigrant parents and raised in South Florida, Trisha discovered her calling early — serving as the go-to caretaker for her nieces, nephews, and cousins throughout her teenage years. Though her parents envisioned a career in pediatric nursing, Trisha's heart remained set on childcare.

After high school, she worked full-time at an insurance company while attending school part-time. But during maternity leave with her second child, everything changed. Struggling to find quality, affordable childcare she could trust with her own infant, Trisha made a life-defining decision: she would open her own childcare business and provide the phenomenal care every family deserves. The very next day she began researching licenses and credentials, and within a week she was enrolled in certification classes.

In 2004, Trisha opened her home-based childcare in Broward County. Within three months she was at full capacity. After relocating to Jacksonville, she founded Lil Voyagers Academy, an intermediate-size child day care that has become one of the most sought-after programs in the community. Operating at capacity year after year with an extensive waiting list, Lil Voyagers provides an affordable, loving "home away from home" where children explore, grow, and develop while their parents work with complete peace of mind.

Trisha's commitment to excellence led her to partner with the Florida Small Business Development Center at UNF, where she worked with consultant Lucy Diala to strategically manage growth, strengthen operations, and position Lil Voyagers for expansion — driven by the very community and returning families she serves.

Through the Daisy Foundation, Trisha honors the legacy of her grandmother Daisy by extending that same spirit of love, patience, and safe spaces to families and children throughout the Jacksonville community.`,
    },
    {
      name: "Gary Cornelius",
      title: "Grants/Treasurer",
    },
    {
      name: "Nya Thomas",
      title: "Community Engagement",
    },
  ];

  return (
    <section id="board" className="relative py-24 overflow-hidden">
      {/* Subtle daisy background */}
      <Image
        src="/images/board/board-team-photo.png"
        alt="Board members standing together outdoors in front of a community garden with blooming daisy flowers"
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
                <div className="mx-auto mb-6 relative h-40 w-40 overflow-hidden rounded-full border-4 border-daisy-sunshine-400 shadow-lg">
                  <Image
                    src="/images/board/founder-portrait.jpeg"
                    alt="Trisha Curtis-Cornelius, Founder and President of Daisy Foundation"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center 30%" }}
                    quality={85}
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {boardMembers[0].name}
                </h3>
                <p className="text-xl font-semibold text-daisy-forest-700 mb-6">
                  {boardMembers[0].title}
                </p>
                <blockquote className="text-lg md:text-xl italic text-gray-700 mb-8">
                  &ldquo;{boardMembers[0].quote}&rdquo;
                </blockquote>
                {boardMembers[0].bio && (
                  <div className="mt-6 text-left space-y-4 max-w-3xl mx-auto">
                    {boardMembers[0].bio.split("\n\n").map((paragraph: string, i: number) => (
                      <p key={i} className="text-base leading-relaxed text-gray-700">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Other Board Members */}
          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
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
