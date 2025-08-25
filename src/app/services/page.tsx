import Navbar from '@/app/my_components/Navbar';

export default function ServicesPage() {
  return (
    <>
        <Navbar />
        <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        <p className="mb-4">
            At <span className="font-semibold">AppifyBrands</span>, we offer a comprehensive
            suite of web development services designed to elevate your digital presence.
            From custom website development to mobile-responsive designs, we deliver
            solutions that drive results.
        </p>
        <p>
            Our services include React development, Next.js applications, UI/UX design,
            e-commerce solutions, and ongoing maintenance. We work closely with clients
            to understand their unique needs and deliver tailored solutions that exceed
            expectations.
        </p>
        </main>
    </>
  );
}
