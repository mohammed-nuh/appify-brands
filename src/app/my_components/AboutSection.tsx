export default function AboutSection() {
  return (
    <section id="about" className="flex flex-col items-center justify-center text-center min-h-screen">
      <h1 className="text-3xl font-bold mb-12 text-center">About Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="/nuh.jpg" // replace with your image path
            alt="Nuh"
            className="w-40 h-40 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Center Text */}
        <div className="text-center md:text-left">
          <p className="mb-4">
            Welcome to <span className="font-semibold">AppifyBrands</span>, a
            creative agency founded by two passionate React developers,{" "}
            <span className="font-semibold">Nuh</span> and{" "}
            <span className="font-semibold">Ibrahim</span>.
          </p>
          <p>
            We specialize in crafting beautiful, functional, and high-performance
            websites for businesses of all sizes. Our mission is simple: deliver
            modern, user-friendly web experiences that help brands stand out.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/ibrahim.jpg" // replace with your image path
            alt="Ibrahim"
            className="w-40 h-40 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
