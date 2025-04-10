import { getDashboard } from "@/api/dashboard";
import ActivitySection from "./components/activitySection";
import CourseSection from "./components/courseSection";
import Header from "./components/header";
import PlanningSection from "./components/PlanningSection";
import StatisticsSection from "./components/statisticsSection";
import UserProfile from "./components/userProfile";

const DashboardPage = async () => {
  const dashboard = await getDashboard();
  const data = dashboard[0];
  const { courses, planning, statistics, activity, profile } = data || {};
  const firstName = profile.name.split(" ")[0];

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex-1 py-6 md:py-10">
        <Header user={firstName} />

        {/* Section: My Courses */}
        <CourseSection courses={courses} />

        {/* Section: Planning */}
        <PlanningSection planning={planning} />
      </div>

      <div className="hidden md:block w-[2px] bg-gray-200"></div>

      <div className="w-full md:w-1/3 pl-6 md:pl-10">
        {/* Section: User Profile */}
        <UserProfile
          name={profile.name}
          note={profile.note}
          src={profile.src}
        />

        {/* Section: Statistics */}
        <StatisticsSection statistics={statistics} />

        {/* Section: Activity */}
        <ActivitySection activity={activity} />
      </div>
    </div>
  );
};

export default DashboardPage;
