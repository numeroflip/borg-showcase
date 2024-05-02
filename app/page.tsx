export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="  w-full max-w text-center text-white bg-gradient-to-l from-petrol-700 to-petrol-800 py-9 md:py-16" >
        <h1 className=" text-[40px] md:text-[80px]  font-bold">BORG Token Metrics</h1>
        <h2 className="text-lg md:text-[22px] mt-6 md:mt-9"> Deep-dive into the statistics of BORG and the mechanics of the full SwissBorg Ecosystem.</h2>
        <div className="max-w-screen-md mx-auto h-72 border-2  rounded-md bg-petrol-700 my-9 "></div>
      </section>
      <section>
        <h2 className="text-3xl font-bold md:text-5xl text-center my-10">Breakdown of BORG’s circulating supply</h2>
        <div className="flex gap-12 w-full flex-col md:flex-row my-28">
          <div className="border flex-1 px-32 py-40">Info Items</div>
          <div className="border px-32 py-40">Donut Chart</div>
        </div>
      </section>
    </main>
  );
}
