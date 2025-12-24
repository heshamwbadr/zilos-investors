export interface SectionProps {
  id: string;
  isVisible: boolean;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  highlight?: boolean;
}

export interface AskZilosExample {
  question: string;
  answer: string;
  dataPoint: string;
}

export interface AddOnModule {
  name: string;
  description: string;
  priceInfo: string;
}

export interface ComparisonRow {
  feature: string;
  essentials: string;
  growth: string;
  platinum: string;
}

export enum SectionId {
  Intro = 'intro',
  Problem = 'problem',
  Insight = 'insight',
  Solution = 'solution',
  HowItWorks = 'how-it-works',
  Features = 'features',
  BusinessModel = 'business-model',
  Market = 'market',
  Wins = 'wins',
  WhyNow = 'why-now',
}