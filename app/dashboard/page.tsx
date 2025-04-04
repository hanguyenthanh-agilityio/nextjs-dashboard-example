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
      {/* <div className="mt-4">
        <h2 className="text-xl font-semibold">My Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div className="p-4 bg-blue-500 text-white rounded-lg">French</div>
          <div className="p-4 bg-orange-500 text-white rounded-lg">
            Portuguese
          </div>
          <div className="p-4 bg-green-500 text-white rounded-lg">Italian</div>
          <div className="p-4 bg-yellow-500 text-white rounded-lg">German</div>
        </div>
      </div> */}
      <CourseSection />

      {/* Section: Planning */}
      {/* <div className="mt-6">
        <h2 className="text-xl font-semibold">Planning</h2>
        <div className="bg-gray-100 p-4 rounded-lg mt-2">Lesson Plan</div>
      </div> */}
      <PlanningSection />
    </div>

    <div className="hidden md:block w-[2px] bg-gray-200"></div>

    <div className="w-full md:w-1/3 p-6 md:p-10">
      {/* Section: Statistics */}
      <StatisticsSection />
      {/* Section: Activity */}
      <ActivitySection />
    </div>
  </div>
);

export default DashboardPage;
