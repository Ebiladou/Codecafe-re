import { motion } from "framer-motion";

type props = {
  children: React.ReactNode;
  className?: string;
};

const Transition = ({ children, className }: props)  =>  {
  const routeVariants = {
    initial: {
      y: "100vh",
    },
    final: {
      y: "0vh",
      transition: {
        type: "spring",
        mass: 0.4,
      },
    },
  };
  
  return (
    <>
      <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className={className}
      >
        {children}
      </motion.div>
    </>
  );
}

export default Transition;