import { BorgPriceData } from "@/app/lib/borgApi/types";
import Image from "next/image";
import React from "react";

interface Props {
  currentPrice: BorgPriceData;
}

const Header: React.FC<Props> = ({ currentPrice }) => {
  return (
    <div className="[box-shadow:_0px_0.3px_0px_0px_#FFFFFF]">
      <div className="bg-white/10 p-[6px] md:p-[14px] text-start gap rounded-md flex flex-col sm:flex-row gap-1 sm:gap-0  ">
        <div className="pr-2  sm:self-center flex ">
          <div className="relative size-[18px] sm:size-[30px]">
            <Image src={"/icons/fiat.svg"} alt="USD icon" fill />
          </div>
          <div className="self-center relative -ml-1 -mr-1 z-10 size-[10px]">
            <Image src={"/icons/arrowCircle.svg"} alt="" fill />
          </div>
          <div className="relative size-[18px] sm:size-[30px]">
            <Image src={"/icons/crypto.svg"} alt="BORG icon" fill />
          </div>
        </div>

        <div>
          <div className="text-[8px] sm:text-[17px]">
            USD {Math.round(currentPrice.price * 1000) / 1000}
          </div>
          <div className="text-brand text-[6px] sm:text-[10px]">
            {currentPrice.change24h > 0 ? "+" : ""}
            {currentPrice.change24h}% 24 hours
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
