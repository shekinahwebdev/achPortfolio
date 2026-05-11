"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  // const handleNavClick = (href: string) => {
  //   setIsOpen(false);
  //   const element = document.querySelector(href);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <nav className="absolute top-0 w-full z-50 px-6 sm:px-10 lg:px-14 pt-3 lg:pt-5">
      <div className="flex items-center bg-red-600 text-dark-950/90 w-[48.5%] justify-between bg-transparent">
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
          className="hidden lg:inline-flex items-center justify-center w-10 h-10 rounded-none border border-dark-950/15 text-dark-950"
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
          className="hidden lg:block fixed inset-0 z-[120]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMenuOpen(false)}
        >
          <motion.div
            className="absolute left-[500px] top-0 w-60 bg-white rounded-none p-8 shadow-2xl border border-gray-100"
            initial={{ scale: 0.98, x: 12, opacity: 0 }}
            animate={{ scale: 1, x: 0, opacity: 1 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
          >
            <nav>
              <ul className="flex flex-col gap-8">
                {navItems.map(({ name, href }, idx) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className={`block text-left transition-colors ${idx === 0 ? "text-blue-500 font-extrabold text-sm" : "text-gray-700 font-semibold text-sm"}`}
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

    //   <motion.nav
    //     className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    // isScrolled
    //         ? "bg-dark-950/80 backdrop-blur-lg border-b border-purple-500/20"
    //         : "bg-transparent"
    //     }`}
    //     initial={{ y: -100 }}
    //     animate={{ y: 0 }}
    //     transition={{ duration: 0.5 }}
    //   >
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="flex justify-between items-center h-20">
    //         {/* Logo */}
    //         <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
    //           <Link href="#" className="text-2xl font-bold">
    //             <span className="gradient-text">AM</span>
    //           </Link>
    //         </motion.div>

    //         {/* Desktop Navigation */}
    //         <div className="hidden md:flex items-center gap-8">
    //           {navItems.map((item) => (
    //             <motion.button
    //               key={item.name}
    //               onClick={() => handleNavClick(item.href)}
    //               className="text-gray-300 hover:text-white relative group transition-colors"
    //               whileHover={{ scale: 1.05 }}
    //             >
    //               {item.name}
    //               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
    //             </motion.button>
    //           ))}
    //         </div>

    //         {/* CTA Button */}
    //         <motion.button
    //           className="hidden md:inline-flex btn-primary"
    //           whileHover={{ scale: 1.05 }}
    //           whileTap={{ scale: 0.95 }}
    //           onClick={() => handleNavClick("#contact")}
    //         >
    //           Let's Talk
    //         </motion.button>

    //         {/* Mobile Menu Button */}
    //         <button
    //           className="md:hidden text-white"
    //           onClick={() => setIsOpen(!isOpen)}
    //         >
    //           {isOpen ? (
    //             <HiX className="w-6 h-6" />
    //           ) : (
    //             <HiMenu className="w-6 h-6" />
    //           )}
    //         </button>
    //       </div>
    //     </div>

    //     {/* Mobile Menu */}
    //     <motion.div
    //       className="md:hidden overflow-hidden bg-dark-950/95 backdrop-blur-lg border-t border-purple-500/20"
    //       initial={{ height: 0 }}
    //       animate={{ height: isOpen ? "auto" : 0 }}
    //       transition={{ duration: 0.3 }}
    //       style={{ display: isOpen ? "block" : "none" }}
    //     >
    //       <div className="px-4 py-4 space-y-2">
    //         {navItems.map((item) => (
    //           <motion.button
    //             key={item.name}
    //             onClick={() => handleNavClick(item.href)}
    //             className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-dark-800/50 rounded-lg transition-colors"
    //             whileHover={{ x: 4 }}
    //           >
    //             {item.name}
    //           </motion.button>
    //         ))}
    //         <motion.button
    //           className="w-full btn-primary mt-4"
    //           whileHover={{ scale: 1.02 }}
    //           onClick={() => handleNavClick("#contact")}
    //         >
    //           Let's Talk
    //         </motion.button>
    //       </div>
    //     </motion.div>
    //   </motion.nav>
  );
};

export default Navbar;
