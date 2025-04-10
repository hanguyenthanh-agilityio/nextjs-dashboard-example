import CourseCard from "./courseCard";

import { Course } from "@/types/common";

interface CourseSectionProps {
  courses: Course[];
}

const CourseSection = ({ courses }: CourseSectionProps) => {
  return (
    <div className="py-12">
      <h2 className="text-3xl text-[#303030] font-bold">My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 pr-10">
        {courses.map((course: Course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
