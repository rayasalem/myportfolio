import { portfolioData } from "../data";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { lang } = useLanguage();
  const data = portfolioData[lang];
  return (
    <section id="about" className="py-20 border-t border-border">
      <h2 className="text-text-muted text-sm uppercase tracking-widest font-semibold mb-6">{data.aboutLabel}</h2>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }} className="bg-surface p-8 rounded-2xl border border-border">
        <p className="text-text-muted leading-relaxed">{data.aboutText}</p>
      </motion.div>
    </section>
  );
}
