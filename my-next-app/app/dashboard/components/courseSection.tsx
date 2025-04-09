"use client";

import { useEffect, useState } from "react";
import CourseCard from "./courseCard";
import { getDashboard } from "@/api/dashboard";
import { Course } from "@/types/common";

const CourseSection = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  console.log(courses, "data:");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dashboardData = await getDashboard();
        setCourses(dashboardData[0]?.courses || []);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="py-12">
      <h2 className="text-3xl text-[#303030] font-bold">My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 pr-10">
        {courses.map((course) => (
          <CourseCard
            key={course.title}
            title={course.title}
            lessons={course.lessons}
            progress={course.progress}
            bgColor={course.bgColor}
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
