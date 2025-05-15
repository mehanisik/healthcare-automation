import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function StarRating({ rating }: { rating: number }) {
  return (
    <motion.div
      className="flex gap-0.5"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {Array.from({ length: rating }).map((_, i) => (
        <motion.div
          key={
            crypto.randomUUID()
          }
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
        >
          <Star className="size-4 text-amber-100" />
        </motion.div>
      ))}
    </motion.div>
  );
}
