"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Droplet } from "lucide-react";
import Image from "next/image";


const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const onMainPage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (!onMainPage) {
        // If not on main page, navigation will be handled by Links
        return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: "Rólunk", id: "about" },
    { label: "Szolgáltatások", id: "services" },
    { label: "GYIK", id: "faq" },
    { label: "Kapcsolat", id: "contact" },
  ];

  const renderMenuItem = (item: typeof menuItems[0], isMobile = false) => {
    const className = `text-foreground hover:text-primary transition-smooth cursor-pointer font-medium ${isMobile ? 'text-left w-full block' : ''}`;

    if (item.id === "faq") {
      return (
        <Link key={item.id} href="/gyik" className={className} onClick={() => setIsMobileMenuOpen(false)}>
          {item.label}
        </Link>
      );
    }

    if (onMainPage) {
      return (
        <button key={item.id} onClick={() => scrollToSection(item.id)} className={className}>
          {item.label}
        </button>
      );
    }

    return (
      <Link key={item.id} href={`/#${item.id}`} className={className} onClick={() => setIsMobileMenuOpen(false)}>
        {item.label}
      </Link>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-medium"
          : "bg-background/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-md shadow-medium lg:shadow-none"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer" onClick={() => { 
            if (onMainPage) {
              window.scrollTo({ top: 0, behavior: "smooth" }); 
            }
            setIsMobileMenuOpen(false); 
          }}>
            <img src="/images/logo.svg" alt="Logo" className=" h-14" fetchPriority="high"></img>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => renderMenuItem(item))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
             {onMainPage ? (
                <Button variant="default" size="lg" className="cursor-pointer" onClick={() => scrollToSection("contact")}>
                    Ajánlatkérés
                </Button>
             ) : (
                <Button variant="default" size="lg" className="cursor-pointer" asChild>
                    <Link href="/#contact">Ajánlatkérés</Link>
                </Button>
             )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => renderMenuItem(item, true))}
              {onMainPage ? (
                <Button variant="default" size="lg" onClick={() => scrollToSection("contact")} className="w-full">
                    Ajánlatkérés
                </Button>
             ) : (
                <Button variant="default" size="lg" asChild className="w-full">
                    <Link href="/#contact">Ajánlatkérés</Link>
                </Button>
             )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
