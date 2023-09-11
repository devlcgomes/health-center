"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { HiBars3 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { BiChevronRight } from "react-icons/bi";

const navigationMenu = [
  {
    href: "#",
    label: "Página Inicial",
  },
  {
    href: "#",
    label: "Sobre Nós",
  },
  {
    href: "#",
    label: "Soluções",
  },
  {
    href: "#",
    label: "Serviços",
  },
  {
    href: "#",
    label: "Contato",
  },
];

export default function Navigation() {
  const [navOpen, setNavOpen] = React.useState(false);
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const mobileMenuHandler = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      if (dimensions.width > 768 && navOpen) {
        setNavOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <header className="py-7 ">
        <div className="container px-4 mx-auto ">
          <div className="flex justify-between items-center ">
            <Link href="/">
              <img width={40} height={30} src="/logoh2l.png" alt="" />
            </Link>
            {/** Menu */}
            <div className="hidden lg:block text-center">
              <ul className="flex space-x-7">
                {navigationMenu.map((item, index) => (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/** CTA */}
            <div>
              <Link
                href="#"
                className="px-5 py-4 bg-primary text-white rounded-md hidden lg:inline-block"
              >
                Área do Cliente
              </Link>

              <button className="block lg:hidden" onClick={mobileMenuHandler}>
                <HiBars3 className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/** Mobile */}
      <div
        className={
          navOpen
            ? "py-0 block fixed w-screen z-[9999]"
            : "py-0 block hidden w-screen z-[9999"
        }
      >
        <div
          className="h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50"
          onClick={mobileMenuHandler}
        ></div>
        <div className="bg-white w-[380px] top-0 right-0 z-[999] h-screen fixed">
          <div className="h-14 px-10 border-b flex items-center">
            <button
              className="flex items-center space-x-3 "
              onClick={mobileMenuHandler}
            >
              <GrClose />
              <span>Fechar</span>
            </button>
          </div>

          <div className="h-full py-3 px-10 pb-20 overflow-scroll scroll-smooth">
            <ul className="block mb-7">
              {navigationMenu.map((item, index) => (
                <li key={item.label}>
                  <Link
                    className="group flex items-center py-2 duration-300 transition-all ease-out hover:text-primary"
                    href={item.href}
                  >
                    <span>{item.label}</span>
                    <span className="left-2 relative duration-300 transition-all ease-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                      <BiChevronRight className="text-3xl" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
