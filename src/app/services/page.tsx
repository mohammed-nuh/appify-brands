import {
    MinimalCard,
    MinimalCardDescription,
    MinimalCardImage,
    MinimalCardTitle,
} from "@/components/ui/minimal-card"
import WrapButton from '@/components/ui/wrap-button';
import { Globe } from "lucide-react";
import { SkiperCard } from "@/components/ui/skiper-card"

export default function ServicesPage() {
    const cards = [
        {
            title: "Portfolio Websites",
            description:
                "Showcase your work and personal brand with a clean, modern portfolio site.",
            src: "hover_images/1.jpg",
        },
        {
            title: "Agency Websites",
            description:
                "Professional websites designed for agencies and startups to attract clients and build trust.",
            src: "hover_images/2.jpg",
        },
        {
            title: "LMS Websites",
            description:
                "Launch your online course platform with features like student dashboards, quizzes, and payments.",
            src: "hover_images/3.jpg",
        },
    ]

    const pricing = [
        {
            category: "Portfolio Websites",
            plans: [
                { name: "Normal", price: "$79.99" },
                { name: "Animated", price: "$129.99" },
                { name: "Dark + Light Mode", price: "$159.99" },
            ],
        },
        {
            category: "Agency Websites",
            plans: [
                { name: "Normal", price: "$129.99" },
                { name: "Animated", price: "$179.99" },
                { name: "Dark + Light Mode", price: "$229.99" },
            ],
        },
        {
            category: "LMS Websites",
            plans: [
                { name: "Normal", price: "$229.99" },
                { name: "Animated", price: "$299.99" },
                { name: "Dark + Light Mode", price: "$399.99" },
            ],
        },
    ]

    return (
        <section id="services" className="p-6 py-16 bg-background overflow-x-hidden">
            {/* Services Cards */}
            <h1 className="text-3xl font-bold mx-auto text-center mb-4 text-gray-900 dark:text-white">
                Our Services
            </h1>
            <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Affordable, high-quality websites to help you grow online. Choose the
                perfect package for your needs.
            </p>

            <div className="w-full mb-12">
                <div className="flex flex-col justify-center rounded-lg p-4">
                    <div className="flex flex-wrap items-center justify-center">
                        {cards.map((card, index) => (
                            <MinimalCard className="m-4 w-full max-w-md bg-gray-50 dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden" key={index}>
                                <MinimalCardImage
                                    className="h-64 object-cover"
                                    src={card.src}
                                    alt={card.title}
                                />
                                <MinimalCardTitle className="text-gray-900 dark:text-white">
                                    {card.title}
                                </MinimalCardTitle>
                                <MinimalCardDescription className="text-gray-600 dark:text-gray-300">
                                    {card.description}
                                </MinimalCardDescription>
                            </MinimalCard>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pricing Table */}
            <div className="mt-16 scale-[1.2]">
                <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                    Pricing Plans
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full max-w-4xl mx-auto border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                        <thead className="bg-gray-100 dark:bg-gray-700">
                            <tr>
                                <th className="p-4 text-left text-gray-900 dark:text-gray-100">Service</th>
                                <th className="p-4 text-center text-gray-900 dark:text-gray-100">Normal</th>
                                <th className="p-4 text-center text-gray-900 dark:text-gray-100">Animated</th>
                                <th className="p-4 text-center text-gray-900 dark:text-gray-100">Dark + Light Mode</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800">
                            {pricing.map((item, idx) => (
                                <tr
                                    key={idx}
                                    className="border-t border-gray-200 dark:border-gray-700"
                                >
                                    <td className="p-4 font-medium text-gray-900 dark:text-gray-100">{item.category}</td>
                                    {item.plans.map((plan, planIdx) => (
                                        <td key={planIdx} className="p-4 text-center text-gray-700 dark:text-gray-300">
                                            {plan.price}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
                    ✅ Free Live Hosting included · *Domain not included* · Limited-time starter pricing
                </p>
            </div>

            {/* Why Choose Us */}
            <div className="text-center scale-[0.6]">
                <h2 className="text-5xl font-bold mb-8 text-gray-900 dark:text-white">
                    Why Choose Us?
                </h2>
                <SkiperCard
                    title=" "
                    description=" "
                    image={{
                        step1light1: "/assets/feature-2.png",
                        step1light2: "/assets/feature-2.png",
                        step2light1: "/assets/feature-3.png",
                        step2light2: "/assets/feature-3.png",
                        step3light: "/assets/feature-4.png",
                        step4light: "/assets/skiper.png",
                        // dark versions (reuse light if no dark available)
                        step1dark1: "/assets/feature-2.jpg",
                        step1dark2: "/assets/feature-2.png",
                        step2dark1: "/assets/feature-3.png",
                        step2dark2: "/assets/feature-3.png",
                        step3dark: "/assets/feature-4.png",
                        alt: "Why choose us preview",
                    }}
                />
            </div>

            {/* Process */}
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Our Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {["Discovery", "Design", "Development", "Launch"].map((step, i) => (
                        <div
                            key={i}
                            className="p-6 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                        >
                            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{step}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {i === 0 && "We understand your goals & requirements."}
                                {i === 1 && "We design clean, user-friendly layouts."}
                                {i === 2 && "We build fast, responsive websites."}
                                {i === 3 && "We launch & support your site."}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call To Action */}
            <div className="mt-20 text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Take the Next Step</h2>
                <div className="w-full flex flex-col items-center justify-center">
                    <WrapButton className="mt-5" href="/websites" variant='green'>
                        <Globe className="animate-spin" />
                        Choose Your Website
                    </WrapButton>
                </div>
            </div>
        </section>
    )
}
