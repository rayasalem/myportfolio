import { motion } from "motion/react";
import { portfolioData } from "../data";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { lang } = useLanguage();
  const data = portfolioData[lang];
  return (
    <section id="projects" className="py-20 border-t border-border">
      <h2 className="text-text-muted text-sm uppercase tracking-widest font-semibold mb-6">{data.projectsLabel}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.projects.map((p, i) => (
          <motion.div key={i} whileHover={{ y: -5 }} className="bg-surface p-6 rounded-2xl border border-border">
            <h3 className="text-xl font-bold mb-2">
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">{p.title} →</a>
            </h3>
            <p className="text-text-muted mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map(t => <span key={t} className="text-xs bg-bg border border-border text-primary px-2 py-1 rounded">{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
