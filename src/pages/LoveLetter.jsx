import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Background from "../components/Background"
import PageTransition from "../components/PageTransition"
import { useNavigate } from "react-router-dom"

export default function LoveLetter() {
  const navigate = useNavigate()

  // 1. STATE: Ingatan untuk mengecek apakah surat sudah dibuka atau belum
  const [isOpen, setIsOpen] = useState(false)

  // 2. VARIANT ANIMASI: Rahasia membuat teks muncul satu per satu
  const letterVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1.5, // Memberi jeda 1.5 detik antar paragraf
      },
    },
  }

  const paragraphVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  }

  return (
    <PageTransition>
      <div className="relative min-h-screen px-6 py-10 flex flex-col items-center justify-center text-white overflow-hidden">
        <Background />

        {/* AnimatePresence mengizinkan animasi saat elemen menghilang dari layar */}
        <AnimatePresence mode="wait">
          {!isOpen ? (

            // ================= TAMPILAN 1: AMPLOP TERTUTUP =================
            <motion.div
              key="envelope"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0, filter: "blur(10px)" }} // Animasi zoom saat diklik
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center cursor-pointer z-10"
              onClick={() => setIsOpen(true)} // Mengubah state menjadi TRUE saat amplop ditekan
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="relative"
              >
                {/* Ikon Amplop Modern SVG */}
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-pink-300 drop-shadow-[0_0_20px_rgba(244,114,182,0.8)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {/* SVG Hati Kecil di tengah amplop */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-rose-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-1">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </motion.div>
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-8 text-pink-200/80 tracking-[0.2em] text-xs uppercase font-medium"
              >
                Ketuk untuk membuka
              </motion.p>
            </motion.div>

          ) : (

            // ================= TAMPILAN 2: ISI SURAT TERBUKA =================
            <motion.div
              key="letter"
              variants={letterVariant}
              initial="hidden"
              animate="visible"
              className="w-full max-w-xl mx-auto z-10 flex flex-col"
            >
              <motion.h1
                variants={paragraphVariant}
                className="text-2xl md:text-3xl font-serif italic text-pink-200 text-center mb-10"
              >
                Untuk Kamu, Melisa Andriani
              </motion.h1>

              <div className="space-y-6 text-white/90 leading-relaxed font-light text-sm md:text-base text-justify md:text-center px-4">
                <motion.p variants={paragraphVariant}>
                  Hari ini, 13 Mei... hari dimana seseorang yang sangat berarti di hidup aku lahir ke dunia.
                </motion.p>

                <motion.p variants={paragraphVariant}>
                  Aku cuma mau bilang, terima kasih ya... sudah hadir di hidup aku, sudah bertahan sejauh ini,
                  dan sudah jadi alasan kenapa hari-hari aku terasa lebih berwarna.
                </motion.p>

                <motion.p variants={paragraphVariant}>
                  Mungkin aku bukan orang yang sempurna, tapi aku selalu berusaha jadi yang terbaik buat kamu.
                  Aku akan selalu ada, nemenin kamu di saat senang maupun sulit.
                </motion.p>

                <motion.p variants={paragraphVariant}>
                  Semoga di umur kamu sekarang, semua hal baik selalu datang ke kamu.
                  Semua doa kamu terkabul, dan semua langkah kamu dimudahkan.
                </motion.p>

                <motion.p variants={paragraphVariant}>
                  Dan semoga... kita bisa terus bareng, bukan cuma hari ini, tapi untuk waktu yang panjang.
                </motion.p>
              </div>

              {/* Tombol ke Gallery */}
              <motion.div
                variants={paragraphVariant}
                className="flex justify-center mt-16"
              >
                <button
                  onClick={() => navigate('/gallery')}
                  className="px-6 py-3 rounded-full bg-pink-500/20 hover:bg-pink-500/30 text-pink-100 backdrop-blur-xl border border-pink-500/30 transition-all shadow-[0_0_15px_rgba(236,72,153,0.3)] flex items-center gap-2"
                >
                  Lihat Kenangan Kita
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                </button>
              </motion.div>
            </motion.div>

          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  )
}
