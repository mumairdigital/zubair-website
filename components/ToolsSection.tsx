"use client";

import { motion } from "framer-motion";

const toolColumns = [
  {
    title: "SEO Tools",
    icon: "🔍",
    tools: ["Ahrefs", "SEMrush", "Google Search Console", "Screaming Frog", "Moz Local", "BrightLocal"],
  },
  {
    title: "Ads Tools",
    icon: "📢",
    tools: ["Google Ads", "Meta Ads Manager", "Google Analytics 4", "Looker Studio", "Google Tag Manager", "Hotjar"],
  },
  {
    title: "Automation & AI",
    icon: "🤖",
    tools: ["ChatGPT-4", "Jasper AI", "Zapier", "Make.com", "Notion", "Surfer SEO"],
  },
  {
    title: "Design & Web",
    icon: "🎨",
    tools: ["Figma", "Canva Pro", "WordPress", "Next.js", "Webflow", "Adobe Creative Suite"],
  },
];

export default function ToolsSection() {
  return (
    <section className="bg-[#0a0a0a] py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-80 h-80 rounded-full bg-purple-600/8 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Tools & Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Industry-Leading Tools I Use{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#7C3AED]">
              For Your Business
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Premium tools, not guesswork. Every strategy is backed by data from the same platforms used by world-class agencies.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {toolColumns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-purple-500/20 transition-all duration-300"
            >
              <div className="text-2xl mb-3">{col.icon}</div>
              <h3 className="text-white font-bold text-base mb-4">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.tools.map((tool) => (
                  <li key={tool} className="flex items-center gap-2.5 text-gray-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
