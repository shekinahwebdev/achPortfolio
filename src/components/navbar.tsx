"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isActiveRoute = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  // const handleNavClick = (href: string) => {
  //   setIsOpen(false);
  //   const element = document.querySelector(href);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <nav className="absolute top-0 w-full z-50 px-6 sm:px-10 lg:px-14 pt-3 lg:pt-5">
      <div
        className={`flex w-full items-center bg-red-600 text-dark-950/90 justify-between bg-transparent ${
          isHomePage ? "lg:w-[48.5%]" : ""
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="text-3xl font-black tracking-tight"
        >
          GK.
        </motion.div>

        <button
          type="button"
          aria-label="Open navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
          className="inline-flex items-center justify-center w-10 h-10 rounded-none border border-dark-950/15 text-dark-950 lg:w-11 lg:h-11"
        >
          {isMenuOpen ? (
            <HiX className="w-5 h-5" />
          ) : (
            <HiMenu className="w-5 h-5" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 z-[120] bg-black/25 backdrop-blur-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMenuOpen(false)}
        >
          <motion.div
            className={`absolute top-4 right-4 left-4 sm:left-auto sm:w-80 bg-white rounded-none p-6 sm:p-8 shadow-2xl border border-gray-100 ${
              isHomePage
                ? "lg:right-auto lg:left-[500px] lg:w-60"
                : "lg:right-4 lg:left-auto lg:w-60"
            }`}
            initial={{ scale: 0.98, y: -8, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <nav>
              <ul className="flex flex-col gap-5 sm:gap-6">
                {navItems.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className={`block text-left transition-colors text-sm ${
                        isActiveRoute(href)
                          ? "text-[#123788] font-extrabold"
                          : "text-gray-700 font-semibold"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
