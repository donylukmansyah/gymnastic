
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

export const Hero = () => {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="flex-1 space-y-8 text-center lg:text-left">
                        <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                            Take care of your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">body</span> and it’s the only place you have to <span className="text-primary underline decoration-4 decoration-primary/30 underline-offset-4">live</span>
                        </h1>
                        <p className="text-text-muted text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Achieve your best self with our premium facilities and expert guidance. Join a community dedicated to strength, wellness, and breaking limits.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Button className="w-full sm:w-auto px-8 py-6 rounded-full text-base font-bold shadow-glow hover:scale-105 text-background-dark bg-primary hover:bg-white hover:text-background-dark">
                                Be a Member
                            </Button>
                            <Button variant="outline" className="w-full sm:w-auto px-8 py-6 rounded-full text-white border-white/10 hover:bg-white/5 font-medium flex gap-2">
                                <PlayCircle className="text-primary w-5 h-5" />
                                Watch Video
                            </Button>
                        </div>
                    </div>

                    {/* Right Image & Floating Elements */}
                    <div className="flex-1 relative w-full max-w-[600px] lg:max-w-none group perspective-1000">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:rotate-1 hover:scale-[1.02] border border-white/5">
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent z-10"></div>
                            <div
                                className="w-full h-[500px] lg:h-[600px] bg-cover bg-center"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCAPT6Vz7zN5uNl_E0X56AmBtZS2So6QlDzpr9DJGCWiOHF8b8MteI6pasja0GWsNAbIt2PBUvhnzOJQVCjedaTGRD6qzTvTa62suBt3MyrtZIhlxXmatl8tlQOXNZqLIBrAWqckVq3_nWnyFEfMrsIhCHw4b0V6D4FLld_FEH2c5k42NLxPlIedz6gWQ8ELpj2hSZd2OeRzpeNq9Q_XdsRik1p-t6w5mRjMNuxUHnbdGQpdJDRTrhSW82hws81_wBwQCNCaDKuojM')" }}
                                role="img"
                                aria-label="Muscular man lifting heavy weights in a dark gym setting"
                            >
                            </div>
                        </div>

                        {/* Floating Avatar Group */}
                        <div className="absolute -bottom-6 left-6 lg:-left-6 z-20 bg-background-card/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl flex items-center gap-4 animate-bounce-slow">
                            <div className="flex -space-x-4">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH_ezTcSBmuD80NjkisVaK-vQEURxirkDgeYwi9PmJSIC_RFynwF-2ITMDgRw4rWJgwf-mJQZ2Q_xaG1QAXZv656YuedyMQHFfGyqjx7Z1QhMh8tltWThKUZIR8jFL0NDXd4cQTFJURtjRKLhju2Zojg1Wv6FQJiS8s5vFCgkzQsvidfoYBodDer13jeNIPBHo4D6Va3yw1veULxJ58KUlm52I-Ik--HHNk-WwnM1GaOICyfyLSf7c0vxZdKqFJXBGveeiU1hjb8o" alt="Trainer" className="w-12 h-12 rounded-full border-2 border-background-card object-cover" />
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJvj6muMjdEbIZg7kM-2jLPJ2-Qw02D3zhMW1ZQsMA5FfMst1DbIySmLjBE72kK0DDbe2iVtwIELj2j_h4W24QOsyUomGHRW6Ud2CXQrRg2I9z_Mz9oGA3u2P8fu0Y3WVPajSorg0utQEdLEj0WGUop_k6r0dQreNdwnr2CVJ_sxuYD7119z3HUl2kra3engIMWHQnV6K5PTYRHYjC9gf6vfhlQhWXfrctXVLEgEjxPiAfsQyGf5iKsKBWbM8ss9NbW7PhVflgrMg" alt="Trainer" className="w-12 h-12 rounded-full border-2 border-background-card object-cover" />
                                <div className="w-12 h-12 rounded-full border-2 border-background-card bg-primary text-background-dark flex items-center justify-center text-xs font-bold">+5</div>
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm">Experience Trainers</p>
                                <p className="text-text-muted text-xs">Get trained by professionals</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
