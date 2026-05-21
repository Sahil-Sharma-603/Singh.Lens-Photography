
export const Portfolio = () => {


return(
    <section id="portfolio"  className="h-screen flex flex-col items-center justify-center text-center px-6">
  <h1 className="text-4xl font-bold mb-6">
        Portfolio
      </h1>
     {/* Content wrapper */}
     <div className="flex flex-col items-center max-w-2xl">
        <h2 className="text-2xl mb-4">
          My Work Goal
        </h2>

        <ul className="list-disc text-left space-y-2">
          <li>1. Create a nav bar, scrolling motion, and collapse to list when window size smaller.</li>
          <li>2. Create a hero section with a background image, and a title in the center and image change after 5 seconds.</li>
          <li>3. Create a portfolio section with a grid of images, and when you click on an image, it will open a modal with the image in full size.</li>
          <li>4. Create an about section with a title and a paragraph about me.</li>
          <li>5. Create a contact section with a title and a form with name, email, and message fields.</li>
        </ul>
      </div>
  </section>

);
}