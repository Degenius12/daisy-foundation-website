import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase, Clock, Target } from "lucide-react";
import { formatNumber } from "@/lib/utils/formatting";

export function Impact() {
  const metrics = [
    {
      icon: Users,
      value: 3200,
      label: "Families Served",
      suffix: "+",
      color: "text-daisy-forest-700",
    },
    {
      icon: Briefcase,
      value: 85,
      label: "Local Partners",
      suffix: "",
      color: "text-daisy-bloom-600",
    },
    {
      icon: Clock,
      value: 14500,
      label: "Volunteer Hours",
      suffix: "+",
      color: "text-purple-600",
    },
    {
      icon: Target,
      value: 12,
      label: "Active Programs",
      suffix: "",
      color: "text-green-600",
    },
  ];

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
            const bgColors = [
              "bg-daisy-teal-light/20",
              "bg-daisy-sunshine-200",
              "bg-daisy-forest-100",
              "bg-daisy-forest-200",
            ];
            return (
              <Card key={metric.label} className="text-center border-2 hover:shadow-daisy-lg hover:scale-105 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${bgColors[index]} shadow-daisy-sm`}>
                    <metric.icon className={`h-8 w-8 ${metric.color}`} aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-4xl font-bold text-daisy-forest-700">
                    {formatNumber(metric.value)}
                    {metric.suffix}
                  </p>
                  <p className="mt-2 text-sm font-medium text-gray-700">{metric.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Success Story with Photo */}
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Photo column */}
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden border-3 border-daisy-sunshine-300 shadow-daisy-lg">
              <Image
                src="/images/photos/community/intergenerational-activity.png"
                alt="Grandmother helping children plant daisies in community garden"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Story content column */}
            <div className="relative rounded-2xl bg-gradient-to-br from-daisy-sunshine-100 via-daisy-forest-100/30 to-daisy-teal-light/20 p-8 lg:p-10 border-2 border-daisy-sunshine-300 shadow-daisy-lg">
              <h3 className="text-2xl font-bold text-daisy-forest-700">Building Bridges Across Generations</h3>
              <blockquote className="mt-6">
                <p className="text-lg leading-8 text-gray-700">
                  &ldquo;When I became a single mother, I didn&apos;t know how I would afford quality
                  childcare while working full-time. The Bloom Scholarship program gave my
                  children access to an amazing pre-K program at no cost. Today, they&apos;re
                  thriving in elementary school, and I&apos;ve completed job training to advance
                  my career. This foundation changed our lives.&rdquo;
                </p>
              </blockquote>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">Maria Rodriguez</p>
                <p className="text-sm text-gray-600">Bloom Scholarships, 2023</p>
              </div>
            </div>
          </div>
        </div>

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
