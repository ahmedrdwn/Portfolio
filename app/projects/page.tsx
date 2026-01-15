"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { portfolioData } from "@/lib/portfolio-data"
import { ChevronRight, Code, Shield, ExternalLink, ArrowLeft } from "lucide-react"

export default function ProjectsPage() {
    const { projects } = portfolioData.en;

    return (
        <main className="min-h-screen bg-slate-950 text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors">
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

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.items.map((project: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-900/10 flex flex-col"
                        >
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                                        <Code size={24} />
                                    </div>
                                    {project.confidential ? (
                                        <Shield className="text-yellow-500/80" size={20} title="Confidential Project" />
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

                            {/* Make the whole card clickable if link exists */}
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`View ${project.title}`} />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    )
}
