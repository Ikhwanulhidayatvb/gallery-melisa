import React from 'react'
import { motion } from 'framer-motion'

export default function Gallery({ photos = [] }) {
    return (
        <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-3 gap-4">

            {photos.map((photo, index) => (
                <motion.div
                    key={photo.id || index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        delay: Math.min(index * 0.08, 0.4),
                        ease: "easeOut"
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="rounded-3xl overflow-hidden 
                    bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl
                    will-change-transform"
                >
                    <img
                        src={photo.src}
                        alt={photo.alt || "gallery image"}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-40 object-cover"
                    />

                    {photo.alt && (
                        <div className="p-3 text-white text-sm text-center">
                            {photo.alt}
                        </div>
                    )}
                </motion.div>
            ))}

        </div>
    )
}