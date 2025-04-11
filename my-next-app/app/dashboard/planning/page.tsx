import { Suspense } from "react";
import Search from "../components/searchBar";
import PlanningList from "./planningList";
import { PlanningCardSkeleton } from "@/components/loading";
import { getPlanningData } from "@/api/planning";
import Pagination from "@/components/pagination";

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

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Planning</h1>
      <Search placeholder="Search plans..." />
      <Suspense key={query + currentPage} fallback={<PlanningCardSkeleton />}>
        <PlanningList items={data} />
      </Suspense>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default PlanningPage;
