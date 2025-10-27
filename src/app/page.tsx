import HeroSection from "@/components/home/HeroSection";
import SocialProof from "@/components/home/SocialProof";
import SolutionsPreview from "@/components/home/SolutionsPreview";
import HowItWorksSteps from "@/components/home/HowItWorksSteps";
import UseCasesPreview from "@/components/home/UseCasesPreview";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SocialProof />
      <SolutionsPreview />
      <HowItWorksSteps />
      <UseCasesPreview />
      <FinalCTA />
    </main>
  );
}
