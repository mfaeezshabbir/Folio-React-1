import HeroSection from "./components/HeroSection";
import Showcase from "./pages/Showcase";
import Blogs from "./pages/Blogs";
import PingMe from "./pages/PingMe";
import { Routes, Route } from "react-router-dom";
import Resume from "./pages/Journey";
import Layout from "./components/Layout";
import About from "./components/About";

function DesktopVer() {
  const DynamicPart = (
    <Layout>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/journey" element={<Resume />} />
        <Route path="/sorcery" element={<Showcase />} />
        <Route path="/braindumps" element={<Blogs />} />
        <Route path="/pingme" element={<PingMe />} />
      </Routes>
    </Layout>
  );
  return (
    <>
      <div className="flex justify-evenly mt-56 mb-20 mx-12 space-x-9 max-w-[1500px]">
        <HeroSection />
        <div className="w-2/3 ">{DynamicPart}</div>
      </div>
    </>
  );
}

export default DesktopVer;
