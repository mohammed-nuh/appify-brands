export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center text-center min-h-screen px-6 py-20"
    >
      <h1
        className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight
        bg-gradient-to-r from-green-400 via-green-500 to-emerald-600
        bg-clip-text text-transparent"
      >
        About Us
      </h1>

      <p className="max-w-3xl text-xl md:text-2xl font-medium leading-relaxed text-muted-foreground">
        We specialize in building modern frontend websites using{" "}
        <span className="font-bold text-foreground">React</span> and{" "}
        <span className="font-bold text-foreground">Next.js</span>.  
        Our projects are styled with{" "}
        <span className="font-bold text-foreground">Tailwind CSS</span> and enhanced
        with powerful UI libraries like{" "}
        <span className="font-bold text-foreground">shadcn/ui</span> and{" "}
        <span className="font-bold text-foreground">Skiper UI</span>, ensuring
        beautiful, responsive, and user-friendly digital experiences.
      </p>
    </section>
  )
}
