import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from './components/SectionWrapper';
import { Badge } from './components/ui/Badge';
import {
  ASK_ZILOS_EXAMPLES,
  PRICING_TIERS,
  PROBLEM_FRAGMENTS,
  DECISION_STREAM,
  ADD_ON_MODULES,
  ACCESS_CODE,
  COMPARISON_TABLE,
  SECTION_IDS
} from './constants';
import {
  Layers,
  ArrowRight,
  BrainCircuit,
  Database,
  CheckCircle2,
  TrendingUp,
  MapPin,
  ShieldCheck,
  Activity
} from 'lucide-react';

const ZeroSilosAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      {/* Animated Text */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.6 }}
        className="flex items-baseline text-5xl md:text-8xl font-light tracking-tight text-white overflow-hidden"
      >
        <span className="z-10 relative">Z</span>
        <motion.div
          variants={{
            initial: { width: "auto", opacity: 1, filter: "blur(0px)", marginRight: "0.2em" },
            animate: {
              width: 0,
              opacity: 0,
              filter: "blur(10px)",
              marginRight: 0,
              transition: {
                duration: 2.5,
                delay: 1.5,
                ease: [0.16, 1, 0.3, 1]
              }
            }
          }}
          className="flex overflow-hidden whitespace-nowrap text-slate-600 origin-left"
        >
          <span>ero</span>
          <span className="w-4 md:w-8 inline-block"></span>
          <span>S</span>
        </motion.div>

        <span className="z-10 relative">ilos</span>
      </motion.div>

      {/* Caption */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="text-xs md:text-sm font-mono text-slate-500 mt-6 tracking-[0.3em] uppercase"
      >
        Zero Silos
      </motion.p>
    </div>
  );
};

export default function App() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  // Auto-scroll logic for the "Insight" section ticker
  const [tickerOffset, setTickerOffset] = useState(0);

  // Unlock state for detailed pricing
  const [pricingUnlocked, setPricingUnlocked] = useState(false);
  const [accessCodeInput, setAccessCodeInput] = useState("");

  // Unlock state for market focus
  const [marketUnlocked, setMarketUnlocked] = useState(false);
  const [marketAccessCodeInput, setMarketAccessCodeInput] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerOffset(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Check for unlock state on mount (URL param or LocalStorage)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const storedUnlock = localStorage.getItem('zilos_pricing_unlocked');

    if (params.get('pricing') === 'detail' || storedUnlock === 'true') {
      setPricingUnlocked(true);
    }

    const storedMarketUnlock = localStorage.getItem('zilos_market_unlocked');
    if (storedMarketUnlock === 'true') {
      setMarketUnlocked(true);
    }
  }, []);

  // Load ElevenLabs ConvAI Script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed@beta";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  const handleAccessCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setAccessCodeInput(val);

    // Check code - case insensitive
    if (val.toLowerCase() === ACCESS_CODE.toLowerCase()) {
      setPricingUnlocked(true);
      localStorage.setItem('zilos_pricing_unlocked', 'true');
      setAccessCodeInput(""); // Clear input on success
    }
  };

  const handleMarketAccessCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setMarketAccessCodeInput(val);

    // Check code - case insensitive
    if (val.toLowerCase() === ACCESS_CODE.toLowerCase()) {
      setMarketUnlocked(true);
      localStorage.setItem('zilos_market_unlocked', 'true');
      setMarketAccessCodeInput(""); // Clear input on success
    }
  };

  return (
    <main className="bg-slate-950 text-slate-200 w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">

      {/* SECTION 1: ENTRY STATE */}
      <SectionWrapper id="intro">
        <div className="flex flex-col items-start space-y-8">
          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-bold tracking-tight text-white"
          >
            Zilos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl"
          >
            The most intelligent restaurant management platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="h-px w-24 bg-slate-700 my-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-lg font-medium text-slate-300"
          >
            One connected workspace. One AI-powered engine.<br />
            <span className="text-white">Real visibility every day.</span>
          </motion.p>
        </div>
      </SectionWrapper>

      {/* SECTION 2: THE PROBLEM (Fragmentation) */}
      <SectionWrapper id="problem">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-64 md:h-96 w-full">
            {PROBLEM_FRAGMENTS.map((frag, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: frag.x,
                  y: frag.y,
                  rotate: frag.rotate
                }}
                transition={{
                  duration: 1.5,
                  delay: idx * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2
                }}
                className="absolute inset-0 m-auto w-32 h-20 md:w-48 md:h-28 bg-slate-900/80 border border-slate-700 rounded-lg flex items-center justify-center shadow-xl backdrop-blur-sm z-10"
                style={{
                  top: `${50 + frag.y}%`,
                  left: `${50 + frag.x}%`,
                  transform: `translate(-50%, -50%)`
                }}
              >
                <span className="text-slate-400 font-mono text-sm">{frag.label}</span>
              </motion.div>
            ))}
          </div>
          <div>
            <Badge>The Problem</Badge>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
              Fragmentation kills visibility.
            </h2>
            <div className="space-y-4 text-lg text-slate-400">
              <p>Restaurants do not lack tools.</p>
              <p>They lack visibility. Systems are siloed, data is trapped, and reconciling them consumes the day.</p>
              <p className="text-white border-l-2 border-slate-700 pl-4">
                Operators react late. Decisions are made by instinct.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION 3: THE INSIGHT (Timeline) */}
      <SectionWrapper id="insight">
        <div className="w-full text-center mb-12">
          <Badge>The Insight</Badge>
          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            Restaurants make dozens of decisions every day.
          </h2>
        </div>

        <div className="relative w-full overflow-hidden h-40 bg-slate-900/50 rounded-xl border border-slate-800 flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

          <motion.div
            className="flex space-x-8 px-12 whitespace-nowrap"
            animate={{ x: -1000 }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          >
            {[...DECISION_STREAM, ...DECISION_STREAM, ...DECISION_STREAM].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm font-mono text-slate-400">{item}</span>
                <div className="h-4 w-px bg-slate-800"></div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xl text-slate-300 text-center">
            Operators do not need more dashboards.<br />
            <strong className="text-white">They need clear answers.</strong>
          </p>
        </div>
      </SectionWrapper>

      {/* SECTION 4: THE SOLUTION (Ask Zilos) */}
      <SectionWrapper id="solution">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 w-full h-full lg:h-auto items-center">
          <div className="lg:col-span-2">
            <Badge>The Solution</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              One Intelligent Workspace.
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Fragmented systems collapse into one coherent engine. Ask questions in plain language, get deterministic, data-anchored answers.
            </p>
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <BrainCircuit size={16} />
              <span>AI interprets, it doesn't just calculate.</span>
            </div>
          </div>

          <div className="lg:col-span-3 bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="flex items-center space-x-2 mb-6 border-b border-slate-800 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
              <span className="ml-4 text-xs font-mono text-slate-500">Zilos Intelligence Engine</span>
            </div>

            <div className="space-y-4">
              {ASK_ZILOS_EXAMPLES.map((ex, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveQuestion(idx === activeQuestion ? null : idx)}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 border ${activeQuestion === idx
                    ? 'bg-slate-800/50 border-blue-500/30'
                    : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                    }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-slate-200 font-medium">{ex.question}</span>
                    <ArrowRight size={16} className={`text-slate-500 transition-transform ${activeQuestion === idx ? 'rotate-90 text-blue-400' : ''}`} />
                  </div>
                  <AnimatePresence>
                    {activeQuestion === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 border-l-2 border-blue-500">
                          <p className="text-slate-300 mb-2">{ex.answer}</p>
                          <div className="text-xs font-mono text-blue-400 bg-blue-900/10 inline-block px-2 py-1 rounded">
                            SOURCE: {ex.dataPoint}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION 5: HOW IT WORKS (Accuracy) */}
      <SectionWrapper id="how-it-works">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full items-center">
          <div>
            <Badge>Architecture</Badge>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
              Accuracy over Hype.
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              We separate calculation from interpretation. This prevents hallucinations in financial outputs.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-slate-800 p-2 rounded mr-4 mt-1">
                  <Database size={20} className="text-slate-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Layer 1: Connected Data</h4>
                  <p className="text-sm text-slate-500 mt-1">Deterministic. Auditable. Works without AI.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-900/20 p-2 rounded mr-4 mt-1">
                  <BrainCircuit size={20} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Layer 2: Intelligence</h4>
                  <p className="text-sm text-slate-500 mt-1">AI explains patterns and prioritises attention.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative">
            {/* Visual representation of layers */}
            <div className="border border-slate-700 bg-slate-900 rounded-lg p-6 mb-4 opacity-50 scale-95 origin-bottom">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-slate-500">DATA LAYER</span>
                <ShieldCheck size={16} className="text-emerald-500" />
              </div>
              <div className="h-2 bg-slate-800 rounded w-3/4 mb-2"></div>
              <div className="h-2 bg-slate-800 rounded w-1/2"></div>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="border border-blue-500/30 bg-blue-950/10 backdrop-blur-md rounded-lg p-6 shadow-[0_0_30px_rgba(59,130,246,0.1)] relative z-10"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-blue-400">INTELLIGENCE LAYER</span>
                <Activity size={16} className="text-blue-400" />
              </div>
              <p className="text-lg text-white font-medium">
                "Labor cost is high because overtime spiked 20% during the rainstorm."
              </p>
            </motion.div>
            <div className="mt-8 text-center">
              <p className="font-mono text-sm text-slate-500">
                <span className="text-emerald-400">Zilos calculates.</span> <span className="text-blue-400">AI interprets.</span>
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION 6: WHAT EVERY CUSTOMER GETS */}
      <SectionWrapper id="features">
        <Badge>Core Features</Badge>
        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-12 text-center">
          Real visibility, standard.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {[
            "Native Square integration (one click)",
            "Automatic sync of sales & payments",
            "AI-powered expense capture",
            "Stock tied directly to sales",
            "Menu margins from real performance",
            "Supplier price change tracking"
          ].map((feature, idx) => (
            <div key={idx} className="p-6 border border-slate-800 rounded-lg bg-slate-900/50 hover:bg-slate-900 transition-colors">
              <CheckCircle2 size={24} className="text-emerald-500 mb-4" />
              <p className="text-slate-200 font-medium">{feature}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm font-mono">NO SPREADSHEETS • NO DAILY ADMIN</p>
        </div>
      </SectionWrapper>

      {/* SECTION 7: BUSINESS MODEL */}
      <SectionWrapper id="business-model" className={pricingUnlocked ? 'pb-32' : ''}>
        <Badge>Business Model</Badge>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8 items-stretch">
          {PRICING_TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-xl border flex flex-col ${tier.highlight
                ? 'bg-slate-900 border-blue-500/50 shadow-2xl relative'
                : 'bg-transparent border-slate-800'
                }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                  Customer Choice
                </div>
              )}
              <h3 className="text-slate-400 font-medium mb-2">{tier.name}</h3>
              <div className="text-4xl font-bold text-white mb-6">{tier.price}<span className="text-base font-normal text-slate-500">{tier.price.includes('€') ? '/mo' : ''}</span></div>
              <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-grow">{tier.description}</p>

              {/* Platinum Expansion for Unlocked State */}
              <AnimatePresence>
                {pricingUnlocked && tier.name === "Platinum" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                    animate={{ opacity: 1, height: "auto", marginBottom: 24, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
                    exit={{ opacity: 0, height: 0, marginBottom: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                    className="overflow-hidden border-t border-slate-800 pt-4"
                  >
                    <p className="text-xs text-slate-400 font-medium mb-2">Designed for multi-location operators</p>
                    <ul className="text-xs text-slate-500 space-y-1">
                      <li>• Custom integration support</li>
                      <li>• Dedicated account manager</li>
                      <li>• Quarterly strategy reviews</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="w-full h-1 bg-slate-800 rounded overflow-hidden">
                <div className={`h-full bg-slate-600 ${idx === 0 ? 'w-1/3' : idx === 1 ? 'w-2/3' : 'w-full'}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Unlocked Detailed Comparison & Add-Ons */}
        <AnimatePresence>
          {pricingUnlocked && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 48, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
              exit={{ opacity: 0, height: 0, marginTop: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
              className="w-full max-w-6xl"
            >
              <div className="bg-slate-900/40 border border-slate-800/50 rounded-xl p-8 backdrop-blur-sm overflow-hidden">

                {/* Comparison Table */}
                <div className="overflow-x-auto mb-16">
                  <table className="w-full text-left text-sm border-collapse min-w-[600px]">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="py-6 px-6 font-medium text-slate-500 w-[20%]"></th>
                        <th className="py-6 px-6 font-bold text-white w-[25%] text-lg">Essentials</th>
                        <th className="py-6 px-6 font-bold text-blue-400 w-[25%] text-lg">Growth</th>
                        <th className="py-6 px-6 font-bold text-white w-[30%] text-lg">Platinum Partnership</th>
                      </tr>
                    </thead>
                    <tbody>
                      {COMPARISON_TABLE.map((row, idx) => (
                        <tr key={idx} className="border-b border-slate-800 last:border-0 hover:bg-slate-800/20 transition-colors group">
                          <td className="py-5 px-6 font-medium text-slate-500 group-hover:text-slate-400 transition-colors">{row.feature}</td>
                          <td className="py-5 px-6 text-slate-300 leading-relaxed">{row.essentials}</td>
                          <td className="py-5 px-6 text-blue-100 font-medium leading-relaxed bg-blue-500/5 rounded-sm">{row.growth}</td>
                          <td className="py-5 px-6 text-slate-300 leading-relaxed">{row.platinum}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Add On Modules - Explicitly separated section */}
                <div className="pt-8 border-t border-slate-800">
                  <h4 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-8">
                    Advanced Intelligence Modules
                  </h4>
                  <div className="grid grid-cols-1 gap-6">
                    {ADD_ON_MODULES.map((mod, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row md:justify-between md:items-center p-4 rounded-lg bg-slate-950/30 border border-slate-800/50 hover:border-slate-700 transition-colors">
                        <div>
                          <p className="text-slate-200 font-medium text-base mb-1">{mod.name}</p>
                          <p className="text-slate-500 text-sm">{mod.description}</p>
                        </div>
                        <div className="mt-3 md:mt-0 text-right md:pl-8 whitespace-nowrap">
                          <p className="text-blue-400 font-mono text-sm bg-blue-900/10 px-3 py-1 rounded border border-blue-900/30">{mod.priceInfo}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <p className="text-xs text-slate-600 italic">
                    Availability and scope depend on operation size and data complexity.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Spectrum Animation */}
        <div className="w-full max-w-2xl mx-auto mt-16 mb-2">
          <div className="flex justify-between mb-2">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Descriptive</span>
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Predictive</span>
          </div>
          <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-slate-700 via-blue-500 to-emerald-500"
            />
          </div>
        </div>

        <div className="mt-12 p-4 bg-emerald-900/10 border border-emerald-900/30 rounded text-center max-w-2xl relative group mx-auto">
          <p className="text-emerald-400 text-sm">
            <span className="font-bold">ROI:</span> Zilos often pays for itself within 1–2 months through margin optimisation.
          </p>
        </div>

        {/* Discreet Input Field */}
        <div className="mt-8 h-12 w-full flex items-center justify-center opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity duration-500 cursor-text group">
          {!pricingUnlocked && (
            <input
              type="text"
              placeholder="Enter access code"
              value={accessCodeInput}
              onChange={handleAccessCodeChange}
              className="bg-transparent border-b border-transparent focus:border-slate-800 group-hover:border-slate-800 outline-none text-center text-xs text-slate-500 placeholder:text-slate-700 transition-all duration-300 w-40 pb-1"
              autoComplete="off"
              spellCheck="false"
            />
          )}
        </div>
      </SectionWrapper>

      {/* SECTION 8: MARKET FOCUS */}
      <SectionWrapper id="market">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
          <div>
            <Badge>Market Focus</Badge>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
              Initial Wedge: Spain
            </h2>
            <div className="flex items-baseline space-x-2 mb-8">
              <span className="text-6xl font-bold text-white">280k+</span>
              <span className="text-slate-400">restaurants</span>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-slate-700 pl-4">
                <h4 className="text-white font-medium mb-1">Target Profile</h4>
                <p className="text-slate-400 text-sm">Multi-location operators (3–20 sites). Owner-led. High pain.</p>
              </div>
              <div className="border-l-2 border-slate-700 pl-4">
                <h4 className="text-white font-medium mb-1">Dynamics</h4>
                <p className="text-slate-400 text-sm">Fast adoption. Strong retention. Referrals drive growth.</p>
              </div>
            </div>
            <p className="mt-8 text-slate-500 font-medium">
              High POS penetration and fragmented mid-market chains.
            </p>
          </div>
          <div className="h-full min-h-[300px] bg-slate-900 rounded-2xl border border-slate-800 p-8 flex flex-col justify-center items-center relative overflow-hidden">
            <MapPin size={64} className="text-slate-700 mb-4" />
            <div className="absolute w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full"></div>
            <div className="grid grid-cols-2 gap-4 text-center z-10">
              <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                <div className="text-2xl font-bold text-white">EU</div>
                <div className="text-xs text-slate-500">Geography Expansion</div>
              </div>
              <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                <div className="text-2xl font-bold text-white">AI+</div>
                <div className="text-xs text-slate-500">Intelligence Add-ons</div>
              </div>
            </div>
          </div>
        </div>

        {/* Unlocked Market Content */}
        <AnimatePresence>
          {marketUnlocked && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 48, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
              exit={{ opacity: 0, height: 0, marginTop: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
              className="w-full max-w-4xl mx-auto"
            >
              <div className="bg-slate-900/40 border border-slate-800/50 rounded-xl p-8 backdrop-blur-sm">

                {/* Revenue Potential Header */}
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-semibold text-white mb-2">Spain-Only Revenue Potential (3-Year View)</h3>
                  <p className="text-slate-400 font-medium">Focused market. Disciplined growth. Credible outcomes.</p>
                </div>

                {/* ARR Callout */}
                <div className="mb-16 p-8 bg-gradient-to-r from-blue-900/20 to-emerald-900/20 border border-slate-800 rounded-lg text-center">
                  <p className="text-slate-300 mb-4">In Spain alone, with a focused multi-location operator wedge, Zilos reaches between:</p>
                  <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                    €360k <span className="text-slate-600 text-2xl px-2">and</span> €1.7M
                  </p>
                  <p className="text-slate-500 mt-2 font-mono uppercase tracking-widest text-sm">in ARR within three years</p>
                </div>

                {/* Growth Drivers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                  <div>
                    <h4 className="text-emerald-400 font-mono text-sm uppercase tracking-wider mb-6 border-b border-emerald-900/30 pb-2">Driven By</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle2 size={18} className="text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-300">Steady customer acquisition among owner-led groups</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 size={18} className="text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-300">Natural expansion through additional locations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 size={18} className="text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-300">Tier progression as operational complexity increases</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-red-400 font-mono text-sm uppercase tracking-wider mb-6 border-b border-red-900/30 pb-2">Not Driven By</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1 text-lg leading-none">×</span>
                        <span className="text-slate-400">Automation hype</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1 text-lg leading-none">×</span>
                        <span className="text-slate-400">Black-box AI promises</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1 text-lg leading-none">×</span>
                        <span className="text-slate-400">Aggressive pricing assumptions</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Supporting Metrics Table */}
                <div className="mb-12">
                  <h4 className="text-white font-medium mb-6">Supporting Metrics <span className="text-slate-500 font-normal">(Year 3 Snapshot)</span></h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse min-w-[500px]">
                      <thead>
                        <tr className="border-b border-slate-700">
                          <th className="py-4 px-4 font-semibold text-white w-1/4">Scenario</th>
                          <th className="py-4 px-4 font-semibold text-white w-1/4">Active Customers</th>
                          <th className="py-4 px-4 font-semibold text-white w-1/4">Avg ARR per Customer</th>
                          <th className="py-4 px-4 font-semibold text-white w-1/4">Locations Managed</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                          <td className="py-4 px-4 font-medium text-slate-400">Conservative</td>
                          <td className="py-4 px-4 text-slate-300">~120</td>
                          <td className="py-4 px-4 text-slate-300">~€3,000</td>
                          <td className="py-4 px-4 text-slate-300">~540</td>
                        </tr>
                        <tr className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                          <td className="py-4 px-4 font-medium text-slate-400">Base</td>
                          <td className="py-4 px-4 text-slate-300">~250</td>
                          <td className="py-4 px-4 text-slate-300">~€3,500</td>
                          <td className="py-4 px-4 text-slate-300">~1,125</td>
                        </tr>
                        <tr className="hover:bg-slate-800/20 transition-colors">
                          <td className="py-4 px-4 font-medium text-slate-400">Growth</td>
                          <td className="py-4 px-4 text-slate-300">~450</td>
                          <td className="py-4 px-4 text-slate-300">~€3,800</td>
                          <td className="py-4 px-4 text-slate-300">~2,025</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Expansion Logic */}
                <div className="bg-slate-950/50 rounded-lg p-6 border border-slate-800">
                  <h4 className="text-white font-medium mb-4">Expansion Logic</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                    <li className="text-slate-400">
                      <strong className="text-slate-300 block mb-1">Core Reliability</strong>
                      Platform delivers daily visibility from day one.
                    </li>
                    <li className="text-slate-400">
                      <strong className="text-slate-300 block mb-1">Layered Intelligence</strong>
                      Add-ons layer deeper intelligence over time.
                    </li>
                    <li className="text-slate-400">
                      <strong className="text-slate-300 block mb-1">Trust-Based Scale</strong>
                      Revenue scales as trust and usage increase, not forced upsell.
                    </li>
                  </ul>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-emerald-400 font-medium">Outcome: A scalable, capital-efficient growth path built on real operator value.</p>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Discreet Input Field for Market Section */}
        <div className="mt-8 h-12 w-full flex items-center justify-center opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300 cursor-text group">
          {!marketUnlocked && (
            <input
              type="text"
              placeholder="Enter access code"
              value={marketAccessCodeInput}
              onChange={handleMarketAccessCodeChange}
              className="bg-transparent border-b border-transparent focus:border-slate-800 group-hover:border-slate-800 outline-none text-center text-xs text-slate-500 placeholder:text-slate-700 transition-all duration-300 w-40 pb-1"
              autoComplete="off"
              spellCheck="false"
            />
          )}
        </div>
      </SectionWrapper>

      {/* SECTION 9: WHY ZILOS WINS */}
      <SectionWrapper id="wins">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge>Differentiation</Badge>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
              Zilos does not run your restaurant.
            </h2>
            <p className="text-xl text-slate-400">
              It makes you better at running it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900/30 p-8 rounded-xl border border-slate-800">
              <h3 className="text-slate-500 font-mono text-sm mb-4">THEM</h3>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>POS Replacements</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Black-box automation</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Decides for you</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Requires total switch</li>
              </ul>
            </div>
            <div className="bg-slate-900 p-8 rounded-xl border border-blue-900/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 blur-2xl"></div>
              <h3 className="text-blue-400 font-mono text-sm mb-4">ZILOS</h3>
              <ul className="space-y-4 text-white font-medium">
                <li className="flex items-center"><CheckCircle2 size={16} className="text-blue-500 mr-3" />POS Agnostic</li>
                <li className="flex items-center"><CheckCircle2 size={16} className="text-blue-500 mr-3" />Deterministic analytics</li>
                <li className="flex items-center"><CheckCircle2 size={16} className="text-blue-500 mr-3" />Explains, doesn't decide</li>
                <li className="flex items-center"><CheckCircle2 size={16} className="text-blue-500 mr-3" />Connects existing tools</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION 10: WHY NOW */}
      <SectionWrapper id="why-now">
        <div className="text-center max-w-3xl mx-auto">
          <Badge>Why Now</Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Chaos into Clarity.
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-slate-400">Margin Pressure</span>
            <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-slate-400">Cost Volatility</span>
            <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-slate-400">Operator Readiness</span>
          </div>

          <div className="space-y-2 mb-12">
            <p className="text-2xl text-slate-300">One connected workspace.</p>
            <p className="text-2xl text-slate-300">One AI-powered engine.</p>
            <p className="text-2xl text-white font-semibold">Real visibility every day.</p>
          </div>

          <div className="mb-12">
            <ZeroSilosAnimation />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-slate-600 text-sm font-mono"
          >
            ZILOS &copy; {new Date().getFullYear()}
          </motion.div>
        </div>
      </SectionWrapper>
      {/* ElevenLabs ConvAI Widget */}
      {/* @ts-ignore */}
      <elevenlabs-convai agent-id="agent_9901kd7v4vhtf45ayf56y1v8t21s"></elevenlabs-convai>
    </main>
  );
}