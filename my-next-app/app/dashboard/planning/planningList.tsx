import { getPlanningData } from "@/api/planning";
import { Planning } from "@/types/common";

export default async function PlanningList({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const plans = await getPlanningData(query, currentPage);

  const filtered = plans.filter((plan: Planning) =>
    plan.title.toLowerCase().includes(query.toLowerCase())
  );

  if (!filtered.length) {
    return <p className="text-gray-500">No plans found.</p>;
  }

  return (
    <ul className="space-y-4">
      {filtered.map((plan: Planning) => (
        <li key={plan.id} className="p-4 bg-white shadow rounded">
          <h3 className="font-semibold text-lg">{plan.title}</h3>
          <p className="text-gray-600">{plan.description}</p>
        </li>
      ))}
    </ul>
  );
}
