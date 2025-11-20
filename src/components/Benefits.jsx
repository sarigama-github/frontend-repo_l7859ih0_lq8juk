import { ShieldCheck, Building2, PiggyBank, Diamond } from 'lucide-react';

const items = [
  {
    icon: Building2,
    title: 'Exclusive Off‑Market Access',
    text: 'Direct sourcing of hotels, motels, and infill lots before they reach the open market.'
  },
  {
    icon: PiggyBank,
    title: 'Tax‑Advantaged Structures',
    text: 'Leverage 1031 exchanges, cost segregation, and optimized entity design.'
  },
  {
    icon: ShieldCheck,
    title: 'Risk‑Mitigated Returns',
    text: 'Institutional underwriting, conservative leverage, and diversified pipelines.'
  },
  {
    icon: Diamond,
    title: 'Hands‑Off Portfolio Growth',
    text: 'Passive income with professional asset management and transparent reporting.'
  }
];

const Benefits = () => {
  return (
    <section className="bg-[#0B1437] py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Why Partner With Us</h2>
          <p className="mt-3 text-slate-300">Aligned interests, institutional discipline, and access to proprietary deal flow.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-300 to-amber-500 text-slate-900 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;