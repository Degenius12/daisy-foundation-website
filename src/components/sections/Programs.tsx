import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, GraduationCap, Users, Sprout } from "lucide-react";

export function Programs() {
  const programs = [
    {
      icon: Heart,
      title: "Healthy Beginnings",
      category: "Well-being",
      categoryColor: "bg-daisy-forest-200 text-daisy-forest-800 border-daisy-forest-400",
      cardBg: "bg-gradient-to-br from-white to-daisy-forest-100/20",
      borderColor: "border-daisy-forest-400",
      iconBg: "bg-daisy-forest-200",
      iconColor: "text-daisy-forest-700",
      description: "Nutrition support, wellness kits, and caregiver education for families in need.",
      bullets: [
        "Family pantry",
        "Wellness workshops",
        "Care kits",
      ],
    },
    {
      icon: GraduationCap,
      title: "Bloom Scholarships",
      category: "Education",
      categoryColor: "bg-daisy-sunshine-100 text-daisy-sunshine-800 border-daisy-sunshine-400",
      cardBg: "bg-gradient-to-br from-white to-daisy-sunshine-100",
      borderColor: "border-daisy-sunshine-400",
      iconBg: "bg-daisy-sunshine-200",
      iconColor: "text-daisy-sunshine-800",
      description: "Micro-grants and mentorship for youth to thrive in school and beyond.",
      bullets: [
        "Tutoring access",
        "School supplies",
        "Mentorship",
      ],
    },
    {
      icon: Users,
      title: "Hands & Hearts",
      category: "Community",
      categoryColor: "bg-daisy-lavender-light/50 text-daisy-lavender-deep border-daisy-lavender",
      cardBg: "bg-gradient-to-br from-white to-daisy-lavender-light/20",
      borderColor: "border-daisy-lavender",
      iconBg: "bg-daisy-lavender-light/40",
      iconColor: "text-daisy-lavender-deep",
      description: "Volunteer-led outreach events that build dignity, connection, and support.",
      bullets: [
        "Monthly drives",
        "Resource fairs",
        "Neighbor support",
      ],
    },
    {
      icon: Sprout,
      title: "Green Daisy",
      category: "Sustainability",
      categoryColor: "bg-daisy-forest-100 text-daisy-forest-800 border-daisy-forest-400",
      cardBg: "bg-gradient-to-br from-white to-daisy-forest-100",
      borderColor: "border-daisy-forest-400",
      iconBg: "bg-daisy-forest-200",
      iconColor: "text-daisy-forest-700",
      description: "Community gardens and clean-up initiatives that improve local health.",
      bullets: [
        "Garden builds",
        "Clean-ups",
        "Youth eco clubs",
      ],
    },
  ];

  return (
    <section id="programs" className="py-24 bg-gradient-to-br from-daisy-sunshine-50 via-white to-daisy-sunshine-100">
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
          {programs.map((program) => (
            <Card key={program.title} className={`flex flex-col ${program.cardBg} hover:shadow-2xl hover:scale-105 transition-all duration-300 border-3 ${program.borderColor} rounded-3xl overflow-hidden`}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${program.iconBg} shadow-md`}>
                    <program.icon className={`h-8 w-8 ${program.iconColor}`} aria-hidden="true" />
                  </div>
                  <Badge className={`${program.categoryColor} text-xs font-semibold px-3 py-1`} variant="outline">
                    {program.category}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-base text-gray-700 leading-relaxed">{program.description}</p>
                <ul className="space-y-2">
                  {program.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="h-2 w-2 flex-shrink-0 rounded-full bg-daisy-sunshine-500" />
                      <span className="font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href="#contact">Learn more / Volunteer</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-daisy-sunshine-100 to-daisy-sunshine-200 p-10 border-3 border-daisy-sunshine-400 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to partner with Daisy Foundation?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              We collaborate with schools, businesses, and nonprofits. Let&apos;s build something meaningful.
            </p>
            <Button size="lg" asChild>
              <a href="#contact">Become a Partner</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
