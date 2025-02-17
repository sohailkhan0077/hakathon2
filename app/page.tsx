import Asguardsofa from "./components/Asguardsofa";
import Footer from "./components/Footer";
import Hero from "./components/hero";
import Instabar from "./components/Instabar";
import Navbar from "./components/navbar";
import Ourblogs from "./components/Ourblogs";
import Sidetables from "./components/sidetable";
import Toppics from "./components/Toppics";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Sidetables/>
      <Toppics/>
      <Asguardsofa/>
      <Ourblogs/>
      <Instabar/>
    </div>
  );
}
