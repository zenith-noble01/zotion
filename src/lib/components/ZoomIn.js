import { motion } from "framer-motion"


const ZoomIn = ({ delay, duration, children }) => {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", delay: delay, duration: duration, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    )
}

export default ZoomIn