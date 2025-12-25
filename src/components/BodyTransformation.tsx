
import { Button } from "@/components/ui/button";
import { CheckCircle2, Calendar, Clock, MoreHorizontal } from "lucide-react";

export const BodyTransformation = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Left: Content */}
                    <div className="flex-1 space-y-8">
                        <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                            Shape your <span className="text-primary">perfect body</span> with us
                        </h2>
                        <p className="text-text-muted text-lg leading-relaxed">
                            Our expert trainers create personalized workout plans that adapt to your progress. Track your journey with our advanced app integration and never miss a session.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="text-primary w-6 h-6" />
                                <span className="text-gray-300">Customized Nutrition Plans</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="text-primary w-6 h-6" />
                                <span className="text-gray-300">1-on-1 Personal Training</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="text-primary w-6 h-6" />
                                <span className="text-gray-300">Progress Tracking & Analytics</span>
                            </li>
                        </ul>
                        <Button className="mt-4 px-8 py-6 rounded-full text-sm font-bold shadow-glow hover:scale-105 text-background-dark bg-primary hover:bg-white hover:text-background-dark">
                            Start your Training
                        </Button>
                    </div>

                    {/* Right: UI Mockups with connections */}
                    <div className="flex-1 w-full relative h-[500px] flex items-center justify-center">
                        {/* Decorative Connection Lines (SVG) */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40 hidden lg:block">
                            <path d="M 100 250 Q 250 100 350 150" fill="none" stroke="#3CF2E0" strokeWidth="2" strokeDasharray="5,5" />
                            <path d="M 100 250 Q 250 400 400 350" fill="none" stroke="#3CF2E0" strokeWidth="2" strokeDasharray="5,5" />
                            <circle cx="350" cy="150" r="4" fill="#3CF2E0" className="animate-pulse" />
                            <circle cx="400" cy="350" r="4" fill="#3CF2E0" className="animate-pulse" />
                        </svg>

                        {/* Card 1: Trainer Profile */}
                        <div className="absolute top-0 right-0 lg:right-10 w-72 bg-background-card/90 backdrop-blur border border-white/10 p-4 rounded-2xl shadow-2xl z-10 transform lg:rotate-6 hover:rotate-0 transition-all duration-500 hover:z-30 hover:scale-105">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuADlr48YeSDppADp0A4-C14olKNQvS9wAWQgq_wFGIBYmgybhTQB0xbn7xTUNCiE__Z7q0OW8WU-zaXgxKRl0hiK5ghMG9eGBxiG-fdMFEb6uC526rd21b4uPSDlZTlTtYcp9Q_IRa-3YAups0pJBn6e3zfE2TY1zX6dvqCve6ckmMWXj97zLkgcyZBof5dA4OHK9N4V83FYdw9aL5zMU6eLHs87h6G9sL8IawZARiSd2dtdBwih9m9RCNK6NN8HaSTg3luOMEs4Ow" alt="Trainer" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">David Scott</h4>
                                    <p className="text-xs text-primary">Elite Trainer</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-sm text-gray-400 border-t border-white/5 pt-3">
                                <span>Clients</span>
                                <span className="text-white font-bold">120+</span>
                            </div>
                        </div>

                        {/* Card 2: Booking UI */}
                        <div className="absolute bottom-0 left-0 lg:left-10 w-80 bg-background-card/90 backdrop-blur border border-white/10 p-6 rounded-2xl shadow-2xl z-20 transform lg:-rotate-3 hover:rotate-0 transition-all duration-500 hover:z-30 hover:scale-105">
                            <div className="flex justify-between items-center mb-6">
                                <h4 className="font-bold text-white">Booking Class</h4>
                                <MoreHorizontal className="text-gray-400 w-5 h-5" />
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 p-3 bg-background-dark rounded-xl border border-white/5">
                                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Date</p>
                                        <p className="text-sm font-bold">Mon, 24 Oct</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-background-dark rounded-xl border border-white/5">
                                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Time</p>
                                        <p className="text-sm font-bold">10:00 AM - 11:30 AM</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <span className="text-sm font-medium">Notify me</span>
                                <div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer">
                                    <span className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
