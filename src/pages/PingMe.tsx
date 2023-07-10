import React from "react";
import Heading from "../components/Heading";
import SocialMediaIcons from "../components/SocialIcons";
import { BsMailbox2, BsPhone } from "react-icons/bs";

const PingMeScreen: React.FC = () => {
  return (
    <>
      <div className="space-y-4">
        <Heading head="About Me" />
        <SocialMediaIcons flexDirection="row" startIcons={0} endIcons={99} />
        <div className="flex justify-around items-center space-x-3">
          <div className="bg-bg3 p-6 rounded-lg w-1/2">
            <div className="items-center flex spaxe-y-2">
              <BsPhone /> <p className="font-bold">Phone:</p>
            </div>
            <a href="https://wa.me/+923030093672" target="_blank noopener ">
              <p className="font-medium text-lg hover:text-acc">
                +923030093672
              </p>
            </a>
          </div>
          <div className="bg-bg3 p-6 rounded-lg w-1/2">
            <div className="flex items-center space-x-2">
              <BsMailbox2 /> <p className="font-bold">Email:</p>
            </div>
            <a href="mailto:mfaeezshabbir@gmail.com" target="_blank noopener ">
              <p className="font-medium text-lg hover:text-acc">
                mfaeezshabbir@gmail.com
              </p>
            </a>
          </div>
        </div>
        <div>
          <form action="" method="get"></form>
        </div>
      </div>
    </>
  );
};

export default PingMeScreen;
