import { motion } from 'framer-motion'
import { Shield, Radar, Lock, Cloud, Cpu, Bell } from 'lucide-react'

const items = [
  {
    icon: Shield,
    title: 'Adaptive Firewall',
    desc: 'Continuously learns and adapts to new threats across cloud, network, and endpoint layers.'
  },
  {
    icon: Radar,
    title: 'Threat Hunting AI',
    desc: 'Proactively scans telemetry to surface anomalies, lateral movement, and insider risks.'
  },
  {
    icon: Lock,
    title: 'Zero-Trust Access',
    desc: 'Context-aware authentication with posture-based policies and just-in-time permissions.'
  },
  {
    icon: Cloud,
    title: 'Cloud Posture',
    desc: 'Continuously evaluates misconfigurations and enforces guardrails across multi-cloud.'
  },
  {
    icon: Cpu,
    title: 'Runtime Protection',
    desc: 'WAF, RASP, and container hardening bundled into a single unified runtime shield.'
  },
  {
    icon: Bell,
    title: 'Automated Response',
    desc: 'Playbooks that isolate, remediate, and notify in seconds with full audit trails.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-center"
        >
          Unified security, zero compromise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-slate-300 text-center max-w-2xl mx-auto"
        >
          A single platform that brings prevention, detection, and response together with AI-driven insight.
        </motion.p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6"
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-emerald-400/10 blur-2xl group-hover:bg-emerald-400/20 transition-colors" />
              <Icon className="w-6 h-6 text-emerald-400" />
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
