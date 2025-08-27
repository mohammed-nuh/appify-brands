import Navbar from '@/app/my_components/Navbar';
import HoverExpandComponent from './HoverExpandComponent';
import { Globe } from "lucide-react"
import WrapButton from '@/components/ui/wrap-button';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center text-center pt-10 mt-10">
        <h1
          className="text-4xl sm:text-5xl font-extrabold py-4
        bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 
        bg-clip-text text-transparent animate-gradient"
        >
          Welcome to <span>AppifyBrands</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-2 leading-relaxed">
          We turn brands into apps. 
        </p>

        <div className="w-full flex flex-col items-center justify-center">
          <WrapButton className="mt-5" href="/docs/components/card-carousel" >
            <Globe className="animate-spin " />
            Get started
          </WrapButton>
        </div>
        <HoverExpandComponent />
      </main>
    </>
  );
}
