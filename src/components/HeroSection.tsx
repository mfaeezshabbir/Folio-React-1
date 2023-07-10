import { heroImage, name, role } from "../data/utils";
import CVDownloadButton from "./CVDownloader";
import PersonalInfo from "./PersonalInfo";
import SocialMediaIcons from "./SocialIcons";

function HeroSection() {
  return (
    <section className="col-span-12 lg:col-span-4 lg:h-screen lg:sticky ">
      <section className="col-span-12 lg:col-span-4 lg:block w-full mb-6 py-5 lg:mb-0 mx-auto  rounded-2xl text-center  bg-bg px-6 rounded-2x flex flex-col justify-center items-center h-fit">
        <img
          className="w-56 h-56 drop-shadow-xl mx-auto rounded-full p-1 bg-inherit -mt-[140px] hover:-translate-y-1 transition-all ease-in-out duration-300 "
          src={heroImage}
          alt="Profile"
        />
        <div className="pt-8 pb-4 flex flex-col justify-center items-center">
          <h1 className=" mb-2 text-4xl lg:text-l font-bold text-txt">
            {name}
          </h1>
          <h2 className="mb-2 text-gray-300 text-sm sm:text-sm md:text-base bg-bg3 py-1 px-2 rounded-lg">
            {role}
          </h2>
        </div>
        <div className="">
          <SocialMediaIcons flexDirection="row" startIcons={3} endIcons={6} />
        </div>
        <div className="w-full px-4">
          <PersonalInfo />
        </div>
        <div className="">
          <CVDownloadButton />
        </div>
      </section>
    </section>
  );
}

export default HeroSection;
