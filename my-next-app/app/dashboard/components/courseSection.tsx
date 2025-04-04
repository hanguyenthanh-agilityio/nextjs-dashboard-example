import CourseCard from "./courseCard";

const dataCourses = [
  {
    title: "French",
    lessons: 35,
    progress: 75,
    bgColor: "#369fff",
    icon: "/images/cards/Frame.png",
    width: 75,
    height: 110,
  },
  {
    title: "Portugese",
    lessons: 30,
    progress: 50,
    bgColor: "#ff7e07",
    icon: "/images/cards/PortugeseIcon.png",
    width: 55,
    height: 87,
  },
  {
    title: "Italian",
    lessons: 20,
    progress: 20,
    bgColor: "#8ac53e",
    icon: "/images/cards/ItalianIcon.png",
    width: 97,
    height: 110,
  },
  {
    title: "German",
    lessons: 40,
    progress: 75,
    bgColor: "#ffd143",
    icon: "/images/cards/GermanIcon.png",
    width: 90,
    height: 81,
  },
];

const CourseSection = () => (
  <div className="py-12">
    <h2 className="text-3xl text-[#303030] font-bold">My Courses</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 pr-10">
      {dataCourses.map((course) => (
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

export default CourseSection;
