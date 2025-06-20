import React from "react";
import { GoArrowUpRight } from "react-icons/go";

interface AchievementsCardProps {
  photos: string[];
  onTabChange?: (tab: string) => void;
}

const AchievementsCard: React.FC<AchievementsCardProps> = ({ photos, onTabChange }) => {
  const handleExperienceClick = () => {
    if (onTabChange) {
      onTabChange("experience");
    }
  };

  return (
    <div className="w-full h-full bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight p-6 rounded-2xl">
      <div className="w-full h-full flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
          Achievements
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          Over 2+ years of experience across quantitative finance, algorithmic trading, software development, and open-source contributions. Worked with a wide coterie of startups, NGOs, and companies, gaining expertise in C++, Python, Java, and modern web technologies.
        </p>
        <button 
          onClick={handleExperienceClick}
          className="absolute bg-white dark:bg-darkBg bottom-2 left-2 transition-all w-10 h-10 md:w-[2.75rem] md:h-[2.75rem] duration-500 ease-in-out group hover:w-40 p-2 rounded-full hover:bg-default-100 border-2 border-transparent dark:border-knight shadow-lg"
        >
          <div className="flex justify-center items-center">
            <span className="text-sm md:text-medium text-nowrap hidden group-hover:block invisible group-hover:visible mr-1 animate-fade">
              Experience
            </span>
            <GoArrowUpRight />
          </div>
        </button>
      </div>
    </div>
  );
};

export default AchievementsCard;
