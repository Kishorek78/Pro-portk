// eslint-disable-next-line no-unused-vars
import React from "react";
import project4 from "../assets/project4.png";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";

const About = () => {
  return (
    <div
      className="max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center "
      id="about"
    >
      <div className="md:hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap  gap-4 text-4xl justify-center ">
        <DiHtml5 className="text-orange-600" />
        <DiCss3 className="text-blue-600" />
        <DiSass className="text-pink-600" />
        <DiBootstrap className="text-purple-600" />
        <DiJavascript1 className="text-yellow-500" />
        <DiReact className="text-blue-500" />
        <DiMongodb className="text-green-500" />
      </div>

      <div className="relative group">
        <div className="w-full h-full absolute -inset-1 bg-gradient-to-r  from-teal-100  to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            src={project4}
            alt="project 1"
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold md-4">Chat-App</h2>
        <p className="text-gray-300 mb-4">
          Developing a chat application in React Native involves setting up the
          development environment, creating and integrating the chat interface,
          and optionally implementing real-time messaging with a service like
          Firebase. This combination of frontend and backend technologies
          results in a robust and interactive chat application.
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          {/* <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-600" /> */}
          <DiSass className="text-pink-600" />
          <DiBootstrap className="text-purple-600" />
          <DiJavascript1 className="text-yellow-500" />
          <DiReact className="text-blue-500" />
          <DiMongodb className="text-green-500" />
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold md-4">
          Plant-Gardening
        </h2>
        <p className="text-gray-300 mb-4">
          Creating a plant gardening app with React involves careful planning,
          user-friendly design, and efficient development. Key features include
          personalized plant care schedules, a plant database with detailed
          profiles, and mobile optimization. Ongoing testing and regular updates
          ensure the app remains reliable and enhances the user experience
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-600" />
          <DiSass className="text-pink-600" />
          <DiBootstrap className="text-purple-600" />
          <DiJavascript1 className="text-yellow-500" />
          <DiReact className="text-blue-500" />
          <DiNodejsSmall className="text-green-500" />
        </div>
      </div>

      <div className="relative group">
        <div
          className="w-full h-full absolute -inset-1 bg-gradient-to-r
 from-teal-100  to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"
        >
          {" "}
        </div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            src={project2}
            alt="project 2"
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>

      <div className="relative group">
        <div
          className="w-full h-full absolute -inset-1 bg-gradient-to-r
 from-teal-100  to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"
        >
          {" "}
        </div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            src={project3}
            alt="project 3"
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold md-4">Multi-Shop</h2>
        <p className="text-gray-300 mb-4">
          Developing an e-commerce web page involves thorough planning,
          intuitive design, and robust development. It includes integrating
          secure payment gateways, optimizing for mobile, and creating engaging
          product listings. Continuous testing and updates ensure a seamless
          user experience and site performance
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-600" />
          <DiSass className="text-pink-600" />
          <DiBootstrap className="text-purple-600" />
          <DiJavascript1 className="text-yellow-500" />
          <DiReact className="text-blue-500" />
          <DiNodejsSmall className="text-green-500" />
          <DiMongodb className="text-green-500" />
          <DiGithubBadge className="text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default About;
