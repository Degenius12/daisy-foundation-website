import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { formatDate } from "@/lib/utils/formatting";

export function Events() {
  const events = [
    {
      id: 1,
      title: "Family Fun Day",
      date: new Date("2026-03-20"),
      location: "Central Park",
      description:
        "Join us for games, food, and community fun. Bring the whole family for a day of activities, face painting, and getting to know your neighbors.",
      rsvpLink: "https://eventbrite.com/family-fun-day",
      isFeatured: true,
    },
    {
      id: 2,
      title: "Back to School Drive",
      date: new Date("2026-08-10"),
      location: "Community Center",
      description:
        "Help us prepare students for the new school year. We're collecting backpacks, school supplies, and volunteers to help distribute them to families.",
      rsvpLink: "https://eventbrite.com/back-to-school",
      isFeatured: false,
    },
    {
      id: 3,
      title: "Community Garden Kickoff",
      date: new Date("2026-04-15"),
      location: "Green Daisy Garden Site",
      description:
        "Launch our spring planting season! Learn about sustainable gardening, get your hands dirty, and help us grow fresh produce for local families.",
      rsvpLink: "https://eventbrite.com/garden-kickoff",
      isFeatured: false,
    },
  ];

  return (
    <section id="events" className="py-24 bg-gradient-to-br from-daisy-forest-100/10 via-daisy-sunshine-50 to-daisy-teal-light/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-daisy-forest-700 sm:text-4xl">
            Upcoming Events
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Join us for volunteer opportunities, fundraising events, and community
            gatherings. Everyone is welcome!
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {events.map((event, index) => {
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
            return (
              <Card
                key={event.id}
                className={`flex flex-col hover:shadow-daisy-lg hover:scale-105 transition-all duration-300 border-2 ${cardColors[index]}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Calendar className="h-5 w-5 text-daisy-forest-700" aria-hidden="true" />
                    {event.isFeatured && (
                      <Badge className={badgeColors[index]}>Featured</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-daisy-forest-700" data-testid="event-title">
                    {event.title}
                  </CardTitle>
                </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    <span>{formatDate(event.date, "long")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-sm text-gray-700">{event.description}</p>
                </div>

                <Button className="mt-6 w-full" variant="outline" asChild>
                  <a
                    href={event.rsvpLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RSVP Now
                    <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
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
