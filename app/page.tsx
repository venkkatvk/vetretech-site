'use client';

import React, { useState } from 'react';

import {
  BrainCircuit,
  Users,
  Code,
  ArrowRight,
  Mail,
  TerminalSquare,
  Menu,
  X,
  CheckCircle2
} from 'lucide-react';

// --- COMPONENT: Header ---
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <TerminalSquare size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              Vetre<span className="text-indigo-600">Tech</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">About Us</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Contact</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-4 shadow-lg">
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-slate-700">Services</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-slate-700">About Us</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-slate-700">Contact</a>
        </div>
      )}
    </header>
  );
};

// --- COMPONENT: Hero ---
const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-32 sm:pt-32 sm:pb-40">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-multiply"></div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
          Build the future with <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
            Intelligence & Talent
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          VetreTech offers elite AI adoption training, precision technical recruitment, and scalable SaaS product development to propel your organization forward.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#services"
            className="rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
          >
            Explore Our Services
          </a>
          <a href="#contact" className="text-sm font-semibold leading-6 text-slate-900 flex items-center gap-1 group">
            Partner with us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: Services ---
const Services = () => {
  const features = [
    {
      name: 'AI Adoption Training',
      description: 'Move from generic awareness of AI tools to practical, role-specific mastery. We provide executive briefings on system capabilities and risks, hands-on workshops for technical and non-technical staff, workflow audits to identify genuine AI utility, and policy governance support.',
      icon: BrainCircuit,
    },
    {
      name: 'Technical Recruitment',
      description: 'Precision sourcing, screening, and placement of candidates in highly skilled roles across software engineering, data, AI/ML, product, and design. Offering contingent, retained, and embedded search models alongside strategic talent advisory.',
      icon: Users,
    },
    {
      name: 'SaaS Product Development',
      description: 'End-to-end design and engineering of cloud-delivered software. From initial discovery and UX design to architecture, full-stack engineering, and cloud/DevOps deployment. We build robust systems integrated with modern AI feature pipelines.',
      icon: Code,
    },
  ];

  return (
    <section id="services" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Industry Expertise</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to scale
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            We provide the trifecta of modern business growth: the intelligence to automate, the talent to execute, and the infrastructure to scale.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-slate-900">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-6 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: Contact ---
const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real Next.js environment, this would call an API route. 
    // Here we simulate the intent to mailto:hello@vetretech.com
    setIsSubmitted(true);
    window.location.href = "mailto:hello@vetretech.com?subject=New Inquiry from VetreTech Website";
  };

  return (
    <section id="contact" className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center">Let's build something great.</h2>
        <p className="mt-2 text-lg leading-8 text-slate-600 text-center">
          Reach out to discuss training, recruitment, or your next software project.
        </p>

        <div className="mt-16 flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <div className="flex gap-4 items-start">
              <div className="bg-indigo-50 p-3 rounded-lg text-indigo-600">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Email Us</h3>
                <p className="mt-1 text-slate-600">hello@vetretech.com</p>
              </div>
            </div>
            {/* Additional placeholders for when the company verifies them */}
            <div className="flex gap-4 items-start opacity-50 grayscale cursor-not-allowed" title="Address to be confirmed">
              <div className="bg-slate-100 p-3 rounded-lg text-slate-600">
                <Menu size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Headquarters</h3>
                <p className="mt-1 text-slate-600">[City / Location]</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 bg-slate-50 p-8 rounded-2xl border border-slate-100">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-12 text-green-700">
                <CheckCircle2 size={48} className="text-green-500" />
                <div>
                  <h3 className="text-xl font-bold">Request Initiated!</h3>
                  <p className="mt-2 text-slate-600">Your default mail client should now be open to email hello@vetretech.com.</p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-slate-900">First name</label>
                    <div className="mt-2.5">
                      <input type="text" name="first-name" id="first-name" required className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-slate-900">Last name</label>
                    <div className="mt-2.5">
                      <input type="text" name="last-name" id="last-name" required className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-900">Email</label>
                  <div className="mt-2.5">
                    <input type="email" name="email" id="email" required className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-900">Message</label>
                  <div className="mt-2.5">
                    <textarea name="message" id="message" rows={4} required className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={''} />
                  </div>
                </div>
                <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: Footer ---
const Footer = () => {
  return (
    <footer className="bg-slate-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-white">
                <TerminalSquare size={18} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Vetre<span className="text-indigo-400">Tech</span>
              </span>
            </div>
            <p className="text-sm leading-6 text-slate-300 max-w-xs">
              Empowering organizations through targeted AI adoption, specialized technical recruitment, and robust SaaS engineering.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#services" className="text-sm leading-6 text-slate-300 hover:text-white transition-colors">AI Adoption Training</a></li>
                  <li><a href="#services" className="text-sm leading-6 text-slate-300 hover:text-white transition-colors">Technical Recruitment</a></li>
                  <li><a href="#services" className="text-sm leading-6 text-slate-300 hover:text-white transition-colors">SaaS Development</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#about" className="text-sm leading-6 text-slate-300 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#contact" className="text-sm leading-6 text-slate-300 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-slate-300 hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-300 hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-300 hover:text-white transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-slate-400">
            &copy; {new Date().getFullYear()} [Legal Entity Name - To Provide]. All rights reserved. Registered in [Jurisdiction].
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- MAIN APP COMPONENT ---
export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-200 selection:text-indigo-900">
      <Header />
      <main>
        <Hero />

        {/* Placeholder About Section - Requested by scaffold but pending content */}
        <section id="about" className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-slate-50 border border-slate-100 p-8 sm:p-16 text-center">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Our Story</h2>
              <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto italic">
                [Placeholder: A 2 to 4 sentence company story detailing why VetreTech was founded and what beliefs drive the work will be populated here before launch.]
              </p>
            </div>
          </div>
        </section>

        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}