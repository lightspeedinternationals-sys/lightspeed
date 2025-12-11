"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

// Testimonial Data
const testimonials = [
    {
        id: 1,
        name: "Rajesh Kumar",
        role: "Export Manager, TexStyle India",
        content: "Light Speed has been a game-changer for our international shipments. Their reliability and tracking give us peace of mind.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Sarah Williams",
        role: "Director, Global Trends",
        content: "The best logistics partner we've worked with — professional, responsive, and always on time.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?q=80&w=256&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Amit Patel",
        role: "Founder, TechSource",
        content: "Fast, secure, and affordable. We scaled operations with their efficient freight forwarding.",
        rating: 4,
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=256&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Sneha V.",
        role: "Online Retailer",
        content: "Real-time tracking builds trust, and free door pickup saves us time.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=256&auto=format&fit=crop"
    },
    // Set B (Row 2)
    {
        id: 5,
        name: "Neha K.",
        role: "Fashion Brand Manager",
        content: "Professional packaging and real-time tracking — our customers get their orders without delays.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=256&auto=format&fit=crop"
    },
    {
        id: 6,
        name: "Arvind B.",
        role: "Tech Startup CEO",
        content: "Secure handling and climate-controlled warehousing — outstanding professionalism.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=256&auto=format&fit=crop"
    },
    {
        id: 7,
        name: "Lakshmi S.",
        role: "Food Exporter",
        content: "Global partner network and express shipping — products arrive fresh and on time.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=256&auto=format&fit=crop"
    },
    {
        id: 8,
        name: "Kiran M.",
        role: "Import/Export Owner",
        content: "Customs clearance support and global network make cross-border logistics effortless.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop"
    }
];

const TestimonialCard = ({ data }: { data: typeof testimonials[0] }) => (
    <article className="inline-flex w-[320px] shrink-0 flex-col rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mx-4">
        <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 flex-shrink-0">
                <Image
                    src={data.avatar}
                    alt={data.name}
                    fill
                    className="rounded-full object-cover border-2 border-primary/20"
                    sizes="48px"
                />
            </div>
            <div>
                <div className="text-card-foreground font-semibold">{data.name}</div>
                <div className="text-muted-foreground text-sm">{data.role}</div>
            </div>
        </div>
        <div className="mt-4 flex gap-1" aria-label={`${data.rating} out of 5 stars`}>
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`w-4 h-4 ${i < data.rating ? "text-yellow-400 fill-yellow-400" : "text-muted"}`}
                />
            ))}
        </div>
        <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            "{data.content}"
        </p>
    </article>
);

const Testimonials = () => {
    const row1 = testimonials.slice(0, 4);
    const row2 = testimonials.slice(4, 8);

    return (
        <section id="testimonials" className="relative overflow-hidden bg-muted/30 py-24 section-padding">
            <div className="container-custom">
                {/* Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                        What Our <span className="text-primary">Clients Say</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Trusted by businesses worldwide. Here’s why they choose LIGHT SPEED.
                    </p>
                </motion.div>

                {/* Gradient edge fades */}
                <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-full w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
                <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-full w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

                {/* Row 1: scroll left-to-right (marquee-right) */}
                <div className="mb-8 overflow-hidden">
                    <div className="relative flex w-max animate-marquee-right hover:[animation-play-state:paused]">
                        <div className="flex">
                            {row1.map((item) => <TestimonialCard key={item.id} data={item} />)}
                        </div>
                        {/* Duplicate for loop */}
                        <div className="flex">
                            {row1.map((item) => <TestimonialCard key={`dup-${item.id}`} data={item} />)}
                        </div>
                        {/* Triplicate for loop smoothness on wide screens */}
                        <div className="flex">
                            {row1.map((item) => <TestimonialCard key={`trip-${item.id}`} data={item} />)}
                        </div>
                    </div>
                </div>

                {/* Row 2: scroll right-to-left (marquee-left) */}
                <div className="overflow-hidden">
                    <div className="relative flex w-max animate-marquee-left hover:[animation-play-state:paused]">
                        <div className="flex">
                            {row2.map((item) => <TestimonialCard key={item.id} data={item} />)}
                        </div>
                        {/* Duplicate for loop */}
                        <div className="flex">
                            {row2.map((item) => <TestimonialCard key={`dup-${item.id}`} data={item} />)}
                        </div>
                        {/* Triplicate for loop smoothness on wide screens */}
                        <div className="flex">
                            {row2.map((item) => <TestimonialCard key={`trip-${item.id}`} data={item} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
