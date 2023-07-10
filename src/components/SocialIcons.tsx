import { socialMediaLinks } from "../data/utils";
import "../App.css";

interface SocialMediaIconsProps {
  flexDirection: string;
  startIcons: number;
  endIcons: number;
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({
  flexDirection,
  startIcons,
  endIcons,
}) => {
  const displayedSocialMediaLinks = socialMediaLinks.slice(
    startIcons,
    endIcons
  );

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
          <span className="hidden"></span>
          <socialMedia.icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
