import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  // In a real app, this would be a path to an mp3
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch(e => console.log("Audio play failed (expected without user interaction first or valid src):", e));
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-4">
      <audio 
        ref={audioRef} 
        loop 
        src="" 
      />
      
      <div className={`
        flex items-center gap-3 bg-neutral-900/80 backdrop-blur-md border border-white/10 p-3 rounded-full 
        transition-all duration-500 
        ${isPlaying ? 'shadow-[0_0_30px_rgba(251,191,36,0.4)] border-amber-500/50' : 'hover:bg-neutral-800/80'}
      `}>
         {isPlaying && (
           <div className="flex gap-1 h-4 items-end">
             <div className="w-1 bg-amber-400 animate-[bounce_1s_infinite] h-full" />
             <div className="w-1 bg-orange-400 animate-[bounce_1.2s_infinite] h-2/3" />
             <div className="w-1 bg-yellow-200 animate-[bounce_0.8s_infinite] h-3/4" />
           </div>
         )}

        <div className="text-xs uppercase font-bold tracking-wider text-neutral-300 hidden sm:block">
          {isPlaying ? 'Psychedelic Ambience' : 'Play Ambience'}
        </div>

        <button
          onClick={togglePlay}
          className="relative group text-white hover:text-amber-300 transition-colors"
          aria-label={isPlaying ? "Mute" : "Play Music"}
        >
          {isPlaying ? <Volume2 size={20} /> : <Music size={20} />}
          <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform opacity-0 group-hover:opacity-100 duration-300" />
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;