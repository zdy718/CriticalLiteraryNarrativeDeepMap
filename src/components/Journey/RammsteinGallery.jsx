import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&q=80',
    caption: 'Rammstein Live Performance',
    description: 'Pyrotechnics and theatrical staging',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
    caption: 'Concert Atmosphere',
    description: 'The power of live music experience',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80',
    caption: 'Berlin Architecture',
    description: 'The cultural context of the city',
  },
];

export default function RammsteinGallery() {
  return (
    <section className="py-16 bg-[#1a1a2e]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-medium mb-1">{image.caption}</p>
                  <p className="text-sm text-white/70">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}