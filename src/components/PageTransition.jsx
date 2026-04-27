import { motion } from "framer-motion";

export default function PageTransition({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1]
            }}
            className="w-full h-full"
        >
            {children}
        </motion.div>
    );
}