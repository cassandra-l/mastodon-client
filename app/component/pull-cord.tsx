import { motion } from "framer-motion";
import { useDarkMode } from "~/hooks/useDarkMode";
import { useState } from "react";

export function PullCord() {
  const { theme, toggleTheme } = useDarkMode();
  const [isPulled, setIsPulled] = useState(false);

  return (
    <motion.div
      className="fixed top-0 right-20 flex flex-col items-center z-50 cursor-pointer"
      onPointerDown={() => setIsPulled(true)}
      onPointerUp={() => {
        setIsPulled(false);
        toggleTheme();
      }}
      onPointerLeave={() => setIsPulled(false)}
    >
      {/* The String */}
      <motion.div
        className="w-0.5 bg-[#f59e0b] dark:bg-slate-700 origin-top"
        style={{ height: 128 }}
      ></motion.div>

      {/* The Lamp Handle */}
      <motion.div
        animate={{
          y: isPulled ? 0 : -5,
        }}
        className="group w-10 h-16 rounded-xl flex flex-col items-center justify-end pb-5 focus:ring focus:ring-amber-50
        /* Background */
       bg-white dark:bg-slate-900 dark:border-2 dark:border-slate-700
    
        /* Border */
        before:content-[''] before:absolute before:inset-[0.3px]
        before:rounded-[11.7px] before:border-2
      before:border-amber-200 before:opacity-100
      dark:before:border-none

      ring-1 ring-slate-800
    
        /* Shadow  */
        shadow-[0_10px_20px_rgba(245,158,11,0.2)]
        dark:shadow-[0_10px_25px_rgba(99,102,241,0.3)]
        "
      >
        {/* Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-xl rounded-full bg-amber-400 dark:bg-indigo-500" />

        {/* Icon Container */}
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-amber-500 dark:text-indigo-400"
        >
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// relative -mt-3 w-10 h-16 bg-white dark:bg-slate-900 shadow-[0_15px_30px_-5px_rgba(245,158,11,0.2)] dark:hadow-[0_15px_30px_-5px_rgba(99,102,241,0.3)] rounded-b-2xl flex flex-col items-center justify-end pb-4 border-2 border-amber-900 group hover:bg-amber-700 transition-colors"

// relative -mt-1 w-12 h-24 rounded-2xl flex flex-col items-center justify-end pb-5
//           transition-all duration-500 border-[1.5px] pointer-events-none

//           /* Light Mode */
//           bg-white border-amber-200 shadow-[0_15px_30px_-5px_rgba(245,158,11,0.2)]

//           /* Dark Mode */
//           dark:bg-slate-900 dark:border-slate-700 dark:ring-1 dark:ring-slate-800
//           dark:shadow-[0_15px_30px_-5px_rgba(99,102,241,0.3)]

//         {/* The Icon inside the lamp */}
//         <motion.div
//           key={theme}
//           initial={{ rotate: -90, opacity: 0 }}
//           animate={{ rotate: 0, opacity: 1 }}
//           transition={{ duration: 0.3 }}
//           className="text-amber-200"
//         >
//           <FontAwesomeIcon
//             icon={theme === "light" ? faSun : faMoon}
//             size="lg"
//           />
//         </motion.div>

//         {/* Glow effect when Dark Mode is on */}
//         {theme === "dark" && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3 }}
//             className="absolute inset-0 bg-amber-400/20 blur-xl rounded-full"
//           />
//         )}
//       </motion.button>
//     </motion.div.>
//   );
// }
