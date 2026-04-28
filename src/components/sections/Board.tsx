import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function Board() {
  const boardMembers = [
    {
      name: "Trisha Curtis-Cornelius",
      title: "Founder & President",
      quote: "Honoring Daisy's love through family support.",
      isFeatured: true,
      bio: `Trisha Curtis-Cornelius was born in Jamaica and moved to the United States as an infant, eventually growing up in South Florida. Raised in a close-knit family, she spent much of her childhood caring for her younger cousins—an experience that naturally shaped her love for nurturing and supporting children.

Although she initially followed a more traditional path after high school, Trisha always felt a deeper calling. That calling became clear when she became a mother and struggled to find childcare that truly felt like a safe, loving extension of home. In that moment, she realized she didn't just want to find quality care—she wanted to create it.

In 2004, Trisha opened her first home-based childcare program, built on compassion, trust, and a genuine commitment to every child and family she served. After relocating to Duval County, she continued her work, spending over a decade building strong relationships and creating a space where children felt valued, supported, and inspired.

Her vision grew, and in 2018 she opened Lil' Voyagers Academy, expanding her ability to serve even more families. Through every stage of growth—including the challenges of the COVID-19 pandemic—Trisha remained focused on what mattered most: showing up for her community. Whether through innovative learning solutions or simply being a reliable source of care during uncertain times, she led with heart and resilience.

Today, Trisha continues to serve as a dedicated leader, mentor, and advocate for families. Her passion extends beyond the classroom through Daisy's Nonprofit, an organization she created in honor of her late grandmother. Through this work, she provides support, resources, and encouragement to families—especially single mothers—helping them navigate life's challenges with dignity and hope.

For Trisha, this work is more than a career—it's a calling rooted in love, service, and an unwavering belief that every child and every family deserves to be supported.`,
    },
    {
      name: "Gary Cornelius",
      title: "Grants/Treasurer",
      bio: `Gary Cornelius is a seasoned business professional and operations leader whose diverse career spans retail management, logistics, and early childhood education entrepreneurship.

Born on the Caribbean island of Antigua, Gary was raised in a modest household alongside nine siblings. Though neither parent had formal education beyond age thirteen, they instilled a powerful work ethic and entrepreneurial spirit in their children. Gary's father became a successful building contractor, while his mother grew from dedicated homemaker to business owner. At just thirteen, Gary was entrusted with managing the family's neighborhood convenience store — handling cashiering, inventory, ordering, and financial transactions — experiences that became the bedrock of his business acumen.

A gifted athlete, Gary represented Antigua in the Track and Field CARIFTA Games in Martinique in 1983. In 1986, he was accepted to Nazareth College of Rochester in New York, where he competed in collegiate soccer for three years and graduated in 1990 with a Bachelor of Science in Business Administration.

Gary's professional career took him from managing operations at Wegmans Superstore in Buffalo, New York, to leading store operations at Wendy's International in Jacksonville, Florida. In 2001, he joined UPS as a package loader and was promoted to Part-Time Supervisor within five months. With UPS's support, he earned a Master of Business Administration in Technology Management from the University of Phoenix in 2003, advancing to Full-Time Supervisor where he managed teams of over forty employees.

In 2017, Gary made a pivotal decision — leaving UPS to help his wife, Trisha, grow their family's childcare business. Drawing on his MBA and decades of operational experience, he guided the expansion from a home-based operation to a licensed childcare center that opened in 2018. By the end of 2021, the center served 86 students and generated over one million dollars in annual revenue. In February 2022, they opened a state-of-the-art 10,000-square-foot facility with twelve classrooms and capacity for 184 students.

As Grants/Treasurer of Daisy's Nonprofit, Gary brings his expertise in business planning, financial projections, bookkeeping, and strategic growth to help expand access to quality early childhood education and family support throughout the Jacksonville community.`,
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
                    alt="Trisha Curtis-Cornelius, Founder and President of Daisy's Nonprofit"
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
          <div className="grid gap-6 max-w-3xl mx-auto">
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
                <Card key={member.name} className={`${borders[index]} border-2 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl`}>
                  <CardContent className="p-6 text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h4>
                    <p className="text-sm font-semibold text-gray-600">
                      {member.title}
                    </p>
                    {member.bio && (
                      <div className="mt-4 text-left space-y-3">
                        {member.bio.split("\n\n").map((paragraph: string, i: number) => (
                          <p key={i} className="text-sm leading-relaxed text-gray-700">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}
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
