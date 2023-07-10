import DynamicTitle from "./components/DynamicTitle";
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
      <Route path="/" element={<Home Title="My Base" />} />
        <Route path="/journey" element={<Resume Title="Journey" />} />
        <Route path="/sorcery" element={<Showcase Title="Sorcery" />} />
        <Route path="/braindumps" element={<Blogs Title="Dumps" />} />
        <Route path="/pingme" element={<PingMe Title="Ping Me" />} />
      </Routes>
    </Layout>
  );
  return (
    <>
      <DynamicTitle title={"Home"} />
      <div className="">{DynamicPart}</div>
    </>
  );
}

export default MobileVer;
