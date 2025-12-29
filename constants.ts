import { AskZilosExample, PricingTier, SectionId, AddOnModule, ComparisonRow, CompetitiveRow } from './types';

export const SECTION_IDS: SectionId[] = [
  SectionId.Intro,
  SectionId.Problem,
  SectionId.Insight,
  SectionId.Solution,
  SectionId.HowItWorks,
  SectionId.Features,
  SectionId.Wins,
  SectionId.BusinessModel,
  SectionId.Market,
  SectionId.WhyNow,
  SectionId.Scales,
];

export const ACCESS_CODE = "zilos.2025";

export const COMPETITIVE_TABLE: CompetitiveRow[] = [
  { feature: "POS agnostic", pos: "x", point: "check", bi: "check", ai: "check", zilos: "check" },
  { feature: "Cross-system intelligence", pos: "x", point: "x", bi: "half", ai: "half", zilos: "check" },
  { feature: "Explains \"why\"", pos: "x", point: "x", bi: "x", ai: "x", zilos: "check" }, // AI col actually says "Opaque" in image, but using X/Half system mostly, mapping Opaque -> x for simplicity or custom handling? Plan said enum but string works. Wait, image has "Opaque" text. I should probably use string to allow text overrides if needed, OR stick to strict enum. The plan example used 'check'. "Opaque" is effectively a fail/warning. 'x' is safest for "doesn't do it well".
  { feature: "Deterministic financials", pos: "check", point: "check", bi: "half", ai: "x", zilos: "check" },
  { feature: "Operator-first", pos: "half", point: "half", bi: "x", ai: "x", zilos: "check" },
  { feature: "Scales across locations", pos: "x", point: "x", bi: "half", ai: "x", zilos: "check" }
];

export const COMPARISON_TABLE: ComparisonRow[] = [
  {
    feature: "Best suited for",
    starter: "Single-location owner-operators",
    essentials: "Small multi-location operators (2–4 sites)",
    growth: "Operators managing 5+ locations",
    platinum: "Large multi-location groups"
  },
  {
    feature: "Monthly price",
    starter: "€89 / month",
    essentials: "€267 / month (up to 4 locations)",
    growth: "€267 + €189 per additional location",
    platinum: "Partnership"
  },
  {
    feature: "Locations included",
    starter: "1",
    essentials: "Up to 4",
    growth: "First 4 included, then per-location",
    platinum: "Unlimited"
  },
  {
    feature: "Intelligence cadence",
    starter: "Daily performance summary",
    essentials: "Daily cross-location comparison",
    growth: "Real-time prioritisation",
    platinum: "Continuous optimisation loop"
  },
  {
    feature: "Decision depth",
    starter: "What happened yesterday",
    essentials: "What's happening across locations",
    growth: "What to fix next, where, and why",
    platinum: "Strategic optimisation guidance"
  },
  {
    feature: "AI interpretation",
    starter: "Daily AI explanation",
    essentials: "Cross-location AI insights",
    growth: "Real-time AI prioritisation",
    platinum: "Always-on interpretation with context"
  },
  {
    feature: "Natural language queries",
    starter: "",
    essentials: "Basic",
    growth: "Advanced",
    platinum: "Full access"
  },
  {
    feature: "Support level",
    starter: "Standard support",
    essentials: "Priority support",
    growth: "Dedicated success manager",
    platinum: "Strategic partnership"
  }
];

export const ADD_ON_MODULES: AddOnModule[] = [
  {
    name: "Voice Intelligence Agent",
    description: "Natural language query interface for on-the-go operations.",
    priceInfo: "from €49 / mo",
  },
  {
    name: "Marketing Intelligence Module",
    description: "Connect ads to revenue. Track real CAC and LTV per channel.",
    priceInfo: "from €49 / mo",
  },
  {
    name: "Competitor Intelligence Analysis",
    description: "Real-time tracking of local competitor pricing and reviews.",
    priceInfo: "from €39 / mo",
  },
  {
    name: "Scenario & Forecasting Layer",
    description: "Predictive impact modeling for staffing and procurement changes.",
    priceInfo: "from €79 / mo",
  },
];

export const ASK_ZILOS_EXAMPLES: AskZilosExample[] = [
  {
    question: "Were we under or overstaffed today?",
    answer: "Overstaffed between 14:00 and 16:00. Revenue dropped 40% vs avg, but labor hours remained constant.",
    dataPoint: "Labor Cost: 38% (Target 28%)",
  },
  {
    question: "Which location needs attention right now?",
    answer: "Madrid Centro. Inventory variance on high-margin proteins exceeds threshold for 3rd consecutive day.",
    dataPoint: "Variance: -€145.00 today",
  },
  {
    question: "What changed since yesterday?",
    answer: "Supplier 'Avanti' increased Salmon pricing by 12%. Menu margins impacted immediately.",
    dataPoint: "Margin Impact: -4.2%",
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: "€89",
    locations: "1 location",
    description: "Know how you performed yesterday. Daily clarity with zero setup friction.",
    bestFor: "Single-location owner-operators",
  },
  {
    name: "Essentials",
    price: "€267",
    locations: "Up to 4 locations included",
    description: "Know what's happening across locations and why. Unified daily performance, side-by-side comparison, AI explanations.",
    bestFor: "Small multi-location operators (2–4 sites). Land-and-expand entry tier.",
  },
  {
    name: "Growth",
    price: "€267",
    locations: "Includes first 4 locations",
    additionalPriceInfo: "+ €189 per additional location (5+)",
    description: "Real-time prioritisation and cross-location intelligence. Understand what to fix next, where, and why.",
    bestFor: "Operators managing 5+ locations. Operational complexity stage.",
    highlight: true,
  },
  {
    name: "Platinum",
    price: "Partnership",
    description: "Continuous optimisation across locations. Custom integrations, strategic reviews, dedicated support.",
    bestFor: "Large multi-location groups. Strategic partners.",
  },
];

export const PROBLEM_FRAGMENTS = [
  { label: "POS Data", x: -20, y: -30, rotate: -5 },
  { label: "Invoices", x: 30, y: -20, rotate: 3 },
  { label: "Stock Sheets", x: -10, y: 20, rotate: -2 },
  { label: "Staff Rotas", x: 25, y: 30, rotate: 4 },
  { label: "Supplier Emails", x: -30, y: 10, rotate: -6 },
];

export const DECISION_STREAM = [
  "Chef called in sick",
  "Overtime approved",
  "Staff understaffed during peak hour",
  "Key ingredient stock low",
  "Supplier delivery delayed",
  "Supplier price increased",
  "Lunch rush delayed",
  "Customer complaint logged",
];