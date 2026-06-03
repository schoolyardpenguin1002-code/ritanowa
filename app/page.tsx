import { SiteLayout } from "@/components/layout/SiteLayout";
import { ConcernGateway } from "@/components/sections/ConcernGateway";
import { DirectorMessage } from "@/components/sections/DirectorMessage";
import { Hero } from "@/components/sections/Hero";
import { NursesIntro } from "@/components/sections/NursesIntro";
import { Recruit } from "@/components/sections/Recruit";
import { Services } from "@/components/sections/Services";
import { SpecialtyPillars } from "@/components/sections/SpecialtyPillars";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <SpecialtyPillars />
      <ConcernGateway />
      <Services />
      <DirectorMessage />
      <NursesIntro />
      <Recruit />
    </SiteLayout>
  );
}
