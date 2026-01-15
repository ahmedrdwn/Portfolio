"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { portfolioData } from "@/lib/portfolio-data"
import { ArrowLeft, GraduationCap, BookOpen, ExternalLink, ChevronRight } from "lucide-react"

export default function ResearchPage() {
    const { experience, projects } = portfolioData.en;

    // Filter for research/academic roles
    const education = experience.roles.filter((role: any) => role.type === 'education');

    // Filter for research-type projects (assuming keywords or strict logic, here manual selection based on migrated data context)
    // In the real data, "Psychological Empowerment" and "Teacher Staffing" seem research-heavy.
    const researchProjects = projects.items.filter((item: any) =>
        item.title.includes("Research") ||
        item.title.includes("Study") ||
        item.org.includes("University") ||
        item.org.includes("Ministry")
    );

    return (
        <main className="min-h-screen bg-slate-950 text-white py-20 px-6">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="mb-16">
                    <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors">
                        <ArrowLeft size={18} className="mr-2" />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
                        Academic Research
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed">
                        Exploring the intersection of Data Science, Operations Research, and Urban Mobility through rigorous computational methods.
                    </p>
                </div>

                {/* Education Section */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-cyan-400">
                        <GraduationCap size={28} />
                        Academic Background
                    </h2>
                    <div className="space-y-6">
                        {education.map((edu: any, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-900 border border-slate-800 p-8 rounded-xl"
                            >
                                <h3 className="text-xl font-bold text-slate-100 mb-2">{edu.title}</h3>
                                <div className="flex justify-between items-center mb-4 text-sm">
                                    <span className="text-slate-300 font-medium">{edu.org}</span>
                                    <span className="text-slate-500">{edu.period}</span>
                                </div>
                                <p className="text-slate-400 leading-relaxed">{edu.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Selected Works */}
                <section>
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-cyan-400">
                        <BookOpen size={28} />
                        Selected Studies & Projects
                    </h2>
                    <div className="grid gap-6">
                        {researchProjects.map((project: any, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-cyan-500/30 transition-all group"
                            >
                                <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-cyan-500/70 mb-3">{project.org}</p>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300">
                                        View Details <ExternalLink size={14} className="ml-1" />
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    )
}
