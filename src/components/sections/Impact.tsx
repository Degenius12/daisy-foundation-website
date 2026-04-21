import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase, Clock, Target } from "lucide-react";
import { formatNumber } from "@/lib/utils/formatting";
import { getImpactMetrics, getSuccessStories } from "@/lib/supabase/queries";

const metricIcons: Record<string, typeof Users> = {
  "Families Served": Users,
  "Local Partners": Briefcase,
  "Volunteer Hours": Clock,
  "Active Programs": Target,
};

const metricColors = [
  "text-daisy-forest-700",
  "text-daisy-bloom-600",
  "text-purple-600",
  "text-green-600",
];

const bgColors = [
  "bg-daisy-teal-light/20",
  "bg-daisy-sunshine-200",
  "bg-daisy-forest-100",
  "bg-daisy-forest-200",
];

export async function Impact() {
  const [metrics, stories] = await Promise.all([
    getImpactMetrics(),
    getSuccessStories(),
  ]);

  const featuredStory = stories[0];

  return (
    <section id="impact" className="py-24 bg-gradient-to-br from-daisy-lavender-light/10 via-white to-daisy-sky-light/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-daisy-forest-700 sm:text-4xl">
            Our Impact
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Together, we&apos;re building stronger families and brighter futures for children
            across our community.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => {
            const Icon = metricIcons[metric.metric_name] || Target;
            return (
              <Card key={metric.id} className="text-center border-2 hover:shadow-daisy-lg hover:scale-105 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${bgColors[index % bgColors.length]} shadow-daisy-sm`}>
                    <Icon className={`h-8 w-8 ${metricColors[index % metricColors.length]}`} aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-4xl font-bold text-daisy-forest-700">
                    {formatNumber(metric.metric_value)}
                    {metric.display_suffix || ""}
                  </p>
                  <p className="mt-2 text-sm font-medium text-gray-700">{metric.metric_name}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Success Story */}
        {featuredStory && (
          <div className="mx-auto mt-20 max-w-4xl">
            <div className="relative rounded-2xl bg-gradient-to-br from-daisy-sunshine-100 via-daisy-forest-100/30 to-daisy-teal-light/20 p-8 lg:p-12 border-2 border-daisy-sunshine-300 shadow-daisy-lg">
              <h3 className="text-2xl font-bold text-daisy-forest-700">Success Story</h3>
              <div className="mt-6 flex flex-col md:flex-row gap-8 items-start">
                {featuredStory.featured_image && (
                  <div className="relative h-32 w-32 flex-shrink-0 mx-auto md:mx-0 overflow-hidden rounded-full border-4 border-daisy-sunshine-300 shadow-lg">
                    <Image
                      src={featuredStory.featured_image}
                      alt={`${featuredStory.title} - success story portrait`}
                      fill
                      className="object-cover"
                      quality={85}
                    />
                  </div>
                )}
                <div>
                  <blockquote>
                    <p className="text-lg leading-8 text-gray-700">
                      &ldquo;{featuredStory.content}&rdquo;
                    </p>
                  </blockquote>
                  <div className="mt-6">
                    <p className="font-semibold text-gray-900">{featuredStory.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Allocation Transparency */}
        <div className="mx-auto mt-20 max-w-3xl">
          <h3 className="text-center text-xl font-bold text-daisy-forest-700">
            Where Your Donations Go
          </h3>
          <div className="mt-8 space-y-4">
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="font-medium text-gray-700">Programs & Direct Support</span>
                <span className="font-semibold text-daisy-forest-700">78%</span>
              </div>
              <div className="h-3 w-full rounded-full bg-gray-200">
                <div className="h-3 rounded-full bg-daisy-forest-700 shadow-daisy-sm" style={{ width: "78%" }} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="font-medium text-gray-700">Operations & Administration</span>
                <span className="font-semibold text-daisy-teal-deep">14%</span>
              </div>
              <div className="h-3 w-full rounded-full bg-gray-200">
                <div className="h-3 rounded-full bg-daisy-teal shadow-daisy-sm" style={{ width: "14%" }} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="font-medium text-gray-700">Fundraising & Outreach</span>
                <span className="font-semibold text-daisy-lavender-deep">8%</span>
              </div>
              <div className="h-3 w-full rounded-full bg-gray-200">
                <div className="h-3 rounded-full bg-daisy-lavender shadow-daisy-sm" style={{ width: "8%" }} />
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-600">
            Updated quarterly based on actual expenses
          </p>
        </div>
      </div>
    </section>
  );
}
