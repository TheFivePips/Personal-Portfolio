import React from 'react';
import { motion } from 'framer-motion';

const FadeInWhenVisible = ({children}) => {
    return (
        <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInWhenVisible;
