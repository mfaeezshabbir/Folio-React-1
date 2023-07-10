import { AboutMe } from "../data/utils";
import Heading from "./Heading";
import Services from "./Services";

function About() {
  return (
    <main className="flex flex-col justify-center items-center space-y-4">
      <div>
        <Heading head="About Me" />
        <p className="whitespace-normal text-justify">{AboutMe}</p>
      </div>
      <div className=" space-y-3 ">
        <p className="font-bold text-3xl">What I do!</p>
        <Services />
      </div>
    </main>
  );
}
export default About;
