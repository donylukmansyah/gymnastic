
import { Dumbbell, Users, MonitorSmartphone, Trophy } from "lucide-react";

export const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-background-card/30 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left: Features Grid */}
                    <div className="flex-1 w-full">
                        <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
                        <p className="text-text-muted mb-10 max-w-md">We offer the best environment for your fitness journey with state-of-the-art facilities.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Feature 1 */}
                            <div className="group p-6 bg-background-card rounded-3xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-sm">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                                    <Dumbbell className="text-primary group-hover:text-background-dark w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Best Training</h3>
                                <p className="text-sm text-text-muted">Top-tier coaching tailored specifically to your body type and goals.</p>
                            </div>

                            {/* Feature 2 */}
                            <div className="group p-6 bg-background-card rounded-3xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-sm">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                                    <Users className="text-primary group-hover:text-background-dark w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Expert Trainers</h3>
                                <p className="text-sm text-text-muted">Learn from the industry best who have proven track records.</p>
                            </div>

                            {/* Feature 3 */}
                            <div className="group p-6 bg-background-card rounded-3xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-sm">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                                    <MonitorSmartphone className="text-primary group-hover:text-background-dark w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Modern Equipment</h3>
                                <p className="text-sm text-text-muted">Access to state-of-the-art biomechanical machines.</p>
                            </div>

                            {/* Feature 4 */}
                            <div className="group p-6 bg-background-card rounded-3xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-sm">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                                    <Trophy className="text-primary group-hover:text-background-dark w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Award Winners</h3>
                                <p className="text-sm text-text-muted">Recognized globally for excellence in fitness standards.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="flex-1 w-full h-full relative group">
                        <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBDIewHVPSK9SHaw3Mr4y-iBZtUnrdEPNlzo34f3HYMsBwTUH--FdW24j9WkRn_cXk1xpqI-itwcjFxzmOWa4pdtGFEYwAC2q6Aeb6TbgEaVWUDQRNlNZQFk6ZOHJekLodj2rXUiQ3AVNGZdwV4x_xF9LOvEnVfhRNZ5ydR_ixgTLyVbtnTQfK3Po_GsS2Zt-Z-yhWoTHnY2cwJTAs3eGOsO-eXJxA2q5qMKLbXbbVedi-XOwqZrVxh6VCLzBFiubfsMhZR42bDU2c')" }}
                                role="img"
                                aria-label="Woman doing battle rope exercises in gym"
                            >
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8">
                                <p className="text-primary font-bold tracking-wider text-sm uppercase mb-2">High Intensity</p>
                                <h3 className="text-3xl font-bold text-white">Crossfit & Strength</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
