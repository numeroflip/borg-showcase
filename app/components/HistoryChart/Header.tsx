import { BorgPriceData } from "@/app/lib/borgApi/types";
import Image from "next/image";
import React from "react";

interface Props {
  currentPrice: BorgPriceData;
}

const Header: React.FC<Props> = ({ currentPrice }) => {
  return (
    <div className="[box-shadow:_0px_0.3px_0px_0px_#FFFFFF]">
      <div className="bg-white/10 p-[6px] md:p-[14px] text-start rounded-md flex ">
        <div className="pr-2 self-center flex">
          <Image src={"/icons/fiat.svg"} alt="" width={30} height={30} />
          <div className="self-center -ml-1 -mr-1 z-10">
            <Image
              src={"/icons/arrowCircle.svg"}
              alt=""
              width={10}
              height={10}
            />
          </div>
          <Image src={"/icons/crypto.svg"} alt="" width={30} height={30} />
        </div>

        <div>
          <div>USD {Math.round(currentPrice.price * 1000) / 1000}</div>
          <div className="text-brand text-[10px]">
            {currentPrice.change24h > 0 ? "+" : ""}
            {currentPrice.change24h}% 24 hours
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
