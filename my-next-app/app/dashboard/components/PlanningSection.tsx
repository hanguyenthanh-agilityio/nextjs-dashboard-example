import PlanningItem from "./planningItem";

const data = [
  {
    icon: "/images/planning/Reading.png",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    title: "Reading - Beginner Topic 1",
    time: "8:00 AM - 10:00 AM",
  },
  {
    icon: "/images/planning/Edit.png",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    title: "Reading - Beginner Topic 1",
    time: "01:00 PM - 02:00 PM",
  },
  {
    icon: "/images/planning/Headphones.png",
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
    title: "Listening - Intermediate Topic 1",
    time: "03:00 PM - 04:00 PM",
  },
  {
    icon: "/images/planning/Volume.png",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-500",
    title: "Speaking - Advanced Topic 1",
    time: "07:00 PM - 08:00 PM",
  },
  {
    icon: "/images/planning/Volume.png",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-500",
    title: "Speaking - Beginner Topic 1",
    time: "08:00 AM - 12:00 PM",
  },
  {
    icon: "/images/planning/Headphones.png",
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
    title: "Listening - Beginner Topic 1",
    time: "08:00 AM - 12:00 PM",
  },
  {
    icon: "/images/planning/Edit.png",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    title: "Grammar - Intermediate Topic 2",
    time: "08:00 AM - 12:00 PM",
  },
  {
    icon: "/images/planning/Reading.png",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    title: "Reading - Advanced Topic 1",
    time: "08:00 AM - 12:00 PM",
  },
];

const PlanningSection = () => {
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
        {data.map((item, index) => (
          <PlanningItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PlanningSection;
