'use client';

import FeatureCard from "@/components/FeatureCard";
import Header from "@/components/Header";
import Contact from "@/components/modals/Contact";
import PrivacyPolicy from "@/components/modals/PrivacyPolicy";
import Support from "@/components/modals/Support";
import TermsOfService from "@/components/modals/TermsOfService";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import {
  ArrowUp,
  Github,
  Mail,
  MessageCircle,
  Paperclip,
  Shield,
  Twitter,
  Users,
  Video,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [modal, setModal] = useState<string | null>(null);
  const [showArrow, setShowArrow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ===== HERO ===== */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        {/* Ambient radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-5%,rgba(124,58,237,0.38),transparent)]" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-violet-700/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-fuchsia-700/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-10 flex flex-col items-center text-center space-y-8">

          {/* Beta badge */}
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/25 rounded-full px-4 py-1.5 text-sm text-violet-300">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Now in beta — completely free to use
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
            Connect instantly.
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Chat smarter.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
            The modern messaging platform that combines lightning-fast chat and
            crystal-clear video calls in one seamless experience.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  size="lg"
                  className="bg-violet-600 hover:bg-violet-500 text-white text-lg px-8 py-6 h-auto cursor-pointer transition-all hover:scale-105 shadow-lg shadow-violet-900/40"
                >
                  Start Chatting Free
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button
                size="lg"
                onClick={() => router.push("/dashboard")}
                className="bg-violet-600 hover:bg-violet-500 text-white text-lg px-8 py-6 h-auto cursor-pointer transition-all hover:scale-105 shadow-lg shadow-violet-900/40"
              >
                Open Dashboard
              </Button>
            </SignedIn>
            <a href="#features">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600 hover:text-white text-lg px-8 py-6 h-auto cursor-pointer transition-all"
              >
                See Features
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="pt-2">
            <p className="text-sm text-slate-500 mb-4">Trusted by thousands of users worldwide</p>
            <div className="flex justify-center items-center gap-8 text-slate-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm">Active Users</div>
              </div>
              <div className="w-px h-8 bg-slate-700" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1M+</div>
                <div className="text-sm">Messages Sent</div>
              </div>
              <div className="w-px h-8 bg-slate-700" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </div>

        {/* App UI Mockup */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 mt-12">
          <div className="absolute -inset-1 bg-gradient-to-b from-violet-600/15 via-transparent to-transparent rounded-t-2xl blur-xl pointer-events-none" />
          <div className="relative rounded-t-xl overflow-hidden border border-slate-700/50 border-b-0 bg-slate-900 shadow-[0_0_100px_rgba(124,58,237,0.12)]">

            {/* Browser chrome */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-800 bg-slate-950/80">
              <div className="flex gap-1.5 shrink-0">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="text-xs text-slate-500 bg-slate-800/80 px-4 py-1 rounded-full font-mono">
                  app.vortix.app/dashboard
                </div>
              </div>
            </div>

            {/* App layout */}
            <div className="flex h-[320px] sm:h-[400px]">

              {/* Sidebar */}
              <div className="hidden sm:flex w-60 border-r border-slate-800 flex-col p-3 gap-2 shrink-0">
                <div className="flex items-center justify-between px-1 py-1 mb-1">
                  <div className="h-2.5 w-14 bg-slate-700 rounded" />
                  <div className="w-6 h-6 rounded-md bg-slate-800 border border-slate-700" />
                </div>
                <div className="h-8 rounded-lg bg-slate-800 border border-slate-700/60" />
                {[
                  { active: true,  from: "from-violet-500",  to: "to-fuchsia-600", badge: false },
                  { active: false, from: "from-blue-500",    to: "to-cyan-500",    badge: true  },
                  { active: false, from: "from-emerald-500", to: "to-teal-500",    badge: false },
                  { active: false, from: "from-orange-500",  to: "to-rose-500",    badge: false },
                  { active: false, from: "from-pink-500",    to: "to-purple-500",  badge: false },
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-2.5 p-2 rounded-lg ${item.active ? "bg-violet-600/15 border border-violet-500/20" : ""}`}>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.from} ${item.to} shrink-0`} />
                    <div className="flex-1 min-w-0">
                      <div className="h-2.5 bg-slate-700 rounded w-3/4 mb-1.5" />
                      <div className="h-2 bg-slate-800 rounded w-1/2" />
                    </div>
                    {item.badge && (
                      <div className="w-4 h-4 rounded-full bg-violet-600 shrink-0 flex items-center justify-center">
                        <span className="text-[8px] text-white font-bold">3</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Main chat */}
              <div className="flex-1 flex flex-col min-w-0">
                {/* Chat header */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-800 shrink-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="h-2.5 bg-slate-600 rounded w-24 mb-1.5" />
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      <div className="h-2 bg-slate-700 rounded w-12" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700" />
                    <div className="w-7 h-7 rounded-lg bg-violet-600/20 border border-violet-500/30" />
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 p-4 space-y-3 overflow-hidden">
                  <div className="flex gap-2 items-end">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shrink-0" />
                    <div className="bg-slate-800 rounded-2xl rounded-bl-sm px-3 py-2.5 max-w-[55%]">
                      <div className="h-2.5 bg-slate-600 rounded w-32 mb-1.5" />
                      <div className="h-2 bg-slate-700 rounded w-24" />
                    </div>
                  </div>
                  <div className="flex gap-2 items-end justify-end">
                    <div className="bg-violet-600 rounded-2xl rounded-br-sm px-3 py-2.5 max-w-[55%]">
                      <div className="h-2.5 bg-violet-300/50 rounded w-40 mb-1.5" />
                      <div className="h-2 bg-violet-300/40 rounded w-28" />
                    </div>
                  </div>
                  <div className="flex gap-2 items-end">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shrink-0" />
                    <div className="bg-slate-800 rounded-2xl rounded-bl-sm px-3 py-2.5 max-w-[60%]">
                      <div className="h-2.5 bg-slate-600 rounded w-44 mb-1.5" />
                      <div className="h-2 bg-slate-700 rounded w-36 mb-1" />
                      <div className="h-2 bg-slate-700 rounded w-20" />
                    </div>
                  </div>
                  <div className="flex gap-2 items-end justify-end">
                    <div className="bg-slate-800 border border-slate-700/60 rounded-xl p-3 max-w-[50%]">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 rounded bg-violet-600/30 shrink-0" />
                        <div className="h-2 bg-slate-600 rounded w-20" />
                      </div>
                      <div className="h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg mb-2" />
                      <div className="h-5 bg-violet-600/70 rounded-md" />
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="px-4 pb-4 shrink-0">
                  <div className="flex items-center gap-2 bg-slate-800 border border-slate-700/60 rounded-full px-4 py-2.5">
                    <div className="flex-1 h-2 bg-slate-700 rounded" />
                    <div className="flex gap-1.5 shrink-0">
                      <div className="w-6 h-6 rounded-full bg-slate-700" />
                      <div className="w-6 h-6 rounded-full bg-violet-600" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Fade out bottom */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="bg-background py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="features" className="text-3xl sm:text-4xl font-bold mb-6">
              Everything you need to stay connected
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed for seamless communication, whether
              you&apos;re chatting with friends or collaborating with teams.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <FeatureCard
              icon={MessageCircle}
              title="Instant Messaging"
              description="Lightning-fast messages with real-time delivery. Chat with friends and colleagues seamlessly."
            />
            <FeatureCard
              icon={Video}
              title="HD Video Calls"
              description="Crystal-clear video calls with one click. Perfect quality for personal chats and team meetings."
            />
            <FeatureCard
              icon={Shield}
              title="Privacy First"
              description="End-to-end encryption keeps your conversations private. Your data belongs to you, always."
            />
            <FeatureCard
              icon={Users}
              title="Group Chats"
              description="Create groups with friends, family, or colleagues. Manage conversations with advanced controls."
            />
            <FeatureCard
              icon={Zap}
              title="Lightning Fast"
              description="Optimized for speed and performance. Works seamlessly across all your devices with instant sync."
            />
            <FeatureCard
              icon={Paperclip}
              title="File Sharing"
              description="Share files of any type with ease. Supports documents, images, and more with preview and download options."
            />
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 px-4 sm:px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border bg-gradient-to-br from-violet-500/5 via-background to-fuchsia-500/5 p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to transform your conversations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users who&apos;ve already discovered a better way to communicate.
              Start your journey with Vortix today — it&apos;s completely free.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <SignedOut>
                <SignUpButton mode="modal">
                  <Button size="lg" className="text-lg cursor-pointer hover:scale-105 transition-all px-8 py-6 h-auto">
                    Get Started Free
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Button
                  size="lg"
                  onClick={() => router.push("/dashboard")}
                  className="text-lg cursor-pointer hover:scale-105 transition-all px-8 py-6 h-auto"
                >
                  Get Started Free
                </Button>
              </SignedIn>
            </div>
            <div className="flex justify-center flex-col sm:flex-row items-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Free forever plan
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Setup in 30 seconds
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t bg-muted/30 mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="Vortix logo"
                  width={40}
                  height={40}
                  className="cursor-pointer hover:scale-110 transition-all"
                  onClick={() => router.push("/dashboard")}
                />
                <span className="text-xl font-bold tracking-tight">Vortix</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The modern messaging platform combining lightning-fast chat and crystal-clear video calls in one seamless experience.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <button
                  onClick={() => setModal("contact")}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  aria-label="Email us"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/dashboard")}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    Dashboard
                  </button>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                    Mobile App
                    <span className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded-full">Soon</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setModal("privacy")}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModal("terms")}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setModal("support")}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    Help & Support
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModal("contact")}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <a
                    href="mailto:support@vortix.app"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    support@vortix.app
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-muted-foreground">
              © 2026 Vortix. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Made with ❤️ for better communication
            </p>
          </div>
        </div>

        {showArrow && (
          <button
            onClick={scrollToTop}
            className="fixed hover:scale-110 cursor-pointer bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </footer>

      {/* Modals */}
      {modal === "privacy" && <PrivacyPolicy onClose={() => setModal(null)} />}
      {modal === "terms" && <TermsOfService onClose={() => setModal(null)} />}
      {modal === "support" && <Support onClose={() => setModal(null)} />}
      {modal === "contact" && <Contact onClose={() => setModal(null)} />}
    </div>
  );
}
