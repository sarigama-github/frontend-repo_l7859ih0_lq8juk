const About = () => {
  return (
    <section id="about" className="bg-[#0B1437] py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Experience That Compounds</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Our team has been acquiring and repositioning hospitality and infill assets across select U.S. markets for over a decade. We focus on direct-to-owner sourcing, operational turnarounds, and entitled land strategies with clear value-creation levers.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/[0.03] border border-white/10 p-5">
              <p className="text-3xl font-semibold text-amber-300">$250M+</p>
              <p className="text-slate-300 text-sm mt-1">Combined transaction experience</p>
            </div>
            <div className="rounded-xl bg-white/[0.03] border border-white/10 p-5">
              <p className="text-3xl font-semibold text-amber-300">10+ Years</p>
              <p className="text-slate-300 text-sm mt-1">Hospitality and infill expertise</p>
            </div>
            <div className="rounded-xl bg-white/[0.03] border border-white/10 p-5">
              <p className="text-3xl font-semibold text-amber-300">Proprietary</p>
              <p className="text-slate-300 text-sm mt-1">Deal sourcing and underwriting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;