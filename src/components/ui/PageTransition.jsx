import { motion } from "framer-motion"

const PageTransition = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileHover={{opacity: 1}}
    className="w-[100px] h-[100px] bg-primary rounded-md ml-5">

    </motion.div>
  )
}

export default PageTransition;