import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface CardProps {
  img: string;
  amount: string;
  title: string;
  description: string;
  className: string;
}
const Card = ({ img, amount, title, description, className }: CardProps) => {
  return (
    <div className="flex flex-col bg-dark-1 rounded-[5px] gap-2 p-4 w-[120px] md:w-[200px]">
      <Image src={img} alt="img" width={50} height={50} />
      <h2 className="text-white font-semibold text-[16px]">{amount}</h2>
      <p className="text-[10px] text-[#E8E8E8]">{title}</p>
      <p className={cn("text-[9px]", className)}>{description}</p>
    </div>
  );
};

export default Card;
