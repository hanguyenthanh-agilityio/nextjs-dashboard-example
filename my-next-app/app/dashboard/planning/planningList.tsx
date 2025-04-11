import { Planning } from "@/lib/definitions";
import PlanningItem from "../components/planningItem";

const PlanningList = ({ items }: { items: Planning[] }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return <p className="text-gray-500">No plans found.</p>;
  }

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <PlanningItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default PlanningList;
