import { motion } from "framer-motion";

const PageTransition = ({children}) => {

  //Variants --> NOTE: We can customize the variants we want to use in our "motion.div" and then reference them by assigning the property key form our custom variant object as the VALUE to the prop of the "motion.div" (IMPORTANT: We MUST tell the "motion.div" that we are using a custom variant object with the "variants" prop and assigning our object as the value)
  const transitionVariants = {
    initial: {
      x: "100%",
      width: "100%"
    },
    animate: {
      x: "0%",
      width: "0%"
    },
    exit: {
      // The "exit" key assigns the animation state of the component when it UNMOUNTS
      x: ["0%", "100%"],
      width: ["0%", "100%"],
    },
  }

  
  return (
    <>
    {/* Here, we want the animation of three different colored divs going from full screen on the right side to hiding away moving towards the left side --> NOTE: It's important that for this effect we assign z-index values to each div as to not cover each other when they complete the animation at staggered time intervals (which we set in the "transition" prop) */}
      <motion.div 
      className="fixed top-0 bottom-0 right-full h-screen w-screen z-first bg-primary"
      variants={transitionVariants} initial="initial" animate="animate" exit="exit"
      transition={{delay: 0.2, duration: 0.7, ease: "easeInOut"}}
      />
      <motion.div 
      className="fixed top-0 bottom-0 right-full h-screen w-screen z-second bg-[#39ace7]"
      variants={transitionVariants} initial="initial" animate="animate" exit="exit"
      transition={{delay: 0.4, duration: 0.7, ease: "easeInOut"}}
      />
      <motion.div 
      className="fixed top-0 bottom-0 right-full h-screen w-screen z-third bg-[#0784b5]"
      variants={transitionVariants} initial="initial" animate="animate" exit="exit"
      transition={{delay: 0.6, duration: 0.7, ease: "easeInOut"}}
      />

      <div>{children}</div>
      
    </>
  )
}

export default PageTransition;