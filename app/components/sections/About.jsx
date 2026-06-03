export const About = () => {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        
        {/* Photographer Image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/All_Images/about_myself.jpg"
            alt="Photographer portrait"
            className="h-[520px] w-full object-cover"
          />
        </div>

        {/* About Content */}
        <div className="text-zinc-100">
          <p className="mb-4 text-sm md:text-base tracking-[0.35em] uppercase font-light text-zinc-400">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Behind the Lens
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            I’m a photographer based in Winnipeg with a passion for capturing
            real emotions, meaningful connections, and timeless memories.
            Photography has always been more than just taking pictures for me —
            it’s about telling stories through moments that feel honest,
            personal, and full of life.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-zinc-400">
            Whether it’s a wedding, portrait session, maternity shoot, new born baby shoot, birthday,
            or family celebration, my goal is to make every person feel
            comfortable in front of the camera while preserving the moments that
            matter most.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-zinc-400">
            Through SinghLens Photography, I aim to create images that feel
            natural, emotional, and unforgettable — photographs you can look
            back on and truly feel again.
          </p>
        </div>
      </div>
    </section>
  );
};