import ActivitySection from "./components/activitySection";
import CourseSection from "./components/courseSection";
import Header from "./components/header";
import PlanningSection from "./components/PlanningSection";
import StatisticsSection from "./components/statisticsSection";

const DashboardPage = () => (
  <div className="flex flex-col md:flex-row h-screen">
    <div className="flex-1 py-6 md:py-10">
      <Header user="Bruno" />

      {/* Section: My Courses */}
      <CourseSection />

      {/* Section: Planning */}
      <PlanningSection />
    </div>

    <div className="hidden md:block w-[2px] bg-gray-200"></div>

    <div className="w-full md:w-1/3 pl-6 md:pl-10">
      {/* Section: Statistics */}
      <StatisticsSection />

      {/* Section: Activity */}
      <ActivitySection />
    </div>
  </div>
);

export default DashboardPage;
