"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion } from "framer-motion"
import { portfolioData } from "@/lib/portfolio-data"
import { Mail, Linkedin, Download, Briefcase, GraduationCap, Code } from "lucide-react"

export default function Hero() {
  const { hero, tagline, name, title } = portfolioData.en;
  const t = portfolioData.en;

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden selection:bg-cyan-500/30">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 px-6">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-slate-950 to-slate-950 h-full w-full" />
        </div>

        <div className="z-10 text-center space-y-8 max-w-4xl mx-auto">
          <motion.div {...fadeIn}>
            <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl ring-4 ring-cyan-500/30">
              <img src="/profile.jpg" alt={name} className="w-full h-full object-cover object-top" />
            </div>
            <Badge variant="outline" className="text-cyan-400 border-cyan-400/30 py-1.5 px-4 text-sm tracking-wider uppercase mb-6">
              Available for Collaboration
            </Badge>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-xl md:text-3xl text-slate-300 font-light">
              {title}
            </p>
            <p className="text-cyan-400 font-mono text-sm md:text-base">
              {tagline}
            </p>
          </motion.div>

          <motion.p
            className="max-w-2xl mx-auto text-slate-400 leading-relaxed text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {hero.description}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-900/20 gap-2">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white gap-2">
              <a href="/Ahmed_Radwan_CV-2025.pdf" download>
                <Download size={18} /> {t.downloadCV}
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.experience.title}</h2>
            <p className="text-slate-400">{t.experience.subtitle}</p>
          </div>

          <div className="space-y-12">
            {t.experience.roles.map((role: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-8 relative"
              >
                {/* Timeline Connector */}
                <div className="hidden md:block absolute left-[27px] top-12 bottom-[-48px] w-0.5 bg-slate-800 last:hidden" />

                <div className="flex-shrink-0">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ring-4 ring-slate-950 ${role.type === 'work' ? 'bg-cyan-900/50 text-cyan-400' : 'bg-blue-900/50 text-blue-400'}`}>
                    {role.type === 'work' ? <Briefcase size={24} /> : <GraduationCap size={24} />}
                  </div>
                </div>

                <div className="flex-1 bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-100">{role.title}</h3>
                      <p className="text-cyan-400">{role.org}</p>
                    </div>
                    <Badge variant="secondary" className="w-fit bg-slate-800 text-slate-400">{role.period}</Badge>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{role.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Technical Skills */}
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <Code className="text-cyan-400" size={28} />
              <h2 className="text-2xl font-bold">{t.skills.technical}</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {t.skills.techList.map((skill: string, index: number) => (
                <span key={index} className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-blue-400" size={28} />
              <h2 className="text-2xl font-bold">{t.skills.certifications}</h2>
            </div>
            <ul className="space-y-4">
              {t.skills.certList.map((cert: string, index: number) => (
                <li key={index} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-900/5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">{t.contact.title}</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">{t.contact.description}</p>
          <div className="flex justify-center gap-6">
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white h-14 px-8 text-lg">
              <a href="mailto:Radwaa3@Mcmaster.ca">
                <Mail className="mr-2" /> {t.emailMe}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800 h-14 px-8 text-lg">
              <a href="https://linkedin.com/in/ahmedradwan1001" target="_blank">
                <Linkedin className="mr-2" /> LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
