"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { portfolioData } from "@/lib/portfolio-data"
import { ChevronRight, Code, Shield, ExternalLink, ArrowLeft, Globe } from "lucide-react"

function ProjectCard({ project, index }: { project: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-900/10 flex flex-col"
        >
            <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                        <Code size={24} />
                    </div>
                    {project.confidential ? (
                        <Shield className="text-yellow-500/80" size={20} aria-label="Confidential Project" />
                    ) : project.link ? (
                        <ExternalLink className="text-slate-600 group-hover:text-cyan-400 transition-colors" size={20} />
                    ) : null}
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-sm text-cyan-500/80 mb-4 font-mono">
                    {project.org}
                </p>
                <p className="text-slate-400 leading-relaxed text-sm flex-1">
                    {project.description}
                </p>
            </div>

            {project.link && (
                <div className="p-4 bg-slate-800/50 border-t border-slate-800 flex justify-between items-center group-hover:bg-slate-800 transition-colors">
                    <span className="text-xs text-cyan-400 font-medium">View Project</span>
                    <ChevronRight size={16} className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
            )}

            {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`View ${project.title}`} />
            )}
        </motion.div>
    )
}

export default function ProjectsPage() {
    const { projects } = portfolioData.en;
    const powerbiItems = projects.items.filter((p: any) => p.type !== "webapp");
    const webappItems = projects.items.filter((p: any) => p.type === "webapp");
    const recentItems = webappItems.filter((p: any) => p.recent);

    return (
        <main className="min-h-screen bg-slate-950 text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors font-medium">
                        <ArrowLeft size={18} className="mr-2" />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
                        {projects.title}
                    </h1>
                    <p className="text-xl text-slate-400">
                        {projects.subtitle}
                    </p>
                </div>

                {/* Featured Project Spotlight */}
                {projects.featured && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 relative"
                    >
                        <motion.div
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-xl opacity-40 pointer-events-none"
                        />
                        <div className="relative rounded-3xl border border-cyan-500/40 bg-slate-900/80 backdrop-blur-sm p-8 md:p-10">
                            <div className="flex flex-wrap items-center gap-3 mb-5">
                                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500 text-slate-950">
                                    {projects.featured.badge}
                                </span>
                                <span className="text-sm font-semibold text-cyan-400">{projects.featured.label}</span>
                            </div>

                            <div className="flex items-start gap-4 mb-5">
                                <Globe className="text-cyan-400 flex-shrink-0 mt-1" size={36} />
                                <div>
                                    <h2 className="text-2xl md:text-4xl font-bold text-slate-100 mb-2">
                                        {projects.featured.title}
                                    </h2>
                                    <p className="text-cyan-500/90 font-mono text-sm md:text-base">{projects.featured.org}</p>
                                </div>
                            </div>

                            <p className="text-slate-300 leading-relaxed text-base md:text-lg mb-8">
                                {projects.featured.description}
                            </p>

                            {/* Landing page screenshot — hidden until /lead-zone.png exists */}
                            <a
                                href={projects.featured.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block mb-8 group/shot"
                            >
                                <div className="rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
                                    <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-800">
                                        <span className="w-3 h-3 rounded-full bg-red-400/80" />
                                        <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                                        <span className="w-3 h-3 rounded-full bg-green-400/80" />
                                        <span className="ml-3 text-xs font-mono truncate text-slate-400">
                                            leadszonedigital.com/lead-zone/
                                        </span>
                                    </div>
                                    <img
                                        src="/lead-zone.png"
                                        alt={projects.featured.title}
                                        loading="lazy"
                                        onError={(e) => { const a = e.currentTarget.closest("a"); if (a) (a as HTMLElement).style.display = "none"; }}
                                        className="w-full block transition-transform duration-300 group-hover/shot:scale-[1.01]"
                                    />
                                </div>
                            </a>

                            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                                {projects.featured.stepsTitle}
                            </h3>
                            <div className="flex flex-wrap gap-3 mb-8">
                                {projects.featured.steps.map((step: string, i: number) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 8 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.06 }}
                                        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-800 bg-slate-800/60 text-slate-200 text-sm"
                                    >
                                        <span className="text-cyan-400 font-bold text-xs">{String(i + 1).padStart(2, "0")}</span>
                                        {step}
                                    </motion.div>
                                ))}
                            </div>

                            <a
                                href={projects.featured.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg transition-all shadow-lg shadow-cyan-900/20 font-semibold"
                            >
                                {projects.featured.cta}
                                <ChevronRight size={18} />
                            </a>
                        </div>
                    </motion.div>
                )}

                {/* Power BI Dashboards */}
                <section className="mb-16">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-100">
                            {projects.powerbi.title}
                        </h2>
                        <p className="text-slate-400">
                            {projects.powerbi.subtitle}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {powerbiItems.map((project: any, index: number) => (
                            <ProjectCard key={`pbi-${index}`} project={project} index={index} />
                        ))}
                    </div>
                </section>

                {/* Web Applications */}
                <section>
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-100">
                            {projects.webapps.title}
                        </h2>
                        <p className="text-slate-400">
                            {projects.webapps.subtitle}
                        </p>
                    </div>

                    {recentItems.length > 0 && (
                        <div className="mb-10">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-cyan-400/80 mb-4">
                                {projects.webapps.recentTitle}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {recentItems.map((project: any, index: number) => (
                                    <motion.a
                                        key={`recent-${index}`}
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.08 }}
                                        whileHover={{ y: -3 }}
                                        className="inline-flex items-center gap-3 pl-2 pr-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/20 transition-all"
                                    >
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-cyan-500 text-slate-950">
                                            {projects.webapps.recentBadge}
                                        </span>
                                        <span className="text-sm font-semibold text-slate-100">{project.title}</span>
                                        <ChevronRight size={14} className="text-cyan-400" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {webappItems.map((project: any, index: number) => (
                            <ProjectCard key={`web-${index}`} project={project} index={index} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}
