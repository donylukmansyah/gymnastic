import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-background-dark/80 border-b border-white/5' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Dumbbell className="text-primary h-8 w-8" />
                        <span className="text-2xl font-black tracking-tighter text-white">GYMNASTIC</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {['Home', 'Class', 'Membership', 'Trainers', 'Blog', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <Button
                        className="bg-primary text-background-dark hover:bg-white hover:text-background-dark transition-all duration-300 rounded-full font-bold shadow-glow hover:shadow-white/20 hover:scale-105 active:scale-95"
                    >
                        Be a Member
                    </Button>
                </div>
            </div>
        </nav>
    );
};
