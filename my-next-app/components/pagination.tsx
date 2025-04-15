"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChangePage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex gap-4 pt-6">
      <button
        onClick={() => handleChangePage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Prev
      </button>
      <span className="px-4 py-2">{currentPage}</span>
      <button
        onClick={() => handleChangePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
