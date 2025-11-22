import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Zap, 
  Users, 
  Globe,
  ArrowRight,
  Star,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import MotionFadeIn from '../components/motionFadeIn';

const Home = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Optimized performance with sub-second load times and seamless interactions.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance certifications.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Collaboration',
      description: 'Real-time collaboration features with advanced permission controls.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Scale',
      description: 'Deploy anywhere with our globally distributed edge network.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const stats = [
    { value: '99.9%', label: 'Uptime' },
    { value: '2M+', label: 'Users' },
    { value: '150+', label: 'Countries' },
    { value: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionFadeIn direction="right" delay={0.2}>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">Trusted by 10,000+ companies worldwide</span>
                </motion.div>

                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  Build The Future 
                  <span className="block bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    With AI Power
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                  Transform your workflow with our cutting-edge platform. Harness the power of artificial intelligence to accelerate your digital transformation journey.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/survey"
                      className="inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Start Free Trial
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/features"
                      className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
                    >
                      Watch Demo
                    </Link>
                  </motion.div>
                </div>

                {/* Stats */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8"
                >
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center md:text-left ">
                      <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </MotionFadeIn>

            {/* Enhanced Hero Visual */}
            <MotionFadeIn direction="left" delay={0.4}>
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <TrendingUp className="w-6 h-6 text-cyan-400" />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="h-4 bg-white/20 rounded-full animate-pulse"></div>
                      <div className="h-4 bg-white/20 rounded-full w-3/4 animate-pulse delay-75"></div>
                      <div className="h-4 bg-white/20 rounded-full w-1/2 animate-pulse delay-150"></div>
                    </div>
                    
                    <motion.div
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="bg-linear-to-r from-cyan-500/20 to-blue-500/20 p-4 rounded-xl border border-cyan-500/30"
                    >
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-cyan-400" />
                        <span className="text-sm font-medium text-cyan-300">AI Analysis Complete</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                    animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    className="absolute -top-4 -right-4 bg-linear-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm"
                >
                    New AI Feature!
                </motion.div>
              </motion.div>
            </MotionFadeIn>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionFadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Enterprise-Grade Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built for scale, security, and performance. Everything you need to transform your business.
              </p>
            </div>
          </MotionFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-linear-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-gray-200">
                  <div className={`inline-flex p-3 rounded-xl bg-linear-to-r ${feature.color} text-white mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-linear-to-r from-slate-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionFadeIn>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies already accelerating their growth with our platform.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/survey"
                className="bg-linear-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Start Your Journey Today
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:border-white hover:bg-white/10 transition-all duration-200"
              >
                View Pricing
              </Link>
            </motion.div>
            
            <p className="text-sm text-gray-400 mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </MotionFadeIn>
        </div>
      </section>
    </div>
  );
};

export default Home;