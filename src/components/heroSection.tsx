import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-linear-to-br from-primary-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Build The Future With{' '}
              <span className="text-primary-600">HoloForge</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg">
              Transform your ideas into reality with our cutting-edge platform. 
              Experience the next generation of digital innovation and seamless user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/survey"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
              
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-primary-600 hover:text-primary-600 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-linear-to-r from-primary-500 to-primary-700 rounded-2xl p-8 text-white space-y-6 shadow-2xl">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Innovation at Scale</h3>
                <p className="text-primary-100">
                  Join thousands of innovators already transforming their workflows with HoloForge.
                </p>
              </div>
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-4"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Ready to begin?</span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <ArrowRight className="text-white" size={20} />
                  </motion.div>
                </div>
              </motion.div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg shadow-lg font-semibold"
            >
              New!
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;