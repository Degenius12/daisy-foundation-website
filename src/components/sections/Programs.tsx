import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getPrograms } from "@/lib/supabase/queries";

const programImages: Record<string, string> = {
  "Healthy Beginnings": "/images/programs/program-healthy-beginnings.png",
  "Bloom Scholarships": "/images/programs/program-bloom-scholarships.png",
  "Hands & Hearts": "/images/programs/program-hands-hearts.png",
  "Green Daisy": "/images/programs/program-green-daisy.png",
};

const categoryStyles: Record<string, { badge: string; border: string }> = {
  Wellness: {
    badge: "bg-daisy-forest-200 text-daisy-forest-800 border-daisy-forest-400",
    border: "border-daisy-forest-400",
  },
  Education: {
    badge: "bg-daisy-sunshine-100 text-daisy-sunshine-800 border-daisy-sunshine-400",
    border: "border-daisy-sunshine-400",
  },
  Community: {
    badge: "bg-daisy-lavender-light/50 text-daisy-lavender-deep border-daisy-lavender",
    border: "border-daisy-lavender",
  },
  Environment: {
    badge: "bg-daisy-forest-100 text-daisy-forest-800 border-daisy-forest-400",
    border: "border-daisy-forest-400",
  },
};

const defaultStyle = {
  badge: "bg-gray-200 text-gray-800 border-gray-400",
  border: "border-gray-400",
};

export async function Programs() {
  const programs = await getPrograms();

  return (
    <section id="programs" className="py-24 bg-cream-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-daisy-forest-700 sm:text-6xl">
            What We Do
          </h2>
          <p className="mt-6 text-xl md:text-2xl leading-relaxed text-gray-700">
            Programs that meet needs today and build hope for tomorrow.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2">
          {programs.map((program) => {
            const style = categoryStyles[program.category] || defaultStyle;
            const image = programImages[program.title] || "/images/programs/program-healthy-beginnings.png";

            return (
              <Card key={program.id} className={`flex flex-col bg-white hover:shadow-2xl hover:scale-105 transition-all duration-300 border-3 ${style.border} rounded-3xl overflow-hidden`}>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20" />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-2xl font-bold text-gray-900">{program.title}</CardTitle>
                    <Badge className={`${style.badge} text-xs font-semibold px-3 py-1`} variant="outline">
                      {program.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <p className="text-base text-gray-700 leading-relaxed">{program.description}</p>
                  <ul className="space-y-2">
                    {program.bullet_points.map((bullet, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm text-gray-700">
                        <span className="h-2 w-2 flex-shrink-0 rounded-full bg-daisy-forest-500" />
                        <span className="font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button variant="outline" size="sm" className="w-full border-daisy-forest-400 text-daisy-forest-700 hover:bg-daisy-forest-50" asChild>
                      <a href="#contact">Learn more / Volunteer</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-daisy-sunshine-100 to-daisy-sunshine-200 p-10 border-3 border-daisy-sunshine-400 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to partner with Daisy&apos;s Nonprofit?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              We collaborate with schools, businesses, and nonprofits. Let&apos;s build something meaningful.
            </p>
            <Button size="lg" className="bg-daisy-forest-600 hover:bg-daisy-forest-700" asChild>
              <a href="#contact">Become a Partner</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
