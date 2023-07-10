import Home from "./pages/Home";
import Showcase from "./pages/Showcase";
import Blogs from "./pages/Blogs";
import PingMe from "./pages/PingMe";
import { Routes, Route } from "react-router-dom";
import Resume from "./pages/Journey";
import Layout from "./components/Layout";
function MobileVer() {
  const DynamicPart = (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Resume />} />
        <Route path="/sorcery" element={<Showcase />} />
        <Route path="/braindumps" element={<Blogs />} />
        <Route path="/pingme" element={<PingMe />} />
      </Routes>
    </Layout>
  );
  return (
    <>
      <div className="">{DynamicPart}</div>
    </>
  );
}

export default MobileVer;
