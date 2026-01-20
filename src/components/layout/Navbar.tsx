"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/#contact" },
];

export const Navbar = () => {
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState(pathname);
    const [isScrolledToContact, setIsScrolledToContact] = useState(false);

    useEffect(() => {
        setActiveTab(pathname);
        setIsScrolledToContact(false); 
    }, [pathname]);

    useEffect(() => {
        if (pathname !== "/") return;

        const handleScroll = () => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                const rect = contactSection.getBoundingClientRect();
                const isContactVisible = rect.top < window.innerHeight / 2;
                setIsScrolledToContact(isContactVisible);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    const currentTab = isScrolledToContact && pathname === "/" ? "/#contact" : activeTab;

    return (
        <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
        >
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-md">
                {navItems.map((item) => {
                    const isActive = currentTab === item.path;
                    return (
                        <Link 
                            key={item.path} 
                            href={item.path}
                            onClick={() => {
                                setActiveTab(item.path);
                                if (item.path === "/#contact") setIsScrolledToContact(true);
                            }}
                            className={cn(
                                "relative px-6 py-2 text-sm font-medium transition-colors hover:text-white",
                                isActive ? "text-white" : "text-neutral-400"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 rounded-full bg-white/10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {item.name}
                        </Link>
                    )
                })}
            </div>
        </motion.nav>
    );
};
