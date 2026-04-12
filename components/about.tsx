"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
<p className="mb-3">
  I'm a <span className="font-bold">full-stack developer</span> with over a
  year of experience building mobile and web applications that real users
  rely on. On the <span className="font-bold">mobile front</span>, I
  specialize in <span className="font-bold">React Native</span> with{" "}
  <span className="font-bold">NativeWind</span> — delivering a consistent,
  polished experience across iOS and Android. On the backend, I build with{" "}
  <span className="font-bold">PHP and Laravel</span>, structuring clean REST
  APIs, managing authentication flows, and keeping business logic
  maintainable.
</p>

<p className="mb-3">
  Data is core to how I think about software — I design optimized{" "}
  <span className="font-bold">MySQL schemas</span> and bring a genuine{" "}
  <span className="font-bold">data analytics background</span> with
  hands-on experience in{" "}
  <span className="font-bold">Python, Pandas, and SQL</span>, alongside
  BI tools like <span className="font-bold">Power BI and Tableau</span> to
  turn raw data into decisions that actually matter.
</p>

<p className="mb-3">
  I'm a strong believer in{" "}
  <span className="font-bold">AI-integrated development</span> — not as a
  shortcut, but as a{" "}
  <span className="font-bold">force multiplier</span> layered atop solid
  engineering fundamentals to ship better products, faster.
</p>

<p>
  <span className='italic'>Beyond the codebase</span>, I enjoy video games
  and connecting with new people. I'm currently exploring{" "}
  <span className='font-bold'>emerging health trends in India</span> —
  where culture, data, and well-being intersect.
</p>
    </motion.section>
  );
}
