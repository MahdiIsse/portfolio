"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState("intro");

  const navItems = [
    { id: "intro", label: "Intro" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Project" },
    { id: "experience", label: "Ervaring" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Hoofdnavigatie"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "bg-background/50"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="#intro"
            className="group cursor-pointer"
            aria-label="Ga naar introductie sectie"
          >
            <span className="text-xl font-bold text-foreground transition-all duration-300">
              Mahdi Isse
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map(({ id, label }) => (
              <Button
                key={id}
                asChild
                variant={activeId === id ? "secondary" : "ghost"}
                size="sm"
                className={`transition-all duration-300 ${
                  activeId === id
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "hover:bg-accent/50"
                }`}
              >
                <Link href={`#${id}`} onClick={() => setActiveId(id)}>
                  {label}
                </Link>
              </Button>
            ))}
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
              aria-label={isOpen ? "Sluit navigatie" : "Open navigatie"}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-4 pb-4 border-t border-border/50"
          >
            <div className="flex flex-col gap-2 pt-4">
              {navItems.map(({ id, label }) => (
                <Button
                  key={id}
                  asChild
                  variant="ghost"
                  className="justify-start transition-all duration-300 hover:bg-accent/50"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={`#${id}`}>{label}</Link>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
