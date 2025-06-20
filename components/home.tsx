"use client";

import { Tab, Tabs } from "@nextui-org/react";
import { Responsive } from "react-grid-layout";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub, FaEnvelope, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

import Paper from "./paper";
import { AnimationSwitch } from "./animation-swith";
import MiniPic from "./mini-pic";

import { cn } from "@/lib/utils";
import AvatarTransition from "@/components/avatar";
import { DockDemo } from "@/components/dock-demo";
import { ThemeSwitch } from "@/components/theme-switch";
import AchievementsCard from "@/components/card-stack";
import AnimatedEmoji from "@/components/animated-emoji";
import IconCloud from "@/components/icon-cloud";
import MapComponent from "@/components/map";
import WebAgent from "@/components/webagent";
import Chatbot from "@/components/chatbot";
import { MiniModel } from "@/components/mini";
import Actions from "@/components/actions";
import { layouts, selectedCard } from "@/config/layout";
import { icons } from "@/config/icons";
import useWindowWidth from "@/hooks/useWindowWidth";
import { aboutData } from "@/data/aboutData";
import { projects, selectedProjects } from "@/data/projects";
import { Dock, DockIcon } from "@/components/dock";
import WeatherCard from "./WeatherCard";
import ExperienceSection from "./ExperienceSection";
import BlogSection from "./BlogSection";

interface HomeProps {
  photos: string[];
  avatarUrl: string;
  dogUrl: string;
  actionImageUrl: string;
  resumeUrl: string;
  webagentUrl: string;
  chatbotUrl: string;
  paperUrl: string;
}

const SOCIALS = [
  {
    name: "Email",
    url: "mailto:mohammedsahal0085@gmail.com",
    icon: <FaEnvelope className="w-5 h-5" />,
    color: "text-blue-600 dark:text-blue-400"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mohammed-sahal-4b299924a/",
    icon: <FaLinkedin className="w-5 h-5" />,
    color: "text-blue-700 dark:text-blue-300"
  },
  {
    name: "GitHub",
    url: "https://github.com/mohammmmmmmmmmed",
    icon: <FaGithub className="w-5 h-5" />,
    color: "text-gray-800 dark:text-gray-200"
  },
  {
    name: "Hackerrank",
    url: "https://www.hackerrank.com/mohammedsahal0085",
    icon: <FaHackerrank className="w-5 h-5" />,
    color: "text-green-600 dark:text-green-400"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/ironsidepickle/",
    icon: <SiLeetcode className="w-5 h-5" />,
    color: "text-yellow-500 dark:text-yellow-400"
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/ironsidepickle",
    icon: <SiCodeforces className="w-5 h-5" />,
    color: "text-blue-500 dark:text-blue-300"
  }
];

function getCurrentOrgAndExperience() {
  // Find current org (where date ends with 'Present')
  const timeline = aboutData.timeline || [];
  let currentOrg = null;
  let currentTitle = null;
  let currentDate = null;
  let totalMonths = 0;
  const now = new Date();
  for (const item of timeline) {
    if (item.type === "work") {
      // Parse date range
      const [start, end] = (item.date || "").split(" - ");
      if (end && end.trim() === "Present") {
        currentOrg = item.org.split("·")[0].trim();
        currentTitle = item.title;
        currentDate = item.date;
      }
      // Calculate months for this job
      if (start) {
        const startDate = parseDate(start);
        const endDate = end && end.trim() !== "Present" ? parseDate(end) : now;
        if (startDate && endDate) {
          totalMonths += monthDiff(startDate, endDate);
        }
      }
    }
  }
  return {
    currentOrg: currentOrg || "None, Open, Immediate Joinee",
    currentTitle,
    currentDate,
    totalMonths
  };
}

function parseDate(str: string) {
  // Handles formats like 'Mar 2025', 'Feb 2023', etc.
  const [month, year] = str.split(" ");
  if (!month || !year) return null;
  return new Date(`${month} 1, ${year}`);
}
function monthDiff(d1: Date, d2: Date) {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months + 1;
}

const Home = ({
  photos,
  avatarUrl,
  dogUrl,
  actionImageUrl,
  resumeUrl,
  webagentUrl,
  chatbotUrl,
  paperUrl,
}: HomeProps) => {
  const width = useWindowWidth();
  const [tabSelected, setTabSelected] = useState("all");
  const tabsRef = useRef<any>(null);
  const [animated, setAnimated] = useState(false);
  const [siteLoaded, setSiteLoaded] = useState(false);
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [customModalOpen, setCustomModalOpen] = useState(false);
  const [customModalContent, setCustomModalContent] = useState<{ title: string; content: string; link?: string } | null>(null);
  const [selectedCarProject, setSelectedCarProject] = useState<any>(null);
  const [carProjectModalOpen, setCarProjectModalOpen] = useState(false);
  const [modalAnimated, setModalAnimated] = useState(false);

  useEffect(() => {
    // Wait for all resources to load
    if (typeof window !== "undefined") {
      window.addEventListener("load", () => setSiteLoaded(true));
      // Fallback: if load event missed, set after short delay
      setTimeout(() => setSiteLoaded(true), 2000);
    }
  }, []);

  const { currentOrg, currentTitle, currentDate, totalMonths } = getCurrentOrgAndExperience();

  if (!width || !siteLoaded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-darkBg z-50">
        <div className="flex flex-col items-center max-w-lg w-full p-8 rounded-2xl shadow-lg border dark:border-knight">
          <h1 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">Mohammed Sahal</h1>
          <div className="flex gap-4 mb-4 justify-center w-full">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:scale-110 transition-transform ${s.color} text-base md:text-lg`}
                title={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <a
            href="https://drive.google.com/file/d/1QAoAlj103PQ-Tu-AueurFWYLnIE0LfwU/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline font-semibold mb-2 text-base md:text-lg"
          >
            View Resume
          </a>
          <div className="mb-2 text-gray-700 dark:text-gray-200 text-base md:text-lg">
            <span className="font-semibold">Current Organization:</span> {currentOrg}
            {currentTitle && (
              <span className="ml-2 text-base md:text-lg text-gray-500">({currentTitle}, {currentDate})</span>
            )}
          </div>
          <div className="mb-4 text-gray-700 dark:text-gray-200 text-base md:text-lg">
            <span className="font-semibold">Total Experience:</span> {Math.floor(totalMonths / 12)} Years {totalMonths % 12} Months
          </div>
          <div className="text-lg text-gray-600 dark:text-gray-400 font-medium mt-2">Site is loading soon...</div>
        </div>
      </div>
    );
  }

  const handleTabChange = (tab: string) => {
    setTabSelected(tab);
    if (tabsRef.current) {
      tabsRef.current.setSelectedKey(tab);
    }
  };

  const handleCardClick = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCustomCardClick = (title: string, content: string, link?: string) => {
    setCustomModalContent({ title, content, link });
    setCustomModalOpen(true);
  };

  // Add Porsche 911 details object
  const porscheProject = {
    title: "Porsche 911",
    year: "2022",
    description: "The Porsche 911 is a legendary sports car known for its iconic design, rear-engine layout, and thrilling driving experience. The 2022 model features a turbocharged flat-six engine, advanced chassis technology, and a luxurious, tech-forward interior.",
    image: "/img/cars/porsche-911.jpg",
    link: "https://www.porsche.com/usa/models/911/"
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <Tabs
        ref={tabsRef}
        aria-label="Tabs"
        className="mb-2 md:mb-6 rounded-full"
        classNames={{
          cursor: "shadow-none",
          tabList:
            "bg-[#ece7e7] dark:bg-darkBg border-2 border-transparent dark:border-knight rounded-full",
        }}
        motionProps={{
          initial: { scale: 0.8 },
          animate: { scale: 1 },
          exit: { scale: 0.8 },
          transition: { type: "spring", stiffness: 300, damping: 15 },
        }}
        radius={"full"}
        selectedKey={tabSelected}
        onSelectionChange={(selected: any) => {
          setTabSelected(selected as string);
        }}
      >
        <Tab key="all" title="All" />
        <Tab key="about" title="About" />
        <Tab key="projects" title="Projects" />
        <Tab key="experience" title="Experience" />
        <Tab key="blog" title="Blog" />
      </Tabs>

      {/* Experience tab: show ExperienceSection */}
      {tabSelected === "experience" ? (
        <ExperienceSection />
      ) : tabSelected === "blog" ? (
        <BlogSection />
      ) : tabSelected === "projects" ? (
        /* Projects tab: selected projects grid first, then ProjectsGrid, then rest of home cards */
        <>
          <h2 className="text-2xl font-bold mb-4 w-full text-left">Featured Projects</h2>
      <Responsive
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        className="layout w-full h-full"
        cols={{ lg: 4, md: 4, sm: 2, xs: 2, xxs: 2 }}
        isDraggable={width > 480}
        isResizable={false}
        layouts={layouts[tabSelected]}
        margin={[15, 15]}
        width={width}
      >
        <div
          key="avatar"
          className={cn(
            "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] p-6 overflow-hidden z-[1]",
            selectedCard[tabSelected]["avatar"] ? "opacity-100" : "opacity-50"
          )}
        >
          {/* Top: Avatar and summary/roles side by side */}
          <div className="flex flex-row items-start gap-3 w-full mb-4">
            <div className="shrink-0">
              <AvatarTransition avatarUrl={avatarUrl} />
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-sm md:text-base mb-1">{aboutData.summary}</p>
              <ul className="text-sm md:text-base text-gray-500">{aboutData.roles.map((role) => (
                <li key={role} className="mb-0.5">{role}</li>
              ))}</ul>
            </div>
          </div>
          {/* Bottom: Resume link (left), Socials (right) */}
          <div className="flex flex-row items-center justify-between w-full mt-2">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all w-8 h-8 md:w-10 md:h-10 duration-500 ease-in-out group hover:w-32 p-1.5 rounded-full hover:bg-default-100 border-2 border-transparent dark:border-knight shadow-lg flex items-center"
            >
              <span className="text-sm md:text-base text-nowrap hidden group-hover:block invisible group-hover:visible mr-1 animate-fade">
                Resume
              </span>
              <GoArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <div className="flex items-center gap-2 md:gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:scale-110 transition-transform ${s.color} text-sm md:text-base`}
                  title={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          key="themeSwitch"
          className={cn(
            "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[1]",
            selectedCard[tabSelected]["themeSwitch"]
              ? "opacity-100"
              : "opacity-50"
          )}
        >
          <ThemeSwitch />
        </div>
        <div
          key="cardStack"
          className={cn(
            "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[2]",
            selectedCard[tabSelected]["cardStack"]
              ? "opacity-100"
              : "opacity-50"
          )}
        >
              <AchievementsCard photos={photos} onTabChange={handleTabChange} />
        </div>
        <div
          key="animatedEmoji"
          className={cn(
                "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-pointer rounded-[2rem] flex justify-center items-center z-[1] p-6 overflow-hidden transition-shadow hover:shadow-lg",
            selectedCard[tabSelected]["animatedEmoji"]
              ? "opacity-100"
              : "opacity-50"
          )}
              onClick={() => handleCardClick(selectedProjects[1])}
              tabIndex={0}
              role="button"
              aria-label="Expand DIMS project details"
            >
              <div className="text-left text-xs md:text-sm text-gray-700 dark:text-gray-300 line-clamp-6 fade-out-mask">
                <b>{selectedProjects[1].title}</b><br/>
                {selectedProjects[1].description}
              </div>
            </div>
            <div
              key="mapComponent"
              className={cn(
                "bg-white dark:bg-darkBg cursor-pointer rounded-[2rem] flex flex-col justify-center items-center z-[1] p-0 relative overflow-hidden transition-shadow hover:shadow-lg",
                selectedCard[tabSelected]["mapComponent"]
                  ? "opacity-100"
                  : "opacity-50"
              )}
              onClick={() => {
                setSelectedCarProject(porscheProject);
                setCarProjectModalOpen(true);
              }}
              tabIndex={0}
              role="button"
              aria-label="Expand Porsche 911 details"
            >
              {animated && siteLoaded ? (
                <MiniModel key="porsche-911" modelPath="/models/porsche-911.glb" cameraPosition={[5, 0, 15]} />
              ) : (
                <img src="/img/cars/porsche-911.jpg" alt="Porsche 911" className="w-full h-full object-cover" />
              )}
              <AnimationSwitch
                animated={animated}
                className="absolute top-4 right-4 z-50"
                setAnimated={setAnimated}
              />
            </div>
            <div
              key="iconCloud"
              className={cn(
                "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center relative overflow-hidden p-8 z-[1]",
                selectedCard[tabSelected]["iconCloud"]
                  ? "opacity-100"
                  : "opacity-50"
              )}
            >
              <IconCloud iconSlugs={icons} />
            </div>
            {/* Political Sentiment Analysis Bot project card */}
            <div
              key="webAgent"
              className={cn(
                "bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-pointer rounded-[2rem] flex flex-col justify-center items-center overflow-hidden z-[1] p-6 transition-shadow hover:shadow-lg relative",
                selectedCard[tabSelected]["webAgent"] ? "opacity-100" : "opacity-50"
              )}
              onClick={() => handleCardClick(selectedProjects[0])}
              tabIndex={0}
              role="button"
              aria-label="Expand Political Sentiment Analysis Bot details"
            >
              <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 bg-blue-300 opacity-40 blur-2xl w-72 h-40 rounded-full animate-pulse z-0" />
              <div className="relative z-10 text-left text-xs md:text-sm text-gray-700 dark:text-gray-300">
                <b>{selectedProjects[0].title}</b><br/>
                {selectedProjects[0].description}
              </div>
            </div>
            {/* NexScribe project card */}
            <div
              key="chatBot"
              className={cn(
                "bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-pointer rounded-[2rem] flex flex-col justify-center items-center overflow-hidden z-[1] p-6 transition-shadow hover:shadow-lg",
                selectedCard[tabSelected]["chatBot"] ? "opacity-100" : "opacity-50"
              )}
              onClick={() => handleCardClick(selectedProjects[2])}
              tabIndex={0}
              role="button"
              aria-label="Expand NexScribe project details"
            >
              <div className="text-left text-xs md:text-sm text-gray-700 dark:text-gray-300 line-clamp-6 fade-out-mask">
                <b>{selectedProjects[2].title}</b><br/>
                {selectedProjects[2].description}
              </div>
            </div>
            <div
              key="miniModel"
              className={cn(
                "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[1] overflow-hidden",
                selectedCard[tabSelected]["miniModel"]
                  ? "opacity-100"
                  : "opacity-50"
              )}
            >
              <WeatherCard />
            </div>
            <div
              key="actions"
              className={cn(
                "bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center overflow-hidden z-[1]",
                selectedCard[tabSelected]["actions"] ? "opacity-100" : "opacity-50"
              )}
            >
              <Actions photoUrl={actionImageUrl} />
            </div>
            {/* TradeSentinel project card */}
            <div
              key="paper"
              className={cn(
                "bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-pointer rounded-[2rem] flex flex-col justify-center items-center z-[1] overflow-hidden p-6 transition-shadow hover:shadow-lg",
                selectedCard[tabSelected]["paper"] ? "opacity-100" : "opacity-50"
              )}
              onClick={() => handleCardClick(selectedProjects[3])}
              tabIndex={0}
              role="button"
              aria-label="Expand TradeSentinel project details"
            >
              <div className="text-left text-xs md:text-sm text-gray-700 dark:text-gray-300 line-clamp-6 fade-out-mask">
                <b>{selectedProjects[3].title}</b><br/>
                {selectedProjects[3].description}
              </div>
            </div>
          </Responsive>
          <h2 className="text-2xl font-bold mt-10 mb-4 w-full text-left">All Projects</h2>
          <div className="w-full">
            <ProjectsGrid onCardClick={handleCardClick} projects={projects} />
          </div>
        </>
      ) : (
        /* Default layout for other tabs (all, about) */
        <Responsive
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          className="layout w-full h-full"
          cols={{ lg: 4, md: 4, sm: 2, xs: 2, xxs: 2 }}
          isDraggable={width > 480}
          isResizable={false}
          layouts={layouts[tabSelected]}
          margin={[15, 15]}
          width={width}
        >
          <div
            key="avatar"
            className={cn(
              "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] p-6 overflow-hidden z-[1]",
              selectedCard[tabSelected]["avatar"] ? "opacity-100" : "opacity-50"
            )}
          >
            {/* Top: Avatar and summary/roles side by side */}
            <div className="flex flex-row items-start gap-3 w-full mb-4">
              <div className="shrink-0">
                <AvatarTransition avatarUrl={avatarUrl} />
              </div>
              <div className="flex flex-col flex-1">
                <p className="text-sm md:text-base mb-1">{aboutData.summary}</p>
                <ul className="text-sm md:text-base text-gray-500">{aboutData.roles.map((role) => (
                  <li key={role} className="mb-0.5">{role}</li>
                ))}</ul>
              </div>
            </div>
            {/* Bottom: Resume link (left), Socials (right) */}
            <div className="flex flex-row items-center justify-between w-full mt-2">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all w-8 h-8 md:w-10 md:h-10 duration-500 ease-in-out group hover:w-32 p-1.5 rounded-full hover:bg-default-100 border-2 border-transparent dark:border-knight shadow-lg flex items-center"
              >
                <span className="text-sm md:text-base text-nowrap hidden group-hover:block invisible group-hover:visible mr-1 animate-fade">
                  Resume
                </span>
                <GoArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <div className="flex items-center gap-2 md:gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:scale-110 transition-transform ${s.color} text-sm md:text-base`}
                    title={s.name}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div
            key="themeSwitch"
            className={cn(
              "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[1]",
              selectedCard[tabSelected]["themeSwitch"]
                ? "opacity-100"
                : "opacity-50"
            )}
          >
            <ThemeSwitch />
          </div>
          <div
            key="cardStack"
            className={cn(
              "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[2]",
              selectedCard[tabSelected]["cardStack"]
                ? "opacity-100"
                : "opacity-50"
            )}
          >
            <AchievementsCard photos={photos} onTabChange={handleTabChange} />
          </div>
          <div
            key="animatedEmoji"
            className={cn(
                "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-pointer rounded-[2rem] flex justify-center items-center z-[1] p-6 overflow-hidden transition-shadow hover:shadow-lg",
              selectedCard[tabSelected]["animatedEmoji"]
                ? "opacity-100"
                : "opacity-50"
            )}
              onClick={() => handleCustomCardClick(
                "📡 DIMS: Distributed Intelligent Mesh System",
                `DIMS is a next-generation, decentralized mesh networking system for adaptive data streaming, downloading, and real-time communication. It aggregates multiple devices and network interfaces for ultra-fast, resilient downloads, live video streaming, and encrypted video calls — even in unstable networks. Features dynamic chunk-based distribution, ML-based prediction, compression, encryption, and load balancing. Turns ordinary smartphones into a collective bandwidth engine for efficient, private, and fault-tolerant data transmission.`,
                "https://example.com"
              )}
              tabIndex={0}
              role="button"
              aria-label="Expand DIMS project details"
            >
              <div className="text-left text-xs md:text-sm text-gray-700 dark:text-gray-300 line-clamp-6 fade-out-mask">
                <b>📡 DIMS: Distributed Intelligent Mesh System</b><br/>
                DIMS is a next-generation, decentralized mesh networking system for adaptive data streaming, downloading, and real-time communication. It aggregates multiple devices and network interfaces for ultra-fast, resilient downloads, live video streaming, and encrypted video calls — even in unstable networks. Features dynamic chunk-based distribution, ML-based prediction, compression, encryption, and load balancing. Turns ordinary smartphones into a collective bandwidth engine for efficient, private, and fault-tolerant data transmission.
              </div>
        </div>
        <div
          key="mapComponent"
          className={cn(
                "bg-white dark:bg-darkBg cursor-pointer rounded-[2rem] flex flex-col justify-center items-center z-[1] p-0 relative overflow-hidden transition-shadow hover:shadow-lg",
            selectedCard[tabSelected]["mapComponent"]
              ? "opacity-100"
              : "opacity-50"
          )}
            onClick={() => {
              setSelectedCarProject(porscheProject);
              setCarProjectModalOpen(true);
            }}
            tabIndex={0}
            role="button"
            aria-label="Expand Porsche 911 details"
          >
            {animated && siteLoaded ? (
              <MiniModel key="porsche-911" modelPath="/models/porsche-911.glb" cameraPosition={[5, 0, 15]} />
            ) : (
              <img src="/img/cars/porsche-911.jpg" alt="Porsche 911" className="w-full h-full object-cover" />
            )}
            <AnimationSwitch
              animated={animated}
              className="absolute top-4 right-4 z-50"
              setAnimated={setAnimated}
            />
        </div>
        <div
          key="iconCloud"
          className={cn(
              "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center relative overflow-hidden p-8 z-[1]",
            selectedCard[tabSelected]["iconCloud"]
              ? "opacity-100"
              : "opacity-50"
          )}
        >
          <IconCloud iconSlugs={icons} />
        </div>
        <div
          key="webAgent"
          className={cn(
                "bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-pointer rounded-[2rem] flex flex-col justify-center items-center overflow-hidden z-[1] p-6 transition-shadow hover:shadow-lg relative",
            selectedCard[tabSelected]["webAgent"] ? "opacity-100" : "opacity-50"
          )}
              onClick={() => handleCustomCardClick(
                "🗳️ Political Sentiment Analysis Bot",
                'This bot predicts market movements by analyzing real-time political sentiment from Reddit, Twitter, and financial news outlets. It leverages a custom Named Entity Recognition (NER) model with fuzzy matching to identify key political figures, CEOs, and companies, dynamically resolving variations and nicknames. Sentiment scoring techniques, including VADER and TextBlob, are used to assess public perception and aggregate trends over time. The system implements predictive analytics using machine learning models (Random Forest, LSTM) to forecast market trends based on sentiment and event co-occurrence. It generates real-time alerts for traders, visualizes entity relationships, and develops correlation models using Pointwise Mutual Information (PMI) and association rule mining. This comprehensive approach enables traders to make informed decisions based on nuanced political and social signals.',
                "https://example.com"
              )}
              tabIndex={0}
              role="button"
              aria-label="Expand Political Sentiment Analysis Bot details"
            >
              <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 bg-blue-300 opacity-40 blur-2xl w-72 h-40 rounded-full animate-pulse z-0" />
              <div className="relative z-10 text-left text-xs md:text-sm text-gray-700 dark:text-gray-300">
                <b>🗳️ Political Sentiment Analysis Bot</b><br/>
                This bot predicts market movements by analyzing real-time political sentiment from Reddit, Twitter, and financial news outlets. It leverages a custom Named Entity Recognition (NER) model with fuzzy matching to identify key political figures, CEOs, and companies, dynamically resolving variations and nicknames. Sentiment scoring techniques, including VADER and TextBlob, are used to assess public perception and aggregate trends over time. The system implements predictive analytics using machine learning models (Random Forest, LSTM) to forecast market trends based on sentiment and event co-occurrence. It generates real-time alerts for traders, visualizes entity relationships, and develops correlation models using Pointwise Mutual Information (PMI) and association rule mining. This comprehensive approach enables traders to make informed decisions based on nuanced political and social signals.
              </div>
        </div>
        <div
          key="chatBot"
          className={cn(
                "bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-pointer rounded-[2rem] flex flex-col justify-center items-center overflow-hidden z-[1] p-6 transition-shadow hover:shadow-lg",
            selectedCard[tabSelected]["chatBot"] ? "opacity-100" : "opacity-50"
          )}
              onClick={() => handleCustomCardClick(
                "📘 NexScribe – Local Context-Aware Note Capture & Mindmap System",
                `NexScribe is an offline-first, AI-augmented note-taking system that captures handwritten notes and lectures, links keywords to prior knowledge, and visualizes data in a 3D mindmap. Features real-time handwriting/audio capture, slide parsing, context linking, Wikipedia-style x-ray overlays, and gesture-based navigation. All data is stored locally for privacy and continuity.`,
                "https://example.com"
              )}
              tabIndex={0}
              role="button"
              aria-label="Expand NexScribe project details"
            >
              <div className="text-left text-xs md:text-sm text-gray-700 dark:text-gray-300 line-clamp-6 fade-out-mask">
                <b>📘 NexScribe – Local Context-Aware Note Capture & Mindmap System</b><br/>
                NexScribe is an offline-first, AI-augmented note-taking system that captures handwritten notes and lectures, links keywords to prior knowledge, and visualizes data in a 3D mindmap. Features real-time handwriting/audio capture, slide parsing, context linking, Wikipedia-style x-ray overlays, and gesture-based navigation. All data is stored locally for privacy and continuity.
              </div>
        </div>
        <div
          key="miniModel"
          className={cn(
            "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[1] overflow-hidden",
            selectedCard[tabSelected]["miniModel"]
              ? "opacity-100"
              : "opacity-50"
          )}
        >
            <WeatherCard />
        </div>
        <div
          key="actions"
          className={cn(
            "bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center overflow-hidden z-[1]",
            selectedCard[tabSelected]["actions"] ? "opacity-100" : "opacity-50"
          )}
        >
          <Actions photoUrl={actionImageUrl} />
        </div>
        <div
          key="paper"
          className={cn(
                "bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-pointer rounded-[2rem] flex flex-col justify-center items-center z-[1] overflow-hidden p-6 transition-shadow hover:shadow-lg",
            selectedCard[tabSelected]["paper"] ? "opacity-100" : "opacity-50"
          )}
              onClick={() => handleCustomCardClick(
                "📄 TradeSentinel",
                `Detects and predicts illegal insider trading using machine learning. Analyzes trading patterns, news, and market data with anomaly detection and statistical tests (Granger causality, AD Fuller). Real-time surveillance for fraud and market abuse.`,
                "https://example.com"
              )}
              tabIndex={0}
              role="button"
              aria-label="Expand TradeSentinel project details"
          >
              <div className="text-left text-xs md:text-sm text-gray-700 dark:text-gray-300 line-clamp-6 fade-out-mask">
                <b>📄 TradeSentinel</b><br/>
                Detects and predicts illegal insider trading using machine learning. Analyzes trading patterns, news, and market data with anomaly detection and statistical tests (Granger causality, AD Fuller). Real-time surveillance for fraud and market abuse.
              </div>
            </div>
          </Responsive>
        )}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        {selectedProject && (
          <div className="relative pb-16">
            {selectedProject.image && (
              Array.isArray(selectedProject.image) ? (
                <img
                  src={selectedProject.image[0]}
                  alt={selectedProject.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
              ) : (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
              )
            )}
            <h2 className="font-bold text-xl mb-2">{selectedProject.title}</h2>
            <p className="mb-4 whitespace-pre-line border-b border-gray-200 dark:border-knight pb-4">
              {selectedProject.title === "🗳️ Political Sentiment Analysis Bot"
                ? "This bot predicts market movements by analyzing real-time political sentiment from Reddit, Twitter, and financial news outlets. It leverages a custom Named Entity Recognition (NER) model with fuzzy matching to identify key political figures, CEOs, and companies, dynamically resolving variations and nicknames. Sentiment scoring techniques, including VADER and TextBlob, are used to assess public perception and aggregate trends over time. The system implements predictive analytics using machine learning models (Random Forest, LSTM) to forecast market trends based on sentiment and event co-occurrence. It generates real-time alerts for traders, visualizes entity relationships, and develops correlation models using Pointwise Mutual Information (PMI) and association rule mining. This comprehensive approach enables traders to make informed decisions based on nuanced political and social signals."
                : selectedProject.description}
            </p>
            {selectedProject.link && (
              <button className="absolute bg-white dark:bg-darkBg bottom-2 left-2 transition-all w-10 h-10 md:w-[2.75rem] md:h-[2.75rem] duration-500 ease-in-out group hover:w-40 p-2 rounded-full hover:bg-default-100 border-2 border-transparent dark:border-knight shadow-lg">
                <div className="flex justify-center items-center">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <span className="text-sm md:text-medium text-nowrap hidden group-hover:block invisible group-hover:visible mr-1 animate-fade">
                      Demo
                    </span>
                    <GoArrowUpRight />
                  </a>
                </div>
              </button>
            )}
            {selectedProject.github && (
              <button className="absolute bg-white dark:bg-darkBg bottom-2 left-16 transition-all w-10 h-10 md:w-[2.75rem] md:h-[2.75rem] duration-500 ease-in-out group hover:w-40 p-2 rounded-full hover:bg-default-100 border-2 border-transparent dark:border-knight shadow-lg">
                <div className="flex justify-center items-center">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <span className="text-sm md:text-medium text-nowrap hidden group-hover:block invisible group-hover:visible mr-1 animate-fade">
                      GitHub
                    </span>
                    <FaGithub />
                  </a>
                </div>
              </button>
            )}
          </div>
        )}
      </Modal>
      <Modal open={customModalOpen} onClose={() => setCustomModalOpen(false)}>
        {customModalContent && (
          <div className="relative pb-16">
            <h2 className="font-bold text-xl mb-2">{customModalContent.title}</h2>
            <p className="mb-4 whitespace-pre-line border-b border-gray-200 dark:border-knight pb-4">{customModalContent.content}</p>
            {customModalContent.link && (
              <button className="absolute bg-white dark:bg-darkBg bottom-2 left-2 transition-all w-10 h-10 md:w-[2.75rem] md:h-[2.75rem] duration-500 ease-in-out group hover:w-40 p-2 rounded-full hover:bg-default-100 border-2 border-transparent dark:border-knight shadow-lg">
                <div className="flex justify-center items-center">
                  <a
                    href={customModalContent.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <span className="text-sm md:text-medium text-nowrap hidden group-hover:block invisible group-hover:visible mr-1 animate-fade">
                      Visit Project
                    </span>
                    <GoArrowUpRight />
                  </a>
                </div>
              </button>
            )}
          </div>
        )}
      </Modal>
      <Modal open={carProjectModalOpen} onClose={() => setCarProjectModalOpen(false)}>
        {selectedCarProject && (
          <div className="relative pb-16">
            {modalAnimated ? (
              <div className="w-full h-64 rounded-xl mb-4 overflow-hidden">
                <MiniModel key="porsche-911-modal" modelPath="/models/porsche-911.glb" cameraPosition={[5, 0, 15]} scale={2.1} />
              </div>
            ) : (
              <img
                src={selectedCarProject.image}
                alt={selectedCarProject.title}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
            )}
            <AnimationSwitch
              animated={modalAnimated}
              className="absolute top-4 right-4 z-50"
              setAnimated={setModalAnimated}
            />
            <h2 className="font-bold text-xl mb-2">{selectedCarProject.title} ({selectedCarProject.year})</h2>
            <p className="mb-4 whitespace-pre-line border-b border-gray-200 dark:border-knight pb-4">
              {selectedCarProject.description}
            </p>
            {selectedCarProject.link && (
              <button className="absolute bg-white dark:bg-darkBg bottom-2 left-2 transition-all w-10 h-10 md:w-[2.75rem] md:h-[2.75rem] duration-500 ease-in-out group hover:w-40 p-2 rounded-full hover:bg-default-100 border-2 border-transparent dark:border-knight shadow-lg">
                <div className="flex justify-center items-center">
                  <a
                    href={selectedCarProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <span className="text-sm md:text-medium text-nowrap hidden group-hover:block invisible group-hover:visible mr-1 animate-fade">
                      Learn More
                    </span>
                    <GoArrowUpRight />
                  </a>
                </div>
              </button>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

const Modal = ({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-darkBg rounded-2xl p-6 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 dark:hover:text-white"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

const ProjectsGrid = ({ onCardClick, projects }: { onCardClick: (project: any) => void, projects: any[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, idx) => {
        const imgSrc = Array.isArray(project.image) ? project.image[0] : project.image;
        return (
          <div
            key={project.title + idx}
            className="bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight rounded-2xl p-6 cursor-pointer hover:shadow-lg flex flex-col justify-between min-h-[200px]"
            onClick={() => onCardClick(project)}
          >
            {imgSrc ? (
              <Image
                src={imgSrc}
                alt={project.title}
                width={400}
                height={200}
                className="rounded-xl object-cover mb-2"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : null}
            <h3 className="font-bold text-lg mb-1">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              {project.description.slice(0, 80)}{project.description.length > 80 ? '...' : ''}
            </p>
            <div className="flex flex-wrap gap-1 mb-2">
              {project.tech && project.tech.map((t: string) => (
                <span key={t} className="text-xs bg-gray-200 dark:bg-gray-700 rounded px-2 py-0.5 mr-1 mb-1">{t}</span>
              ))}
            </div>
            {project.date && <span className="text-xs text-gray-400">{project.date}</span>}
        </div>
        );
      })}
    </div>
  );
};

export default Home;
