import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, HelpCircle, Download, FileText, X } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  description?: string;
  options: string[];
  correctAnswer: number;
  category: string;
}

const Survey = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showRequirements, setShowRequirements] = useState(true);

  const questions: Question[] = [
    {
      id: 1,
      category: "Business Requirements",
      text: "What type of business are you looking to register?",
      description: "This helps us understand your business needs",
      options: [
        "Sole Proprietorship",
        "Partnership", 
        "Limited Liability Company (LLC)",
        "Corporation"
      ],
      correctAnswer: 2 // LLC is the correct answer for registration
    },
    {
      id: 2,
      category: "Documentation",
      text: "Do you have all the required documents ready for registration?",
      description: "Required: Business name, ID proof, address proof, tax information",
      options: [
        "No, I need to gather documents",
        "Some documents are ready",
        "Most documents are ready", 
        "Yes, all documents are prepared"
      ],
      correctAnswer: 3 // All documents ready is correct
    },
    {
      id: 3,
      category: "Compliance",
      text: "Are you familiar with the compliance requirements for your business type?",
      description: "This includes tax obligations, licenses, and annual filings",
      options: [
        "Not familiar at all",
        "Somewhat familiar",
        "Moderately familiar",
        "Very familiar with all requirements"
      ],
      correctAnswer: 3 // Very familiar is correct
    }
  ];

  // Requirements data for the modal
  const requirements = [
    "Valid government-issued ID (Passport, Driver's License, or National ID)",
    "Proof of business address (Utility bill or lease agreement)",
    "Business name reservation certificate",
    "Tax identification number",
    "Articles of Incorporation/Organization",
    "Registered agent information",
    "Business license applications",
    "Employer Identification Number (EIN) if applicable"
  ];

  const handleAnswer = async (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
    setIsTransitioning(true);
    
    // Add slight delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);
    setSelectedAnswer(null);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const score = calculateScore(newAnswers);
      navigate('/score', { state: { score } });
    }
    
    setIsTransitioning(false);
  };

  const calculateScore = (answerArray: number[]) => {
    let correct = 0;
    answerArray.forEach((answer, index) => {
      // FIX: Compare with the correct answer index
      if (answer === questions[index].correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  const downloadRequirements = () => {
    const requirementsText = `Business Registration Requirements Checklist\n\n` +
      `Please ensure you have the following documents ready before proceeding:\n\n` +
      requirements.map((req, index) => `${index + 1}. ${req}`).join('\n') +
      `\n\nNote: A perfect score (100%) on the assessment is required to proceed with registration.\n` +
      `This ensures you have the necessary understanding and documentation for a successful registration process.`;
    
    const blob = new Blob([requirementsText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'business-registration-requirements.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-linear-to-r from-slate-50 to-blue-50 py-8">
      {/* Requirements Modal */}
      <AnimatePresence>
        {showRequirements && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="bg-linear-to-r from-cyan-600 to-blue-700 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-8 h-8" />
                    <div>
                      <h2 className="text-2xl font-bold">Registration Requirements</h2>
                      <p className="text-cyan-100">Please review before starting the assessment</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowRequirements(false)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Required Documents & Information
                  </h3>
                  <p className="text-gray-600 mb-4">
                    To successfully complete your business registration, please ensure you have the following 
                    documents and information ready. A perfect score on the assessment is required to proceed.
                  </p>
                  
                  <div className="space-y-3">
                    {requirements.map((requirement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                        <span className="text-gray-700">{requirement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Notes:</h4>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• You must achieve a perfect score (100%) to proceed with registration</li>
                    <li>• All documents must be current and valid</li>
                    <li>• Digital copies should be clear and readable</li>
                    <li>• Additional documents may be required based on your business type</li>
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
                  <button
                    onClick={downloadRequirements}
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Checklist
                  </button>
                  
                  <button
                    onClick={() => setShowRequirements(false)}
                    className="inline-flex items-center justify-center px-6 py-3 bg-cyan-600 text-white font-medium rounded-lg hover:bg-cyan-700 transition-colors"
                  >
                    I Understand, Start Assessment
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Business Registration Assessment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete this quick assessment to verify your readiness for business registration.
          </p>
          
          {/* Requirements reminder */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => setShowRequirements(true)}
            className="inline-flex items-center px-4 py-2 mt-4 text-sm text-cyan-600 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors"
          >
            <FileText className="w-4 h-4 mr-2" />
            View Requirements Again
          </motion.button>
        </motion.div>

        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          {/* Enhanced Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Question {currentQuestion + 1} of {questions.length}</span>
              </div>
              <span className="font-semibold">{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-linear-to-r from-cyan-500 to-blue-600 h-3 rounded-full shadow-sm"
              />
            </div>
          </div>

          {/* Question Category */}
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800">
              {question.category}
            </span>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight">
              {question.text}
            </h2>
            {question.description && (
              <p className="text-gray-600 flex items-center">
                <HelpCircle className="w-4 h-4 mr-2" />
                {question.description}
              </p>
            )}
          </div>

          {/* Options */}
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {question.options.map((option, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: selectedAnswer === null ? 1.02 : 1 }}
                  whileTap={{ scale: selectedAnswer === null ? 0.98 : 1 }}
                  onClick={() => selectedAnswer === null && handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-200 ${
                    selectedAnswer === index
                      ? 'border-cyan-500 bg-cyan-50 shadow-md'
                      : 'border-gray-200 hover:border-cyan-300 hover:bg-cyan-25'
                  } ${selectedAnswer !== null && selectedAnswer !== index ? 'opacity-50' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswer === index
                          ? 'border-cyan-500 bg-cyan-500 text-white'
                          : 'border-gray-300 text-gray-400'
                      }`}>
                        {selectedAnswer === index ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <span className="text-sm font-medium">{String.fromCharCode(65 + index)}</span>
                        )}
                      </div>
                      <span className="text-lg font-medium text-gray-900">{option}</span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          {/* Loading State */}
          <AnimatePresence>
            {isTransitioning && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center mt-6"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-gray-500 mt-8 text-sm"
        >
          Your responses help us ensure you're fully prepared for business registration
        </motion.p>
      </div>
    </div>
  );
};

export default Survey;