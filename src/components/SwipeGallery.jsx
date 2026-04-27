import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"

export default function SwipeGallery({ photos = [] }) {
    const [index, setIndex] = useState(0)
    const timerRef = useRef(null)

    const duration = 5000

    useEffect(() => {
        if (!photos.length) return

        clearTimeout(timerRef.current)

        timerRef.current = setTimeout(() => {
            nextSlide()
        }, duration)

        return () => clearTimeout(timerRef.current)
    }, [index, photos])

    // RESET SAAT DATA FOTO BERUBAH
    useEffect(() => {
        setIndex(0)
    }, [photos])

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % photos.length)
    }

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + photos.length) % photos.length)
    }

    if (!photos.length) return null

    const current = photos[index]

    return (
        <div className="w-full max-w-6xl mx-auto px-4">

            {/* HEADER */}
            <div className="text-center mb-8">
                <p className="text-pink-300 text-xs md:text-sm uppercase tracking-[4px]">
                    {current.category || "Moment Kita Bersama"}
                </p>

                <h2 className="text-2xl md:text-4xl font-bold mt-2">
                    setiap foto ada moment 
                </h2>

                <p className="text-white/60 text-sm md:text-base mt-2 max-w-xl mx-auto">
                    Awak dan melisa moment
                </p>
            </div>

            {/* CONTENT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* FOTO POLAROID */}
                <div className="relative w-full max-w-sm mx-auto bg-white p-3 pb-16 md:p-5 md:pb-24 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rotate-[-2deg] hover:rotate-1 transition-transform duration-500 rounded-sm">

                    {/* Kotak Gambar Dalam Polaroid */}
                    <div className="relative w-full aspect-[3/4] bg-gray-200 overflow-hidden shadow-inner">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={current.id}
                                src={current.src}
                                alt={current.title}
                                initial={{ opacity: 0, scale: 1.08 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.55 }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>
                    </div>

                    {/* Teks Tulisan Tangan di Bagian Bawah Polaroid */}
                    <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 flex items-center justify-center px-4">
                        <p className="font-serif italic text-black/80 text-lg md:text-2xl drop-shadow-sm text-center line-clamp-1">
                            {current.title}
                        </p>
                    </div>

                </div>

                {/* DESKRIPSI */}
                <div className="text-center md:text-left">

                    <p className="text-pink-300 text-xs tracking-[3px] uppercase">
                        Foto {index + 1} / {photos.length}
                    </p>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current.id + "-text"}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -18 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h3 className="text-2xl md:text-4xl font-bold mt-3">
                                {current.title || "Moment Kita"}
                            </h3>

                            <p className="text-white/70 leading-relaxed mt-4 text-sm md:text-lg">
                                {current.description ||
                                    "Kenangan sederhana yang selalu indah untuk diingat."}
                            </p>

                            {current.date && (
                                <p className="mt-4 text-white/40 text-sm">
                                    📅 {current.date}
                                </p>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* BUTTON */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">

                        <button
                            onClick={prevSlide}
                            className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
                        >
                            ← Sebelumnya
                        </button>

                        <button
                            onClick={nextSlide}
                            className="px-5 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 transition"
                        >
                            Berikutnya →
                        </button>

                    </div>

                    {/* DOT */}
                    <div className="flex justify-center md:justify-start gap-2 mt-8">
                        {photos.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`h-2 rounded-full transition-all duration-300 ${i === index
                                    ? "w-10 bg-pink-400"
                                    : "w-3 bg-white/30"
                                    }`}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </div>
    )
}