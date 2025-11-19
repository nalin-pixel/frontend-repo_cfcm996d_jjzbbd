import { motion } from 'framer-motion'

const logs = [
  { t: '12:01:22', m: 'New device enrolled: MacOS • Compliance OK' },
  { t: '12:02:11', m: 'East DC: Suspicious lateral movement blocked' },
  { t: '12:02:44', m: 'Kubernetes: Pod-to-pod policy updated' },
  { t: '12:03:09', m: 'WAF blocked 403: SQL injection attempt' },
  { t: '12:03:40', m: 'User MFA challenge passed: geo anomaly' },
]

export default function Showcase() {
  return (
    <section id="solutions" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <h3 className="text-3xl font-bold text-white">Live telemetry that works for you</h3>
          <p className="mt-3 text-slate-300">
            Streamlined dashboards, human-friendly alerts, and automated runbooks empower your team to respond in seconds.
          </p>
          <div className="mt-6 space-y-3">
            {logs.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-emerald-400/20 bg-slate-900/60 p-4 text-sm text-slate-200"
              >
                <span className="text-emerald-400 mr-2">{l.t}</span>
                {l.m}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 lg:order-2"
        >
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-emerald-400/20 bg-slate-900/60 p-6">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_60%)]" />
            <div className="relative h-full w-full grid grid-rows-3 gap-3">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="rounded-lg bg-slate-800/60 border border-white/5"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
