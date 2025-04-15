"use client";

import { useRouter } from "next/navigation";
import Search from "../components/searchBar";
import { Button } from "@/components/button";

const SearchBar = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("planning/create");
  };

  return (
    <div className="flex">
      <Search placeholder="Search plans..." />
      <Button
        className="rounded-md border p-2"
        type="button"
        onClick={handleClick}
      >
        New Plan
      </Button>
    </div>
  );
};

export default SearchBar;
