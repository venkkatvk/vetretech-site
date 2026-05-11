'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Code,
  Mail,
  Menu,
  TerminalSquare,
  Users,
  X,
} from 'lucide-react';

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const serviceData = [
  {
    name: 'AI Adoption Training',
    icon: BrainCircuit,
    subtitle: 'Enterprise enablement programs that convert AI potential into measurable operating leverage.',
    bullets: [
      'Executive AI strategy workshops aligned to board-level risk, governance, and growth priorities.',
      'Department-specific enablement tracks for product, engineering, operations, sales, and support teams.',
      'Prompt and workflow architecture playbooks that standardize quality and reduce rework at scale.',
      'Security, compliance, and responsible-AI guardrails embedded into day-to-day operating procedures.',
      'Pilot-to-production acceleration frameworks with KPI baselines and adoption analytics.',
      'Capability uplift sprints that increase team confidence and reduce change-management friction.',
    ],
  },
  {
    name: 'Technical Recruitment',
    icon: Users,
    subtitle: 'Precision talent acquisition for mission-critical hires across modern digital organizations.',
    bullets: [
      'Role calibration with hiring leaders to define outcome-led scorecards and interview architecture.',
      'High-signal sourcing pipelines spanning software, data, AI/ML, cloud, product, and design.',
      'Structured technical screening focused on systems thinking, delivery rigor, and domain depth.',
      'Market intelligence packs covering compensation, talent availability, and competitive positioning.',
      'Embedded search operations that shorten time-to-hire while preserving quality and culture fit.',
      'Offer-close advisory that improves acceptance rates for strategically important positions.',
    ],
  },
  {
    name: 'SaaS Product Development',
    icon: Code,
    subtitle: 'Full-lifecycle product engineering for resilient, scalable, and AI-ready SaaS platforms.',
    bullets: [
      'Discovery-to-roadmap facilitation that translates business goals into prioritized product increments.',
      'UX and interaction design systems optimized for conversion, retention, and enterprise usability.',
      'Cloud-native architecture and full-stack delivery with observability and performance from day one.',
      'Modern API and data-layer implementation enabling integrations, analytics, and AI feature velocity.',
      'DevSecOps delivery pipelines with test automation, release governance, and reliability standards.',
      'Post-launch optimization cycles focused on usage insights, activation, and product-led growth.',
    ],
  },
];

const resultCards = [
  { label: 'Median Time-to-Hire Reduction', value: '43%', detail: 'Through role scorecards and high-signal candidate funnels.' },
  { label: 'AI Workflow Throughput Gain', value: '2.4x', detail: 'After adoption training and operational integration programs.' },
  { label: 'Delivery Predictability', value: '96%', detail: 'Milestones delivered on schedule across SaaS implementation tracks.' },
  { label: 'Stakeholder Satisfaction', value: '4.8/5', detail: 'Leadership-rated strategic clarity and execution confidence.' },
  { label: 'Production Defect Drop', value: '38%', detail: 'By introducing robust engineering quality controls and observability.' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-lg shadow-slate-900/20">
            <TerminalSquare size={22} />
          </div>
          <span className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Vetre<span className="text-indigo-600">Tech</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">About</a>
          <a href="#services" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">Services</a>
          <a href="#results" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">Results</a>
          <a href="#contact" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">Contact</a>
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="btn-shimmer inline-flex items-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white">
            Book a Strategy Call
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex rounded-lg p-2 text-slate-600 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="space-y-4 border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium text-slate-700">About</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium text-slate-700">Services</a>
          <a href="#results" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium text-slate-700">Results</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium text-slate-700">Contact</a>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
    variants={sectionReveal}
    className="bg-grid-noise relative overflow-hidden pt-20 sm:pt-28"
  >
    <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mx-auto max-w-4xl text-center">
        <motion.p variants={cardReveal} className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm">
          Enterprise AI, Talent, and Product Delivery
        </motion.p>
        <motion.h1 variants={cardReveal} className="mt-6 text-5xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-7xl">
          Build durable digital advantage with
          <span className="block bg-gradient-to-r from-indigo-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
            intelligent capability systems
          </span>
        </motion.h1>
        <motion.p variants={cardReveal} className="mx-auto mt-7 max-w-2xl text-lg text-slate-600">
          Vetre TechSolutions equips leadership teams with AI adoption depth, hard-to-hire technical talent, and full-cycle SaaS execution designed for sustained enterprise growth.
        </motion.p>
        <motion.div variants={cardReveal} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#services" className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white">
            Explore Services <ArrowRight size={16} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:text-slate-900">
            Talk to an Advisor
          </a>
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
);

const About = () => (
  <motion.section
    id="about"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer}
    className="bg-white py-20 sm:py-24"
  >
    <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <motion.div variants={cardReveal} className="surface-card rounded-3xl p-8 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Our Point of View</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl">
          Strategy, talent, and execution in one operating partner.
        </h2>
        <p className="mt-5 text-base leading-7 text-slate-600">
          We partner with scaling organizations that need executive-grade thinking and delivery reliability. Our model closes the gap between ambitious transformation plans and measurable business outcomes.
        </p>
      </motion.div>
      <motion.div variants={cardReveal} className="surface-card rounded-3xl p-8 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">Trusted Delivery Model</p>
        <ul className="mt-5 space-y-4 text-sm text-slate-600 sm:text-base">
          <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-indigo-500" />Leadership-aligned strategy workshops with direct execution plans.</li>
          <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-indigo-500" />Cross-functional teams calibrated for speed, quality, and accountability.</li>
          <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-indigo-500" />Transparent milestones, measurable KPIs, and decision-ready reporting.</li>
        </ul>
      </motion.div>
    </div>
  </motion.section>
);

const HorizontalServices = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-68%']);

  return (
    <section id="services" ref={sectionRef} className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionReveal}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Service Showcase</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-slate-900 sm:text-5xl">
            Scroll to navigate our core capability stack
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Our integrated model combines organizational AI maturity, precision hiring, and product engineering to move from strategic intent to executed results.
          </p>
        </motion.div>
      </div>

      <div className="mt-14 hidden h-[260vh] lg:block">
        <div className="sticky top-24 overflow-hidden px-6">
          <motion.div style={{ x }} className="flex w-[260vw] gap-8">
            {serviceData.map((service) => (
              <article key={service.name} className="surface-card w-[78vw] max-w-[860px] flex-shrink-0 rounded-3xl p-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-200">
                  <service.icon size={24} />
                </div>
                <h3 className="text-3xl font-semibold tracking-[-0.025em] text-slate-900">{service.name}</h3>
                <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">{service.subtitle}</p>
                <ul className="mt-7 space-y-4 text-sm text-slate-600 sm:text-base">
                  {service.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="mt-0.5 text-indigo-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 lg:hidden lg:px-8"
      >
        {serviceData.map((service) => (
          <motion.article key={service.name} variants={cardReveal} className="surface-card rounded-3xl p-7 sm:p-9">
            <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 text-white">
              <service.icon size={20} />
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.025em] text-slate-900">{service.name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{service.subtitle}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {service.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 text-indigo-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

const ResultsBento = () => (
  <section id="results" className="bg-white py-20 sm:py-24">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <motion.div variants={sectionReveal} className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">Results</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-slate-900 sm:text-5xl">
          Outcome-led delivery at enterprise standards
        </h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-6">
        {resultCards.map((card, index) => {
          const gridSpan =
            index === 0
              ? 'md:col-span-3'
              : index === 1
                ? 'md:col-span-3'
                : index === 2
                  ? 'md:col-span-2'
                  : index === 3
                    ? 'md:col-span-2'
                    : 'md:col-span-2';

          return (
            <motion.article
              key={card.label}
              variants={cardReveal}
              whileHover={{ y: -6, rotateX: 1.8, rotateY: -1.8, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className={`surface-card rounded-2xl p-6 ${gridSpan}`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{card.label}</p>
              <p className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-slate-900">{card.value}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.detail}</p>
            </motion.article>
          );
        })}
      </div>
    </motion.div>
  </section>
);

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    window.location.href = 'mailto:hello@vetretech.com?subject=New Inquiry from VetreTech Website';
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={sectionReveal} className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-slate-900 sm:text-5xl">Bring your roadmap. We will bring execution.</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">Tell us where you need momentum and we will design a delivery model around your priorities.</p>
        </motion.div>

        <motion.div variants={staggerContainer} className="mt-12 grid gap-8 lg:grid-cols-5">
          <motion.div variants={cardReveal} className="surface-card rounded-3xl p-7 lg:col-span-2">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <Mail size={22} />
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-slate-900">Connect with our team</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              For service inquiries, partnerships, and advisory requests, email us directly and we will respond quickly.
            </p>
            <a href="mailto:hello@vetretech.com" className="mt-6 inline-flex text-base font-semibold text-indigo-600 hover:text-indigo-500">
              hello@vetretech.com
            </a>
          </motion.div>

          <motion.div variants={cardReveal} className="surface-card rounded-3xl p-7 lg:col-span-3 sm:p-9">
            {isSubmitted ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                <CheckCircle2 size={46} className="text-emerald-500" />
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-slate-900">Request initiated</h3>
                <p className="mt-2 max-w-md text-sm text-slate-600 sm:text-base">
                  Your default mail client should now open a draft addressed to hello@vetretech.com.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="mt-5 text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-semibold text-slate-700">
                    First name
                    <input required type="text" name="first-name" className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-indigo-500 transition focus:ring-2" />
                  </label>
                  <label className="text-sm font-semibold text-slate-700">
                    Last name
                    <input required type="text" name="last-name" className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-indigo-500 transition focus:ring-2" />
                  </label>
                </div>
                <label className="block text-sm font-semibold text-slate-700">
                  Email
                  <input required type="email" name="email" className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-indigo-500 transition focus:ring-2" />
                </label>
                <label className="block text-sm font-semibold text-slate-700">
                  Message
                  <textarea required name="message" rows={5} className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-indigo-500 transition focus:ring-2" />
                </label>
                <button type="submit" className="btn-shimmer inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const Footer = () => (
  <footer className="border-t border-slate-200 bg-white py-10">
    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
          <TerminalSquare size={16} />
        </div>
        <span className="font-semibold tracking-tight text-slate-900">
          Vetre<span className="text-indigo-600">Tech</span>
        </span>
      </div>
      <p>&copy; {new Date().getFullYear()} Vetre TechSolutions. All rights reserved.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      <main>
        <Hero />
        <About />
        <HorizontalServices />
        <ResultsBento />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}