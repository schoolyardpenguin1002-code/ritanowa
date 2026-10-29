import { SiteLayout } from "@/components/layout/SiteLayout";
import { ChildrenArtGallery } from "@/components/sections/ChildrenArtGallery";
import { ConcernGateway } from "@/components/sections/ConcernGateway";
import { DirectorMessage } from "@/components/sections/DirectorMessage";
import { Hero } from "@/components/sections/Hero";
import { RepresentativeNurseIntro } from "@/components/sections/RepresentativeNurseIntro";
import { Recruit } from "@/components/sections/Recruit";
import { Services } from "@/components/sections/Services";
import { SpecialtyPillars } from "@/components/sections/SpecialtyPillars";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <ChildrenArtGallery />
      <SpecialtyPillars />
      <ConcernGateway />
      <Services />
      <DirectorMessage />
      <RepresentativeNurseIntro />
      <Recruit />
    </SiteLayout>
  );
}
