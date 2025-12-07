import { FaYoutube, FaChevronDown } from "react-icons/fa6";
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { useState } from "react";

const socialMedia = [
  {
    id: 1,
    name: "Facebook",
    icon: FaFacebookSquare,
    iconColor: "blue",
  },
  {
    id: 2,
    name: "Instagram",
    icon: GrInstagram,
    iconColor: "purple",
  },
  {
    id: 3,
    name: "Twitter",
    icon: FaTwitter,
    iconColor: "blue",
  },
  {
    id: 4,
    name: "Youtube",
    icon: FaYoutube,
    iconColor: "#cb2f35",
  },
  {
    id: 5,
    name: "LinkedIn",
    icon: FaLinkedin,
    iconColor: "blue",
  },
];

export const SocialMediaSelector = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState({});

  return (
    <div className="container">
      <div className="selector" onClick={() => setShowOptions(!showOptions)}>
        <div className="selector-text">
          {selectedMedia.icon && (
            <selectedMedia.icon
              style={{ color: selectedMedia.iconColor }}
              size={20}
            />
          )}
          <p>{selectedMedia.name || "Social Media"}</p>
        </div>
        <span className={showOptions ? "rotate" : ""}>
          <FaChevronDown />
        </span>
      </div>
      {showOptions && (
        <div className="options">
          {socialMedia.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="option"
                style={{ borderRadius: "0px" }}
                onClick={() => {
                  setSelectedMedia(item);
                  setShowOptions(false);
                }}
              >
                <div className="option-text">
                  <Icon style={{ color: item.iconColor }} size={20} />
                  <p>{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
