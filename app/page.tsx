"use client";

const Footer = dynamic(() => import("@/components/Footer"));
const Experience = dynamic(() => import("@/components/Experience"));
import Approach from "@/components/Approach";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
});
import Testimonials from "@/components/Testimonials";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Experience />
        <RecentProjects />
        <Testimonials />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
