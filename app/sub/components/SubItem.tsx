import React from "react";
import { Interface } from "readline";
import type { ISubItem } from "@/app/types";
import ButtonSubscribe from "./ButtonSubscribe";

type SubItemsProps = {
  item: ISubItem;
};

function SubItem({ item }: SubItemsProps) {
  return (
    <div className="rounded flex flex-col min-h-[240pt] text-center w-full md:max-w-sm p-4  md:w-[30%]  bg-base-100 shadow-xl">
      <div className="flex-grow">
        <div className="text-4xl text-purple-800">{item.label}</div>
        <div className="  ">{item.sub}</div>
      </div>

      <div>
        {item.oldPrice.length !== 0 && (
          <div className=" line-through text-sm text-red-500 ">
            {item.oldPrice}
          </div>
        )}
        <div className="my-4 text-orange-500 font-bold text-4xl">
          {item.price}
        </div>
      </div>

      <ButtonSubscribe item={item} />

      <div className="text-sm text-neutral-400">{item.note}</div>
    </div>
  );
}

export default SubItem;
