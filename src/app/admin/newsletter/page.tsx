import { getNewsletterSubscribers } from "@/lib/supabase/admin-queries";

export default async function AdminNewsletterPage() {
  const subscribers = await getNewsletterSubscribers();

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Newsletter Subscribers</h1>
          <p className="mt-1 text-sm text-gray-500">
            {subscribers.length} total subscriber{subscribers.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        {subscribers.length === 0 ? (
          <div className="px-6 py-12 text-center text-sm text-gray-500">
            No subscribers yet. {!process.env.NEXT_PUBLIC_SUPABASE_URL ? "Connect Supabase to view subscribers." : "Subscribers will appear here once visitors sign up."}
          </div>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-6 py-3 font-medium text-gray-500">Email</th>
                <th className="px-6 py-3 font-medium text-gray-500">Source</th>
                <th className="px-6 py-3 font-medium text-gray-500">Subscribed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {subscribers.map((sub) => (
                <tr key={sub.id}>
                  <td className="px-6 py-4 font-medium text-gray-900">{sub.email}</td>
                  <td className="px-6 py-4 text-gray-500">{sub.source}</td>
                  <td className="px-6 py-4 text-gray-500">
                    {new Date(sub.subscribed_at).toLocaleDateString()}
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
