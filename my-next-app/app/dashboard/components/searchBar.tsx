"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleOnChange = (e: any) => {
    handleSearch(e.target.value);
  };

  return (
    <div className="relative flex w-[200px] flex-1 flex-shrink-0">
      {/* <label htmlFor="search" className="sr-only">
        Search
      </label> */}
      <input
        className="peer block border-[none] py-[9px] pl-10 text-sm placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={handleOnChange}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
