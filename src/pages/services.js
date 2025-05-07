import { HomeSteps } from "../components/homepage/homeSteps";
import Navbar from "../components/navbar";
import { Health } from "../components/services/health";
import { AllServices } from "../components/services/allServices";
import Intro from "../components/services/intro";
import { Design } from "../components/services/design";
import Partners from "../components/partners";

export default function Services() {
  return (
    <div>
      <Intro />
      <Navbar />
      <Design />
      <AllServices />
      <Health />
      <Partners />
    </div>
  );
}
