import { getContactSubmissions } from "@/lib/supabase/admin-queries";
import { Badge } from "@/components/ui/badge";

export default async function AdminContactsPage() {
  const contacts = await getContactSubmissions();

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Contact Messages</h1>
        <p className="mt-1 text-sm text-gray-500">View messages submitted through the contact form.</p>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        {contacts.length === 0 ? (
          <div className="px-6 py-12 text-center text-sm text-gray-500">
            No contact submissions yet. {!process.env.NEXT_PUBLIC_SUPABASE_URL ? "Connect Supabase to view submissions." : "Messages will appear here once visitors use the contact form."}
          </div>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-6 py-3 font-medium text-gray-500">Name</th>
                <th className="px-6 py-3 font-medium text-gray-500">Email</th>
                <th className="px-6 py-3 font-medium text-gray-500">Subject</th>
                <th className="px-6 py-3 font-medium text-gray-500">Status</th>
                <th className="px-6 py-3 font-medium text-gray-500">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td className="px-6 py-4">
                    <details>
                      <summary className="cursor-pointer font-medium text-gray-900">{contact.name}</summary>
                      <div className="mt-2 rounded-lg bg-gray-50 p-4 text-sm text-gray-700">
                        <p className="whitespace-pre-wrap">{contact.message}</p>
                      </div>
                    </details>
                  </td>
                  <td className="px-6 py-4">
                    <a href={`mailto:${contact.email}`} className="text-blue-600 hover:text-blue-800">
                      {contact.email}
                    </a>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{contact.subject || "—"}</td>
                  <td className="px-6 py-4">
                    <Badge variant={contact.status === "new" ? "default" : "secondary"}>
                      {contact.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {new Date(contact.submitted_at).toLocaleDateString()}
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
