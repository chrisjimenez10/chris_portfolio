//Imports
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

//Components
import Footer from "../Footer";
import Navbar from "../Navbar";


const PageTransition = ({children}) => {

  const location = useLocation(null);

  //Variants --> NOTE: We can customize the variants we want to use in our "motion.div" and then reference them by assigning the property key form our custom variant object as the VALUE to the prop of the "motion.div" (IMPORTANT: We MUST tell the "motion.div" that we are using a custom variant object with the "variants" prop and assigning our object as the value)
  const transitionVariants = {
    initial: {
      x: "100%",
    },
    animate: {
      x: "0%",
    },
    exit: {
      // The "exit" key assigns the animation state of the component when it UNMOUNTS
      x: ["0%", "100%"],
    },
  }

  
  return (
    <>
    {/* Here, we want the animation of three different colored divs going from full screen on the right side to hiding away moving towards the left side --> NOTE: It's important that for this effect we assign z-index values to each div as to not cover each other when they complete the animation at staggered time intervals (which we set in the "transition" prop) */}
      <motion.div
      // NOTE: We MUST provide unique key value prop to the "motion.div" to help React distinguish and ALLOW the page transition effect with routing --> We wrap all of the Routes with this component and accept "children" here and render at the bottom div
      key={location.pathname + "div1"}
      className="fixed top-0 bottom-0 right-full h-screen w-screen z-first bg-primary"
      variants={transitionVariants} initial="initial" animate="animate" exit="exit"
      transition={{delay: 0, duration: 0.8, ease: "easeInOut"}}
      />
      <motion.div
      key={location.pathname + "div2"}
      className="fixed top-0 bottom-0 right-full h-screen w-screen z-second bg-[#39ace7]"
      variants={transitionVariants} initial="initial" animate="animate" exit="exit"
      transition={{delay: 0.2, duration: 0.8, ease: "easeInOut"}}
      />
      <motion.div
      key={location.pathname + "div3"}
      className="fixed top-0 bottom-0 right-full h-screen w-screen z-third bg-[#0784b5]"
      variants={transitionVariants} initial="initial" animate="animate" exit="exit"
      transition={{delay: 0.4, duration: 0.8, ease: "easeInOut"}}
      />

      {/* Pushing div containing the component that is rendered so it appears BELOW the Header/Navbar */}
      <div>
        <Navbar />
        {children}
        <Footer className="fixed bottom-[90px] w-full md:bottom-3"/>
      </div>
      
    </>
  )
}

export default PageTransition;