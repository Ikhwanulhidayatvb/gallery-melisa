import React, { useMemo } from 'react'
import { delay, motion } from 'framer-motion'


export default function Background() {
    const emojis = ["❤️", "💖", "💕", "💘", "💝", "💗"];

    const items = useMemo(() => {
        return [...Array(20)].map(() => ({
            x: Math.random() * 100,
            delay: Math.random() * 5,
            size: Math.random() * 20 + 10,
            emoji: emojis[Math.floor(Math.random() * emojis.length)],
            duration: 6 + Math.random() * 7
        }))
    }, [])


    return (
        <div className=" fixed inset-0 -z-10 overflow-hidden">

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 opacity-90"></div>

            {items.map((item, i) => (
                <motion.div
                    key={i}
                    className="absolute opacity-70"
                    style={{
                        left: `${item.x}%`,
                        top: "-10%",
                        fontSize: `${item.size}px`,
                    }}
                    animate={{
                        y: ["0%", "120vh"],
                        x: [0, 20, -20, 0],
                        opacity: [0, 1, 0],
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
    );

}
