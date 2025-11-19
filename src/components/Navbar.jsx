import { useState } from 'react'
import { Menu, X, ShieldCheck } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#features', label: 'Features' },
    { href: '#solutions', label: 'Solutions' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#resources', label: 'Resources' },
  ]

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="relative flex items-center justify-between rounded-2xl border border-emerald-400/20 bg-slate-900/60 backdrop-blur-xl px-4 sm:px-6 py-3 shadow-[0_0_40px_rgba(16,185,129,0.08)]">
          <a href="#home" className="inline-flex items-center gap-2">
            <span className="relative inline-flex">
              <span className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full" />
              <ShieldCheck className="relative w-6 h-6 text-emerald-400" />
            </span>
            <span className="text-white font-semibold tracking-tight">SentinelGuard</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-slate-300 hover:text-emerald-300 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-slate-300 hover:text-emerald-300 transition-colors">Sign in</a>
            <a
              href="#get-started"
              className="relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-emerald-400 to-emerald-600 text-slate-900 font-semibold px-4 py-2 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity" />
              <span>Get Started</span>
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg border border-emerald-400/20 text-slate-200"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mx-auto max-w-7xl px-6"
          >
            <div className="rounded-2xl border border-emerald-400/20 bg-slate-900/70 backdrop-blur-xl px-6 py-4 mt-2">
              <div className="flex flex-col gap-3">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-slate-200 py-2 border-b border-white/5 last:border-0"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
                <div className="flex items-center gap-3 pt-2">
                  <a href="#" className="text-slate-300">Sign in</a>
                  <a href="#get-started" className="ml-auto rounded-lg bg-emerald-500 text-slate-900 font-semibold px-4 py-2">Get Started</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
