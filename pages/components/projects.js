import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function projects(props) {
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
         style={{color:props.primary}}
         className="text-3xl py-1 dark:text-white ">Projects & Works
         </motion.h3>
        <motion.p
         style={{color:props.secondary}}
         className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I got various opportunities to work on multiple technologies and
          developed application from scratch. Below are some of the projects i
          worked.
        </motion.p>
      </div>
      <div className="flex flex-wrap gap-20 lg:flex-row lg:flex-wrap">
        <motion.div
        style={{background:props.primary}}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5  rounded-xl my-5 w-80 lg:flex-wrap">
         <div style={{background:props.secondary}} className="h-16 w-16 rounded-full p-5 mb-5 mx-auto text-white">1</div>
         <div style={{background:props.secondary}} className="rounded-xl font-extrabold  text-white text-xl p-5  bg-white">
          Host override testing
          </div>
         <div style={{background:props.secondary}} className="rounded-xl  text-white font-serif text-sm p-4 my-5 bg-white">
         The application is created as part of SRE automation. The tool
                is created using c# and selenium which will check overall
                response time of the web application by host overriding through
                different servers and calculate the performance of the web
                site.The application helped SRE to reduce workload by 30%.
         </div>
         <div style={{background:props.secondary}} className="rounded-xl  font-bold text-white text-sm p-4 my-5 bg-white">
         Tech stack:- Asp.net,C#,Selenium
         </div>
        </motion.div>
        <motion.div
        style={{background:props.primary}}
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5  rounded-xl my-5 w-80 lg:flex-wrap">
         <div style={{background:props.secondary}} className="h-16 w-16 rounded-full p-5 mb-5 mx-auto  text-white">
          2
          </div>
         <div style={{background:props.secondary}} className="rounded-xl font-extrabold  text-white text-xl p-5  bg-white">
         Voice assistant bot
          </div>
         <div style={{background:props.secondary}} className="rounded-xl  text-white font-serif text-sm p-4 my-5 bg-white">
         Developed a personal assistant using python which can perform
                various actions based on voice commands like sending email,
                surfing on web, mathematical calculation, playing music, opening
                files, etc.
         </div>
         <div style={{background:props.secondary}} className="rounded-xl  font-bold text-white text-sm p-4 my-5 bg-white">
         Tech stack:- Python
         </div>
        </motion.div>
        <motion.div
        style={{background:props.primary}}
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5  rounded-xl my-5 w-80 lg:flex-wrap">
         <div style={{background:props.secondary}} className="h-16 w-16 rounded-full p-5 mb-5 mx-auto  text-white">
          3
          </div>
         <div style={{background:props.secondary}} className="rounded-xl  font-extrabold  text-white text-xl p-5  bg-white">
         Daily Expense Tracker
          </div>
         <div  style={{background:props.secondary}} className="rounded-xl  text-white font-serif text-sm p-4 my-5 bg-white">
         DAILY EXPENSE TRACKER”is a project which proposes to form a
                process that can help to store and retrieve details regarding
                the expense of a person or an organazation. My project has
                severalmodules which are, login Dashboard. It can generate
                various reports as per requirements. It follows the two- tier
                architecture with front-end php and back-end SQL Server. My
                project is capable of generating exepense report based on months
                ,year aswell as days.
         </div>
         <div style={{background:props.secondary}} className="rounded-xl  font-bold text-white text-sm p-4 my-5 bg-white">
         Tech stack:- PHP,SQL
         </div>
        </motion.div>
        <motion.div
        style={{background:props.primary}}
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5  rounded-xl my-5 w-80    lg:flex-wrap">
         <div style={{background:props.secondary}} className="h-16 w-16 rounded-full p-5 mb-5 mx-auto  text-white">
          4
          </div>
         <div style={{background:props.secondary}} className="rounded-xl font-extrabold  text-white text-xl p-5  bg-white">
         Individual household electric power consumption Data Set
          </div>
         <div style={{background:props.secondary}} className="rounded-xl  text-white font-serif text-sm p-4 my-5 bg-white">
         Performed various techniques in data set and created model
         <ul>
              <li>Data exploration and analysis.</li>
              <li>Data Visualization .</li>
              <li>Regression and Time series analysis.</li>
              <li>Frequency Domain Analysis.</li>
       </ul>
         </div>
         <div style={{background:props.secondary}} className="rounded-xl  font-bold text-white text-sm p-4 my-5 bg-white">
         Tech stack:- Python,Data Science
         </div>
        </motion.div>
        <motion.div
        style={{background:props.primary}}
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5  rounded-xl my-5 w-80    lg:flex-wrap">
         <div style={{background:props.secondary}} className="h-16 w-16 rounded-full p-5 mb-5 mx-auto  text-white">
          5
          </div>
         <div style={{background:props.secondary}} className="rounded-xl font-extrabold  text-white text-xl p-5  bg-white">
         Mask detection
          </div>
         <div style={{background:props.secondary}} className="rounded-xl  text-white font-serif text-sm p-4 my-5 bg-white">
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
         <div style={{background:props.secondary}} className="rounded-xl  font-bold text-white text-sm p-4 my-5 bg-white">
         Tech stack:- Python,Data Science
         </div>
        </motion.div>
        <motion.div
        style={{background:props.primary}}
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5  rounded-xl my-5 w-80    lg:flex-wrap">
         <div style={{background:props.secondary}} className="h-16 w-16 rounded-full p-5 mb-5 mx-auto  text-white">
          6
          </div>
         <div style={{background:props.secondary}} className="rounded-xl font-extrabold  text-white text-xl p-5  bg-white">
         Triage tool
          </div>
         <div style={{background:props.secondary}} className="rounded-xl  text-white font-serif text-sm p-4 my-5 bg-white">
         Developed a full stack application for SRE team, &ldquo;SL
                Triage Tool&rdquo; using Asp.net that allow users to access
                multiple advance features related to SRE core analysis.
         </div>
         <div style={{background:props.secondary}} className="rounded-xl  font-bold text-white text-sm p-4 my-5 bg-white">
         Techstack:- Asp.net,MySQL,Rest api
         </div>
        </motion.div>
        <motion.div
        style={{background:props.primary}}
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5  rounded-xl my-5 w-80    lg:flex-wrap">
         <div style={{background:props.secondary}} className="h-16 w-16 rounded-full p-5 mb-5 mx-auto  text-white">
          7
          </div>
         <div style={{background:props.secondary}} className="rounded-xl font-extrabold  text-white text-xl p-5  bg-white">
         Akaname report genarator
          </div>
         <div style={{background:props.secondary}} className="rounded-xl  text-white font-serif text-sm p-4 my-5 bg-white">
         Developed a console application for SRE, &ldquo;Akaname report
                generator&rdquo; using C# that allow users to generate a report
                for the vendors by Cross verifying the production details with
                vendors details.
         </div>
         <div style={{background:props.secondary}} className="rounded-xl  font-bold text-white text-sm p-4 my-5 bg-white">
         Tech stack:- C#, MySql
         </div>
        </motion.div>
        <motion.div
        style={{background:props.primary}}
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5  rounded-xl my-5 w-80    lg:flex-wrap">
         <div style={{background:props.secondary}} className="h-16 w-16 rounded-full p-5 mb-5 mx-auto  text-white">
          8
          </div>
         <div style={{background:props.secondary}} className="rounded-xl font-extrabold  text-white text-xl p-5  bg-white">
         Infra prediction
          </div>
         <div style={{background:props.secondary}} className="rounded-xl  text-white font-serif text-sm p-4 my-5 bg-white">
         Developed a full-stack web application, &ldquo;Infra
                prediction&rdquo;, using Angular js that allows users to predict
                future Servicenow tickets and Categorize using AI/ML.
         </div>
         <div style={{background:props.secondary}} className="rounded-xl  font-bold text-white text-sm p-4 my-5 bg-white">
         Techstack:- Angular,Flask, Python ,chartjs.
         </div>
        </motion.div>
        <motion.div
        style={{background:props.primary}}
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5  rounded-xl my-5 w-80    lg:flex-wrap">
         <div style={{background:props.secondary}} className="h-16 w-16 rounded-full p-5 mb-5 mx-auto  text-white">
          9
          </div>
         <div style={{background:props.secondary}} className="rounded-xl font-extrabold  text-white text-xl p-5  bg-white">
         Foot ulcer detection
          </div>
         <div style={{background:props.secondary}} className="rounded-xl  text-white font-serif text-sm p-4 my-5 bg-white">
         Developed a web application,&ldquo;FootUL&rdquo;, using vue.js
                that allow user to scan the foot and predict the various stages
                of footulcer using AI/ML.
         </div>
         <div style={{background:props.secondary}} className="rounded-xl  font-bold text-white text-sm p-4 my-5 bg-white">
         Techstack:- Vuejs ,Flask, Python.
         </div>
        </motion.div>
        <motion.div
        style={{background:props.primary}}
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5  rounded-xl my-5 w-80    lg:flex-wrap">
         <div style={{background:props.secondary}} className="h-16 w-16 rounded-full p-5 mb-5 mx-auto  text-white">
          10
          </div>
         <div style={{background:props.secondary}} className="rounded-xl font-extrabold  text-white text-xl p-5  bg-white">
         Blockchain-Dashboard-Django
          </div>
         <div style={{background:props.secondary}} className="rounded-xl  text-white font-serif text-sm p-4 my-5 bg-white">
         I have developed Blockchain-Dashboard using django to fetch and
                display crypto currency prices/Trade Prices from the Coingecko
                cryptocurrency API and Binance api.The app will fetch the
                deatils on every 15sec. <br/>
                Github:-
                <a href="https://github.com/Sidharth-e/Blockchain-Dashboard-Django">
                  https://github.com/Sidharth-e/Blockchain-Dashboard-Django
                </a>
         </div>
         <div style={{background:props.secondary}} className="rounded-xl  font-bold text-white text-sm p-4 my-5 bg-white">
         Techstack:- DJango,Python.
         </div>
        </motion.div>
        <motion.div
        style={{background:props.primary}}
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5  rounded-xl my-5 w-80    lg:flex-wrap">
         <div style={{background:props.secondary}} className="h-16 w-16 rounded-full p-5 mb-5 mx-auto  text-white">
          11
          </div>
         <div style={{background:props.secondary}} className="rounded-xl font-extrabold  text-white text-xl p-5  bg-white">
         Portfolio
          </div>
         <div style={{background:props.secondary}} className="rounded-xl  text-white font-serif text-sm p-4 my-5 bg-white">
         This is my first Portfolio website created usng HTML, CSS and
                jquery Website link:
                <a href="https://sidharth-e.github.io/">
                  https://sidharth-e.github.io/
                </a>
         </div>
         <div style={{background:props.secondary}} className="rounded-xl  font-bold text-white text-sm p-4 my-5 bg-white">
         Techstack:- HTML,CSS,Jquery,JavaScript
         </div>
        </motion.div>
        <motion.div
        style={{background:props.primary}}
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5  rounded-xl my-5 w-80    lg:flex-wrap">
         <div style={{background:props.secondary}} className="h-16 w-16 rounded-full p-5 mb-5 mx-auto  text-white">
          12
          </div>
         <div style={{background:props.secondary}} className="rounded-xl font-extrabold  text-white text-xl p-5  bg-white">
         DB Growth Dashboard
          </div>
         <div style={{background:props.secondary}} className="rounded-xl  text-white font-serif text-sm p-4 my-5 bg-white">
         I have closely worked with SRE team to create a Artifical intelligence based dashboard which will forcast
         the database space usage of the various servers
         </div>
         <div style={{background:props.secondary}} className="rounded-xl  font-bold text-white text-sm p-4 my-5 bg-white">
         Techstack:- Angular,Chartjs,Flask,Python
         </div>
        </motion.div>
        <motion.div
        style={{background:props.primary}}
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5  rounded-xl my-5 w-80    lg:flex-wrap">
         <div style={{background:props.secondary}} className="h-16 w-16 rounded-full p-5 mb-5 mx-auto  text-white">
          13
          </div>
         <div style={{background:props.secondary}} className="rounded-xl font-extrabold  text-white text-xl p-5  bg-white">
         CD/CI pipeline
          </div>
         <div style={{background:props.secondary}} className="rounded-xl  text-white font-serif text-sm p-4 my-5 bg-white">
         Created a CD/CI pipeline using the Jenkins to build the deploy the code in nexus repostiory
         </div>
         <div style={{background:props.secondary}} className="rounded-xl  font-bold text-white text-sm p-4 my-5 bg-white">
         Techstack:- jenkins,AWS,EC2,Sonatype nexus
         </div>
        </motion.div>
        <motion.div
        style={{background:props.primary}}
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="text-center shadow-xl p-5  rounded-xl my-5 w-80    lg:flex-wrap">
         <div style={{background:props.secondary}} className="h-16 w-16 rounded-full p-5 mb-5 mx-auto  text-white">
          14
          </div>
         <div style={{background:props.secondary}} className="rounded-xl font-extrabold  text-white text-xl p-5  bg-white">
         AWS EC2 instance Automation
          </div>
         <div style={{background:props.secondary}} className="rounded-xl  text-white font-serif text-sm p-4 my-5 bg-white">
         Automatio of EC2 instace in AWS
         </div>
         <div style={{background:props.secondary}} className="rounded-xl  font-bold text-white text-sm p-4 my-5 bg-white">
         Techstack:- AWS,EC2,lambda,cloudwatch
         </div>
        </motion.div>
      </div>
    </div>
  );
}
