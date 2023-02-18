import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function projects() {
       const [ref, inView] = useInView({
              threshold: 0.5,
            });
            const animationVariants = {
              H3hidden: {y:-100 },
              H3visible: {y:0}
            };
  return (
    <div className="py-10">
      <div>
        <motion.h3
         className="text-3xl py-1 dark:text-white ">Projects
         </motion.h3>
        <motion.p
         className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I got various opportunities to work on multiple technologies and
          developed application from scratch. Below are some of the projects i
          worked.
        </motion.p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5 bg-gray-900 rounded-xl my-5 w-80  dark:bg-gradient-to-r from-cyan-600 to-teal-500 flex-1 lg:flex-wrap">
         <div className="h-16 w-16 rounded-full p-5 mb-5 mx-28 bg-gradient-to-r from-cyan-400 to-teal-500 text-white">1</div>
         <div className="rounded-xl font-extrabold bg-teal-400 text-white text-xl p-5  dark:bg-white dark:text-gray-400">
          Host override testing
          </div>
         <div className="rounded-xl bg-teal-400 text-white font-serif text-sm p-4 my-5 dark:bg-white dark:text-gray-400 ">
         The application is created as part of SRE automation. The tool
                is created using c# and selenium which will check overall
                response time of the web application by host overriding through
                different servers and calculate the performance of the web
                site.The application helped SRE to reduce workload by 30%.
         </div>
         <div className="rounded-xl bg-teal-400 font-bold text-white text-sm p-4 my-5 dark:bg-white dark:text-gray-400">
         Tech stack:- Asp.net,C#,Selenium
         </div>
        </motion.div>
        <motion.div
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5 bg-gray-900 rounded-xl my-5 w-80  dark:bg-gradient-to-r from-cyan-600 to-teal-500 flex-1 lg:flex-wrap">
         <div className="h-16 w-16 rounded-full p-5 mb-5 mx-28 bg-gradient-to-r from-cyan-400 to-teal-500 text-white">
          2
          </div>
         <div className="rounded-xl font-extrabold bg-teal-400 text-white text-xl p-5  dark:bg-white dark:text-gray-400">
         Voice assistant bot
          </div>
         <div className="rounded-xl bg-teal-400 text-white font-serif text-sm p-4 my-5 dark:bg-white dark:text-gray-400 ">
         Developed a personal assistant using python which can perform
                various actions based on voice commands like sending email,
                surfing on web, mathematical calculation, playing music, opening
                files, etc.
         </div>
         <div className="rounded-xl bg-teal-400 font-bold text-white text-sm p-4 my-5 dark:bg-white dark:text-gray-400">
         Tech stack:- Python
         </div>
        </motion.div>
        <motion.div
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5 bg-gray-900 rounded-xl my-5 w-80  dark:bg-gradient-to-r from-cyan-600 to-teal-500 flex-1 lg:flex-wrap">
         <div className="h-16 w-16 rounded-full p-5 mb-5 mx-28 bg-gradient-to-r from-cyan-400 to-teal-500 text-white">
          3
          </div>
         <div className="rounded-xl font-extrabold bg-teal-400 text-white text-xl p-5  dark:bg-white dark:text-gray-400">
         Daily Expense Tracker
          </div>
         <div className="rounded-xl bg-teal-400 text-white font-serif text-sm p-4 my-5 dark:bg-white dark:text-gray-400 ">
         DAILY EXPENSE TRACKER”is a project which proposes to form a
                process that can help to store and retrieve details regarding
                the expense of a person or an organazation. My project has
                severalmodules which are, login Dashboard. It can generate
                various reports as per requirements. It follows the two- tier
                architecture with front-end php and back-end SQL Server. My
                project is capable of generating exepense report based on months
                ,year aswell as days.
         </div>
         <div className="rounded-xl bg-teal-400 font-bold text-white text-sm p-4 my-5 dark:bg-white dark:text-gray-400">
         Tech stack:- PHP,SQL
         </div>
        </motion.div>
        <motion.div
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5 bg-gray-900 rounded-xl my-5 w-80  dark:bg-gradient-to-r from-cyan-600 to-teal-500 flex-1 lg:flex-wrap">
         <div className="h-16 w-16 rounded-full p-5 mb-5 mx-28 bg-gradient-to-r from-cyan-400 to-teal-500 text-white">
          4
          </div>
         <div className="rounded-xl font-extrabold bg-teal-400 text-white text-xl p-5  dark:bg-white dark:text-gray-400">
         Individual household electric power consumption Data Set
          </div>
         <div className="rounded-xl bg-teal-400 text-white font-serif text-sm p-4 my-5 dark:bg-white dark:text-gray-400 ">
         Performed various techniques in data set and created model
                <br />
                * Data exploration and analysis.
                <br />
                * Data Visualization .<br />
                * Regression and Time series analysis.
                <br />
                * Frequency Domain Analysis.
         </div>
         <div className="rounded-xl bg-teal-400 font-bold text-white text-sm p-4 my-5 dark:bg-white dark:text-gray-400">
         Tech stack:- Python,Data Science
         </div>
        </motion.div>
        <motion.div
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5 bg-gray-900 rounded-xl my-5 w-80  dark:bg-gradient-to-r from-cyan-600 to-teal-500 flex-1 lg:flex-wrap">
         <div className="h-16 w-16 rounded-full p-5 mb-5 mx-28 bg-gradient-to-r from-cyan-400 to-teal-500 text-white">
          5
          </div>
         <div className="rounded-xl font-extrabold bg-teal-400 text-white text-xl p-5  dark:bg-white dark:text-gray-400">
         Mask detection
          </div>
         <div className="rounded-xl bg-teal-400 text-white font-serif text-sm p-4 my-5 dark:bg-white dark:text-gray-400 ">
         Developed a deep learning based model for detecting masks over
                faces in public place to curtail community spread of Coronavirus
                is presented. The proposed model efficiently handles varying
                kinds of occlusions in dense situation by making use of ensemble
                of single and two stage detectors. The ensemble approach not
                only helps in achieving high accuracy but also improves
                detection speed considerably. The model is 98.2% accurate at
                mask detection with aver‐ ageinference times of 0.05 seconds per
                image.
         </div>
         <div className="rounded-xl bg-teal-400 font-bold text-white text-sm p-4 my-5 dark:bg-white dark:text-gray-400">
         Tech stack:- Python,Data Science
         </div>
        </motion.div>
        <motion.div
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5 bg-gray-900 rounded-xl my-5 w-80  dark:bg-gradient-to-r from-cyan-600 to-teal-500 flex-1 lg:flex-wrap">
         <div className="h-16 w-16 rounded-full p-5 mb-5 mx-28 bg-gradient-to-r from-cyan-400 to-teal-500 text-white">
          6
          </div>
         <div className="rounded-xl font-extrabold bg-teal-400 text-white text-xl p-5  dark:bg-white dark:text-gray-400">
         Triage tool
          </div>
         <div className="rounded-xl bg-teal-400 text-white font-serif text-sm p-4 my-5 dark:bg-white dark:text-gray-400 ">
         Developed a full stack application for SRE team, &ldquo;SL
                Triage Tool&rdquo; using Asp.net that allow users to access
                multiple advance features related to SRE core analysis.
         </div>
         <div className="rounded-xl bg-teal-400 font-bold text-white text-sm p-4 my-5 dark:bg-white dark:text-gray-400">
         Techstack:- Asp.net,MySQL,Rest api
         </div>
        </motion.div>
        <motion.div
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5 bg-gray-900 rounded-xl my-5 w-80  dark:bg-gradient-to-r from-cyan-600 to-teal-500 flex-1 lg:flex-wrap">
         <div className="h-16 w-16 rounded-full p-5 mb-5 mx-28 bg-gradient-to-r from-cyan-400 to-teal-500 text-white">
          7
          </div>
         <div className="rounded-xl font-extrabold bg-teal-400 text-white text-xl p-5  dark:bg-white dark:text-gray-400">
         Akaname report genarator
          </div>
         <div className="rounded-xl bg-teal-400 text-white font-serif text-sm p-4 my-5 dark:bg-white dark:text-gray-400 ">
         Developed a console application for SRE, &ldquo;Akaname report
                generator&rdquo; using C# that allow users to generate a report
                for the vendors by Cross verifying the production details with
                vendors details.
         </div>
         <div className="rounded-xl bg-teal-400 font-bold text-white text-sm p-4 my-5 dark:bg-white dark:text-gray-400">
         Tech stack:- C#, MySql
         </div>
        </motion.div>
        <motion.div
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5 bg-gray-900 rounded-xl my-5 w-80  dark:bg-gradient-to-r from-cyan-600 to-teal-500 flex-1 lg:flex-wrap">
         <div className="h-16 w-16 rounded-full p-5 mb-5 mx-28 bg-gradient-to-r from-cyan-400 to-teal-500 text-white">
          8
          </div>
         <div className="rounded-xl font-extrabold bg-teal-400 text-white text-xl p-5  dark:bg-white dark:text-gray-400">
         Infra prediction
          </div>
         <div className="rounded-xl bg-teal-400 text-white font-serif text-sm p-4 my-5 dark:bg-white dark:text-gray-400 ">
         Developed a full-stack web application, &ldquo;Infra
                prediction&rdquo;, using Angular js that allows users to predict
                future Servicenow tickets and Categorize using AI/ML.
         </div>
         <div className="rounded-xl bg-teal-400 font-bold text-white text-sm p-4 my-5 dark:bg-white dark:text-gray-400">
         Techstack:- Angular,Flask, Python ,chartjs.
         </div>
        </motion.div>
        <motion.div
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5 bg-gray-900 rounded-xl my-5 w-80  dark:bg-gradient-to-r from-cyan-600 to-teal-500 flex-1 lg:flex-wrap">
         <div className="h-16 w-16 rounded-full p-5 mb-5 mx-28 bg-gradient-to-r from-cyan-400 to-teal-500 text-white">
          9
          </div>
         <div className="rounded-xl font-extrabold bg-teal-400 text-white text-xl p-5  dark:bg-white dark:text-gray-400">
         Foot ulcer detection
          </div>
         <div className="rounded-xl bg-teal-400 text-white font-serif text-sm p-4 my-5 dark:bg-white dark:text-gray-400 ">
         Developed a web application,&ldquo;FootUL&rdquo;, using vue.js
                that allow user to scan the foot and predict the various stages
                of footulcer using AI/ML.
         </div>
         <div className="rounded-xl bg-teal-400 font-bold text-white text-sm p-4 my-5 dark:bg-white dark:text-gray-400">
         Techstack:- Vuejs ,Flask, Python.
         </div>
        </motion.div>
        <motion.div
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5 bg-gray-900 rounded-xl my-5 w-80  dark:bg-gradient-to-r from-cyan-600 to-teal-500 flex-1 lg:flex-wrap">
         <div className="h-16 w-16 rounded-full p-5 mb-5 mx-28 bg-gradient-to-r from-cyan-400 to-teal-500 text-white">
          10
          </div>
         <div className="rounded-xl font-extrabold bg-teal-400 text-white text-xl p-5  dark:bg-white dark:text-gray-400">
         Blockchain-Dashboard-Django
          </div>
         <div className="rounded-xl bg-teal-400 text-white font-serif text-sm p-4 my-5 dark:bg-white dark:text-gray-400 ">
         I have developed Blockchain-Dashboard using django to fetch and
                display crypto currency prices/Trade Prices from the Coingecko
                cryptocurrency API and Binance api.The app will fetch the
                deatils on every 15sec. <br/>
                Github:-
                <a href="https://github.com/Sidharth-e/Blockchain-Dashboard-Django">
                  https://github.com/Sidharth-e/Blockchain-Dashboard-Django
                </a>
         </div>
         <div className="rounded-xl bg-teal-400 font-bold text-white text-sm p-4 my-5 dark:bg-white dark:text-gray-400">
         Techstack:- DJango,Python.
         </div>
        </motion.div>
        <motion.div
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5 bg-gray-900 rounded-xl my-5 w-80  dark:bg-gradient-to-r from-cyan-600 to-teal-500 flex-1 lg:flex-wrap">
         <div className="h-16 w-16 rounded-full p-5 mb-5 mx-28 bg-gradient-to-r from-cyan-400 to-teal-500 text-white">
          11
          </div>
         <div className="rounded-xl font-extrabold bg-teal-400 text-white text-xl p-5  dark:bg-white dark:text-gray-400">
         Portfolio
          </div>
         <div className="rounded-xl bg-teal-400 text-white font-serif text-sm p-4 my-5 dark:bg-white dark:text-gray-400 ">
         This is my first Portfolio website created usng HTML, CSS and
                jquery Website link:
                <a href="https://sidharth-e.github.io/">
                  https://sidharth-e.github.io/
                </a>
         </div>
         <div className="rounded-xl bg-teal-400 font-bold text-white text-sm p-4 my-5 dark:bg-white dark:text-gray-400">
         Techstack:- HTML,CSS,Jquery,JavaScript
         </div>
        </motion.div>
        <motion.div
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5 bg-gray-900 rounded-xl my-5 w-80  dark:bg-gradient-to-r from-cyan-600 to-teal-500 flex-1 lg:flex-wrap">
         <div className="h-16 w-16 rounded-full p-5 mb-5 mx-28 bg-gradient-to-r from-cyan-400 to-teal-500 text-white">
          12
          </div>
         <div className="rounded-xl font-extrabold bg-teal-400 text-white text-xl p-5  dark:bg-white dark:text-gray-400">
         DB Growth Dashboard
          </div>
         <div className="rounded-xl bg-teal-400 text-white font-serif text-sm p-4 my-5 dark:bg-white dark:text-gray-400 ">
         I have closely worked with SRE team to create a Artifical intelligence based dashboard which will forcast
         the database space usage of the various servers
         </div>
         <div className="rounded-xl bg-teal-400 font-bold text-white text-sm p-4 my-5 dark:bg-white dark:text-gray-400">
         Techstack:- Angular,Chartjs,Flask,Python
         </div>
        </motion.div>
      </div>
    </div>
  );
}
