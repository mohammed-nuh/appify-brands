import {
    MinimalCard,
    MinimalCardDescription,
    MinimalCardImage,
    MinimalCardTitle,
} from "@/components/ui/minimal-card"
import WrapButton from '@/components/ui/wrap-button';
import { Globe } from "lucide-react";

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
        <section id="services" className="p-6 py-16 bg-white-500 dark:bg-black-900">
            {/* Services Cards */}
            <h1 className="text-3xl font-bold mx-auto text-center mb-8">
                Our Services
            </h1>
            <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
                Affordable, high-quality websites to help you grow online. Choose the
                perfect package for your needs.
            </p>
            <div className="w-full">
                <div className="flex flex-col justify-center rounded-lg p-4">
                    <div className="flex flex-wrap items-center justify-center">
                        {cards.map((card, index) => (
                            <MinimalCard className="m-4 w-full max-w-md" key={index}>
                                <MinimalCardImage
                                    className="h-64 object-cover"
                                    src={card.src}
                                    alt={card.title}
                                />
                                <MinimalCardTitle>{card.title}</MinimalCardTitle>
                                <MinimalCardDescription>
                                    {card.description}
                                </MinimalCardDescription>
                            </MinimalCard>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pricing Table */}
            <div className="mt-16">
                <h2 className="text-2xl font-bold text-center mb-6">Pricing Plans</h2>
                <div className="overflow-x-auto">
                    <table className="w-full max-w-4xl mx-auto border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                        <thead className="border-gray-200 dark:border-gray-700">
                            <tr>
                                <th className="p-4 text-left">Service</th>
                                <th className="p-4 text-center">Normal</th>
                                <th className="p-4 text-center">Animated</th>
                                <th className="p-4 text-center">Dark + Light Mode</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pricing.map((item, idx) => (
                                <tr
                                    key={idx}
                                    className="border-t border-gray-200 dark:border-gray-700"
                                >
                                    <td className="p-4 font-medium">{item.category}</td>
                                    {item.plans.map((plan, planIdx) => (
                                        <td key={planIdx} className="p-4 text-center">
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
            <div className="mt-20 text-center max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li>🚀 Fast delivery within days</li>
                    <li>🎨 Modern, mobile-first designs</li>
                    <li>💰 Affordable starter pricing</li>
                    <li>🔒 Free live hosting included</li>
                    <li>🤝 Friendly support after launch</li>
                </ul>
            </div>

            {/* Process */}
            <div className="mt-20 text-center max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-white-500 dark:text-black-900">Our Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {["Discovery", "Design", "Development", "Launch"].map((step, i) => (
                        <div
                            key={i}
                            className="p-6 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800"
                        >
                            <h3 className="font-semibold mb-2 text-gray-900">{step}</h3>
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
                <h2 className="text-2xl font-bold mb-4">Take the Next Step</h2>
                <div className="w-full flex flex-col items-center justify-center">
                    <WrapButton className="mt-5" href="/websites" variant='green'>
                        <Globe className="animate-spin " />
                        Choose Your Website
                    </WrapButton>
                </div>
            </div>

        </section>
    )
}
