import Navbar from '@/app/my_components/Navbar';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">
          Ready to start your next project? Get in touch with the team at
          <span className="font-semibold">AppifyBrands</span>. We're here to discuss
          your ideas, provide expert guidance, and bring your vision to life with
          cutting-edge web solutions.
        </p>
        <p>
          Whether you have a specific project in mind or just want to explore possibilities,
          we'd love to hear from you. Reach out today and let's create something
          amazing together.
        </p>
      </main>
    </>
  );
}
