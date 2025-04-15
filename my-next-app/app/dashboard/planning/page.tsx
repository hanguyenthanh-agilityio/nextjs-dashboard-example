import { Suspense } from "react";
import PlanningList from "./planningList";
import { PlanningCardSkeleton } from "@/components/loading";
import { getPlanningData } from "@/api/planning";
import Pagination from "@/components/pagination";
import SearchBar from "./searchBar";
import { notFound } from "next/navigation";

const PlanningPage = async (props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const { data, totalCount } = await getPlanningData(query, currentPage, 4);
  const totalPages = Math.ceil(totalCount / 4);

  if (!data || data.length === 0) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold md:pt-[75px]">Planning</h1>
      <SearchBar />
      <Suspense key={query + currentPage} fallback={<PlanningCardSkeleton />}>
        <PlanningList items={data} />
      </Suspense>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default PlanningPage;
