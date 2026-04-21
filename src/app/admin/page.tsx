import { getDashboardCounts } from "@/lib/supabase/admin-queries";
import {
  BookOpen,
  CalendarDays,
  Mail,
  Newspaper,
  DollarSign,
  TrendingUp,
} from "lucide-react";

export default async function AdminDashboardPage() {
  const counts = await getDashboardCounts();

  const cards = [
    { label: "Programs", value: counts.programs, icon: BookOpen, color: "bg-green-50 text-green-600" },
    { label: "Events", value: counts.events, icon: CalendarDays, color: "bg-blue-50 text-blue-600" },
    { label: "Contact Messages", value: counts.contacts, icon: Mail, color: "bg-yellow-50 text-yellow-600" },
    { label: "Newsletter Subscribers", value: counts.subscribers, icon: Newspaper, color: "bg-purple-50 text-purple-600" },
    { label: "Donations", value: counts.donations, icon: DollarSign, color: "bg-emerald-50 text-emerald-600" },
    {
      label: "Total Donated",
      value: `$${(counts.totalDonated / 100).toLocaleString("en-US", { minimumFractionDigits: 2 })}`,
      icon: TrendingUp,
      color: "bg-amber-50 text-amber-600",
    },
  ];

  const isConfigured = !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <p className="mt-1 text-sm text-gray-500">Overview of your foundation data.</p>

      {!isConfigured && (
        <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm font-medium text-amber-800">
            Supabase is not configured. Add your credentials to <code className="rounded bg-amber-100 px-1 py-0.5">.env.local</code> to connect to the database. The admin pages will show empty data until then.
          </p>
        </div>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${card.color}`}>
                <card.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{card.label}</p>
                <p className="text-2xl font-bold text-gray-900">{card.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
