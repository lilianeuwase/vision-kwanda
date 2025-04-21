import AboutIntro from "../components/about/aboutIntro";
import { AboutPart1 } from "../components/about/aboutPart1";
import AboutPart2 from "../components/about/aboutPart2";
import AboutPart3 from "../components/about/aboutPart3";
import AboutText from "../components/about/aboutText";
import Partners from "../components/about/partners";
import Rwanda from "../components/about/rwanda";

export default function About() {
  return (
    <div>
      <AboutIntro />
      <AboutPart1 />
      <AboutPart2 />
      <AboutText/>
      <AboutPart3/>
      <Rwanda/>
      <Partners/>
    </div>
  );
}
