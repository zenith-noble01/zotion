import { motion } from "framer-motion"

const TextVariant = ({ delay, children }) => {
    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1.25, delay: delay }}
        >
            {children}
        </motion.div>
    )
}

export default TextVariant