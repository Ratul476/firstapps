import Image from "next/image";
import img1 from "./asset/photo.webp";
import img2 from "./asset/photo2.webp";
import img3 from "./asset/photo3.webp";
import img4 from "./asset/Younus.webp";
import img5 from "./asset/bangladesh.webp";
import img6 from "./asset/imran.webp";
import Fourslide from "./components/Fourslide/Fourslide";
import Binodon from "./components/Binodon/Binodon";
import Banijjo from "./components/Banijjo/Banijjo";
import FirstSlide from "./components/FirstSlide/FirstSlide";

export default function Home() {
  return (
    <div className="container mx-auto">
      <FirstSlide />
      <Banijjo />
      <Fourslide />
      <Binodon />
    </div>
  );
}
