import Image from "next/image";

interface CourseCardProps {
  title: string;
  lessons: number;
  progress: number;
  bgColor: string;
  icon: string;
  width: number;
  height: number;
}

export default function CourseCard({
  title,
  lessons,
  progress,
  bgColor,
  icon,
  width,
  height,
}: CourseCardProps) {
  return (
    <div
      className={`relative w-full h-40 rounded-2xl shadow-xl p-4 flex justify-between bg-[${bgColor}]`}
    >
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-white text-lg font-bold">{title}</h3>
          <p className="text-white text-sm opacity-80">{lessons} lessons</p>
        </div>
        <div className="relative w-12 h-12 md:w-14 md:h-14">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 36 36"
          >
            <circle
              className="text-gray-300 stroke-current"
              strokeWidth="3.5"
              fill="transparent"
              r="16"
              cx="18"
              cy="18"
            />
            <circle
              className="text-white stroke-current"
              strokeWidth="3.5"
              strokeDasharray="100"
              strokeDashoffset={100 - progress}
              strokeLinecap="round"
              fill="transparent"
              r="16"
              cx="18"
              cy="18"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white md:text-sm">
            {progress}%
          </span>
        </div>
      </div>

      {/* Icon */}
      <Image src={icon} alt={title} width={width} height={height} />
    </div>
  );
}
