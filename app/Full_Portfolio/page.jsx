
'use client';

import {useState} from 'react';


const categories = [
    "All",
    "Lifestyle",
    "Pre-Wedding",
    "Maternity",
    "Family"
]


export default function Full_Portfolio() {

    const [activeCategory, setActiveCategory] = useState("All");

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
                        className= {`rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-widest transition ${
                            activeCategory === category
                                ?"border-amber-400 bg-amber-400 text-black"
                                :"border-zinc-600 text-zinc-200 hover:bg-amber-400 hover:text-black hover:border-amber-400"
                        } `}
            
                    >
                        {category}
                    </button>
                ))}
            </div>

        </section>
    )
}