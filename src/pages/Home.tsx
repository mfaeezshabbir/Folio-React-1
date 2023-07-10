import HeroSection from "../components/HeroSection";
import About from "../components/About";

function Home() {
  return (
    <>
      <div className="lg:hidden mt-52">
        <div className="w-full">
          <HeroSection />
        </div>
        <div className="flex flex-col justify-evenly space-y-9">
          <About />
        </div>
      </div>
    </>
  );
}

export default Home;
