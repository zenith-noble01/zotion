import { motion } from "framer-motion"


const StaggerContainer = ({ staggerChildren, delayChildren, children }) => {
    return (
        <motion.div
            initial={{}}
            animate={{ transition: { staggerChildren: staggerChildren, delayChildren: delayChildren || 0 } }}
        >
            {children}
        </motion.div>
    )
}

export default StaggerContainer