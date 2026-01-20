import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, GraduationCap, Users, Sprout } from "lucide-react";

export function Programs() {
  const programs = [
    {
      icon: Heart,
      title: "Healthy Beginnings",
      category: "Wellness",
      categoryColor: "bg-daisy-coral-light/50 text-daisy-coral-deep border-daisy-coral",
      iconBg: "bg-daisy-coral-light/30",
      iconColor: "text-daisy-coral-deep",
      description: "Supporting families from prenatal through age 3 with comprehensive care.",
      bullets: [
        "Prenatal and postpartum care",
        "Developmental screenings",
        "Parent education workshops",
      ],
    },
    {
      icon: GraduationCap,
      title: "Bloom Scholarships",
      category: "Education",
      categoryColor: "bg-daisy-sky-light/50 text-daisy-sky-deep border-daisy-sky",
      iconBg: "bg-daisy-sky-light/30",
      iconColor: "text-daisy-sky-deep",
      description: "Tuition assistance ensuring every child can access quality pre-K programs.",
      bullets: [
        "Full or partial tuition coverage",
        "School supplies and materials",
        "Educational enrichment activities",
      ],
    },
    {
      icon: Users,
      title: "Hands & Hearts",
      category: "Community",
      categoryColor: "bg-daisy-lavender-light/50 text-daisy-lavender-deep border-daisy-lavender",
      iconBg: "bg-daisy-lavender-light/30",
      iconColor: "text-daisy-lavender-deep",
      description: "Building strong communities through volunteer engagement and family events.",
      bullets: [
        "Family fun events",
        "Community service projects",
        "Parent support groups",
      ],
    },
    {
      icon: Sprout,
      title: "Green Daisy",
      category: "Environment",
      categoryColor: "bg-daisy-forest-100 text-daisy-forest-800 border-daisy-forest-400",
      iconBg: "bg-daisy-forest-200",
      iconColor: "text-daisy-forest-700",
      description: "Environmental education and sustainability through hands-on learning.",
      bullets: [
        "Community garden projects",
        "Nature-based learning",
        "Sustainability education",
      ],
    },
  ];

  return (
    <section id="programs" className="py-24 bg-gradient-to-br from-daisy-forest-50 via-white to-daisy-teal-light/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Programs
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Four comprehensive programs designed to support families and children at every
            stage of early development.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {programs.map((program) => (
            <Card key={program.title} className="flex flex-col hover:shadow-daisy-xl hover:scale-105 transition-all duration-300 border-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${program.iconBg} shadow-daisy-sm`}>
                    <program.icon className={`h-7 w-7 ${program.iconColor}`} aria-hidden="true" />
                  </div>
                  <Badge className={program.categoryColor} variant="outline">
                    {program.category}
                  </Badge>
                </div>
                <CardTitle className="mt-4 text-xl">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-daisy-bloom-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-base text-gray-600">
            Interested in learning more about our programs?
          </p>
          <a
            href="#contact"
            className="mt-2 inline-block font-semibold text-daisy-forest-700 hover:text-daisy-forest-800"
          >
            Contact us to get started →
          </a>
        </div>
      </div>
    </section>
  );
}
