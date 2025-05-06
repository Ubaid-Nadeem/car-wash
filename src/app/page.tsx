import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Pricing from "@/components/pricing";
import Progress from "@/components/progress";
import Reasons from "@/components/reasons";
import Reviews from "@/components/reviews";
import Services from "@/components/services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Reasons />
      <Progress />
      <Pricing />
      <Reviews />
    </div>
  );
}
