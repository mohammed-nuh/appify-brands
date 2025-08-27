import Navbar from '@/app/my_components/Navbar';
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-card"

export default function ServicesPage() {
  const cards = [
    {
      title: "Sick title",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
      src: "services/1.jpg",
    },
    {
      title: "Sick title",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
      src: "services/2.jpg",
    },
    {
      title: "Sick title",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
      src: "services/3.jpg",
    },
  ]
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold mx-auto text-center">Our Services</h1>
        <div className="w-full">
          <div className="flex flex-col justify-center rounded-lg p-4">
            <div className="flex flex-wrap items-center justify-center ">
              {cards.map((card, index) => (
                <MinimalCard className="m-2 w-[460px] " key={index}>
                  <MinimalCardImage
                    className="h-[320px]"
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
      </main>
    </>
  );
}