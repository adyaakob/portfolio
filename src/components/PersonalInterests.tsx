import React from 'react';
import SectionTitle from './SectionTitle';
import { 
  FaRobot, 
  FaCamera, 
  FaPrayingHands, 
  FaLandmark, 
  FaUserAstronaut, 
  FaHeadphones 
} from 'react-icons/fa';

const PersonalInterests = () => {
  const interests = [
    { name: 'Artificial Intelligence (AI)', icon: FaRobot },
    { name: 'Photography', icon: FaCamera },
    { name: 'Comparative Religion', icon: FaPrayingHands },
    { name: 'Ancient Civilizations', icon: FaLandmark },
    { name: 'Extraterrestrial Conspiracy Theories', icon: FaUserAstronaut },
    { name: 'Audiophile Enthusiast', icon: FaHeadphones }
  ];

  return (
    <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36" id="interests">
      <SectionTitle>Personal Interests</SectionTitle>
      <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {interests.map((interest, index) => {
          const Icon = interest.icon;
          return (
            <li
              key={index}
              className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700/40 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors flex items-center gap-3"
            >
              <Icon className="w-6 h-6 text-zinc-500 dark:text-zinc-400" />
              <span>{interest.name}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PersonalInterests;
