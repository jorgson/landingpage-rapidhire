"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";

const Stars = () => {
  const starVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      {[...Array(5)].map((x, i) => (
        <motion.div
          key={i}
          className="flex"
          initial={{ opacity: 0, translateX: -10, translateY: -5, scale: 0 }}
          animate={{ opacity: 1, translateX: 0, translateY: 0, scale: 1 }}
          transition={{ duration: 0.35, delay: i * 0.025 }}>
          <Star className="fill-aquaForest-400 stroke-1" />
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default Stars;
