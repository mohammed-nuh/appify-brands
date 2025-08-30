import FlipLink from "@/components/ui/text-effect-flipper";

export default function ContactSection() {
  return (
    <section id="contact" className="flex flex-col items-center justify-center text-center min-h-screen">
      <div className="flex flex-col items-center gap-6">
        <FlipLink 
          href="mailto:your-email@gmail.com" 
          icon={
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-red-600 dark:text-red-500">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
            </svg>
          }
        >
          Gmail
        </FlipLink>
        <FlipLink 
          href="https://twitter.com/your-handle" 
          icon={
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500 dark:text-blue-400">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          }
        >
          Twitter
        </FlipLink>
      </div>
    </section>
  );
}
