import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#0B1437]">
      <div className="absolute inset-0 opacity-60">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1437]/60 via-[#0B1437]/80 to-[#0B1437] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-300/80 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            Trusted Opportunities • Institutional Discipline
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white">
            Build Wealth Through Smart Real Estate Investments
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-xl">
            Exclusive access to off‑market deals, tax‑advantaged structures, and passive income with risk‑mitigated returns.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#lead" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-amber-400 text-slate-900 font-semibold shadow-lg shadow-amber-400/20 hover:bg-amber-300 transition">Get Deal Flow</a>
            <a href="#about" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition">Learn More</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;