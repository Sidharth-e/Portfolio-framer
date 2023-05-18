import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function skills(props) {
  return (
    <AnimatePresence>
      <motion.div className="lg:flex gap-10">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ backgroundColor: props.primary }}
          className="text-left shadow-xl p-10 rounded-xl my-10  flex-1 hover:shadow-2xl"
        >
          <h3 className="text-2xl font-medium pt-8 pb-2 text-white">
            FrontEnd technologies
          </h3>
          <div className="flex mt-5 justify-between mb-1">
            <span className="text-base font-medium text-white ">HTML</span>
            <span className="text-sm font-medium text-white ">90%</span>
          </div>
          <div className="w-full bg-black rounded-full h-2.5 ">
            <div
              className="bg-white h-2.5 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
          <div className="flex mt-5 justify-between mb-1">
            <span className="text-base font-medium text-white ">CSS</span>
            <span className="text-sm font-medium text-white ">90%</span>
          </div>
          <div className="w-full bg-black  rounded-full h-2.5 ">
            <div
              className="bg-white h-2.5 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
          <div className="flex mt-5 justify-between mb-1">
            <span className="text-base font-medium text-white ">
              JavaScript
            </span>
            <span className="text-sm font-medium text-white ">80%</span>
          </div>
          <div className="w-full bg-black  rounded-full h-2.5 ">
            <div
              className="bg-white h-2.5 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
          <div className="flex mt-5 justify-between mb-1">
            <span className="text-base font-medium text-white ">React</span>
            <span className="text-sm font-medium text-white ">60%</span>
          </div>
          <div className="w-full bg-black  rounded-full h-2.5 ">
            <div
              className="bg-white h-2.5 rounded-full"
              style={{ width: "60%" }}
            ></div>
          </div>
          <div className="flex mt-5 justify-between mb-1">
            <span className="text-base font-medium text-white ">Angular</span>
            <span className="text-sm font-medium text-white ">70%</span>
          </div>
          <div className="w-full bg-black  rounded-full h-2.5 ">
            <div
              className="bg-white h-2.5 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
          <div className="flex mt-5 justify-between mb-1">
            <span className="text-base font-medium text-white ">Vue</span>
            <span className="text-sm font-medium text-white ">75%</span>
          </div>
          <div className="w-full bg-black  rounded-full h-2.5 ">
            <div
              className="bg-white h-2.5 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
          <div className="flex mt-5 justify-between mb-1">
            <span className="text-base font-medium text-white ">ASP.net</span>
            <span className="text-sm font-medium text-white ">85%</span>
          </div>
          <div className="w-full bg-black  rounded-full h-2.5 ">
            <div
              className="bg-white h-2.5 rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ backgroundColor: props.primary }}
          className="text-left shadow-xl p-10 rounded-xl my-10  flex-1 hover:shadow-2xl"
        >
          <h3 className="text-2xl font-medium pt-8 pb-2 text-white ">
            Backend technologies
          </h3>
          <div className="flex mt-5 justify-between mb-1">
            <span className="text-base font-medium text-white ">Python</span>
            <span className="text-sm font-medium text-white ">90%</span>
          </div>
          <div className="w-full bg-black  rounded-full h-2.5 ">
            <div
              className="bg-white h-2.5 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
          <div className="flex mt-5 justify-between mb-1">
            <span className="text-base font-medium text-white ">Django</span>
            <span className="text-sm font-medium text-white ">75%</span>
          </div>
          <div className="w-full bg-black  rounded-full h-2.5 ">
            <div
              className="bg-white h-2.5 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
          <div className="flex mt-5 justify-between mb-1">
            <span className="text-base font-medium text-white ">MYSQL</span>
            <span className="text-sm font-medium text-white ">80%</span>
          </div>
          <div className="w-full bg-black  rounded-full h-2.5 ">
            <div
              className="bg-white h-2.5 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
          <div className="flex mt-5 justify-between mb-1">
            <span className="text-base font-medium text-white ">FLASK</span>
            <span className="text-sm font-medium text-white ">70%</span>
          </div>
          <div className="w-full bg-black  rounded-full h-2.5 ">
            <div
              className="bg-white h-2.5 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
          <div className="flex mt-5 justify-between mb-1">
            <span className="text-base font-medium text-white ">MongoDB</span>
            <span className="text-sm font-medium text-white ">70%</span>
          </div>
          <div className="w-full bg-black  rounded-full h-2.5 ">
            <div
              className="bg-white h-2.5 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
          <div className="flex mt-5 justify-between mb-1">
            <span className="text-base font-medium text-white ">Node</span>
            <span className="text-sm font-medium text-white ">80%</span>
          </div>
          <div className="w-full bg-black  rounded-full h-2.5 ">
            <div
              className="bg-white h-2.5 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ backgroundColor: props.primary }}
          className="text-left shadow-xl p-10 rounded-xl my-10  flex-1 hover:shadow-2xl"
        >
          <h2 className="text-2xl font-large pt-8 pb-2 text-white ">
            Data Science
          </h2>
          <div className="flex mt-5 justify-between mb-1">
            <span className="text-base font-medium text-white ">
              Data Wrangling
            </span>
            <span className="text-sm font-medium text-white ">90%</span>
          </div>
          <div className="w-full bg-black  rounded-full h-2.5 ">
            <div
              className="bg-white h-2.5 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
          <div className="flex mt-5 justify-between mb-1">
            <span className="text-base font-medium text-white ">
              Data Visualization
            </span>
            <span className="text-sm font-medium text-white ">80%</span>
          </div>
          <div className="w-full bg-black  rounded-full h-2.5 ">
            <div
              className="bg-white h-2.5 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
          <div className="flex mt-5 justify-between mb-1">
            <span className="text-base font-medium text-white ">
              Programming using python
            </span>
            <span className="text-sm font-medium text-white ">90%</span>
          </div>
          <div className="w-full bg-black  rounded-full h-2.5 ">
            <div
              className="bg-white h-2.5 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
          <div className="flex mt-5 justify-between mb-1">
            <span className="text-base font-medium text-white ">
              Statistical analysis and computing
            </span>
            <span className="text-sm font-medium text-white ">70%</span>
          </div>
          <div className="w-full bg-black  rounded-full h-2.5 ">
            <div
              className="bg-white h-2.5 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
          <div className="flex mt-5 justify-between mb-1">
            <span className="text-base font-medium text-white ">
              Machine learning
            </span>
            <span className="text-sm font-medium text-white ">70%</span>
          </div>
          <div className="w-full bg-black  rounded-full h-2.5 ">
            <div
              className="bg-white h-2.5 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ backgroundColor: props.primary }}
          className="text-left shadow-xl p-10 rounded-xl my-10  flex-1 hover:shadow-2xl"
        >
          <h2 className="text-2xl font-large pt-8 pb-2 text-white ">
            Cloud
          </h2>
          <div className="flex mt-5 justify-between mb-1">
            <span className="text-base font-medium text-white ">
              AWS
            </span>
            <span className="text-sm font-medium text-white ">80%</span>
          </div>
          <div className="w-full bg-black  rounded-full h-2.5 ">
            <div
              className="bg-white h-2.5 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
