import { Heart, Clock, Shield } from "lucide-react";

export function MissionValues() {
  const values = [
    {
      icon: Heart,
      title: "Love",
      description:
        "Every child feels the warmth of unconditional care and support, just as Grandmother Daisy provided.",
    },
    {
      icon: Clock,
      title: "Patience",
      description:
        "We understand that growth takes time. We walk alongside families at their own pace.",
    },
    {
      icon: Shield,
      title: "Safe Spaces",
      description:
        "Creating environments where children and families feel secure, valued, and free to thrive.",
    },
  ];

  return (
    <section id="mission" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We believe every child deserves a strong start in life. Inspired by
            Grandmother Daisy&apos;s legacy of compassion and care, we provide quality early
            childhood education support to families who need it most.
          </p>
        </div>

        {/* Daisy's Story */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="relative rounded-2xl bg-daisy-forest-50 p-8 lg:p-12">
            <div className="absolute -top-4 -left-4 text-6xl text-daisy-bloom-400 opacity-50">
              &ldquo;
            </div>
            <p className="text-base leading-7 text-gray-700">
              Daisy was a remarkable woman who grew up in Jamaica and later migrated to
              the United States. As a pediatric nurse with nine children, she embodied
              compassion, patience, and unconditional love. After moving to the US, she
              worked as a caregiver for families in the Miami area, creating safe spaces
              where every child felt seen and supported.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-700">
              Her grandchildren remember her home as a sanctuary—where favorite meals were
              always ready, where listening ears were always available, and where love was
              abundant. This legacy of care inspired the creation of Daisy Foundation in
              2024.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mx-auto mt-20 max-w-5xl">
          <h3 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Our Core Values
          </h3>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-daisy-forest-100">
                  <value.icon className="h-6 w-6 text-daisy-forest-700" aria-hidden="true" />
                </div>
                <h4 className="mt-6 text-lg font-semibold text-gray-900">
                  {value.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
