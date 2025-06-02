import Contact from "@/Components/Contact";
import Documents from "@/Components/Documents";
import Domain from "@/Components/Domain";
import Features from "@/Components/Features";
import Footer from "@/Components/footer";
import HeroSection from "@/Components/HeroSection";
import Introduction from "@/Components/Introduction";
import Milestones from "@/Components/Milestones";
import Navbar from "@/Components/Navbar";
import Publication from "@/Components/Publication";
import Team from "@/Components/Team";
import ToolsTec from "@/Components/ToolsTec";
import { Dock } from "lucide-react";


export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <Introduction/>
      <Domain/>
      <Milestones/>
      <Features/>
      <Documents/>
      <ToolsTec/>
      <Publication/>
      <Team/>
      <Contact/>
      <Footer/>
    </main>
  );
}
