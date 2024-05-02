import {
  getBorgHistoricPrice,
  getBorgPrice,
  getBorgStats,
} from "./_lib/borgApi";

import Image from "next/image";

export default async function Home() {
  const [price, stats, historicPrice] = await Promise.all([
    getBorgPrice(),
    getBorgStats(),
    getBorgHistoricPrice(),
  ]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="px-5   w-full max-w text-center text-white bg-gradient-to-l from-petrol-700 to-petrol-800 py-9 md:py-16">
        <h1 className=" text-[40px] md:text-6xl lg:text-[80px]  font-bold">
          BORG Token Metrics
        </h1>
        <h2 className="text-lg md:text-[22px] mt-6 md:mt-9">
          Deep-dive into the statistics of BORG and the mechanics of the full
          SwissBorg Ecosystem.
        </h2>

        <div className="max-w-[720px] shadow-md mx-auto overflow-hidden h-72   rounded-md bg-petrol-800/50 my-9 ">
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
                <Image
                  src={"/icons/crypto.svg"}
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <div>USD {Math.round(price.usd.price * 1000) / 1000}</div>
                <div className="text-brand text-[10px]">
                  {price.usd.change24h > 0 ? "+" : ""}
                  {price.usd.change24h}% 24 hours
                </div>
              </div>
            </div>
          </div>
          <div>
            <pre className="text-xs">
              {JSON.stringify(historicPrice, null, 2)}
            </pre>
          </div>
          {/* INTERVAL SELECTOR */}
          <div></div>
        </div>
      </section>
      <section className="px-5">
        <h2 className="text-3xl font-bold md:text-5xl text-center my-10">
          Breakdown of BORG’s circulating supply
        </h2>
        <div className="flex gap-12 w-full flex-col md:flex-row my-28">
          <div className="border flex-1 px-5 py-40">
            <div>
              Remaining circulating supply {stats.circulatingSupplyTokens}{" "}
            </div>
            <div>
              BORG staked {stats.stakedBorgTokens} {stats.stakedBorgPercentage}%{" "}
            </div>
            <div>
              BORG in Yield {stats.borgInYieldTokens},{" "}
              {stats.borgInYieldPercentage}%{" "}
            </div>
            <div>Circulating supply burned {stats.borgBurnedTokens} </div>
            <div>BORG in buyback pool {stats.borgPendingBuybackTokens} </div>
          </div>
          <div className="border px-32 py-40">Donut Chart</div>
        </div>
      </section>
    </main>
  );
}
