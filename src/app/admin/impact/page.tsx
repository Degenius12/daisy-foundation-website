import { getAllMetrics } from "@/lib/supabase/admin-queries";
import { updateMetricAction } from "../actions";

export default async function AdminImpactPage() {
  const metrics = await getAllMetrics();

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Impact Metrics</h1>
        <p className="mt-1 text-sm text-gray-500">Update the real-time impact numbers shown on the website.</p>
      </div>

      <div className="mt-6 space-y-4">
        {metrics.length === 0 ? (
          <div className="rounded-xl border border-gray-200 bg-white px-6 py-12 text-center text-sm text-gray-500 shadow-sm">
            No metrics found. {!process.env.NEXT_PUBLIC_SUPABASE_URL ? "Connect Supabase to manage metrics." : "Seed your impact_metrics table to get started."}
          </div>
        ) : (
          metrics.map((metric) => (
            <form
              key={metric.id}
              action={updateMetricAction}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <input type="hidden" name="id" value={metric.id} />
              <div className="grid gap-4 sm:grid-cols-4 items-end">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Metric Name</label>
                  <input
                    name="metric_name"
                    defaultValue={metric.metric_name}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Value</label>
                  <input
                    name="metric_value"
                    type="number"
                    defaultValue={metric.metric_value}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Suffix</label>
                  <input
                    name="display_suffix"
                    defaultValue={metric.display_suffix || ""}
                    placeholder="e.g. +"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">Order</label>
                    <input
                      name="display_order"
                      type="number"
                      defaultValue={metric.display_order}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    />
                  </div>
                  <button type="submit" className="mt-auto rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                    Save
                  </button>
                </div>
              </div>
            </form>
          ))
        )}
      </div>
    </div>
  );
}
