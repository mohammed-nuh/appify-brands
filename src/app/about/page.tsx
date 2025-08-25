import Navbar from '@/app/my_components/Navbar';

export default function AboutPage() {
  return (
    <>
        <Navbar />
        <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-4">
            Welcome to <span className="font-semibold">AppifyBrands</span> — a creative
            agency founded by two passionate React developers, Nuh and Ibrahim.
            We specialize in crafting beautiful, functional, and high-performance
            websites for businesses of all sizes.
        </p>
        <p>
            Our mission is simple: deliver modern, user-friendly web experiences
            that help brands stand out. Whether you’re a startup or an established
            company, we bring your vision to life through innovative design and
            clean code.
        </p>
        </main>
    </>
  );
}
