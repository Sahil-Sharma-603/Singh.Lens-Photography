'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const desktopImages = [
    "/hero_desktop_pics/pic1.jpg",
    "/hero_desktop_pics/pic2.jpg",
];

const mobileImages = [
    "/hero_mobile_pics/mobilepic1.jpg",
    "/hero_mobile_pics/mobilepic2.png",
]

export const Hero = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);

    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % desktopImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [])

    return (


        <section id="hero" className=" relative h-screen flex items-center justify-center bg-center  bg-no-repeat bg-cover overflow-hidden"
        >

            <AnimatePresence initial={false}>
                <motion.div className = "absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url(${isMobile ? mobileImages[currentImage] : desktopImages[currentImage]})` }}
                    key={currentImage}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                    exit={{ x: "-100%" }}
                />
            </AnimatePresence>
            {/* Dark Overlay - decide based on client. */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 max-w-3xl px-6 text-center text-white">
                <p className="mb-4 text-sm md:text-base tracking-[0.35em] uppercase font-light">
                    Capturing Timeless Moments
                </p>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    SinghLens Photography
                </h1>

                <p className="mt-5 text-lg md:text-2xl font-light tracking-wide">
                    Wedding • Portrait • Lifestyle Photography
                </p>

                <div className="mt-8 flex justify-center">
                    <a
                        href="#portfolio"
                        className="rounded-full border border-white px-8 py-3 text-sm md:text-base 
                        font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition"
                    >
                        View Portfolio
                    </a>
                </div>
            </div>


        </section>

    )
}
