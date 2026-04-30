"use client";

import { motion } from "framer-motion";
import { 
  Rocket, 
  Shield, 
  Zap, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Target,
  Sparkles,
  MousePointer2
} from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="hero-glow" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">Applyme AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Sign In</button>
            <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-zinc-200 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-32 pb-20 px-4">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold mb-8 uppercase tracking-widest"
          >
            <Sparkles className="w-3 h-3" />
            Next Gen Job Hunting
          </motion.div>
          
          <motion.h1 
            {...fadeInUp}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Apply to <span className="gradient-text">1000s of Jobs</span> <br />
            while you sleep.
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            The first AI-powered job application agent that tailors your resume, 
            answers complex questions, and submits applications for you.
          </motion.p>
          
          <motion.div 
            {...fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Start Applying Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 glass text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
              Watch Demo
            </button>
          </motion.div>

          {/* HUD Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-20 relative"
          >
            <div className="absolute inset-0 bg-primary/10 blur-[120px] -z-10 rounded-full" />
            <div className="glass-card rounded-2xl overflow-hidden aspect-video max-w-5xl mx-auto p-2 border-white/10 shadow-2xl">
              <div className="h-full w-full bg-zinc-950 rounded-xl flex items-center justify-center overflow-hidden relative group">
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="px-3 py-1 glass rounded-md text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                    Agent Status: Active
                  </div>
                </div>
                
                {/* Mock UI Content */}
                <div className="w-full h-full flex p-8 pt-16 gap-6">
                  <div className="w-1/3 flex flex-col gap-4">
                    <div className="glass p-4 rounded-lg flex flex-col gap-2">
                      <div className="h-2 w-24 bg-white/10 rounded" />
                      <div className="h-4 w-full bg-white/5 rounded" />
                    </div>
                    <div className="glass p-4 rounded-lg flex flex-col gap-2">
                      <div className="h-2 w-24 bg-white/10 rounded" />
                      <div className="h-4 w-full bg-white/5 rounded" />
                    </div>
                    <div className="glass p-4 rounded-lg flex flex-col gap-2">
                      <div className="h-2 w-24 bg-white/10 rounded" />
                      <div className="h-4 w-full bg-white/5 rounded" />
                    </div>
                  </div>
                  <div className="flex-1 glass p-6 rounded-lg flex flex-col gap-4 items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin" />
                    <div className="text-center">
                      <p className="text-sm font-bold text-white mb-1">Applying to Google...</p>
                      <p className="text-xs text-zinc-500">Software Engineer (L4) • 84% Match</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section id="features" className="max-w-7xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why use Applyme?</h2>
            <p className="text-zinc-500 max-w-xl mx-auto text-lg">Stop wasting hours on repetitive forms. Let our agent handle the grind.</p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <FeatureCard 
              icon={<Target className="w-6 h-6 text-primary" />}
              title="Hyper-Tailored"
              description="Our AI reads job descriptions and rewrites your resume highlights for every single application."
            />
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-yellow-500" />}
              title="Lightning Fast"
              description="Submit 50+ high-quality applications per hour. No human can compete with this speed."
            />
            <FeatureCard 
              icon={<Shield className="w-6 h-6 text-green-500" />}
              title="Safe & Stealthy"
              description="Mimics human behavior to pass bot detection systems on LinkedIn, Indeed, and Greenhouse."
            />
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="max-w-5xl mx-auto px-4">
          <div className="relative glass-card rounded-3xl p-8 md:p-16 overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -z-10" />
            <h2 className="text-4xl font-bold mb-6">Ready to land your dream job?</h2>
            <p className="text-zinc-400 mb-10 text-lg max-w-2xl mx-auto">
              Join 10,000+ professionals who have accelerated their career hunt with Applyme AI.
            </p>
            <button className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform">
              Get Your First 10 Applications Free
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-6 text-sm text-zinc-500 font-medium">
          <p>© 2026 Applyme AI. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="glass-card p-8 rounded-2xl flex flex-col gap-4 hover:border-primary/30 transition-colors group"
    >
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-zinc-500 leading-relaxed">{description}</p>
    </motion.div>
  );
}
