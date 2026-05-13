'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const objects = [
  {
    title: 'Late Night Glass',
    category: 'Rain Mood',
    description: 'A transparent object for slow evenings and quiet playlists.',
  },
  {
    title: 'Memory Cassette',
    category: 'Nostalgia',
    description: 'Feels like hearing an old song while riding the MRT home.',
  },
  {
    title: 'Sunday Walkman',
    category: 'Soft Escape',
    description: 'A small device for disappearing into your own atmosphere.',
  },
];

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="eyebrow">EMOTIONAL CURATION ARCHIVE</p>

          <h1>
            Objects for
            <br />
            quiet people.
          </h1>

          <p className="description">
            A curated emotional space between music, objects, memory and interface.
          </p>

          <button className="primaryButton">
            Enter Archive
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </section>

      <section className="todayMood">
        <div className="moodCard">
          <span className="label">TODAY'S MOOD</span>
          <h2>2:13 AM / Light Rain / Slowdive</h2>
          <p>
            Tonight feels soft, distant and slightly transparent.
          </p>
        </div>
      </section>

      <section className="objectsGrid">
        {objects.map((item, index) => (
          <motion.div
            className="objectCard"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <span className="objectCategory">{item.category}</span>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <div className="objectFooter">
              <span>OBJECT_0{index + 1}</span>
              <ArrowRight size={16} />
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
