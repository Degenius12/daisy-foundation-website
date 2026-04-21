import { getAllPrograms } from "@/lib/supabase/admin-queries";
import { createProgramAction, updateProgramAction, deleteProgramAction } from "../actions";
import { Badge } from "@/components/ui/badge";

export default async function AdminProgramsPage() {
  const programs = await getAllPrograms();

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Programs</h1>
          <p className="mt-1 text-sm text-gray-500">Manage foundation programs shown on the website.</p>
        </div>
      </div>

      {/* Create Form */}
      <details className="mt-6 rounded-xl border border-gray-200 bg-white shadow-sm">
        <summary className="cursor-pointer px-6 py-4 text-sm font-semibold text-gray-900">
          + Add New Program
        </summary>
        <form action={createProgramAction} className="border-t border-gray-200 px-6 py-4 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="new-title" className="block text-sm font-medium text-gray-700">Title</label>
              <input id="new-title" name="title" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
            </div>
            <div>
              <label htmlFor="new-category" className="block text-sm font-medium text-gray-700">Category</label>
              <select id="new-category" name="category" required className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm">
                <option value="Education">Education</option>
                <option value="Wellness">Wellness</option>
                <option value="Community">Community</option>
                <option value="Environment">Environment</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="new-desc" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea id="new-desc" name="description" required rows={3} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
          </div>
          <div>
            <label htmlFor="new-bullets" className="block text-sm font-medium text-gray-700">Bullet Points (one per line)</label>
            <textarea id="new-bullets" name="bullet_points" required rows={3} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="new-order" className="block text-sm font-medium text-gray-700">Order</label>
              <input id="new-order" name="order_index" type="number" defaultValue={0} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
            </div>
            <div className="flex items-end">
              <label className="flex items-center gap-2 text-sm">
                <input name="is_active" type="hidden" value="false" />
                <input name="is_active" type="checkbox" value="true" defaultChecked className="rounded border-gray-300" />
                Active
              </label>
            </div>
          </div>
          <button type="submit" className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
            Create Program
          </button>
        </form>
      </details>

      {/* Programs Table */}
      <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        {programs.length === 0 ? (
          <div className="px-6 py-12 text-center text-sm text-gray-500">
            No programs found. {!process.env.NEXT_PUBLIC_SUPABASE_URL ? "Connect Supabase to manage programs." : "Add your first program above."}
          </div>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-6 py-3 font-medium text-gray-500">Title</th>
                <th className="px-6 py-3 font-medium text-gray-500">Category</th>
                <th className="px-6 py-3 font-medium text-gray-500">Status</th>
                <th className="px-6 py-3 font-medium text-gray-500">Order</th>
                <th className="px-6 py-3 font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {programs.map((program) => (
                <tr key={program.id}>
                  <td className="px-6 py-4">
                    <details>
                      <summary className="cursor-pointer font-medium text-gray-900">{program.title}</summary>
                      <form action={updateProgramAction} className="mt-3 space-y-3 border-t border-gray-100 pt-3">
                        <input type="hidden" name="id" value={program.id} />
                        <input name="title" defaultValue={program.title} className="block w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm" />
                        <select name="category" defaultValue={program.category} className="block w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm">
                          <option value="Education">Education</option>
                          <option value="Wellness">Wellness</option>
                          <option value="Community">Community</option>
                          <option value="Environment">Environment</option>
                        </select>
                        <textarea name="description" defaultValue={program.description} rows={2} className="block w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm" />
                        <textarea name="bullet_points" defaultValue={program.bullet_points.join("\n")} rows={3} className="block w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm" />
                        <input name="order_index" type="number" defaultValue={program.order_index} className="block w-24 rounded-md border border-gray-300 px-3 py-1.5 text-sm" />
                        <input name="is_active" type="hidden" value={program.is_active ? "true" : "false"} />
                        <label className="flex items-center gap-2 text-sm">
                          <input name="is_active" type="checkbox" value="true" defaultChecked={program.is_active} className="rounded border-gray-300" />
                          Active
                        </label>
                        <button type="submit" className="rounded bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">
                          Save Changes
                        </button>
                      </form>
                    </details>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant="outline">{program.category}</Badge>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={program.is_active ? "default" : "secondary"}>
                      {program.is_active ? "Active" : "Inactive"}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{program.order_index}</td>
                  <td className="px-6 py-4">
                    <form action={deleteProgramAction}>
                      <input type="hidden" name="id" value={program.id} />
                      <button type="submit" className="text-xs text-red-600 hover:text-red-800" onClick={() => {}}>
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
