import StatisticCard from "./StatisticCard";
import { Statistic } from "@/types/common";

interface StatisticsSectionProps {
  statistics: Statistic[];
}

const StatisticsSection = ({ statistics }: StatisticsSectionProps) => {
  return (
    <div className="space-y-6 py-12">
      <h2 className="text-2xl font-semibold text-[#303030]">Statistics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {statistics.map((item: Statistic, index: number) => (
          <StatisticCard key={index} label={item.label} value={item.value} />
        ))}
      </div>
    </div>
  );
};

export default StatisticsSection;
