import Image from "next/image";
import React, { ReactNode } from "react";

export interface DetailItemProps {
  iconSrc: string;
  title: string;
  value: {
    main: string;
    secondary?: string | ReactNode;
  };
}
const DetailItem: React.FC<DetailItemProps> = ({ iconSrc, title, value }) => {
  return (
    <li className="flex py-3 border-b border-slate-300 w-full items-center gap-2">
      <div className="relative size-[48px]">
        <Image src={iconSrc} alt="" fill />
      </div>
      <div className="flex  w-full xl:gap-5 lg:items-center  text-[22px] xl:text-[28px]  flex-col-reverse lg:flex-row">
        <h3>{title}</h3>
        <div className="flex flex-1 lg:text-end text-brand flex-col justify-end">
          <div className=" font-semibold ">{value.main}</div>
          {value?.secondary && (
            <div className="text-[18px]">{value.secondary}</div>
          )}
        </div>
      </div>
    </li>
  );
};

export default DetailItem;
