import { AskZilosExample, PricingTier, SectionId, AddOnModule, ComparisonRow } from './types';

export const SECTION_IDS: SectionId[] = [
  SectionId.Intro,
  SectionId.Problem,
  SectionId.Insight,
  SectionId.Solution,
  SectionId.HowItWorks,
  SectionId.Features,
  SectionId.BusinessModel,
  SectionId.Market,
  SectionId.Wins,
  SectionId.WhyNow,
];

export const ACCESS_CODE = "zilos2025";

export const COMPARISON_TABLE: ComparisonRow[] = [
  {
    feature: "Best suited for",
    essentials: "Owner-operators getting daily control",
    growth: "Operators managing multiple locations",
    platinum: "Multi-location groups seeking continuous optimisation"
  },
  {
    feature: "Monthly price",
    essentials: "€89 / month",
    growth: "€189 / month",
    platinum: "Partnership"
  },
  {
    feature: "Intelligence cadence",
    essentials: "Daily performance summary",
    growth: "In-day priorities and explanations",
    platinum: "Continuous optimisation loop"
  },
  {
    feature: "Decision depth",
    essentials: "What happened yesterday",
    growth: "What is happening today and why",
    platinum: "What to adjust next and where"
  },
  {
    feature: "Attention management",
    essentials: "End-of-day clarity",
    growth: "Real-time prioritisation",
    platinum: "Executive-level focus"
  },
  {
    feature: "Operational coverage",
    essentials: "Core visibility across operations",
    growth: "Actionable intelligence across teams",
    platinum: "Optimised at scale across locations"
  },
  {
    feature: "AI interpretation",
    essentials: "Daily AI explanation",
    growth: "Ongoing AI explanations",
    platinum: "Always-on interpretation with context"
  },
  {
    feature: "Natural language queries",
    essentials: "—",
    growth: "Included",
    platinum: "Advanced"
  },
  {
    feature: "Partnership level",
    essentials: "Standard support",
    growth: "Priority support",
    platinum: "Dedicated optimisation partnership"
  }
];

export const ADD_ON_MODULES: AddOnModule[] = [
  {
    name: "Multi-Location Performance Insights",
    description: "Consolidated view for area managers to track region-wide KPIs.",
    priceInfo: "from €49 / mo",
  },
  {
    name: "Voice Intelligence Agent",
    description: "Natural language query interface for on-the-go operations.",
    priceInfo: "from €49 / mo",
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
    name: "Essentials",
    price: "€89",
    description: "Know how you performed yesterday.",
  },
  {
    name: "Growth",
    price: "€189",
    description: "Know what's happening today and why.",
    highlight: true,
  },
  {
    name: "Platinum",
    price: "Partnership",
    description: "Optimise multi-locations continuously without managing tools or systems.",
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