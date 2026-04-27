import React, { useState, useEffect, useMemo, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SwipeGallery from "../components/SwipeGallery"
import PageTransition from "../components/PageTransition"
import VideoBackground from "../components/VideoBackground"
import { musicGallery } from "../data/galleryData"

export default function GalleryPage({ audioRef }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentMusic, setCurrentMusic] = useState(null)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showPlaylist, setShowPlaylist] = useState(false)

  const rafRef = useRef(null)


  useEffect(() => {
    if (!currentMusic && musicGallery.length > 0) {
      setCurrentMusic(musicGallery[0])
    }
  }, [currentMusic])


  useEffect(() => {
    const audio = audioRef?.current
    if (!audio) return

    const updateProgress = () => {
      setProgress(audio.currentTime || 0)
      rafRef.current = requestAnimationFrame(updateProgress)
    }

    const onPlay = () => {
      setIsPlaying(true)
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(updateProgress)
    }

    const onPause = () => {
      setIsPlaying(false)
      cancelAnimationFrame(rafRef.current)
    }

    const onLoaded = () => {
      setDuration(audio.duration || 0)
      setProgress(0)
    }

    audio.addEventListener("play", onPlay)
    audio.addEventListener("pause", onPause)
    audio.addEventListener("loadedmetadata", onLoaded)

    return () => {
      cancelAnimationFrame(rafRef.current)
      audio.removeEventListener("play", onPlay)
      audio.removeEventListener("pause", onPause)
      audio.removeEventListener("loadedmetadata", onLoaded)
    }
  }, [audioRef])

  const formatTime = (time) => {
    if (!time) return "0:00"

    const m = Math.floor(time / 60)
    const s = Math.floor(time % 60)

    return `${m}:${s < 10 ? "0" : ""}${s}`
  }


  const handleMusicSelect = async (item) => {
    const audio = audioRef?.current
    if (!audio) return

    audio.pause()
    audio.src = item.music
    audio.currentTime = 0
    audio.loop = true

    setCurrentMusic(item)
    setShowPlaylist(false)

    try {
      await audio.play()
    } catch (error) {
      console.log(error)
    }
  }


  const handlePlayPause = async () => {
    const audio = audioRef?.current
    if (!audio) return

    if (audio.paused) {
      await audio.play()
    } else {
      audio.pause()
    }
  }


  const photos = useMemo(() => {
    if (currentMusic?.photos?.length > 0) {
      return currentMusic.photos
    }

    return []
  }, [currentMusic])

  return (
    <PageTransition>
      <div className="relative min-h-screen overflow-hidden text-white">
        <VideoBackground />

        <motion.div
          animate={{
            opacity: isPlaying ? [0.2, 0.5, 0.2] : 0,
            scale: isPlaying ? [1, 1.1, 1] : 1
          }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.25)_0%,_transparent_70%)]"
        />

        {currentMusic && (
          <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4">
            <motion.div
              layout
              className="bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(255,192,203,0.15)] rounded-[2rem] p-3"
            >
              <div className="flex items-center gap-4">
                {/* Vinyl Spin Cover */}
                <motion.div
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  className="w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-white/20 shadow-[0_0_15px_rgba(244,114,182,0.3)]"
                >
                  <img
                    src={photos[0]?.src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Info & Progress */}
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <h2 className="font-medium text-sm text-white truncate drop-shadow-sm">
                    {currentMusic.title}
                  </h2>
                  <p className="text-[10px] text-white/70 truncate mb-1.5">
                    {currentMusic.description}
                  </p>

                  <div
                    className="h-1.5 bg-white/10 rounded-full cursor-pointer overflow-hidden relative group"
                    onClick={(e) => {
                      const audio = audioRef?.current;
                      if (!audio || !duration) return;
                      const rect = e.currentTarget.getBoundingClientRect();
                      const percent = (e.clientX - rect.left) / rect.width;
                      audio.currentTime = percent * duration;
                    }}
                  >
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-rose-400 to-pink-400 group-hover:from-rose-300 group-hover:to-pink-300 transition-colors"
                      style={{
                        width: duration ? `${(progress / duration) * 100}%` : "0%",
                      }}
                    />
                  </div>

                  <div className="flex justify-between text-[9px] mt-1 text-white/50 font-medium">
                    <span>{formatTime(progress)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-2 shrink-0 pr-1">
                  <button
                    onClick={() => setShowPlaylist(!showPlaylist)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/20 text-white transition-colors"
                  >
                    {/* Music Icon SVG */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
                  </button>

                  <button
                    onClick={handlePlayPause}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-rose-500 to-pink-500 text-white shadow-[0_0_15px_rgba(244,114,182,0.4)] hover:scale-105 hover:shadow-[0_0_25px_rgba(244,114,182,0.6)] transition-all"
                  >
                    {isPlaying ? (
                      /* Pause Icon */
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zm8 0h4v16h-4z" /></svg>
                    ) : (
                      /* Play Icon */
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><path d="M5 3l14 9-14 9z" /></svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Playlist Dropdown */}
              <AnimatePresence>
                {showPlaylist && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="bg-black/20 border border-white/5 rounded-2xl max-h-48 overflow-y-auto flex flex-col gap-1 p-2"
                      style={{ scrollbarWidth: "none" }}
                    >
                      {musicGallery.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleMusicSelect(item)}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${currentMusic.id === item.id
                            ? "bg-rose-500/20 text-rose-200 border border-rose-500/30"
                            : "hover:bg-white/10 text-white/80 border border-transparent"
                            }`}
                        >
                          <div className="w-7 h-7 shrink-0 rounded-full bg-white/10 flex items-center justify-center shadow-inner">
                            {currentMusic.id === item.id ? (
                              <div className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-pulse shadow-[0_0_8px_rgba(251,113,133,0.8)]" />
                            ) : (
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
                            )}
                          </div>
                          <div className="text-left flex-1 min-w-0">
                            <p className="text-xs font-medium truncate">{item.title}</p>
                            <p className="text-[10px] opacity-60 truncate">{item.description}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        <div className="pt-32 pb-10 px-4">
          <SwipeGallery photos={photos} />
        </div>
      </div>
    </PageTransition>
  )
}