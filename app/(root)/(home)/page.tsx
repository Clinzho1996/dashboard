import LevelCard from "@/components/LevelCard";
import SalesCard from "@/components/SalesCard";
import Search from "@/components/Search";
import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col gap-4">
      <Search />
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <SalesCard />
        <LevelCard />
      </div>
    </section>
  );
};

export default Home;
