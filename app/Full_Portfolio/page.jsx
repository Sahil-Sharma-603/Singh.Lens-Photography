
'use client';

import { useState } from 'react';

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
        category: "Maternity"
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

]


const categories = [
    "All",
    "Lifestyle",
    "Pre-Wedding",
    "Maternity",
    "Family"
]


export default function Full_Portfolio() {

    const [activeCategory, setActiveCategory] = useState("All");

    const filterImages = [];

    if (activeCategory === "All") {
        filterImages.push(...portfolioImages);
    }else {
        filterImages.push(...portfolioImages.filter(image => image.category === activeCategory));
    }

    return (
        <section
            id="full_portfolio"
            className="relative px-6 py-12 md:py-22"
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


            <div className="flex px-6 py-6 justify-center gap-x-6">
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
                {filterImages.map((image) => (
                    <div key = {image.id} className='relative overflow-hidden rounded-lg'>
                        <img
                            src = {image.src}
                            alt = {image.title}
                            className='h-80 w-full object-cover transition-transform duration-300 hover:scale-105'
                        />
                    
                    </div>
                ))}
            </div>

        </section>
    )
}