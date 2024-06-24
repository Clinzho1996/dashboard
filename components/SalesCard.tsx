import React from "react";
import Card from "./Card";

const SalesCard = () => {
  return (
    <section className="flex flex-col bg-dark-2 p-4 rounded-[5px] gap-4 w-[100%] md:w-[70%]">
      <h2 className="text-white text-[28px] font-semibold">
        Today&apos;s Sales
      </h2>
      <p className="text-[#A0A0A0]">Sales Summary</p>
      <div className="flex flex-wrap md:flex-row gap-5 justify-between">
        <Card
          title="Total Sales"
          amount="$5K"
          description="+10% from yesterday"
          img="/icons/total.png"
          className="text-[#FEB95A]"
        />
        <Card
          title="Total Order"
          amount="500"
          description="+8% from yesterday"
          img="/icons/total-sold.png"
          className="text-[#A9DFD8]"
        />
        <Card
          title="Product Sold"
          amount="9"
          description="+2% from yesterday"
          img="/icons/sold.png"
          className="text-[#F2C8ED]"
        />
        <Card
          title="New Customer"
          amount="12"
          description="+10% from yesterday"
          img="/icons/customer.png"
          className="text-[#20AEF3]"
        />
      </div>
    </section>
  );
};

export default SalesCard;
