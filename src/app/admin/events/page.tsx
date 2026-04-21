import { getAllEvents } from "@/lib/supabase/admin-queries";
import { createEventAction, updateEventAction, deleteEventAction } from "../actions";
import { Badge } from "@/components/ui/badge";

export default async function AdminEventsPage() {
  const events = await getAllEvents();

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Events</h1>
        <p className="mt-1 text-sm text-gray-500">Manage upcoming events shown on the website.</p>
      </div>

      {/* Create Form */}
      <details className="mt-6 rounded-xl border border-gray-200 bg-white shadow-sm">
        <summary className="cursor-pointer px-6 py-4 text-sm font-semibold text-gray-900">
          + Add New Event
        </summary>
        <form action={createEventAction} className="border-t border-gray-200 px-6 py-4 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="new-event-title" className="block text-sm font-medium text-gray-700">Title</label>
              <input id="new-event-title" name="title" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
            </div>
            <div>
              <label htmlFor="new-event-date" className="block text-sm font-medium text-gray-700">Date</label>
              <input id="new-event-date" name="date" type="date" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
            </div>
          </div>
          <div>
            <label htmlFor="new-event-location" className="block text-sm font-medium text-gray-700">Location</label>
            <input id="new-event-location" name="location" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
          </div>
          <div>
            <label htmlFor="new-event-desc" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea id="new-event-desc" name="description" required rows={3} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
          </div>
          <div>
            <label htmlFor="new-event-rsvp" className="block text-sm font-medium text-gray-700">RSVP Link (optional)</label>
            <input id="new-event-rsvp" name="rsvp_link" type="url" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input name="is_featured" type="hidden" value="false" />
            <input name="is_featured" type="checkbox" value="true" className="rounded border-gray-300" />
            Featured Event
          </label>
          <button type="submit" className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
            Create Event
          </button>
        </form>
      </details>

      {/* Events Table */}
      <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        {events.length === 0 ? (
          <div className="px-6 py-12 text-center text-sm text-gray-500">
            No events found. {!process.env.NEXT_PUBLIC_SUPABASE_URL ? "Connect Supabase to manage events." : "Add your first event above."}
          </div>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-6 py-3 font-medium text-gray-500">Event</th>
                <th className="px-6 py-3 font-medium text-gray-500">Date</th>
                <th className="px-6 py-3 font-medium text-gray-500">Location</th>
                <th className="px-6 py-3 font-medium text-gray-500">Featured</th>
                <th className="px-6 py-3 font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {events.map((event) => (
                <tr key={event.id}>
                  <td className="px-6 py-4">
                    <details>
                      <summary className="cursor-pointer font-medium text-gray-900">{event.title}</summary>
                      <form action={updateEventAction} className="mt-3 space-y-3 border-t border-gray-100 pt-3">
                        <input type="hidden" name="id" value={event.id} />
                        <input name="title" defaultValue={event.title} className="block w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm" />
                        <input name="date" type="date" defaultValue={event.date} className="block w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm" />
                        <input name="location" defaultValue={event.location} className="block w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm" />
                        <textarea name="description" defaultValue={event.description} rows={3} className="block w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm" />
                        <input name="rsvp_link" type="url" defaultValue={event.rsvp_link || ""} placeholder="RSVP link (optional)" className="block w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm" />
                        <label className="flex items-center gap-2 text-sm">
                          <input name="is_featured" type="hidden" value="false" />
                          <input name="is_featured" type="checkbox" value="true" defaultChecked={event.is_featured} className="rounded border-gray-300" />
                          Featured
                        </label>
                        <button type="submit" className="rounded bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">
                          Save Changes
                        </button>
                      </form>
                    </details>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{new Date(event.date).toLocaleDateString()}</td>
                  <td className="px-6 py-4 text-gray-500">{event.location}</td>
                  <td className="px-6 py-4">
                    {event.is_featured && <Badge>Featured</Badge>}
                  </td>
                  <td className="px-6 py-4">
                    <form action={deleteEventAction}>
                      <input type="hidden" name="id" value={event.id} />
                      <button type="submit" className="text-xs text-red-600 hover:text-red-800">
                        Delete
                      </button>
                    </form>
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
