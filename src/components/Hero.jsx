import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-950 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-emerald-400/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-slate-900/60 px-3 py-1 text-emerald-300 text-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Zero-Trust Cloud Security Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            Secure every edge with autonomous defense
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl"
          >
            Real-time threat detection, policy orchestration, and proactive remediation powered by AI. Built for modern enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="#get-started" className="relative inline-flex items-center rounded-xl bg-emerald-500 text-slate-900 font-semibold px-5 py-3">
              <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 hover:opacity-100 transition-opacity" />
              Start Free Trial
            </a>
            <a href="#features" className="text-slate-200 hover:text-emerald-300 transition-colors">
              View Features →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-slate-300"
          >
            {[
              ['99.99%', 'Uptime'],
              ['<2m', 'MTTR'],
              ['400ms', 'Detection'],
              ['SOC2', 'Certified'],
            ].map(([stat, label]) => (
              <div key={label} className="rounded-xl border border-emerald-400/20 bg-slate-900/60 p-4">
                <div className="text-xl font-semibold text-white">{stat}</div>
                <div className="text-xs text-slate-400">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-5" />
      </div>
    </section>
  )
}
