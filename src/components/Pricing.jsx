import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    desc: 'For small teams evaluating core capabilities.',
    features: ['Up to 50 assets', 'Email alerts', 'Community support'],
    cta: 'Start Free'
  },
  {
    name: 'Growth',
    price: '$299/mo',
    desc: 'Advanced protection and automation at scale.',
    features: ['Up to 1,000 assets', 'SOAR playbooks', 'SSO & MFA', '24/7 support'],
    highlight: true,
    cta: 'Start Trial'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Designed for regulated industries and global orgs.',
    features: ['Unlimited assets', 'Dedicated CSM', 'Premium SLA', 'Custom integrations'],
    cta: 'Talk to Sales'
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Simple, transparent pricing
        </motion.h3>
        <p className="mt-3 text-slate-300 text-center max-w-2xl mx-auto">
          Start free, then scale as you grow. No hidden fees.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative rounded-2xl border ${t.highlight ? 'border-emerald-400/40 bg-slate-900/70' : 'border-emerald-400/20 bg-slate-900/60'} p-6`}
            >
              {t.highlight && (
                <span className="absolute -top-3 right-6 rounded-full bg-emerald-500 text-slate-900 text-xs font-semibold px-2 py-1">
                  Most Popular
                </span>
              )}
              <h4 className="text-white font-semibold">{t.name}</h4>
              <div className="mt-2 text-3xl font-extrabold text-white">{t.price}</div>
              <p className="mt-2 text-slate-300 text-sm">{t.desc}</p>
              <ul className="mt-6 space-y-2 text-slate-200 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#get-started" className={`mt-6 inline-flex justify-center w-full rounded-xl px-4 py-2 font-semibold ${t.highlight ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800/80 text-white border border-white/10'}`}>
                {t.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
