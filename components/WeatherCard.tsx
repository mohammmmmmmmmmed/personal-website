import React, { useEffect, useState, useRef } from "react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaTimes } from "react-icons/fa";

// Placeholder icons (replace with SVGs or images as needed)
const icons = {
  day: "☀️",
  night: "🌙",
};

function getTimeOfDay(hour: number) {
  if (hour >= 6 && hour < 18) return "day";
  return "night";
}

const ANNOYING_KEY = "annoyingPopupMode";
const SECRET_PHRASE = "ting tong ping pong bing bong";
const POPUP_MESSAGES = [
  "Win a free potato! Click now!",
  "Congratulations! You are our 1,000,000th visitor!",
  "Download more RAM instantly!",
  "You won't believe what happens next!",
  "Click here for nothing!",
  "Your computer is not protected!",
  "Claim your invisible prize!",
  "This popup is totally necessary!",
  "Are you annoyed yet?",
  "Popups make everything better!",
  "You have won a trip to your kitchen!",
  "Click to spin the wheel of disappointment!",
  "Install our toolbar for more popups!",
  "This is not a virus, trust me!",
  "You need this popup in your life!"
];

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const WeatherCard = () => {
  const [city, setCity] = useState<string | null>(null);
  const [region, setRegion] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [time, setTime] = useState<Date>(new Date());

  // Annoying popup state
  const [annoyingMode, setAnnoyingMode] = useState<boolean>(false);
  const [popups, setPopups] = useState<any[]>([]);
  const popupId = useRef(0);
  const popupTimer = useRef<NodeJS.Timeout | null>(null);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    // Update time every minute
    const interval = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch('https://ipinfo.io/json')
      .then(res => res.json())
      .then(data => {
        if (data.city) setCity(data.city);
        if (data.region) setRegion(data.region);
        if (!data.city && !data.region) setError('Unknown location');
      })
      .catch((e) => {
        setError("Could not determine location");
        console.error('ipinfo.io fetch error:', e);
      });
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem(ANNOYING_KEY);
    if (saved === "true") setAnnoyingMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem(ANNOYING_KEY, annoyingMode ? "true" : "false");
    if (annoyingMode) {
      // Start interval to spawn popups repeatedly
      popupTimer.current = setInterval(() => {
        spawnPopup();
      }, getRandomInt(1500, 3500));
      window.addEventListener("keydown", handleKeyDown);
    } else {
      setPopups([]);
      setShowHint(true);
      if (popupTimer.current) clearInterval(popupTimer.current);
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      if (popupTimer.current) clearInterval(popupTimer.current);
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line
  }, [annoyingMode]);

  function spawnPopup() {
    const id = popupId.current++;
    const top = getRandomInt(5, 80); // vh
    const left = getRandomInt(2, 80); // vw
    const message = POPUP_MESSAGES[getRandomInt(0, POPUP_MESSAGES.length - 1)];
    setPopups((prev) => [
      ...prev,
      {
        id,
        top,
        left,
        message,
        showHint: showHint && prev.length === 0
      }
    ]);
    setShowHint(false);
  }

  function closePopup(id: number) {
    setPopups((prev) => prev.filter((p) => p.id !== id));
  }

  function handleKeyDown(e: KeyboardEvent) {
    // Listen for the secret phrase anywhere
    const input = (window as any)._annoyingInput || "";
    const char = e.key.length === 1 ? e.key : " ";
    const next = (input + char).slice(-SECRET_PHRASE.length);
    (window as any)._annoyingInput = next;
    if (next.toLowerCase() === SECRET_PHRASE) {
      setAnnoyingMode(false);
      setPopups([]);
      (window as any)._annoyingInput = "";
    }
  }

  const hour = time.getHours();
  const timeOfDay = getTimeOfDay(hour);
  const icon = icons[timeOfDay];
  const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Dynamic background
  const bg = timeOfDay === "night"
    ? "bg-gradient-to-br from-blue-900 to-gray-800"
    : "bg-gradient-to-br from-yellow-200 to-blue-200";

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center ${bg} rounded-xl p-6 transition-all duration-500 relative`}>
      <div className="text-5xl mb-2">{icon}</div>
      <div
        className="text-2xl font-bold mb-1"
        style={{ color: timeOfDay === 'night' ? '#fff' : '#1a202c', textShadow: timeOfDay === 'night' ? '0 1px 4px rgba(0,0,0,0.25)' : '0 1px 4px rgba(255,255,255,0.12)' }}
      >
        {timeOfDay === "night" ? "Night" : "Day"}
      </div>
      <div className="text-lg font-bold mb-2" style={{ color: timeOfDay === 'night' ? '#fff' : '#1a202c', textShadow: '0 1px 4px rgba(0,0,0,0.25)' }}>{timeString}</div>
      <div className="text-sm font-semibold" style={{ color: timeOfDay === 'night' ? '#e0e7ff' : '#1e293b', textShadow: '0 1px 4px rgba(0,0,0,0.18)' }}>
        {error ? error : city ? `${city}${region ? ', ' + region : ''}` : "Locating..."}
      </div>
      {/* Annoying Popups */}
      {annoyingMode && popups.map((popup) => (
        <div
          key={popup.id}
          className="fixed z-[9999] shadow-2xl border-2 border-pink-500 bg-white text-black p-4 rounded-lg flex flex-col items-center animate-bounce"
          style={{
            top: `${popup.top}vh`,
            left: `${popup.left}vw`,
            minWidth: 220,
            maxWidth: 320,
            background: 'linear-gradient(135deg, #fff 60%, #ffe4e6 100%)',
            border: '2px solid #f472b6',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            pointerEvents: 'auto',
          }}
        >
          <div className="flex w-full justify-between items-center mb-2">
            <span className="font-bold text-pink-600 text-sm">Ad</span>
            <button onClick={() => closePopup(popup.id)} className="ml-2 text-pink-600 hover:text-pink-800"><FaTimes /></button>
          </div>
          <div className="text-center text-base font-semibold mb-2">{popup.message}</div>
          {popup.showHint && (
            <div className="text-xs text-gray-700 bg-yellow-200 rounded px-2 py-1 mt-2">
              Hint: Type <span className="font-mono font-bold">{SECRET_PHRASE}</span> to disable popups!
            </div>
          )}
          <button className="mt-2 px-3 py-1 rounded bg-pink-200 text-pink-800 text-xs font-bold shadow hover:bg-pink-300">Click Me!</button>
        </div>
      ))}
    </div>
  );
};

export default WeatherCard; 