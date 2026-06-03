
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
                    <div key={image.id} className=' group relative overflow-hidden rounded-lg'>
                        <img
                            src={image.src}
                            alt={image.title}
                            onClick={() => setSelectedIndex(index)}
                            className='h-80 w-full object-cover cursor-pointer transition-transform duration-500 hover:scale-110'
                        />

                    </div>
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