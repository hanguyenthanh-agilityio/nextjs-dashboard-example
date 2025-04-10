import PlanningItem from "./planningItem";
import { Planning } from "@/types/common";

interface PlanningSectionProps {
  planning: Planning[];
}

const PlanningSection = ({ planning }: PlanningSectionProps) => {
  return (
    <div className="space-y-6 md:pr-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl text-[#303030] font-semibold">Planning</h2>
          <button className="text-sm text-[#369FFF] font-medium">
            View All
          </button>
        </div>
        <div className="flex items-center text-blue-500 text-sm gap-1">
          <span>20 March 2020</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {planning.map((item: Planning, index: number) => (
          <PlanningItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PlanningSection;
