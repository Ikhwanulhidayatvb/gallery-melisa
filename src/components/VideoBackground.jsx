import { motion } from "framer-motion"
import { useMemo } from "react"

export default function VideoBackground({ isSwiping }) {

    const emojis = ["❤️", "💖", "💕", "💘", "💝", "💗"]

    const items = useMemo(() => {
        return Array.from({ length: 20 }).map(() => ({
            x: Math.random() * 100,
            delay: Math.random() * 5,
            size: Math.random() * 18 + 14,
            emoji: emojis[Math.floor(Math.random() * emojis.length)],
            duration: 6 + Math.random() * 6
        }))
    }, [])

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">

            {/* 💖 GRADIENT HIDUP */}
            <motion.div
                className="absolute inset-0 blur-3xl"
                animate={{
                    scale: isSwiping ? 1.15 : 1,
                    filter: isSwiping ? "blur(50px)" : "blur(30px)",
                    background: [
                        "linear-gradient(135deg, #ff9a9e, #fad0c4)",
                        "linear-gradient(135deg, #a18cd1, #fbc2eb)",
                        "linear-gradient(135deg, #ff758c, #ff7eb3)",
                        "linear-gradient(135deg, #ff9a9e, #fad0c4)"
                    ]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* 🎥 VIDEO FULLSCREEN (FIX UTAMA DI SINI) */}
            <motion.video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    scale: isSwiping ? 1.05 : 1,
                    filter: isSwiping
                        ? "blur(10px) brightness(0.7)"
                        : "blur(0px) brightness(1)"
                }}
                transition={{ duration: 0.6 }}
                className="absolute w-full h-full object-cover" // 🔥 FIX penting
            >
                <source src="/video/videokita.mp4" type="video/mp4" />
            </motion.video>

            {/* 🌫️ DARK OVERLAY */}
            <motion.div
                className="absolute inset-0 bg-black"
                animate={{ opacity: isSwiping ? 0.5 : 0.25 }}
                transition={{ duration: 0.4 }}
            />

            {/* ✨ GLOW PULSE */}
            <motion.div
                className="absolute inset-0 bg-pink-400/10"
                animate={{ opacity: [0.1, 0.25, 0.1] }}
                transition={{ duration: 6, repeat: Infinity }}
            />

            {/* 💕 FLOATING LOVE (UPGRADE) */}
            {items.map((item, i) => (
                <motion.div
                    key={i}
                    className="absolute pointer-events-none"
                    style={{
                        left: `${item.x}%`,
                        top: "-10%",
                        fontSize: `${item.size}px`,
                    }}
                    animate={{
                        y: ["0%", "120vh"],
                        x: [0, 20, -20, 0],
                        opacity: [0, 1, 0],
                        rotate: [0, 20, -20, 0], // 🔥 tambahan
                        scale: [0.8, 1.2, 1]     // 🔥 tambahan
                    }}
                    transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        delay: item.delay,
                        ease: "linear",
                    }}
                >
                    {item.emoji}
                </motion.div>
            ))}

        </div>
    )
}