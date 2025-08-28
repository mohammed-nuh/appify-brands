import HoverExpandComponent from '@/app/my_components/HoverExpandComponent';
import WrapButton from '@/components/ui/wrap-button';
import { Globe } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="p-6 py-16 bg-white-500 dark:bg-black-900">
        <HoverExpandComponent />
        <div className="w-full flex flex-col items-center justify-center">
          <WrapButton className="mt-5" href="/services" variant='green'>
            <Globe className="animate-spin " />
            View Our Services
          </WrapButton>
        </div>
    </section>
  )
}
