import { personalInfoData } from "../data/utils";

const PersonalInfo = () => {
  return (
    <div className="p-7 rounded-2xl mt-7 bg-bg2">
      {personalInfoData.map((info, index) => (
        <div
          key={info.label}
          className={`flex items-center mb-2 border-b border-bor space-x-2  ${
            index === personalInfoData.length - 1 ? "border-b-0" : ""
          } p-2 w-full`}
        >
          <info.icon className="socialbtn text-acc p-2" />
          <div className="flex flex-col justify-center items-start truncate leading-normal">
            <span className="text-bor text-xs">{info.label}: </span>
            <span className="text-txt text-base">{info.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonalInfo;
