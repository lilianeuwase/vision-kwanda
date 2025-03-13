import HeroDark from "../components/homepage/heroDark";
import HeroIntro from "../components/homepage/heroIntro";
import HomeSevices from "../components/homepage/homeSevices";
import { HomeSteps } from "../components/homepage/homeSteps";
import { WhoWeAre } from "../components/homepage/whoweare";

export default function HomePage() {
  return (
    <div>
      <HeroIntro />
      <HeroDark/>
      <WhoWeAre/>
      <HomeSteps/>
      <HomeSevices/>
    </div>
  );
}
