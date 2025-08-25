import Navbar from '@/app/my_components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to AppifyBrands</h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-6">
          We’re a creative frontend team building stunning, responsive portfolios 
          for clients to showcase their brand and work.  
        </p>
      </main>
    </>
  );
}
