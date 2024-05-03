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
    <div className="flex py-3 border-b border-slate-300 w-full items-center gap-3">
      <Image src={iconSrc} alt="" width={48} height={48} />
      <div className="flex  w-full lg:gap-5 lg:items-center  text-[22px] lg:text-[28px]  flex-col-reverse lg:flex-row">
        <div>{title}</div>
        <div className="flex flex-1 lg:text-end text-brand flex-col justify-end">
          <div className=" font-semibold ">{value.main}</div>
          {value?.secondary && (
            <div className="text-[18px]">{value.secondary}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
