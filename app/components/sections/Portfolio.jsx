
import Link from "next/link";

const portfolioImages = [

  {
    id: 1,
    src: "/All_Images/lifestyle.png",
    title: "Lifestyle"
  },

  {
    id: 2,
    src: "/All_Images/pre-wedding1.jpg",
    title: "Pre-Wedding"
  },
  {
    id: 3,
    src: "/All_Images/maternity.png",
    title: "Maternity"
  },
  {
    id: 4,
    src: "/All_Images/birthday1.png",
    title: "Birthday"

  },
  {
    id: 5,
    src: "/All_Images/family1.png",
    title: "Family"

  },
  {
    id: 6,
    src: "/All_Images/portrait.png",
    title: "Portrait"

  },

]

export const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="relative px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm md:text-base tracking-[0.35em] uppercase font-light text-zinc-400">
          Featured Work
        </p>

        <h2 className="text-5xl md:text-7xl font-bold leading-tight text-zinc-100">
          Our Portfolio
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg md:text-2xl font-light leading-relaxed tracking-wide text-zinc-400">
          Capturing emotions, connections, and timeless memories through every frame.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioImages.map((image) => (
          <div key={image.id} className="relative overflow-hidden rounded-lg">
            <img
              src={image.src}
              alt={image.title}
              className="h-80 w-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">{image.title}</span>
            </div>
          </div>
        ))}

      </div>

      <div className="flex justify-center items-center">
        <Link  href = "/Full_Portfolio" className="mt-12 px-6 py-3 bg-amber-400 text-white font-semibold rounded-full hover:bg-amber-500 transition justify-center items-center flex ">
          View Full Portfolio
        </Link>
      </div>


    </section>
  );
};