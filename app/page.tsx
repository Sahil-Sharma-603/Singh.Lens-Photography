import {Hero} from "@/app/components/sections/Hero";
import {About} from "@/app/components/sections/About";  
import {Contact} from "@/app/components/sections/Contact";
import {Portfolio} from "@/app/components/sections/Portfolio";
import {Navbar} from "@/app/components/Navbar";
import {Footer} from "@/app/components/Footer";

export default function Home() {
  return(

    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
    <main>
      <Hero />
      <Portfolio />
      <About />
      <Contact />
    </main>
    <Footer />
    </div>
  );

}