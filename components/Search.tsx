import React from "react";
import { Input } from "./ui/input";
import Image from "next/image";

const Search = () => {
  return (
    <section className="flex flex-row justify-start gap-4 p-2 bg-dark-2 text-white rounded-[5px] w-full">
      <Image src="/icons/search.svg" alt="search" width={20} height={20} />
      <Input
        placeholder="Search"
        className="focus-visible:ring-0 focus-visible:ring-offset-0 border-none"
      />
    </section>
  );
};

export default Search;
