
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

export const MembershipPricing = () => {
    return (
        <section id="membership" className="py-24 bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Membership Plans</h2>
                    <p className="text-text-muted">Choose the plan that fits your lifestyle.</p>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <span className="text-white font-medium">Monthly</span>
                        <button className="w-14 h-8 bg-background-card border border-white/10 rounded-full relative px-1 flex items-center cursor-pointer">
                            <div className="w-6 h-6 bg-primary rounded-full shadow-md"></div>
                        </button>
                        <span className="text-gray-500 font-medium">Yearly</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Basic Plan */}
                    <div className="group relative bg-background-card rounded-3xl p-8 border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-2">
                        <h3 className="text-xl font-bold mb-2">Basic</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-3xl font-bold">$20</span>
                            <span className="text-sm text-text-muted">/mo</span>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm text-gray-400">
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" /> 5 Days a week</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" /> 01 T-Shirt</li>
                            <li className="flex items-center gap-2 opacity-50"><X className="text-gray-600 w-5 h-5" /> No Personal Trainer</li>
                            <li className="flex items-center gap-2 opacity-50"><X className="text-gray-600 w-5 h-5" /> No Access to Spa</li>
                        </ul>
                        <Button variant="outline" className="w-full py-6 rounded-full border-white/20 text-white font-bold hover:bg-white hover:text-black transition-all">Join Now</Button>
                    </div>

                    {/* Standard Plan */}
                    <div className="group relative bg-background-card rounded-3xl p-8 border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-2">
                        <h3 className="text-xl font-bold mb-2">Standard</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-3xl font-bold">$35</span>
                            <span className="text-sm text-text-muted">/mo</span>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm text-gray-400">
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" /> 6 Days a week</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" /> 01 T-Shirt</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" /> 1 Personal Session</li>
                            <li className="flex items-center gap-2 opacity-50"><X className="text-gray-600 w-5 h-5" /> No Access to Spa</li>
                        </ul>
                        <Button variant="outline" className="w-full py-6 rounded-full border-white/20 text-white font-bold hover:bg-white hover:text-black transition-all">Join Now</Button>
                    </div>

                    {/* Professional Plan (Recommended) */}
                    <div className="group relative bg-background-card rounded-3xl p-8 border-2 border-primary/50 shadow-glow-sm transform scale-105 z-10">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Recommended</div>
                        <h3 className="text-xl font-bold mb-2 text-primary">Professional</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-3xl font-bold text-white">$50</span>
                            <span className="text-sm text-text-muted">/mo</span>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm text-white">
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" /> 7 Days a week</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" /> Free Merchandise</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" /> 5 Personal Sessions</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" /> Full Access to Spa</li>
                        </ul>
                        <Button className="w-full py-6 rounded-full bg-primary text-background-dark font-bold hover:bg-white hover:text-background-dark transition-all shadow-glow">Join Now</Button>
                    </div>

                    {/* Family Plan */}
                    <div className="group relative bg-background-card rounded-3xl p-8 border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-2">
                        <h3 className="text-xl font-bold mb-2">Family</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-3xl font-bold">$65</span>
                            <span className="text-sm text-text-muted">/mo</span>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm text-gray-400">
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" /> Access for 2 adults</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" /> Child Care included</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" /> Couple Sessions</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" /> Full Access to Spa</li>
                        </ul>
                        <Button variant="outline" className="w-full py-6 rounded-full border-white/20 text-white font-bold hover:bg-white hover:text-black transition-all">Join Now</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
