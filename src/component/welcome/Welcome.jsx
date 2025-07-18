import './Welcome.css';
import { motion } from 'framer-motion';

function Welcome(props) {
   return (
    <motion.div
      className="p-10 text-center"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
    <div className="container flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Hello, {props.name}!
      </h1>
      <p className="title text-lg text-gray-700">
        You are {props.age} years old.
      </p>
    </div>
    </motion.div>
  );
}

export default Welcome;