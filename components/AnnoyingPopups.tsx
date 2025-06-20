'use client';
import React, { useEffect, useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";

const ANNOYING_KEY = "annoyingPopupMode";
const SECRET_PHRASE = "ting tong ping pong bing bong";
const POPUP_MESSAGES = [
  "🚗 Hot Car Sale! 0% APR for 84 months!",
  "🛒 90% OFF on all shopping! Limited time!",
  "⚠️ Your device is under attack! Click to protect!",
  "💸 Get free money now! No catch!",
  "👔 Top recruiters are looking for you! Upload your resume!",
  "🔓 Your IP has been leaked! Click to secure!",
  "🎁 Claim your free gift card!",
  "🏆 You are our lucky winner! Spin the wheel!",
  "📱 Download our app for more popups!",
  "💻 Your computer is not protected!",
  "🤑 Double your salary instantly!",
  "🎉 Congratulations! You won a trip to your kitchen!",
  "🦠 Virus detected! Remove now!",
  "🔔 Enable notifications for more popups!",
  "💥 Click here for a surprise!",
  "🛑 Stop! You need this popup!",
  "🔋 Your battery is low! Plug in now!",
  "📦 Package out for delivery! Track now!",
  "💳 Your card was charged $999! Dispute now!",
  "👀 Someone is watching you!",
  "🌐 Update your browser for a better experience!",
  "🎊 100% guaranteed disappointment!",
  "🧑‍💼 Become a CEO in 3 days!",
  "🦄 Get a free unicorn!",
  "🍕 Free pizza for the first 0 customers!",
  "💔 Your crush is waiting for you!",
  "🧠 Boost your IQ by 100 points!",
  "🕵️‍♂️ FBI warning!",
  "💼 Get hired instantly!",
  "🎲 Roll the dice for a random popup!"
];
const COLOR_SCHEMES = [
  { bg: "#fff0f6", border: "#ff69b4", text: "#b8005c" },
  { bg: "#e0f7fa", border: "#00bcd4", text: "#006064" },
  { bg: "#fffde7", border: "#ffd600", text: "#bfa600" },
  { bg: "#f3e5f5", border: "#9c27b0", text: "#4a148c" },
  { bg: "#e8f5e9", border: "#43a047", text: "#1b5e20" },
  { bg: "#fbe9e7", border: "#ff7043", text: "#bf360c" },
  { bg: "#ede7f6", border: "#7e57c2", text: "#311b92" },
  { bg: "#e1f5fe", border: "#0288d1", text: "#01579b" },
  { bg: "#fff3e0", border: "#ffb300", text: "#e65100" },
  { bg: "#f9fbe7", border: "#cddc39", text: "#827717" },
];
const WALDO_IMG = "https://w7.pngwing.com/pngs/146/65/png-transparent-where-s-wally-where-s-waldo-the-fantastic-journey-the-waldo-waldo-5k-book-children-s-literature-book.png";
const VIDEO_URLS = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  "https://www.youtube.com/embed/zu8bEljrolk?autoplay=1"
];
const RICKROLL_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
const MARIO_DEATH_SOUND = "https://www.myinstants.com/media/sounds/mario-death-sound.mp3";

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const AnnoyingPopups: React.FC = () => {
  const [annoyingMode, setAnnoyingMode] = useState<boolean>(false);
  const [popups, setPopups] = useState<any[]>([]);
  const popupId = useRef(0);
  const popupTimer = useRef<NodeJS.Timeout | null>(null);
  const [showHint, setShowHint] = useState(true);
  const inputBuffer = useRef("");
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const [waldo, setWaldo] = useState<{top: number, left: number} | null>(null);
  const [waldoFound, setWaldoFound] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const marioAudioRef = useRef<HTMLAudioElement | null>(null);
  const [videoDialog, setVideoDialog] = useState<{url: string, message: string} | null>(null);
  const waldoTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setAnnoyingMode(localStorage.getItem(ANNOYING_KEY) === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem(ANNOYING_KEY, annoyingMode ? "true" : "false");
    if (annoyingMode) {
      popupTimer.current = setInterval(() => {
        spawnPopup();
      }, getRandomInt(600, 1800));
      document.addEventListener("keydown", handleKeyDown);
      // Place Waldo after delay on desktop, immediately on mobile
      setWaldo(null); // Always reset first
      setWaldoFound(false);
      setGameOver(false);
      if (waldoTimer.current) clearTimeout(waldoTimer.current);
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        setWaldo({
          top: getRandomInt(10, 80),
          left: getRandomInt(5, 80)
        });
      } else {
        waldoTimer.current = setTimeout(() => {
          setWaldo({
            top: getRandomInt(10, 80),
            left: getRandomInt(5, 80)
          });
        }, 8000); // 8 seconds delay on desktop
      }
    } else {
      setPopups([]);
      setShowHint(true);
      setWaldo(null);
      setWaldoFound(false);
      setGameOver(false);
      if (popupTimer.current) clearInterval(popupTimer.current);
      if (waldoTimer.current) clearTimeout(waldoTimer.current); // Clear timer
      document.removeEventListener("keydown", handleKeyDown);
      inputBuffer.current = "";
    }
    return () => {
      if (popupTimer.current) clearInterval(popupTimer.current);
      if (waldoTimer.current) clearTimeout(waldoTimer.current); // Clear timer
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line
  }, [annoyingMode]);

  useEffect(() => {
    if (!annoyingMode || gameOver) return;
    // Estimate popup area
    const popupArea = 260 * 180; // avg popup size in px
    const totalPopupArea = popups.length * popupArea;
    const viewportArea = window.innerWidth * window.innerHeight;
    if (totalPopupArea / viewportArea >= 0.99) {
      setGameOver(true);
      if (marioAudioRef.current) {
        marioAudioRef.current.currentTime = 0;
        marioAudioRef.current.play();
      }
      setTimeout(() => setAnnoyingMode(false), 3000);
    }
  }, [popups.length, annoyingMode, gameOver]);

  function spawnPopup() {
    const id = popupId.current++;
    const top = getRandomInt(5, 80); // vh
    const left = getRandomInt(2, 80); // vw
    const message = POPUP_MESSAGES[getRandomInt(0, POPUP_MESSAGES.length - 1)];
    const color = COLOR_SCHEMES[getRandomInt(0, COLOR_SCHEMES.length - 1)];
    setPopups((prev) => [
      ...prev,
      {
        id,
        top,
        left,
        message,
        color,
        showHint: showHint && prev.length === 0
      }
    ]);
    setShowHint(false);
  }

  function closeOrClickPopup(e: React.MouseEvent, id: number) {
    e.preventDefault();
    // Randomly pick a video
    const idx = Math.random() < 0.5 ? 0 : 1;
    setVideoDialog({
      url: VIDEO_URLS[idx],
      message: idx === 0 ? "Never Gonna Give You Up!" : "You have been trolled!"
    });
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    const char = e.key.length === 1 ? e.key : " ";
    inputBuffer.current = (inputBuffer.current + char).slice(-SECRET_PHRASE.length);
    if (inputBuffer.current.toLowerCase() === SECRET_PHRASE) {
      setAnnoyingMode(false);
      setPopups([]);
      inputBuffer.current = "";
    } else {
      debounceTimer.current = setTimeout(() => {
        inputBuffer.current = "";
      }, 3000);
    }
  }

  function handleWaldoClick() {
    setWaldoFound(true);
    setPopups([]);
    setTimeout(() => setAnnoyingMode(false), window.innerWidth < 768 ? 0 : 2000);
  }

  return (
    <>
      <button
        className={`fixed bottom-6 right-6 z-[9999] px-5 py-3 rounded-full font-bold text-sm shadow ${annoyingMode ? 'bg-red-500 text-white' : 'bg-yellow-300 text-black'} hover:scale-105 transition`}
        onClick={() => setAnnoyingMode((m) => !m)}
      >
        {annoyingMode ? "Disable Annoying Popups" : "Enable Annoying Popups"}
      </button>
      {annoyingMode && popups.map((popup) => (
        <div
          key={popup.id}
          className="fixed z-[9999] shadow-2xl border-2 p-4 rounded-lg flex flex-col items-center animate-bounce cursor-pointer"
          style={{
            top: `${popup.top}vh`,
            left: `${popup.left}vw`,
            minWidth: 220,
            maxWidth: 320,
            background: popup.color.bg,
            border: `2px solid ${popup.color.border}`,
            color: popup.color.text,
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            pointerEvents: 'auto',
          }}
          onClick={(e) => closeOrClickPopup(e, popup.id)}
        >
          <div className="flex w-full justify-between items-center mb-2">
            <span className="font-bold text-xs" style={{ color: popup.color.border }}>Ad</span>
            <button onClick={(e) => closeOrClickPopup(e, popup.id)} className="ml-2" style={{ color: popup.color.border }}><FaTimes /></button>
          </div>
          <div className="text-center text-base font-semibold mb-2">{popup.message}</div>
          {popup.showHint && (
            <div className="text-xs bg-yellow-200 rounded px-2 py-1 mt-2" style={{ color: '#b8005c' }}>
              Hint: Type <span className="font-mono font-bold">{SECRET_PHRASE}</span> to disable popups!
            </div>
          )}
          <button className="mt-2 px-3 py-1 rounded text-xs font-bold shadow" style={{ background: popup.color.border, color: popup.color.bg }}>Click Me!</button>
        </div>
      ))}
      {annoyingMode && waldo && !waldoFound && !gameOver && (
        <img
          src={WALDO_IMG}
          alt="Where's Waldo?"
          className="fixed z-[10000] cursor-pointer"
          style={{
            top: `${waldo.top}vh`,
            left: `${waldo.left}vw`,
            width: 40,
            height: 40,
            borderRadius: 8,
            border: '2px solid #333',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            background: '#fff',
          }}
          onClick={handleWaldoClick}
        />
      )}
      {waldoFound && (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white text-black rounded-xl p-8 text-2xl font-bold shadow-xl">You found Waldo! Popups will disappear{window.innerWidth < 768 ? '!' : ' soon!'}</div>
        </div>
      )}
      {gameOver && (
        <>
          <audio ref={marioAudioRef} src={MARIO_DEATH_SOUND} autoPlay />
          <div className="fixed inset-0 z-[10001] flex items-center justify-center bg-black bg-opacity-80">
            <div className="bg-red-700 text-white rounded-xl p-8 text-3xl font-bold shadow-xl flex flex-col items-center">
              Game Over<br />
              <span className="text-lg mt-2">The popups have taken over!</span>
            </div>
          </div>
        </>
      )}
      {videoDialog && (
        <div className="fixed inset-0 z-[10002] flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-white rounded-xl shadow-xl flex flex-col items-center p-4 max-w-lg w-full">
            <iframe
              width="420"
              height="236"
              src={videoDialog.url}
              title="Popup Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="rounded mb-4"
            />
            <div className="text-lg font-bold mb-2">{videoDialog.message}</div>
            <button
              className="mt-2 px-4 py-2 rounded bg-red-500 text-white font-bold shadow hover:bg-red-700"
              onClick={() => setVideoDialog(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AnnoyingPopups; 