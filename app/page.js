import Fourslide from "./components/Fourslide/Fourslide";
import Binodon from "./components/Binodon/Binodon";
import Banijjo from "./components/Banijjo/Banijjo";
import FirstSlide from "./components/FirstSlide/FirstSlide";
import Apnarjonno from "./components/Apnarjonno/Apnarjonno";
import Kheladula from "./components/Kheladula/Kheladula";
import Prothomalo from "./components/Prothomalo/Prothomalo";
import Ektuthamen from "./components/Ektuthamen/Ektuthamen";
import Navbar from "./components/Navbar/Navbar";


export default function Home() {
  return (
    <div className="container mx-auto">
      <Prothomalo />
      <Navbar />
      <FirstSlide />
      <Fourslide />
      <Apnarjonno />
      <Kheladula />
      <Banijjo />
      <Binodon />
      <Ektuthamen />
    </div>
  );
}
