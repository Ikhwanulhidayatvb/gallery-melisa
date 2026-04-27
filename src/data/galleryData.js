// MEMANGGIL FOTO (IMPORT)
import kita1 from "../assets/images/kita1.jpeg"
import kita2 from "../assets/images/kita2.jpeg"
import kita3 from "../assets/images/kita3.jpeg"
import kita4 from "../assets/images/kita4.jpeg"
import kita5 from "../assets/images/kita5.jpeg"
import kita6 from "../assets/images/kita6.jpeg"
import kita7 from "../assets/images/kita7.jpeg"
import kita8 from "../assets/images/kita8.jpeg"

import melica1 from "../assets/images/melica1.jpeg"
import melica2 from "../assets/images/melica2.jpeg"
import melica3 from "../assets/images/melica3.jpeg"
import melica4 from "../assets/images/melica4.jpeg"
import melica5 from "../assets/images/melica5.jpeg"
import melica6 from "../assets/images/melica6.jpeg"
import melica7 from "../assets/images/melica7.jpeg"
import melica8 from "../assets/images/melica8.jpeg"

// DATA LAGU DAN FOTO
export const musicGallery = [
  {
    id: 1,
    title: "Sempurna - Andra Respati",
    description: "Sempurna kali tapi bukan rokok sempurna ni",
    music: "/music/sempurna.mp3",
    photos: [
      {
        id: 1,
        src: kita1,
        title: "kaku kali kita waktu itu",
        category: "Awal Cerita",
        description: "bedua kita makan waktu bukber. alamak kek orang jepang awak"
      },
      {
        id: 2,
        src: kita2,
        title: "Moment Bersama",
        category: "Bahagia",
        description: "Ini aku yang kamu foto saat kita makan, ganteng juga awak ya kan?"
      },
      {
        id: 3,
        src: kita3,
        title: "Awak di foto teyus",
        category: "Favoritku",
        description: "di foto awak kek artis bah"
      },
      {
        id: 4,
        src: kita4,
        title: "Abis bukber",
        category: "Kenangan",
        description: "cantik kali melisa ni ."
      }
    ]
  },
  {
    id: 2,
    title: "Bola Mata Sayu - Dnanda",
    description: "Lagu yang melica sukai",
    music: "/music/Bola-Mata-Sayu.mp3",
    photos: [
      {
        id: 1,
        src: melica1,
        title: "melisa mode batak",
        category: "Spesial",
        description: "batak mode on"
      },
      {
        id: 2,
        src: melica2,
        title: "melisa mode batak kali",
        category: "Bahagia",
        description: "uwak uwak makan batu, ai love you"
      },
      {
        id: 3,
        src: melica3,
        title: "Senyum Favorit",
        category: "Manis",
        description: "Omak Cantiknye"
      },
      {
        id: 4,
        src: melica4,
        title: "Manis kali cewe awak",
        category: "Kenangan",
        description: "Senyummu di foto ini selalu bikin awak ikut tersenyum."
      }
    ]
  },
  {
    id: 3,
    title: "I'd Like To Watch You Sleeping - Sal Priadi",
    description: "Lagu favorit awak ni",
    music: "/music/watch-you-sleeping.mp3",
    photos: [
      {
        id: 1,
        src: kita5, // FOTO BERUBAH DI SINI
        title: "Mx Date",
        category: "Nyaman",
        description: "Untung ga jemping kita"
      },
      {
        id: 2,
        src: kita6,
        title: "Foto favorit awak ni",
        category: "Moment Kita",
        description: "Tah kemana kita waktu itu"
      },
      {
        id: 3,
        src: kita7,
        title: "Ini kita mau kemana ya, awak lupa",
        category: "Bahagia",
        description: "kemana aja asal senang ya kan"
      },
      {
        id: 4,
        src: kita8,
        title: "Mau berangkat ke palembang",
        category: "Rindu",
        description: "Pertama kali hayate masuk bandara mau antar melisa pulang ke palembang, sedih awak"
      }
    ]
  },
  {
    id: 4,
    title: "Bahagia Lagi - Piche Kota",
    description: "Lagu ni pernah buat melica galau",
    music: "/music/Bahagia-Lagi.mp3",
    photos: [
      {
        id: 1,
        src: melica5, // FOTO BERUBAH DI SINI
        title: "Melica lagi kerja",
        category: "Cerita Baru",
        description: "Melica jago buat bandrek dan kawan kawan si bandrek"
      },
      {
        id: 2,
        src: melica6,
        title: "Melica cantik kali weee",
        category: "Manis",
        description: "Suka kali awak sama foto yang ini iya pokoknya suka awak"
      },
      {
        id: 3,
        src: melica7,
        title: "Melica senyum ",
        category: "Bahagia",
        description: "Lucu Weee"
      },
      {
        id: 4,
        src: melica8,
        title: "Mode hijab",
        category: "Selamanya",
        description: "Ni la mode yang paling awak sukaaa"
      }
    ]
  }
]

// DATA KATEGORI (MENGGABUNGKAN SEMUA FOTO)
export const categories = [
  {
    title: "🎉 Ulang Tahun Kamu",
    desc: "Hari spesial yang penuh senyum.",
    photos: [melica1, melica2, melica3, melica4, melica5, melica6, melica7, melica8]
  },
  {
    title: "💑 Kita Berdua",
    desc: "Semua cerita yang sudah kita lewati bersama.",
    photos: [kita1, kita2, kita3, kita4, kita5, kita6, kita7, kita8]
  }
]
