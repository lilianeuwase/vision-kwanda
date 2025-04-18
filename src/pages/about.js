import AboutIntro from "../components/about/aboutIntro";
import { AboutPart1 } from "../components/about/aboutPart1";
import AboutPart2 from "../components/about/aboutPart2";
import AboutPart3 from "../components/about/aboutPart3";
import AboutText from "../components/about/aboutText";

export default function About() {
  return (
    <div>
      <AboutIntro />
      <AboutPart1 />
      <AboutPart2 />
      <AboutText/>
      <AboutPart3/>
    </div>
  );
}
