
import { Dumbbell, MapPin, Phone, Mail, Globe, Video, MessageCircle } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-background-dark border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <Dumbbell className="text-primary w-8 h-8" />
                            <span className="text-xl font-black text-white">GYMNASTIC</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Transform your body and mind with our world-class facilities and expert guidance. Your journey to greatness starts here.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all">
                                <Globe className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all">
                                <Video className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all">
                                <MessageCircle className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Categories</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-primary transition-colors">Strength Training</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Body Building</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Weight Loss</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Basic Yoga</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary w-5 h-5 mt-0.5" />
                                <span>123 Fitness Blvd, <br />Muscle City, CA 90210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-primary w-5 h-5" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary w-5 h-5" />
                                <span>hello@gymnastic.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-500">
                    <p>© 2023 Gymnastic Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
