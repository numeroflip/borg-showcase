import { BorgPriceAndTimeData } from "@/app/lib/borgApi/types";
import Image from "next/image";
import React from "react";

interface Props {
  historicPrice: BorgPriceAndTimeData[];
}

const Body: React.FC<Props> = ({ historicPrice }) => {
  return (
    <div>
      <pre className="text-xs">{JSON.stringify(historicPrice, null, 2)}</pre>
    </div>
  );
};

export default Body;
