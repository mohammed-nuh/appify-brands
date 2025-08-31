import { CardCarousel } from "@/components/ui/card-carousel";

export default function TestimonialsSection() {
  const images = [
    { src: "/testimonials/1.png", alt: "Image 1" },
    { src: "/testimonials/2.png", alt: "Image 2" },
    { src: "/testimonials/3.png", alt: "Image 3" },
  ]
  return (
    <section id="testimonials" className="flex flex-col items-center justify-center text-center min-h-screen">
      <div className="">
        <h1
        className="text-5xl font-extrabold mb-6 mt-9
        bg-gradient-to-r from-green-400 via-green-500 to-emerald-600
        bg-clip-text text-transparent animate-gradient"
      >
        What Our Clients Think?
      </h1>
        <CardCarousel
          images={images}
          autoplayDelay={2000}
          showPagination={true}
          showNavigation={true}
        />
      </div>
    </section>
  );
}
