import Banner from "@/Components/HomePage/Banner/Banner";
import StatsSection from "@/Components/HomePage/Banner/StatsSection/StatsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-5">
      <div className="bg-[url(/images/globe.png)] bg-no-repeat  bg-cover overflow-hidden bg-center">
        <Banner></Banner>
        <StatsSection></StatsSection>
      </div>
      home page
    </div>
  );
}
