import { motion } from "motion/react";
import { portfolioData } from "../data";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { lang } = useLanguage();
  const data = portfolioData[lang];
  return (
    <section className="py-20 text-start">
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-accent font-semibold mb-4">
        {data.role}
      </motion.p>
      <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl font-bold mb-6 leading-tight">
        {data.heroTitle}
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-text-muted text-lg mb-8 max-w-2xl">
        {data.heroDesc}
      </motion.p>
      <div className="flex gap-4">
        <a href="#contact" className="px-6 py-3 bg-accent text-white rounded-lg font-bold hover:opacity-90 transition">{data.contact}</a>
      </div>
    </section>
  );
}
