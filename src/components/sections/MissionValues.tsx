import { Heart, Users, Sparkles } from "lucide-react";

export function MissionValues() {
  const values = [
    {
      icon: Heart,
      title: "Community-first",
      description: "We listen, then build solutions together.",
    },
    {
      icon: Users,
      title: "Dignity",
      description: "Support that respects every person.",
    },
    {
      icon: Sparkles,
      title: "Sustainable",
      description: "Programs that last and multiply impact.",
    },
  ];

  return (
    <section id="mission" className="py-24 bg-gradient-to-br from-white via-daisy-sunshine-50 to-daisy-sunshine-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-daisy-sunshine-700 sm:text-6xl">
            Our Mission
          </h2>
          <div className="mt-10 space-y-6 text-lg md:text-xl leading-relaxed text-gray-700">
            <p>
              Inspired by my grandmother Daisy—Jamaican-born, a devoted nurse aide, and a loving
              child caregiver in Miami—we carry forward her legacy of patience, warmth, and compassion.
            </p>
            <p>
              Daisy&apos;s Nonprofit Inc. exists to ensure every child feels safe, seen, and supported
              through access to quality early childhood education.
            </p>
            <p>
              We support mothers, teen parents, and families by subsidizing childcare tuition and
              reducing the burden of affordability. We also provide educational enrichment, job
              training, and career support to help parents build stability and brighter futures.
            </p>
            <p>
              With a strong early education foundation and empowered families, we believe children
              can thrive academically, socially, and emotionally for life.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-daisy-sunshine-700 mt-8">
              Daisy Foundation is a nonprofit dedicated to creating safe, healthy, and opportunity-rich
              communities. We partner with families, schools, and local organizations to meet urgent
              needs and build long-term pathways for success.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mx-auto mt-24 max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => {
              const colors = [
                { bg: "bg-gradient-to-br from-daisy-sunshine-100 to-daisy-sunshine-200", icon: "text-daisy-sunshine-700", border: "border-daisy-sunshine-400" },
                { bg: "bg-gradient-to-br from-daisy-coral-light/40 to-daisy-coral-light/60", icon: "text-daisy-coral-deep", border: "border-daisy-coral" },
                { bg: "bg-gradient-to-br from-daisy-sunshine-100 to-daisy-sunshine-200", icon: "text-daisy-sunshine-600", border: "border-daisy-sunshine-400" },
              ];
              return (
                <div
                  key={value.title}
                  className={`relative overflow-hidden rounded-3xl border-3 ${colors[index].border} ${colors[index].bg} p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md">
                    <value.icon className={`h-7 w-7 ${colors[index].icon}`} aria-hidden="true" />
                  </div>
                  <h4 className="mt-6 text-xl font-bold text-gray-900">
                    {value.title}
                  </h4>
                  <p className="mt-3 text-base leading-7 text-gray-700">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
