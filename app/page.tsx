import HistoricPriceChart from "./components/HistoricPriceChart";
import {
  getBorgHistoricPrice,
  getBorgPrice,
  getBorgStats,
} from "./lib/borgApi";

import DetailsPieChart from "./components/DetailsPieChart";
import DetailList from "./components/DetailList";

export default async function Home() {
  const [currentPrice, stats, historicPrice] = await Promise.all([
    getBorgPrice(),
    getBorgStats(),
    getBorgHistoricPrice(),
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="px-5   w-full max-w text-center text-white bg-gradient-to-l from-petrol-700 to-petrol-800 py-9 md:py-16">
        <h1 className=" text-[40px] md:text-6xl lg:text-[80px]  font-semibold">
          BORG Token Metrics
        </h1>
        <h2 className="text-lg md:text-[22px] mt-6 md:mt-9">
          Deep-dive into the statistics of BORG and the mechanics of the full
          SwissBorg Ecosystem.
        </h2>
        <HistoricPriceChart
          className="mt-4 md:mt-12"
          currentPrice={currentPrice.usd}
          initialHistoricPrice={historicPrice}
        />
      </section>

      <section className="px-5 w-full">
        <h2 className="text-3xl font-semibold md:text-5xl text-center mt-[24px] md:mt-[60px]">
          Breakdown of BORG’s circulating supply
        </h2>
        <div className="flex items-center gap-12 w-full flex-col md:flex-row mt-10 md:mt-16">
          <div className="flex-1 px-5">
            <DetailList stats={stats} />
          </div>
          <div className="flex-1 w-full aspect-square">
            <DetailsPieChart stats={stats} />
          </div>
        </div>
      </section>
    </main>
  );
}
