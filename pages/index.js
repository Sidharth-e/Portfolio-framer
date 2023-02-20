import Head from "next/head";
import { useState,useEffect } from "react";
import dynamic from "next/dynamic";
import { motion} from "framer-motion";
import { BsFillMoonStarsFill,BsFillPaletteFill ,BsFillFileEarmarkFontFill} from "react-icons/bs";

const Dynamicproject = dynamic(() => import("./components/projects"), {
  loading: () => "loading...",
});
const Dynamicskill = dynamic(() => import("./components/skills"), {
  loading: () => "loading...",
});
const Dynamicabout = dynamic(() => import("./components/about"), {
  loading: () => "loading...",
});
const Dynamichome = dynamic(() => import("./components/home"), {
  loading: () => "loading...",
});
export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [Primary,setPrimaryColor]=useState('#2DD4BF');
  const [Secondary,setsecondaryColor]=useState('#317773');
  const [ModaloneisOpen, setModaloneIsOpen] = useState(false);
function changeprimarythemecolor(color){
  setPrimaryColor(color)
}
function changesecondaryhemecolor(color){
    setsecondaryColor(color)
}
function themeselector(primary,secondary){
  setPrimaryColor(primary)
  setsecondaryColor(secondary)
}
function changefont(font){
  setfontfamily(color)
}
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-gray-100 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <nav className="py-10 mb-12 justify-between dark:text-white">
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode) && changesecondaryhemecolor('black')}
            className="absolute right-10 cursor-pointer text-2xl"
          />
        </nav>
        <div onClick={() => setModaloneIsOpen(true)} className="fixed bg-slate-400 text-2xl gap-8 rounded-xl bottom-3 left-1/2 w-52 h-10 transform -translate-x-1/2 py-2 px-4 flex justify-around sm:justify-center sm:w-52 sm:max-w-screen-lg ">
    <BsFillPaletteFill/>
    </div>
    {ModaloneisOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                  <BsFillPaletteFill/>
                  </div>

                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Theme
                    </h3>
                    <h4 className="text-lg mt-5 leading-6 font-medium text-gray-900">Dark mode Themes</h4>
                    <div className="mt-2 flex flex-wrap gap-5">
                    <motion.button 
                    whileHover={{ scale: 1.2 }}
                    
                    className="bg-red-500 mr-2 px-5 py-3 rounded-xl" onClick={()=> themeselector('#F96167','#FCE77D')}>
                    Theme 1</motion.button>
                    <motion.button
                    whileHover={{ scale: 1.2 }}
                    
                     className="bg-blue-500 mr-2 px-5 py-3 rounded-xl" 
                    onClick={()=> themeselector('#aCCF381','#4831D4')}>Theme 2</motion.button>
                    <motion.button 
                    whileHover={{ scale: 1.2 }}
                    
                    className="bg-blue-200 mr-2 px-5 py-3 rounded-xl" 
                    onClick={()=> themeselector('#89ABE3FF','#EA738DFF')}>Theme 3</motion.button>
                    <motion.button 
                    whileHover={{ scale: 1.2 }}
                    
                    className="bg-pink-500 mr-2 px-5 py-3 rounded-xl" 
                    onClick={()=> themeselector('#E3B448','#3A6B35')}>Theme 4</motion.button>
                    <motion.button
                    whileHover={{ scale: 1.2 }}
                    
                     className="bg-blue-300 mr-2 px-5 py-3 rounded-xl" 
                    onClick={()=> themeselector('#EC449B','#FEE715FF')}>Theme 5</motion.button>
                    <motion.button 
                    whileHover={{ scale: 1.2 }}
                    
                    className="bg-yellow-500 mr-2 px-5 py-3 rounded-xl"
                     onClick={()=> themeselector('#408EC6','#FEE715FF')}>Theme 6</motion.button>
                      <motion.button 
                    whileHover={{ scale: 1.2 }}
                    
                    className="bg-pink-700 mr-2 px-5 py-3 rounded-xl"
                     onClick={()=> themeselector('#408EC6','#7A2048')}>Theme 6</motion.button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 px-4 py-3 flex justify-evenly">
              
              <motion.button
                whileHover={{ scale: 1.2 }}
                    
                 className="w-24 py-2 bg-black text-white rounded-xl" 
              onClick={()=> themeselector('#2DD4BF','#317773')}>Default</motion.button>
                <motion.button
                whileHover={{ scale: 1.2 }}
                
                  type="button"
                  className="w-24 py-2 bg-black text-white rounded-xl"
                  onClick={() => setModaloneIsOpen(false)}
                >
                  Close
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      )}

<Dynamichome  primary={Primary} secondary={Secondary} />
        <Dynamicabout primary={Primary} secondary={Secondary}  />
        <Dynamicskill primary={Primary} secondary={Secondary}  />
        <Dynamicproject primary={Primary} secondary={Secondary} />
      </main>
    </div>
  );
}
