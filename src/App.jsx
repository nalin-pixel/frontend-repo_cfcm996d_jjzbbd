import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_60%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
        <CTA />
      </main>
      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} SentinelGuard. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-emerald-300">Privacy</a>
            <a href="#" className="hover:text-emerald-300">Terms</a>
            <a href="#" className="hover:text-emerald-300">Security</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
