import { motion } from "framer-motion";
import { useState } from "react";

interface Props

export function PullCord() {
  return;
  <div className="fixed h-30 right-10 border border-black"></div>;
}

// import { motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

// export function PullCord({ onPull, theme }: Props) {
//
//   return (
//     <div className="fixed top-0 right-20 flex flex-col items-center z-50">
//       {/* The String */}
//       <div className="w-[2px] h-40 bg-amber-700 shadow-sm" />

//       {/* The Lamp Handle */}
//       <motion.button
//         onClick={onPull}
//         whileTap={{ y: 40 }} // Visual "pull" when clicked
//         transition={{ type: "spring", stiffness: 300, damping: 15 }}
//         className="w-10 h-24 bg-amber-800 rounded-b-2xl flex flex-col items-center justify-end pb-4 border-2 border-amber-900 shadow-lg cursor-pointer group"
//       >
//         {/* The Icon inside the lamp */}
//         <motion.div
//           key={theme}
//           initial={{ rotate: -90, opacity: 0 }}
//           animate={{ rotate: 0, opacity: 1 }}
//           className="text-amber-200"
//         >
//           <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
//         </motion.div>

//         {/* Glow effect when Dark Mode is on */}
//         {theme === "dark" && (
//           <div className="absolute inset-0 bg-amber-400/20 blur-xl rounded-full" />
//         )}
//       </motion.button>
//     </div>
//   );
// }
