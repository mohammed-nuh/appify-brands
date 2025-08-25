import Navbar from '@/app/my_components/Navbar';

export default function TestimonialsPage() {
  return (
    <>
        <Navbar />
            <main className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Client Testimonials</h1>
            <p className="mb-4">
                Don't just take our word for it — hear what our clients have to say about
                working with <span className="font-semibold">AppifyBrands</span>. We're proud
                to have helped businesses across various industries achieve their digital goals
                and exceed their expectations.
            </p>
            <p>
                From startups to established enterprises, our clients consistently praise our
                attention to detail, technical expertise, and commitment to delivering
                exceptional results. Their success stories inspire us to continue pushing
                the boundaries of web development.
            </p>
            </main>
    </>
  );
}
