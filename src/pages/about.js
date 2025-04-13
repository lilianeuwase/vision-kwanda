import AboutIntro from "../components/about/aboutIntro";
import AboutSection from "../components/about/aboutSection";
import PortfolioSection from "../components/about/porto";
import Navbar from "../components/navbar";

export default function About() {
  return (
    <div>
      <AboutIntro />
      <AboutSection/>
      <PortfolioSection/>
    </div>
  );
}
