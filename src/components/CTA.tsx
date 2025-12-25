
import { Button } from "@/components/ui/button";

export const CTA = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-primary/80 to-purple-600 p-10 lg:p-20 flex flex-col md:flex-row items-center justify-between shadow-glow">
                    {/* Abstract Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

                    <div className="relative z-10 max-w-xl text-center md:text-left mb-10 md:mb-0">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Join the <br />Gymnastic Family</h2>
                        <p className="text-white/90 text-lg mb-8 font-medium">Get 50% off your first month when you sign up today. Limited time offer.</p>
                        <Button className="px-10 py-8 rounded-full text-base font-bold shadow-lg transform hover:scale-105 bg-white text-background-dark hover:bg-background-dark hover:text-white">
                            Be a Member
                        </Button>
                    </div>

                    <div className="relative z-10 hidden md:block w-1/3">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvBPzFVUgHfRGlvoaXaOjv4A93btOx0rUIivC0wOshaPEJmpzX-5N9l9Am4JwVVsJpDIjiaHUwu8GxEShRI4idk_qykwXO92PG9GejyCrEEuGyWPqD9BVaIHBwu5BZp7Giaro-A0XX8-G5MJXa2iCr8D9-d0Dm0B-x2RAUNResasOPh9LiFmQyZsdUplsrY0i7C-MYwXgL45FrebGT2YpKNIPTxyMYx70F6sR3GmS7hf5tdKJwle3CD2jpecQpW9WRkHpGXkuSI4Y"
                            alt="Athletic woman holding water bottle"
                            className="mask-image-gradient object-cover object-top h-[400px] w-auto drop-shadow-2xl absolute -bottom-20 right-0 scale-125"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
