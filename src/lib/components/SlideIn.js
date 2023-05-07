import { motion } from "framer-motion"



const SlideIn = ({ direction, type, delay, duration, children }) => {
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

