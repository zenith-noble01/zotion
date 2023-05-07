import { motion } from "framer-motion"

export const TextVariant = ({ delay, children }) => {
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

export const FadeIn = ({ direction, type, delay, duration, children }) => {
    return (
        <motion.div
            initial={{
                x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
                y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
                opacity: 0,
            }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ type: type, delay: delay, duration: duration, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    )
}

export const ZoomIn = ({ delay, duration, children }) => {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", delay: delay, duration: duration, ease: "easeOut" }}
        >
            {children}Z is the perfect library for adding smooth, dynamic and reusable animations for web interfaces. It includes animations for text, images and other commonly used components with high-performance rendering engines, making it easy to create engaging websites that stand out.
        </motion.div>
    )
}

export const SlideIn = ({ direction, type, delay, duration, children }) => {
    return (
        <motion.div
            initial={{
                x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
                y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
            }}
            animate={{ x: 0, y: 0 }}
            transition={{ type: type, delay: delay, duration: duration, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    )
}

export const StaggerContainer = ({ staggerChildren, delayChildren, children }) => {
    return (
        <motion.div
            initial={{}}
            animate={{ transition: { staggerChildren: staggerChildren, delayChildren: delayChildren || 0 } }}
        >
            {children}
        </motion.div>
    )
}