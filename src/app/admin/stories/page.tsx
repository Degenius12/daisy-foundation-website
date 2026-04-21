import { getAllStories } from "@/lib/supabase/admin-queries";
import { createStoryAction, updateStoryAction, deleteStoryAction } from "../actions";
import { Badge } from "@/components/ui/badge";

export default async function AdminStoriesPage() {
  const stories = await getAllStories();

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Success Stories</h1>
        <p className="mt-1 text-sm text-gray-500">Manage stories displayed in the Impact section.</p>
      </div>

      {/* Create Form */}
      <details className="mt-6 rounded-xl border border-gray-200 bg-white shadow-sm">
        <summary className="cursor-pointer px-6 py-4 text-sm font-semibold text-gray-900">
          + Add New Story
        </summary>
        <form action={createStoryAction} className="border-t border-gray-200 px-6 py-4 space-y-4">
          <div>
            <label htmlFor="new-story-title" className="block text-sm font-medium text-gray-700">Title / Person Name</label>
            <input id="new-story-title" name="title" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
          </div>
          <div>
            <label htmlFor="new-story-content" className="block text-sm font-medium text-gray-700">Story Content</label>
            <textarea id="new-story-content" name="content" required rows={5} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
          </div>
          <div>
            <label htmlFor="new-story-image" className="block text-sm font-medium text-gray-700">Featured Image URL (optional)</label>
            <input id="new-story-image" name="featured_image" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="new-story-order" className="block text-sm font-medium text-gray-700">Display Order</label>
              <input id="new-story-order" name="display_order" type="number" defaultValue={0} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
            </div>
            <div className="flex items-end">
              <label className="flex items-center gap-2 text-sm">
                <input name="is_published" type="hidden" value="false" />
                <input name="is_published" type="checkbox" value="true" defaultChecked className="rounded border-gray-300" />
                Published
              </label>
            </div>
          </div>
          <button type="submit" className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
            Create Story
          </button>
        </form>
      </details>

      {/* Stories Table */}
      <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        {stories.length === 0 ? (
          <div className="px-6 py-12 text-center text-sm text-gray-500">
            No stories found. {!process.env.NEXT_PUBLIC_SUPABASE_URL ? "Connect Supabase to manage stories." : "Add your first story above."}
          </div>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-6 py-3 font-medium text-gray-500">Title</th>
                <th className="px-6 py-3 font-medium text-gray-500">Status</th>
                <th className="px-6 py-3 font-medium text-gray-500">Order</th>
                <th className="px-6 py-3 font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {stories.map((story) => (
                <tr key={story.id}>
                  <td className="px-6 py-4">
                    <details>
                      <summary className="cursor-pointer font-medium text-gray-900">{story.title}</summary>
                      <form action={updateStoryAction} className="mt-3 space-y-3 border-t border-gray-100 pt-3">
                        <input type="hidden" name="id" value={story.id} />
                        <input name="title" defaultValue={story.title} className="block w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm" />
                        <textarea name="content" defaultValue={story.content} rows={4} className="block w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm" />
                        <input name="featured_image" defaultValue={story.featured_image || ""} placeholder="Image URL" className="block w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm" />
                        <input name="display_order" type="number" defaultValue={story.display_order || 0} className="block w-24 rounded-md border border-gray-300 px-3 py-1.5 text-sm" />
                        <label className="flex items-center gap-2 text-sm">
                          <input name="is_published" type="hidden" value="false" />
                          <input name="is_published" type="checkbox" value="true" defaultChecked={story.is_published} className="rounded border-gray-300" />
                          Published
                        </label>
                        <button type="submit" className="rounded bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">
                          Save Changes
                        </button>
                      </form>
                    </details>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={story.is_published ? "default" : "secondary"}>
                      {story.is_published ? "Published" : "Draft"}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{story.display_order}</td>
                  <td className="px-6 py-4">
                    <form action={deleteStoryAction}>
                      <input type="hidden" name="id" value={story.id} />
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
