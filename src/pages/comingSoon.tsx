import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-primary-50 to-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto px-4"
      >
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-8"
        >
          <Construction size={80} className="text-primary-600 mx-auto" />
        </motion.div>
        
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Coming Soon
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          We're working hard to bring you something amazing. This page is under construction 
          and will be available soon. Stay tuned for updates!
        </p>
        
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-primary-600 font-semibold text-lg"
        >
          Working on it...
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;