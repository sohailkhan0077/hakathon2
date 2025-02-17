import Asguardsofa from "./components/Asguardsofa";
import Hero from "./components/hero";
import Instabar from "./components/Instabar";
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
