import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-card"

export default function ServicesSection() {
  const cards = [
    {
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies like React, Next.js, and Tailwind CSS.",
      src: "services/1.jpg",
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive user interfaces designed to enhance user experience and engagement.",
      src: "services/2.jpg",
    },
    {
      title: "Brand Strategy",
      description:
        "Comprehensive branding solutions to help your business stand out in the digital landscape.",
      src: "services/3.jpg",
    },
  ]

  return (
    <section id="services" className="p-6 py-16 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mx-auto text-center mb-8">Our Services</h1>
      <div className="w-full">
        <div className="flex flex-col justify-center rounded-lg p-4">
          <div className="flex flex-wrap items-center justify-center">
            {cards.map((card, index) => (
              <MinimalCard className="m-4 w-full max-w-md" key={index}>
                <MinimalCardImage
                  className="h-64"
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
    </section>
  );
}
