import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function Board() {
  const boardMembers = [
    {
      name: "Trisha Curtis-Cornelius",
      title: "Founder & President",
      quote: "Honoring Daisy's love through family support.",
      isFeatured: true,
      bio: `Trisha Curtis-Cornelius was born on the beautiful island of Jamaica in the Caribbean. At just an infant, her family migrated to White Plains, New York. Their stay there was brief, as her parents quickly realized that the cold weather was affecting her health, and Florida's climate was much more similar to Jamaica's.

She spent her formative years in South Florida, where she attended elementary, middle, and high school. As the oldest girl among many cousins in a close-knit family, Trisha was often called upon to babysit her younger cousins. It was during those early years that her passion for owning a childcare center began to emerge. Although her parents recognized her love for caring for children, they had different plans for her future. They wanted her to become a pediatric nurse, believing it to be more prestigious than a career in childcare.

After graduating from high school, Trisha secured a full-time job with an insurance company and enrolled part-time at Nova Southeastern College. While she was doing what her parents wanted and making them proud, she felt unfulfilled inside. Her dream of owning a childcare business continued to grow stronger, and eventually she knew she was ready for a change.

During maternity leave with her second child, Trisha visited numerous childcare centers and home-based providers in search of a place where she would feel comfortable leaving her infant. Finding the right fit proved to be a challenge. As she toured programs, she kept thinking about what she would do differently if she owned a childcare business, and the extraordinary level of care she would provide. In that moment, she made the life-changing decision to open her own childcare business.

The very next day, she began researching the licenses and credentials required to open a childcare program. Soon after, she re-enrolled at Nova Southeastern College and began the journey toward making her dream a reality. There, she earned all the credentials necessary to open her home-based childcare business, along with her Director's Credential, which gave her the flexibility to work in or open her own childcare center.

A few months after completing her certification, Trisha opened her home childcare program in Broward County in March 2004. Her family was incredibly supportive, donating toys and helping transform her home into a space ready for licensing. Once she opened her doors, it took only three months to reach capacity, and she maintained that status until she had to close due to her family's move to Duval County.

After settling in Duval County, Trisha immediately reconnected with the early childhood education world. She briefly considered working in a childcare center to gain additional experience and even attended a few interviews, but she quickly realized that the demands of working outside the home were too great while raising a family. Instead, she decided to reopen her own childcare business. In 2006, just six months after moving to Duval, she reopened Welcome Home Family Daycare—same excellent service, new location.

For the next 12 years, Trisha operated a stellar home childcare program. She earned perfect scores on all DCF inspections, and her program even became a training site for new DCF field agents. At one point, many of her clients were teachers, which allowed her to finish her day at 4:00 PM and enjoy summers off. With that additional time, she began planning the next phase of her dream: opening a childcare center outside of her home. Since her home program was limited to 12 students and she had a waiting list of more than 20, she knew the transition could be seamless.

In 2017, Trisha's husband stepped away from his job to help with the transition from a home-based childcare business to a center. Together, they began rebranding the business, changing the name from Welcome Home Family Daycare to Lil' Voyagers Academy. With the support of organizations like SCORE and FDBC, they developed a business plan, created financial projections, and completed loan applications. Once they secured financing and a building to lease, Trisha's dream of opening her first childcare center was finally within reach.

After nearly two years of hard work, Lil' Voyagers Academy opened its first childcare center in St. Johns County on December 18, 2018. The 3,000-square-foot facility was licensed for 58 students. Twenty-eight students enrolled at opening, including families transitioning from the home-based program and those from the waiting list. Enrollment steadily increased throughout 2019, and by December of that year, the center had reached capacity and established a waitlist. Seeing the momentum, Trisha decided to expand.

In early 2020, construction began on the building next door, which was separated from the first by the playground—an ideal setup. Everything seemed to be falling into place until the arrival of COVID-19 and the nationwide shutdown. In the midst of the expansion, the future looked uncertain. Although the center remained open, Lil' Voyagers Academy lost 60% of its students. Trisha had to become creative in order to maintain revenue and continue serving families.

She implemented a Zoom-based learning program so students could remain engaged from home. Her teachers prepared weekly learning boxes filled with worksheets and activities so children could continue learning alongside their classmates in the classroom. She also launched a first responder drop-in program, allowing first responders access to childcare whenever they needed to work or simply rest. Through resilience and innovation, the expansion was completed in May 2020, just in time for the new school year in August when students were cleared to return.

With the expansion complete, Lil' Voyagers Academy increased its licensed capacity to 85 students. By January 2021, most students had returned, and by the end of the first quarter, the school was once again at capacity. Throughout 2021, the school maintained full enrollment with a waitlist and surpassed one million dollars in revenue for the first time. With business thriving, Trisha pursued another opportunity to open a second location in the same zip code—an area she had long told her broker was her dream location. Once the building shell was completed, construction began in July 2021.

Working closely with an architect and contractor, Trisha transformed a 10,000-square-foot shell into a state-of-the-art, 12-classroom facility. Licensed for 184 students, the second center opened on March 7, 2022. Featuring a dedicated STEM classroom and a state-of-the-art playground, Lil' Voyagers Academy solidified its position as one of the top childcare providers in St. Johns County.

Today, Trisha Curtis-Cornelius is a multi-site owner leading a team of more than 30 employees. She has dedicated her life to serving her community and firmly believes that every child should have access to quality childcare. In honor of her late grandmother, she founded Daisy's Foundation, a nonprofit organization created to support struggling families—especially single mothers—by providing opportunities and resources to help them navigate today's economic challenges.`,
    },
    {
      name: "Gary Cornelius",
      title: "Grants/Treasurer",
      bio: `Gary Cornelius is a seasoned business professional and operations leader whose diverse career spans retail management, logistics, and early childhood education entrepreneurship.

Born on the Caribbean island of Antigua, Gary was raised in a modest household alongside nine siblings. Though neither parent had formal education beyond age thirteen, they instilled a powerful work ethic and entrepreneurial spirit in their children. Gary's father became a successful building contractor, while his mother grew from dedicated homemaker to business owner. At just thirteen, Gary was entrusted with managing the family's neighborhood convenience store — handling cashiering, inventory, ordering, and financial transactions — experiences that became the bedrock of his business acumen.

A gifted athlete, Gary represented Antigua in the Track and Field CARIFTA Games in Martinique in 1983. In 1986, he was accepted to Nazareth College of Rochester in New York, where he competed in collegiate soccer for three years and graduated in 1990 with a Bachelor of Science in Business Administration.

Gary's professional career took him from managing operations at Wegmans Superstore in Buffalo, New York, to leading store operations at Wendy's International in Jacksonville, Florida. In 2001, he joined UPS as a package loader and was promoted to Part-Time Supervisor within five months. With UPS's support, he earned a Master of Business Administration in Technology Management from the University of Phoenix in 2003, advancing to Full-Time Supervisor where he managed teams of over forty employees.

In 2017, Gary made a pivotal decision — leaving UPS to help his wife, Trisha, grow their family's childcare business. Drawing on his MBA and decades of operational experience, he guided the expansion from a home-based operation to a licensed childcare center that opened in 2018. By the end of 2021, the center served 86 students and generated over one million dollars in annual revenue. In February 2022, they opened a state-of-the-art 10,000-square-foot facility with twelve classrooms and capacity for 184 students.

As Grants/Treasurer of the Daisy Foundation, Gary brings his expertise in business planning, financial projections, bookkeeping, and strategic growth to help expand access to quality early childhood education and family support throughout the Jacksonville community.`,
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
