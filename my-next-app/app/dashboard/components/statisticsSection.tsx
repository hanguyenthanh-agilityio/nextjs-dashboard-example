import StatisticCard from "./StatisticCard";

const stats = [
  { label: "Courses Completed", value: 2 },
  { label: "Total Points Gained", value: 250 },
  { label: "Courses In Progress", value: 3 },
  { label: "Tasks Finished", value: 5 },
];

const StatisticsSection = () => {
  return (
    <div className="space-y-6 py-12">
      <h2 className="text-2xl font-semibold text-[#303030]">Statistics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stats.map((item, index) => (
          <StatisticCard key={index} label={item.label} value={item.value} />
        ))}
      </div>
    </div>
  );
};

export default StatisticsSection;
