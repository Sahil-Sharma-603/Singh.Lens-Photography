import Link from "next/link";
import { Camera, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="border-t border-zinc-800 bg-black px-6 py-16">
            <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">

                {/* Brand */}
                <div>
                    <p className="mb-4 text-sm uppercase tracking-[0.35em] text-zinc-500">
                        Singh.Lens Photography
                    </p>

                    <h2 className="text-3xl font-bold text-zinc-100">
                        Capturing Timeless Moments
                    </h2>

                    <p className="mt-5 text-zinc-400 leading-relaxed">
                        Winnipeg based photographer focused on weddings,
                        portraits, maternity, family, and lifestyle photography.
                        Creating emotional and timeless stories through every frame.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="mb-5 text-xl font-semibold text-zinc-100">
                        Quick Links
                    </h3>

                    <ul className="space-y-4 text-zinc-400">
                        <li>
                            <a href="#hero" className="transition hover:text-amber-400">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="#portfolio" className="transition hover:text-amber-400">
                                Portfolio
                            </a>
                        </li>

                        <li>
                            <a href="#about" className="transition hover:text-amber-400">
                                About
                            </a>
                        </li>

                        <li>
                            <a href="#contact" className="transition hover:text-amber-400">
                                Contact
                            </a>
                        </li>

                        <li>
                            <Link
                                href="/Full_Portfolio"
                                className="transition hover:text-amber-400"
                            >
                                Full Portfolio
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact + Social */}
                <div>
                    <h3 className="mb-5 text-xl font-semibold text-zinc-100">
                        Contact
                    </h3>

                    <div className="space-y-4 text-zinc-400">

                        <div className="flex items-center gap-3">
                            <MapPin size={18} className="text-amber-400" />
                            <p>Winnipeg, Manitoba</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Mail size={18} className="text-amber-400" />
                            <p>gurjeetkalsi11273@gmail.com</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <Phone size={18} className="text-amber-400" />
                            <p>+1 (647) 939-2175 </p>
                        </div>

                    </div>

                    {/* Socials */}
                    <div className="mt-8 flex items-center gap-4">

                        <a
                            href="https://www.instagram.com/singh.lens_photography?igsh=anR3MjhmNWRoc3lw"
                            target="_blank"
                            className="rounded-full border border-zinc-700 p-3 text-zinc-300 transition hover:border-amber-400 hover:bg-amber-400 hover:text-black"

                        >
                            <Camera size={20} />
                        </a>

                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="mx-auto mt-16 max-w-6xl border-t border-zinc-800 pt-6 text-center text-sm text-zinc-500">
                © {new Date().getFullYear()} Singh.Lens Photography. All rights reserved.
                <p className="mt-2 text-xs text-zinc-600">
                    Website designed & developed by{" "}
                    <a
                        href="https://www.linkedin.com/in/cs-sahil-sharma/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-amber-400"
                    >
                        Sahil
                    </a>
                </p>
            </div>


        </footer>
    );
};