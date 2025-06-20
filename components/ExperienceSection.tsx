import React, { useState } from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { companyData } from "@/data/companyData";

const ExperienceSection = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCompanyClick = (companyKey) => {
    setSelectedCompany(companyData[companyKey]);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedCompany(null);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        Professional Experience
      </h1>
      
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        I am passionate about quantitative finance, algorithmic trading, and data-driven decision-making. My expertise lies in developing high-frequency trading systems, sentiment analysis engines, and portfolio optimization tools.
      </p>
      
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        I specialize in Python, C++, and machine learning frameworks, with a focus on creating scalable and efficient solutions for financial markets.
      </p>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
          Organizations I've worked in:
        </h2>
        <div className="text-center mb-4">
          View my <a href="https://www.linkedin.com/in/mohammed-sahal-4b299924a/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn Profile</a>
        </div>
        <hr className="mb-8" />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
          <div 
            onClick={() => handleCompanyClick('quantumcona')}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <div className="w-20 h-20 mb-2">
              <Image
                src={companyData.quantumcona.imageUrl}
                alt="Quantumcona"
                width={80}
                height={80}
                className="rounded-lg"
              />
            </div>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">Quantumcona</p>
          </div>
          
          <div 
            onClick={() => handleCompanyClick('ats')}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <div className="w-20 h-20 mb-2">
              <Image
                src={companyData.ats.imageUrl}
                alt="Appropriate Tech Solutions"
                width={80}
                height={80}
                className="rounded-lg"
              />
            </div>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">Appropriate Tech Solutions</p>
          </div>
          
          <div 
            onClick={() => handleCompanyClick('timechain')}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <div className="w-20 h-20 mb-2">
              <Image
                src={companyData.timechain.imageUrl}
                alt="Timechain Labs"
                width={80}
                height={80}
                className="rounded-lg"
              />
            </div>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">Timechain Labs</p>
          </div>
          
          <div 
            onClick={() => handleCompanyClick('tinkerhub')}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <div className="w-20 h-20 mb-2">
              <Image
                src={companyData.tinkerhub.imageUrl}
                alt="TinkerHub"
                width={80}
                height={80}
                className="rounded-lg"
              />
            </div>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">TinkerHub</p>
          </div>
          
          <div 
            onClick={() => handleCompanyClick('spotlight')}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <div className="w-20 h-20 mb-2">
              <Image
                src={companyData.spotlight.imageUrl}
                alt="Spotlight"
                width={80}
                height={80}
                className="rounded-lg"
              />
            </div>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">Spotlight</p>
          </div>
          
          <div 
            onClick={() => handleCompanyClick('markp')}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <div className="w-20 h-20 mb-2">
              <Image
                src={companyData.markp.imageUrl}
                alt="mark-P"
                width={80}
                height={80}
                className="rounded-lg"
              />
            </div>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">mark-P</p>
          </div>
        </div>
        
        <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
          This list is non-exhaustive and only includes public information. It does not include any private engagements.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
          Badges and Certificates
        </h2>
        <hr className="mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          <a href="https://www.hackerrank.com/profile/mohammedsahal001" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <div className="w-24 h-24 mb-2">
              <Image
                src="/img/badges/java-5star.png"
                alt="Golden 5 Star in Java"
                width={96}
                height={96}
                className="rounded-lg"
              />
            </div>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">Golden 5 Star in Java</p>
          </a>
          
          <a href="https://www.hackerrank.com/certificates/f0190dda54ec" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <div className="w-24 h-24 mb-2">
              <Image
                src="/img/certificates/Java-Hackerrank.png"
                alt="Hackerrank Certified Java Professional"
                width={96}
                height={96}
                className="rounded-lg"
              />
            </div>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">Hackerrank Certified Java Professional</p>
          </a>
          
          <a href="https://www.hackerrank.com/profile/mohammedsahal001" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <div className="w-24 h-24 mb-2">
              <Image
                src="/img/badges/problemSolving-1star.png"
                alt="Bronze 1 Star in Problem Solving"
                width={96}
                height={96}
                className="rounded-lg"
              />
            </div>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">Bronze 1 Star in Problem Solving</p>
          </a>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
          Hackathon Certificates
        </h2>
        <hr className="mb-8" />
        
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-2">
              <Image
                src="/img/certificates/dedsec.jpg"
                alt="DEDSEC CTF at Solasta '24"
                width={96}
                height={96}
                className="rounded-lg"
              />
            </div>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">DEDSEC CTF at Solasta '24</p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
          Git Featured Commits
        </h2>
        <hr className="mb-8" />
        
        <div className="flex justify-center">
          <a href="https://github.com/NGcodeX/NG-java-MAX-code/pull/5#issue-1465072959" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center max-w-md">
            <div className="w-full mb-2">
              <Image
                src="/img/commits/ngcodex.png"
                alt="Git Featured Commit"
                width={400}
                height={200}
                className="rounded-lg w-full"
              />
            </div>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Created SECURITY.md, which tells the user/reader how to report a vulnerability in the repository.
            </p>
          </a>
        </div>
      </div>

      {/* Company Modal */}
      {modalOpen && selectedCompany && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-darkBg rounded-2xl p-6 max-w-lg w-full relative mx-4">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-white text-2xl"
            >
              &times;
            </button>
            
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 mr-4">
                <Image
                  src={selectedCompany.imageUrl}
                  alt={selectedCompany.name}
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  {selectedCompany.timeline.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedCompany.timeline.subtitle}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {selectedCompany.timeline.date}
                </p>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Role & Responsibilities:
              </h3>
              <ul className="space-y-2">
                {selectedCompany.timeline.description.map((item, index) => (
                  <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-end">
              <button 
                onClick={() => window.open(selectedCompany.linkedinUrl, '_blank')}
                className="bg-white dark:bg-darkBg transition-all w-10 h-10 md:w-[2.75rem] md:h-[2.75rem] duration-500 ease-in-out group hover:w-40 p-2 rounded-full hover:bg-default-100 border-2 border-transparent dark:border-knight shadow-lg"
              >
                <div className="flex justify-center items-center">
                  <span className="text-sm md:text-medium text-nowrap hidden group-hover:block invisible group-hover:visible mr-1 animate-fade">
                    LinkedIn
                  </span>
                  <GoArrowUpRight />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceSection; 