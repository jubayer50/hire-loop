import Banner from "@/Components/HomePage/Banner/Banner";
import StatsSection from "@/Components/HomePage/StatsSection/StatsSection";

export default function Home() {
  return (
    <div className="">
      <div className="bg-[url(/images/globe.png)] bg-no-repeat bg-center md:bg-top bg-cover overflow-hidden bg-blend-luminosity">
        <Banner></Banner>
        <StatsSection></StatsSection>
      </div>
    </div>
  );
}
