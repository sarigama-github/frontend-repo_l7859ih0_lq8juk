import Hero from './components/Hero';
import Benefits from './components/Benefits';
import About from './components/About';
import LeadForm from './components/LeadForm';
import Trust from './components/Trust';

function App() {
  return (
    <div className="min-h-screen bg-[#0B1437] text-white">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0B1437]/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-300 to-amber-500" />
            <span className="font-semibold tracking-tight">Apex Real Estate Partners</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
            <a href="#lead" className="hover:text-white">Get Deal Flow</a>
            <a href="#about" className="hover:text-white">About</a>
          </nav>
          <a href="#lead" className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 transition">Request Access</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Trust />
        <Benefits />
        <About />
        <LeadForm />
      </main>

      <footer className="bg-[#0B1437] border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Apex Real Estate Partners. All rights reserved.</p>
          <p>For accredited investors and qualified purchasers only.</p>
        </div>
      </footer>
    </div>
  )
}

export default App