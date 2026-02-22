"use client";
import { useEffect, useRef, useState } from "react";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  // Try to play as soon as the user interacts anywhere on the page
  useEffect(() => {
    const tryPlay = () => {
      const audio = audioRef.current;
      if (!audio || playing) return;
      audio.volume = 0.20;
      audio.loop = true;
      audio.play().then(() => {
        setPlaying(true);
      }).catch(() => {});
    };

    window.addEventListener("pointerdown", tryPlay);
    window.addEventListener("keydown", tryPlay);

    return () => {
      window.removeEventListener("pointerdown", tryPlay);
      window.removeEventListener("keydown", tryPlay);
    };
  }, [playing]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!playing) {
      audio.volume = 0.20;
      audio.loop = true;
      audio.play().then(() => setPlaying(true)).catch(() => {});
      setMuted(false);
    } else {
      const next = !muted;
      audio.muted = next;
      setMuted(next);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/bg-music.mp3" preload="auto" />
      <button
        onClick={toggle}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#04071d] border border-white/10 text-white hover:bg-white/10 transition-all duration-200"
        aria-label={muted ? "Unmute music" : "Mute music"}
        title={!playing ? "Click to play music" : muted ? "Unmute" : "Mute"}
      >
        {muted ? <HiSpeakerXMark size={20} /> : <HiSpeakerWave size={20} />}
      </button>
    </>
  );
}
