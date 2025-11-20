const logos = [
  { name: 'Blackstone', url: '/logos/blackstone.svg' },
  { name: 'Brookfield', url: '/logos/brookfield.svg' },
  { name: 'CBRE', url: '/logos/cbre.svg' },
  { name: 'JLL', url: '/logos/jll.svg' }
];

const testimonials = [
  {
    quote: 'Consistently sources deals ahead of the market with disciplined execution.',
    author: 'Managing Director, Family Office'
  },
  {
    quote: 'Transparent reporting and reliable quarterly distributions.',
    author: 'Accredited Investor'
  }
];

const Trust = () => {
  return (
    <section className="bg-[#0B1437] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center gap-8 opacity-70">
          {logos.map(l => (
            <div key={l.name} className="h-8 w-28 bg-white/5 rounded-md border border-white/10 flex items-center justify-center text-slate-300 text-xs">
              {l.name}
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl bg-white/[0.03] border border-white/10 p-6">
              <p className="text-slate-200">“{t.quote}”</p>
              <p className="mt-3 text-slate-400 text-sm">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;