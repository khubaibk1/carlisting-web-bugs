import Image from "next/image";
import { Montserrat } from "next/font/google";
import Hero from "@/components/home/Hero";
import Tabs from "@/components/home/tabs/Tabs";
import Carousel from "@/components/home/Carousel";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import TabsLarge from "@/components/home/tabs/TabsLarge";

const font = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${font.className}`}>
      <Navbar />
      <Hero />
      <Tabs />
      <TabsLarge />
      <Carousel />
      <Footer />
    </main>
  );
}
