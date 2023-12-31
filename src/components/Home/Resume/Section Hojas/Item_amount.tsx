import React from "react";

interface PropsT {
  title: string;
  amount: number;
}

export const Item_amount = ({ title, amount = 0 }: PropsT) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="font-semibold ">{title}</span>
      <span className="">{amount}</span>
    </div>
  );
};
