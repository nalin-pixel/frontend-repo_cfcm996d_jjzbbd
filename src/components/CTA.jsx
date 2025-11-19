import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="get-started" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-emerald-400/30 bg-slate-900/70 p-8 sm:p-12">
          <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-white"
          >
            Ready to harden your attack surface?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-2 text-slate-300"
          >
            Get started in minutes. No credit card required.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Work email"
              className="w-full rounded-xl bg-slate-800/80 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
            />
            <button className="rounded-xl bg-emerald-500 text-slate-900 font-semibold px-6 py-3">
              Request Access
            </button>
          </motion.div>
          <p className="mt-3 text-xs text-slate-400">14-day trial • Cancel anytime • SOC2 & ISO 27001</p>
        </div>
      </div>
    </section>
  )
}
