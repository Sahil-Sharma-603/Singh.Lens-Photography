
'use client';

import { useState } from 'react';
import { motion } from "framer-motion";

const portfolioImages = [
    {
        id: 1,
        src: "/All_Images/lifestyle.png",
        title: "Lifestyle",
        category: "Lifestyle"
    },
    {
        id: 2,
        src: "/All_Images/pre-wedding1.jpg",
        title: "Pre-Wedding",
        category: "Pre-Wedding"
    },
    {
        id: 3,
        src: "/All_Images/maternity.png",
        title: "Maternity",
        category: "Maternity & New Born"
    },
    {
        id: 4,
        src: "/All_Images/Birthday1.png",
        title: "Birthday",
        category: "Family"

    },
    {
        id: 5,
        src: "/All_Images/family1.png",
        title: "Family",
        category: "Family"


    },
    {
        id: 6,
        src: "/All_Images/portrait.png",
        title: "Portrait",
        category: "Lifestyle"

    },
    {
        id: 7,
        src: "/All_Images/newborn1.jpg",
        title: "Newborn",
        category: "Maternity & New Born"
    },
    {
        id: 8,
        src: "/All_Images/newborn2.jpg",
        title: "Newborn",
        category: "Maternity & New Born"
    },
    {
        id: 9,
        src: "/All_Images/newborn3.jpg",
        title: "Newborn",
        category: "Maternity & New Born"
    },
    {
        id: 10,
        src: "/All_Images/newborn4.jpg",
        title: "Newborn",
        category: "Maternity & New Born"
    },
    {
        id: 11,
        src: "/All_Images/newborn5.jpg",
        title: "Newborn",
        category: "Maternity & New Born"
    },
    {
        id: 12,
        src: "/All_Images/newborn6.jpg",
        title: "Newborn",
        category: "Maternity & New Born"
    },
    {
        id: 13,
        src: "/All_Images/newborn7.jpg",
        title: "Newborn",
        category: "Maternity & New Born"
    },
    {
        id: 14,
        src: "/All_Images/newborn8.jpg",
        title: "Newborn",
        category: "Maternity & New Born"
    },
    {
        id: 15,
        src: "/All_Images/newborn9.jpg",
        title: "Newborn",
        category: "Maternity & New Born"
    },
    {
        id: 16,
        src: "/All_Images/pre-wedding2.jpg",
        title: "Pre-Wedding",
        category: "Pre-Wedding"
    },
    {
        id: 17,
        src: "/All_Images/pre-wedding3.jpg",
        title: "Pre-Wedding",
        category: "Pre-Wedding"
    },
    {
        id: 18,
        src: "/All_Images/pre-wedding4.jpg",
        title: "Pre-Wedding",
        category: "Pre-Wedding"
    },
    {
        id: 19,
        src: "/All_Images/pre-wedding5.jpg",
        title: "Pre-Wedding",
        category: "Pre-Wedding"
    },
    {
        id: 20,
        src: "/All_Images/maternity5.jpg",
        title: "Maternity",
        category: "Maternity & New Born"
    },
    {
        id: 21,
        src: "/All_Images/pre-wedding7.jpg",
        title: "Pre-Wedding",
        category: "Pre-Wedding"
    },
    {
        id: 22,
        src: "/All_Images/maternity2.jpg",
        title: "Newborn",
        category: "Maternity & New Born"
    },
    {
        id: 23,
        src: "/All_Images/maternity3.jpg",
        title: "Newborn",
        category: "Maternity & New Born"
    },
    {
        id: 24,
        src: "/All_Images/maternity4.jpg",
        title: "Newborn",
        category: "Maternity & New Born"
    },
    {
        id: 25,
        src: "/All_Images/family3.jpg",
        title: "Family",
        category: "Family"
    },
    {
        id: 26,
        src: "/All_Images/family4.jpg",
        title: "Family",
        category: "Family"
    },
    {
        id: 27,
        src: "/All_Images/lifestyle2.jpg",
        title: "Lifestyle",
        category: "Lifestyle"
    },
    {
        id: 28,
        src: "/All_Images/lifestyle3.jpg",
        title: "Lifestyle",
        category: "Lifestyle"
    },
    {
        id: 29,
        src: "/All_Images/lifestyle4.jpg",
        title: "Lifestyle",
        category: "Lifestyle"
    },
    {
        id: 30,
        src: "/All_Images/newborn10.jpg",
        title: "Newborn",
        category: "Maternity & New Born"
    },
    {
        id: 31,
        src: "/All_Images/newborn11.jpg",
        title: "Newborn",
        category: "Maternity & New Born"
    },
    {
        id: 32,
        src: "/All_Images/maternity6.jpg",
        title: "Newborn",
        category: "Maternity & New Born"
    },
    {
        id: 33,
        src: "/All_Images/maternity7.jpg",
        title: "Newborn",
        category: "Maternity & New Born"
    },
    {
        id: 34,
        src: "/All_Images/family5.jpg",
        title: "Family",
        category: "Family"
    },
    

]


const categories = [
    "All",
    "Lifestyle",
    "Pre-Wedding",
    "Maternity & New Born",
    "Family"
]


export default function Full_Portfolio() {

    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedIndex, setSelectedIndex] = useState(null);

    const filterImages =
        activeCategory === "All"
            ? portfolioImages
            : portfolioImages.filter((image) => image.category === activeCategory);


    return (
        <section
            id="full_portfolio"
            className="relative px-6 py-12 md:py-24"
        >
            <div className="mx-auto max-w-5xl">

                <div className="text-center">
                    <p className="mb-4 text-sm md:text-base tracking-[0.35em] uppercase font-light text-zinc-400">
                        Portfolios
                    </p>

                    <h2 className="text-5xl md:text-7xl font-bold leading-tight text-zinc-100">
                        Photography Portfolio
                    </h2>
                </div>

                <p className="mt-10 text-left text-lg md:text-xl font-light leading-relaxed tracking-wide text-zinc-400">
                    Explore a collection of heartfelt stories and beautifully captured moments —
                    from weddings and maternity sessions to birthdays, portraits, and family memories.
                    Every frame reflects genuine emotion, timeless connections, and the unique stories
                    behind each celebration. Browse through our featured galleries and discover the
                    moments we’ve had the honor of preserving through our lens.
                </p>

            </div>


            <div className="flex px-6 py-6 justify-center gap-4 flex-wrap ">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-widest transition ${activeCategory === category
                            ? "border-amber-400 bg-amber-400 text-black"
                            : "border-zinc-600 text-zinc-200 hover:bg-amber-400 hover:text-black hover:border-amber-400"
                            } `}

                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="px-6 mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filterImages.map((image, index) => (
                    <motion.div
                        key={image.id}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: index * 0.05,
                        }}
                        className="group relative overflow-hidden rounded-lg"
                    >
                        <img
                            src={image.src}
                            alt={image.title}
                            onClick={() => setSelectedIndex(index)}
                            className="h-80 w-full cursor-pointer object-cover transition-transform duration-500 hover:scale-110"
                        />
                    </motion.div>
                ))}
            </div>



            {selectedIndex !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
                    <button
                        onClick={() => setSelectedIndex(null)}
                        className="absolute right-6 top-6 text-4xl text-white cursor-pointer"
                    >   ×
                    </button>


                    {/* Image Wrapper */}
                    <div className="relative">

                        {/* Left Button */}
                        <button
                            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-2xl text-white backdrop-blur transition hover:bg-amber-400 hover:text-black"
                            onClick={() => {
                                if (selectedIndex === 0) {
                                    setSelectedIndex(filterImages.length - 1);
                                } else {
                                    setSelectedIndex(selectedIndex - 1);
                                }
                            }}
                        >
                            &lt;
                        </button>

                        {/* Enlarged Image */}
                        <img
                            src={filterImages[selectedIndex].src}
                            alt={filterImages[selectedIndex].title}
                            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
                        />

                        {/* Right Button */}
                        <button
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-2xl text-white backdrop-blur transition hover:bg-amber-400 hover:text-black"
                            onClick={() => {
                                if (selectedIndex === filterImages.length - 1) {
                                    setSelectedIndex(0);
                                } else {
                                    setSelectedIndex(selectedIndex + 1);
                                }
                            }}
                        >
                            &gt;
                        </button>

                    </div>

                </div>
            )}



        </section>
    )
}