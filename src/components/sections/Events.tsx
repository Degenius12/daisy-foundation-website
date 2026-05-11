import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { formatDate } from "@/lib/utils/formatting";
import { getEvents } from "@/lib/supabase/queries";

const eventImages: Record<string, { src: string; alt: string }> = {
  "Family Fun Day": {
    src: "/images/events/event-family-fun-day.png",
    alt: "Family enjoying an outdoor community festival with daisy-themed decorations",
  },
  "Back to School Drive": {
    src: "/images/events/event-back-to-school.png",
    alt: "Volunteers distributing backpacks and school supplies to excited children at a community event",
  },
  "Community Garden Kickoff": {
    src: "/images/events/event-garden-kickoff.png",
    alt: "Community members of all ages planting daisy seedlings in raised garden beds on a sunny spring day",
  },
};

const defaultEventImage = {
  src: "/images/events/event-family-fun-day.png",
  alt: "Daisy's Nonprofit community event",
};

const cardColors = [
  "border-daisy-forest-400 hover:border-daisy-forest-600",
  "border-daisy-sunshine-300 hover:border-daisy-sunshine-500",
  "border-daisy-teal hover:border-daisy-teal-deep",
];

const badgeColors = [
  "bg-daisy-forest-600 text-white",
  "bg-daisy-sunshine-500 text-white",
  "bg-daisy-teal text-white",
];

export async function Events() {
  const events = await getEvents();
  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="events" className="py-24 bg-gradient-to-br from-daisy-forest-100/10 via-daisy-sunshine-50 to-daisy-teal-light/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-daisy-forest-700 sm:text-4xl">
            Community Events
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Upcoming opportunities to volunteer, fundraise, and gather — plus
            recent moments from the community we&apos;ve been proud to be part of.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {events.map((event, index) => {
            const image = eventImages[event.title] || defaultEventImage;
            const isPast = event.date < today;
            return (
              <Card
                key={event.id}
                className={`flex flex-col hover:shadow-daisy-lg hover:scale-105 transition-all duration-300 border-2 ${cardColors[index % cardColors.length]} overflow-hidden ${isPast ? "opacity-80" : ""}`}
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    quality={75}
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Calendar className="h-5 w-5 text-daisy-forest-700" aria-hidden="true" />
                    {isPast ? (
                      <Badge className="bg-gray-500 text-white">Past Event</Badge>
                    ) : event.is_featured ? (
                      <Badge className={badgeColors[index % badgeColors.length]}>Featured</Badge>
                    ) : null}
                  </div>
                  <CardTitle className="text-xl text-daisy-forest-700" data-testid="event-title">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      <span>{formatDate(new Date(event.date), "long")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-sm text-gray-700">{event.description}</p>
                  </div>

                  {!isPast && (event.rsvp_link ? (
                    <Button className="mt-6 w-full" variant="outline" asChild>
                      <a
                        href={event.rsvp_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        RSVP Now
                        <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                      </a>
                    </Button>
                  ) : (
                    <Button className="mt-6 w-full" variant="outline" asChild>
                      <a href="#contact">Get Details</a>
                    </Button>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-base text-gray-700 font-medium">Want to volunteer or host an event?</p>
          <a
            href="#contact"
            className="mt-2 inline-block font-semibold text-daisy-forest-700 hover:text-daisy-teal hover:scale-105 transition-all"
          >
            Get in touch with our team →
          </a>
        </div>
      </div>
    </section>
  );
}
