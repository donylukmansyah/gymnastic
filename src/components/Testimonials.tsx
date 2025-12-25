
import { Star, StarHalf } from "lucide-react";

export const Testimonials = () => {
    return (
        <section className="py-24 bg-background-card/20 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold mb-12 text-center">Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Testimonial 1 */}
                    <div className="p-8 bg-background-card rounded-[2rem] border border-white/5 relative">
                        <div className="absolute -top-6 left-8 w-12 h-12 rounded-full overflow-hidden border-4 border-background-card">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNPzztoKlGQBsmQjJPLvVtzG3mg6XapFcDrn70t4HSkuuYPMZPuVYPKscphZvIOlDuStCF-oumOIPUm3G5b0Rnqo5rVN_MKY18OXMKmQqhyxZN-F98o7y_JB_s_II5bez9314E4pOiSH3hK60qJwfCIHSKwFPW7EKSAFScBuOoatt2q6jM_1UizbZNAFJuAm1Nik8-WXFvddII2uTD_t5a5hW6b9HWd0JOUgggtGwmO88sQEnpaGWbHJHizNrWG6OL_ISNWRMSbek" alt="User" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex gap-1 text-primary text-sm mb-4 mt-2">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary" />)}
                        </div>
                        <p className="text-gray-300 italic mb-6 leading-relaxed">"The facilities are top notch and the trainers are incredibly knowledgeable. I've achieved results I never thought possible in just 3 months."</p>
                        <div>
                            <h4 className="font-bold text-white">James Peterson</h4>
                            <span className="text-xs text-primary uppercase font-bold tracking-widest">Member</span>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="p-8 bg-background-card rounded-[2rem] border border-white/5 relative">
                        <div className="absolute -top-6 left-8 w-12 h-12 rounded-full overflow-hidden border-4 border-background-card">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHgneMqChNArmNmF20DjrQy0lpt4dLkLIzRXG2mXA9aIafbegxqhDNPrOFEwg-7B5fc5IGRa38TlCn9TSuisnqKW8oOkIFMzsUM2cK3ZLm-_pewTVY7zyDNLQgOz2ToxfkYfQK6kBeiDL3dfJ9KmpFLkfpY59ExH_KhwaTBsupSkfmMtc6qVJQTxZeP39lL30CC_29XA8kWKRkd4nb8eC5H3zqrjVb165PxZMlEUnzaHtchv8b6ohgw_lQE9SOrT204J70BxD5Z8U" alt="User" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex gap-1 text-primary text-sm mb-4 mt-2">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary" />)}
                        </div>
                        <p className="text-gray-300 italic mb-6 leading-relaxed">"Joining Gymnastic was the best decision for my health. The community is so supportive and motivating!"</p>
                        <div>
                            <h4 className="font-bold text-white">Sarah Jenkins</h4>
                            <span className="text-xs text-primary uppercase font-bold tracking-widest">Member</span>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="p-8 bg-background-card rounded-[2rem] border border-white/5 relative hidden lg:block">
                        <div className="absolute -top-6 left-8 w-12 h-12 rounded-full overflow-hidden border-4 border-background-card">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxD9KrtiqfgdubfJCz4KIchEYavDr5XS8adSfL_IVlJrfXDMMbDdloWzjWetemPBszXoGtGTAsVkYml1yFZwi65-gnpt0CxrtoZLhMQnIbr9dxKcCWqoubn3pEsXL19h1Td-prg1oqM4l4nh9Q02R2w09bh1gukhTBAmFyvsvhwOxmpsPaQtgFhvt000nuGsqpTY7FGeE3vm0t6Bxawt21-SUs6gI9gqSvw8I1CYbtWpYb_bnx9xrhYQD-wTpX-70csA41153JDyM" alt="User" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex gap-1 text-primary text-sm mb-4 mt-2">
                            {[...Array(4)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary" />)}
                            <StarHalf className="w-4 h-4 fill-primary" />
                        </div>
                        <p className="text-gray-300 italic mb-6 leading-relaxed">"Great equipment, clean environment, and friendly staff. Highly recommended for anyone serious about fitness."</p>
                        <div>
                            <h4 className="font-bold text-white">Michael Chang</h4>
                            <span className="text-xs text-primary uppercase font-bold tracking-widest">Member</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
