import HoverExpandComponent from '@/app/my_components/HoverExpandComponent';
import WrapButton from '@/components/ui/wrap-button';
import { Globe } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="flex flex-col items-center justify-center text-center min-h-screen">
      <div className='scale-[1.2]'>
        <HoverExpandComponent />
        <div className="w-full flex flex-col items-center justify-center">
          <WrapButton className="mt-5" href="/services" variant='green'>
            <Globe className="animate-spin " />
            View Our Services
          </WrapButton>
        </div>
      </div>
    </section>
  )
}
