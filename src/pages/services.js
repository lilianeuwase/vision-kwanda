import { HomeSteps } from "../components/homepage/homeSteps";
import Navbar from "../components/navbar";
import { Design } from "../components/services/design";
import { Environmental } from "../components/services/environmental";
import { Geology } from "../components/services/geology";
import { Maybe } from "../components/services/maybe";
import { Mid } from "../components/services/mid";
import { Mining } from "../components/services/mining";
import OverlayIntro from "../components/services/overlayIntro";

export default function Services() {
  return (
    <div>
      <Navbar/>
      <OverlayIntro/>
      <Mining/>
      <Geology/>
      <Mid/>
      <Environmental/>
      <Design/>
      <Maybe/>
      <HomeSteps/>
    </div>
  );
}
