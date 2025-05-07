import Efficiency from "../components/homepage/efficiency";
import HeroDark from "../components/homepage/heroDark";
import HeroIntro from "../components/homepage/heroIntro";
import Pillars from "../components/homepage/pillars";
import OurGoal from "../components/homepage/ourGoal";
import Stats from "../components/homepage/stats";
import { WhoWeAre } from "../components/homepage/whoweare";
import Contact from "../components/contact/contact";
import Motto from "../components/homepage/motto";
import PhotoGallery from "../components/homepage/gallery";
import Partners from "../components/partners";

export default function HomePage() {
  return (
    <div>
      <HeroIntro />
      <PhotoGallery />
      <HeroDark />
      <WhoWeAre />
      <Efficiency />
      <Stats />
      <OurGoal />
      <Pillars />
      <Motto />
      <Contact />
      <Partners/>
    </div>
  );
}
