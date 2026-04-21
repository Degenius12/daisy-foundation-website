import { getDonations } from "@/lib/supabase/admin-queries";
import { Badge } from "@/components/ui/badge";

export default async function AdminDonationsPage() {
  const donations = await getDonations();
  const totalCents = donations.reduce((sum, d) => sum + d.amount, 0);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Donations</h1>
          <p className="mt-1 text-sm text-gray-500">
            {donations.length} donation{donations.length !== 1 ? "s" : ""} totaling ${(totalCents / 100).toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </p>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        {donations.length === 0 ? (
          <div className="px-6 py-12 text-center text-sm text-gray-500">
            No donations yet. {!process.env.NEXT_PUBLIC_SUPABASE_URL ? "Connect Supabase to view donations." : "Donations will appear here after Stripe checkout completions."}
          </div>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-6 py-3 font-medium text-gray-500">Donor</th>
                <th className="px-6 py-3 font-medium text-gray-500">Email</th>
                <th className="px-6 py-3 font-medium text-gray-500">Amount</th>
                <th className="px-6 py-3 font-medium text-gray-500">Frequency</th>
                <th className="px-6 py-3 font-medium text-gray-500">Status</th>
                <th className="px-6 py-3 font-medium text-gray-500">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {donations.map((donation) => (
                <tr key={donation.id}>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {donation.donor_name || "Anonymous"}
                  </td>
                  <td className="px-6 py-4 text-gray-500">{donation.donor_email}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    ${(donation.amount / 100).toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={donation.frequency === "monthly" ? "default" : "secondary"}>
                      {donation.frequency}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <Badge
                      variant={donation.status === "completed" ? "default" : "destructive"}
                    >
                      {donation.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {new Date(donation.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
