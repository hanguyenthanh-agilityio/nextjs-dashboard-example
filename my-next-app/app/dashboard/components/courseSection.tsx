import CourseCard from "./courseCard";
import { getDashboard } from "@/api/dashboard";
import { Course } from "@/types/common";

const CourseSection = async () => {
  const dashboardData = await getDashboard();
  const courses = dashboardData[0]?.courses || [];
  console.log(courses);

  return (
    <div className="py-12">
      <h2 className="text-3xl text-[#303030] font-bold">My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 pr-10">
        {courses.map((course: Course) => (
          <CourseCard
            key={course.title}
            title={course.title}
            lessons={course.lessons}
            progress={course.progress}
            bgColor={`bg-${course.bgColor}`}
            icon={course.icon}
            width={course.width}
            height={course.height}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
