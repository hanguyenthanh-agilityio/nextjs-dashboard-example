export const dynamic = "force-dynamic";

import { getDashboard } from "@/api/dashboard";
import CourseCard from "./courseCard";

import { Course } from "@/lib/definitions";
import Search from "./searchBar";

// interface CourseSectionProps {
//   courses: Course[];
// }

const CourseSection = async () => {
  const dashboardData = await getDashboard();
  const courses = dashboardData[0]?.courses || [];

  if (!courses) {
    return (
      <div className="py-12">
        <h2 className="text-3xl text-[#303030] font-bold">My Courses</h2>
        <p className="text-gray-500">No courses available.</p>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="flex item-center justify-between">
        <h2 className="text-3xl text-[#303030] font-bold">My Courses</h2>
        <Search placeholder="Search..." />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 pr-10">
        {courses.map((course: Course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
