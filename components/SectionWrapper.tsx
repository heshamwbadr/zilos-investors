import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface WrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const SectionWrapper: React.FC<WrapperProps> = ({ children, className = "", id }) => {
  return (
    <section 
      id={id}
      className={`min-h-screen w-full snap-start flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 py-24 relative overflow-x-hidden ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-10%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};