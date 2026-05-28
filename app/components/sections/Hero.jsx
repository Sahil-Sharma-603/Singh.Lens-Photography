

const images = [
    "/pic1.jpg",
    "/mobilepic1.jpg",
  ];

export const Hero = () => {
    return(
        <section id="hero" className=" relative h-screen flex items-center justify-center bg-center  bg-no-repeat bg-cover
         md:bg-[url('/pic1.jpg')] bg-[url('/mobilepic1.jpg')]">
        

 
        <h1 className="text-5xl font-bold ">
          SinghLens Photography
        </h1>
    
      </section>
    )
}
