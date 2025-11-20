import { useState } from 'react';

const investorTypes = [
  'Accredited Investor',
  'Family Office',
  'RIA / Advisor',
  'Institutional',
  'Other'
];

const LeadForm = () => {
  const [status, setStatus] = useState({ state: 'idle' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading' });

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('Failed to submit');
      const data = await res.json();
      setStatus({ state: 'success', id: data.id });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({ state: 'error', message: err.message });
    }
  };

  return (
    <section id="lead" className="bg-[#0B1437] py-20 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Request Our Current Deal Flow</h2>
          <p className="mt-3 text-slate-300">Share a few details to receive off‑market opportunities and quarterly updates.</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Full Name</label>
              <input name="name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Jane Doe" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email</label>
                <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="jane@firm.com" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Phone</label>
                <input name="phone" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="(555) 123-4567" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Investor Type</label>
              <select name="investor_type" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400">
                <option value="" disabled selected>Choose one...</option>
                {investorTypes.map((t) => (
                  <option key={t} value={t} className="bg-[#0B1437]">{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Message (optional)</label>
              <textarea name="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Investment goals or questions" />
            </div>
            <button disabled={status.state==='loading'} className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 transition">
              {status.state==='loading' ? 'Submitting…' : 'Request Access'}
            </button>
            {status.state==='success' && (
              <p className="text-emerald-400 text-sm">Thank you — your request was received.</p>
            )}
            {status.state==='error' && (
              <p className="text-rose-400 text-sm">Something went wrong. Please try again.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;