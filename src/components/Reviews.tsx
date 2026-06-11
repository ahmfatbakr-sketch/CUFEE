import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const reviewsData = [
  {
    id: 1,
    time: "3 years ago",
    text: "Good place for indoor sheesh-a and Tea bonding! Best part is at the upstairs. 😊 Nice coffee, well-organized and clean",
    rating: 5,
  },
  {
    id: 2,
    time: "6 months ago",
    text: "Good",
    rating: 5,
  },
  {
    id: 3,
    time: "2 years ago",
    text: "Best among others",
    rating: 5,
  }
];

export const Reviews = () => {
  const { lang } = useLanguage();

  return (
    <section className="relative py-24 bg-[#F2EBE3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <motion.div
           initial={{ opacity: 0, y: 60 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           viewport={{ once: true, margin: "-50px" }}
           className="text-center mb-16"
        >
           <h2 className="text-4xl md:text-5xl font-sans font-medium text-[#4A3B32] mb-6">
             {lang === 'ar' ? 'آراء العملاء' : 'Customer Reviews'}
           </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsData.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-[#E8DDCE] p-8 rounded-3xl border border-[#D1BDAD]"
            >
              <div className="flex text-[#D4AF37] mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-[#4A3B32] font-light leading-relaxed mb-6">
                "{review.text}"
              </p>
              <div className="text-sm text-[#968A7E]">
                {review.time}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
