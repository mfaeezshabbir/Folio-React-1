import { socialMediaLinks } from "../data/utils";
import "../App.css";

const SocialMediaIcons = ({ flexDirection, startIcons, endIcons }) => {
  const displayedSocialMediaLinks = socialMediaLinks.slice(startIcons, endIcons);

  return (
    <div className={`flex flex-${flexDirection} justify-center space-x-3`}>
      {displayedSocialMediaLinks.map((socialMedia) => (
        <a
          key={socialMedia.link}
          href={socialMedia.link}
          target="_blank"
          rel="noopener noreferrer"
          className="socialbtn"
        >
          <socialMedia.icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
