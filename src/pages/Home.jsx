import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Background from '../components/Background'
import PageTransition from '../components/PageTransition'
import bitmel from '../assets/images/bitmel.png'
import bitmelis from '../assets/images/bitmelis.png'


export default function Home({ audioRef }) {
    const navigate = useNavigate()

    const handleClick = () => {
        const audio = audioRef?.current
        if (audio) audio.play()

        setTimeout(() => {
            navigate('/love') // ✅ ke love letter dulu
        }, 250)
    }

    const [showFirstPhoto, setShowFirstPhoto] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirstPhoto((prev) => !prev) // Menukar nilai true/false
        }, 3000) // 3000ms = 3 detik

        return () => clearInterval(interval) // Membersihkan timer
    }, [])


    return (
        <PageTransition>
            <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">

                <Background />

                {/* FOTO BERGANTIAN */}
                <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                        y: [0, -10, 0] // efek naik turun pembungkusnya
                    }}
                    transition={{
                        duration: 0.8,
                        y: { repeat: Infinity, duration: 3, ease: "easeInOut" }
                    }}
                    className="relative w-44 h-44"
                >
                    {/* Foto Pertama */}
                    <motion.img
                        src={bitmel}
                        animate={{ opacity: showFirstPhoto ? 1 : 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 w-full h-full rounded-full object-cover shadow-2xl border-4 border-white/30"
                    />

                    {/* Foto Kedua */}
                    <motion.img
                        src={bitmelis}
                        animate={{ opacity: showFirstPhoto ? 0 : 1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 w-full h-full rounded-full object-cover shadow-2xl border-4 border-white/30"
                    />
                </motion.div>


                {/* JUDUL */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-bold text-white mt-6"
                >
                    Selamat Ulang Tahun Sayang
                </motion.h1>

                <p className="text-white/80 mt-2 flex items-center justify-center gap-2">
                    13 Mei
                    <motion.span
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                        className="inline-block"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </motion.span>
                </p>


                {/* UCAPAN */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-white/80 mt-4 max-w-md leading-relaxed"
                >
                    Semoga semua hal baik selalu datang ke kamu,
                    dan semoga aku bisa terus ada di samping kamu{' '}
                    <motion.span
                        animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="inline-block"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-300 drop-shadow-[0_0_5px_rgba(253,224,71,0.8)]">
                            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                        </svg>

                    </motion.span>
                </motion.p>


                {/* BUTTON */}
                <motion.button
                    whileTap={{ scale: 0.92 }}
                    onClick={handleClick}
                    className="mt-8 px-6 py-3 rounded-full 
                    bg-gradient-to-r from-pink-400 to-purple-500
                    text-white font-medium shadow-xl
                    hover:scale-105 hover:shadow-pink-500/40
                    transition-all duration-300"
                >
                    Buka Surat Untuk Kamu 💌
                </motion.button>

            </div>
        </PageTransition>
    )
}