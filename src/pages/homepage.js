import Efficiency from "../components/homepage/efficiency";
import HeroDark from "../components/homepage/heroDark";
import HeroIntro from "../components/homepage/heroIntro";
import Pillars from "../components/homepage/pillars";
import OurGoal from "../components/homepage/ourGoal"
import Stats from "../components/homepage/stats";
import { WhoWeAre } from "../components/homepage/whoweare";
import Contact from "../components/contact/contact";
import Motto from "../components/homepage/motto";
import PhotoGallery from "../components/homepage/gallery";

export default function HomePage() {
  return (
    <div>
      <HeroIntro />
      <HeroDark/>
      <WhoWeAre/>
      <Efficiency/>
      <Stats/>
      <OurGoal/>
      <Pillars/>
      <PhotoGallery/>
      <Motto/>
      <Contact/>
    </div>
  );
}
