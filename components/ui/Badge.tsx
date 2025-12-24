import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ children }) => (
  <span className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium tracking-wide text-slate-300 mb-6">
    {children}
  </span>
);