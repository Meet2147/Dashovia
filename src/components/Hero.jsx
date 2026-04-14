import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">

      {/* ================= MESH GRADIENT BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Animated mesh orb 1 - Top Left */}
        <motion.div
          animate={{ 
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute"
          style={{
            top: "15%",
            left: "10%",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Animated mesh orb 2 - Top Right */}
        <motion.div
          animate={{ 
            x: [0, -60, 40, 0],
            y: [0, 50, -20, 0],
            scale: [1, 0.8, 1.1, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute"
          style={{
            top: "20%",
            right: "15%",
            width: "250px",
            height: "250px",
            background: "radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, rgba(37, 99, 235, 0.15) 40%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />

        {/* Animated mesh orb 3 - Center */}
        <motion.div
          animate={{ 
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.15, 0.95, 1]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(96, 165, 250, 0.45) 0%, rgba(96, 165, 250, 0.25) 35%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />

        {/* Animated mesh orb 4 - Bottom Left */}
        <motion.div
          animate={{ 
            x: [0, 40, -50, 0],
            y: [0, 30, -40, 0],
            scale: [1, 0.9, 1.2, 1]
          }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
          className="absolute hidden sm:block"
          style={{
            bottom: "10%",
            left: "20%",
            width: "350px",
            height: "350px",
            background: "radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, rgba(147, 197, 253, 0.2) 40%, transparent 70%)",
            filter: "blur(75px)",
          }}
        />

        {/* Animated mesh orb 5 - Bottom Right */}
        <motion.div
          animate={{ 
            x: [0, -40, 50, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.1, 0.85, 1]
          }}
          transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
          className="absolute hidden sm:block"
          style={{
            bottom: "15%",
            right: "10%",
            width: "380px",
            height: "380px",
            background: "radial-gradient(circle, rgba(34, 211, 238, 0.35) 0%, rgba(34, 211, 238, 0.15) 40%, transparent 70%)",
            filter: "blur(65px)",
          }}
        />

        {/* Subtle overlay gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, transparent 0%, rgba(255, 255, 255, 0.3) 100%)",
          }}
        />
      </div>

      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-4 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 z-20 w-full max-w-6xl px-4"
      >
        <div className="flex items-center justify-center gap-1 px-2 py-2 rounded-full bg-gray-900/5 backdrop-blur-md border border-gray-900/10 mx-auto w-fit">
          {["Home", "Products", "About Us", "Contact"].map((item) => (
            <button
              key={item}
              className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm text-gray-800 hover:bg-gray-900/10 hover:text-gray-900 transition-all whitespace-nowrap"
            >
              {item}
            </button>
          ))}
        </div>
      </motion.nav>

      {/* ================= CONTENT ================= */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
      >
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 tracking-tight leading-tight"
        >
          Apps & Extensions
          <br />
          Built for Modern Work
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Dashovia builds fast, minimal, and reliable digital products
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          designed to simplify everyday workflows.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4"
        >
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base">
            Explore Products
          </button>

          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all shadow-lg text-sm sm:text-base">
            Contact Us
          </button>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500"
        >
          Product-focused • Performance-driven • Built to scale
        </motion.p>
      </motion.div>

      {/* ================= NOISE ================= */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </section>
  )
}

/* ================= ANIMATIONS ================= */

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.5 },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}