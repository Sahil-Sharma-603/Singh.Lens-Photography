'use client';

import Form from 'next/form';

export const Contact = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      eventType: e.target.eventType.value,
      message: e.target.message.value,
    }
   
    // sending data to backend API route
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if(response.ok){
      console.log('Message sent successfully!');
      alert('Thank you for reaching out! Your message has been sent successfully. I will get back to you as soon as possible.');
      e.target.reset(); // Clear the form after successful submission
    }else {
      console.log("Something went wrong");
    }
  

  }

  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">

        <div className="text-zinc-100">
          <p className="mb-4 text-sm md:text-base tracking-[0.35em] uppercase font-light text-zinc-400">
            Get in Touch
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Let’s Create Something Beautiful Together
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Whether you're planning a wedding, celebrating a milestone,
            or simply capturing meaningful moments, I’d love to hear your story.
            Fill out the form and I’ll get back to you soon.
          </p>
        </div>

        <Form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-zinc-800 bg-white/5 p-6 shadow-2xl backdrop-blur-md md:p-8"
        >
          <div className="mb-5">
            <label htmlFor="name" className="mb-2 block text-sm font-medium tracking-wide text-zinc-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full rounded-lg border border-zinc-700 bg-black/30 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
              placeholder="Your name"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="mb-2 block text-sm font-medium tracking-wide text-zinc-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full rounded-lg border border-zinc-700 bg-black/30 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="eventType" className="mb-2 block text-sm font-medium tracking-wide text-zinc-300">
              Event Type
            </label>
            <select
              name="eventType"
              id="eventType"
              required
              defaultValue=""
              className="w-full rounded-lg border border-zinc-700 bg-black/30 px-4 py-3 text-zinc-100 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
            >
              <option value="" disabled>
                Choose an event type
              </option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Pre-Wedding">Pre-Wedding</option>
              <option value="Maternity">Maternity</option>
              <option value="New-Born">New Born</option>
              <option value="Birthday">Birthday</option>
              <option value="Family">Family</option>
              <option value="Portrait">Portrait</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="mb-2 block text-sm font-medium tracking-wide text-zinc-300">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full resize-none rounded-lg border border-zinc-700 bg-black/30 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
              placeholder="Tell me about your vision, event, or special moment..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-amber-400 px-6 py-3 font-semibold uppercase tracking-widest text-black transition hover:bg-amber-500"
          >
            Send Message
          </button>
        </Form>

      </div>
    </section>
  );
};