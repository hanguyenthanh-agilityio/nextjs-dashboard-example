import { Suspense } from "react";
import Search from "../components/searchBar";
import PlanningList from "./planningList";
import { PlanningCardSkeleton } from "@/components/loading";

interface Props {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}

const PlanningPage = async (props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Planning</h1>
      <Search placeholder="Search plans..." />
      <Suspense key={query + currentPage} fallback={<PlanningCardSkeleton />}>
        <PlanningList query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
};

export default PlanningPage;
