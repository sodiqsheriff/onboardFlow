import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle, XCircle, ArrowRight, Home, FileText } from 'lucide-react';

const Score = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get score from location state
  const score = location.state?.score || 0;
  const isPerfectScore = score === 100;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          {/* Score Display */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            {isPerfectScore ? (
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
            ) : (
              <XCircle className="w-20 h-20 text-orange-500 mx-auto mb-4" />
            )}
            
            <div className="text-6xl font-bold mb-2 bg-linear-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
              {score}%
            </div>
            <p className="text-xl text-gray-600">
              Assessment Score
            </p>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isPerfectScore ? "Perfect Score! 🎉" : "Assessment Complete!"}
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {isPerfectScore 
                ? "Congratulations! You've demonstrated excellent understanding of the business registration requirements and are ready to proceed."
                : "Thank you for completing the assessment. Review the requirements and try again when you're fully prepared."
              }
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {isPerfectScore ? (
              <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/register')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-cyan-600 to-blue-700 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-800 transition-all duration-200 shadow-lg"
                >
                  Proceed to Registration
                  <ArrowRight className="ml-2" size={20} />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/')}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-cyan-600 hover:text-cyan-600 transition-all duration-200"
                >
                  <Home className="mr-2" size={20} />
                  Back to Home
                </motion.button>
              </>
            ) : (
              <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/survey')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-all duration-200 shadow-lg"
                >
                  <FileText className="mr-2" size={20} />
                  Retry Assessment
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/')}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-cyan-600 hover:text-cyan-600 transition-all duration-200"
                >
                  <Home className="mr-2" size={20} />
                  Back to Home
                </motion.button>
              </>
            )}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 p-4 bg-gray-50 rounded-lg"
          >
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> {isPerfectScore 
                ? "You can now proceed with your business registration. Please have all required documents ready."
                : "A perfect score (100%) is required to proceed with registration to ensure you have the necessary understanding and documentation."
              }
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Score;