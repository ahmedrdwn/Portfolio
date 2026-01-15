"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white relative overflow-hidden">

      {/* Abstract Background - Data Nodes */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-slate-950 to-slate-950 h-full w-full" />
      </div>

      <div className="z-10 text-center space-y-6 max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="text-cyan-400 border-cyan-400/30 py-1.5 px-4 text-sm tracking-wider uppercase mb-4">
            Available for Collaboration
          </Badge>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ahmed Radwan
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-slate-400 font-light font-serif"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          PhD Researcher in <span className="text-cyan-400 font-normal">Data Science</span>
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base text-slate-500 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span>Operations Research</span>
          <span className="text-cyan-600">•</span>
          <span>GTFS Analytics</span>
          <span className="text-cyan-600">•</span>
          <span>Intelligent Transit</span>
        </motion.div>

        <motion.p
          className="max-w-xl mx-auto text-slate-400 leading-relaxed pt-4 font-serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Building high-precision decision support systems and optimizing urban mobility through advanced analytics.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-900/20 font-sans">
            <Link href="/research">Explore Research</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white font-sans">
            <Link href="/projects">View Projects</Link>
          </Button>
        </motion.div>
      </div>
    </main>
  )
}
