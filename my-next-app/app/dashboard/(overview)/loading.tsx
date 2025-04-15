const LoadingDashboard = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen px-6 py-10 space-y-6 md:space-y-0 md:space-x-10">
      <div className="flex-1 space-y-10">
        <SectionTitleSkeleton />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CourseCardSkeleton />
          <CourseCardSkeleton />
          <CourseCardSkeleton />
          <CourseCardSkeleton />
        </div>

        <SectionTitleSkeleton />
        <div className="space-y-4">
          <PlanningCardSkeleton />
          <PlanningCardSkeleton />
          <PlanningCardSkeleton />
        </div>
      </div>

      <div className="w-full md:w-1/3 space-y-10">
        <SectionTitleSkeleton />
        <div className="space-y-2">
          <StatsSkeleton />
          <StatsSkeleton />
          <StatsSkeleton />
        </div>

        <SectionTitleSkeleton />
        <ActivityChartSkeleton />
      </div>
    </div>
  );
};

export default LoadingDashboard;

export const CourseCardSkeleton = () => (
  <div className="animate-pulse bg-white shadow-md rounded-2xl p-4 h-[130px]">
    <div className="flex gap-4 items-center">
      <div className="w-16 h-16 bg-gray-200 rounded-lg" />
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
        <div className="h-2 bg-gray-200 rounded w-full" />
      </div>
    </div>
  </div>
);

export const SectionTitleSkeleton = () => (
  <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse" />
);

export const StatsSkeleton = () => (
  <div className="h-16 bg-gray-100 rounded-xl animate-pulse" />
);

export const PlanningCardSkeleton = () => (
  <div className="flex items-center gap-4 animate-pulse">
    <div className="w-12 h-12 bg-gray-200 rounded-full" />
    <div className="flex-1 space-y-2">
      <div className="h-4 bg-gray-200 rounded w-2/3" />
      <div className="h-3 bg-gray-200 rounded w-1/2" />
    </div>
  </div>
);

export const ActivityChartSkeleton = () => (
  <div className="h-[300px] bg-gray-100 rounded-xl animate-pulse" />
);
