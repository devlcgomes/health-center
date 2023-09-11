import Link from "next/link";
import React from "react";

const heroContent = {
  text: {
    subheading: "Bem vindos a H2L Solutions!",
    heading: "Controle total do seu negócio em um só lugar.",
    description:
      "Ajudamos você a gerenciar o seu negócio com rapidez e eficiência.",
  },
  image: {
    img1: "/hero-img-1-min.png",
    img2: "/hero-img-2-min.png",
    img3: "/hero-img-3-min.png",
    img4: "/hero-img-4-min.png",
    img5: "/hero-img-5-min.png",
  },
};

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center">
          <div className="w-g/12 mb-10 lg:mb-0">
            {heroContent.text.heading && (
              <span className="inline-block p7-0.5 pl-3 text-heading font-semibold relative mb-7 before: content-[''] before:absolute before:top-0 before:left-0 before:w-2/3 before:bg-primary before:absolute  before:bg-yellowlight before:left-0 before:top-0 before:bottom-0 before:z-[-1]">
                {heroContent.text.subheading}
              </span>
            )}

            {heroContent.text.heading && (
              <h1 className="text-4xl font-bold lg:text-5xl mb-7">
                {heroContent.text.heading}
              </h1>
            )}

            {heroContent.text.description && (
              <p className="leading-relaxed text-body mb-10">
                {heroContent.text.description}
              </p>
            )}

            <div className="flex space-x-3">
              <Link
                className="py-4 px-5 bg-primary text-white rounded-md duration-300 transition-all ease-out hover:bg-[#134761] hover: shadow-md inline-block realative top-0 hover:-top-1"
                href="#_"
              >
                Demonstração Gratuita
              </Link>
              <Link
                className="py-4 px-5 bg-secondary text-white rounded-md duration-300 transition-all ease-out hover:bg-[#179792] hover: shadow-md inline-block realative top-0 hover:-top-1"
                href="#_"
              >
                Veja como funciona!
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
