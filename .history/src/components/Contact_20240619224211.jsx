import React from "react";
import Section from "./models/Section";

const Contact = () => {
  return (
    <Section className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="flex flex-col items-center w-full max-w-5xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Contact me
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between w-full space-y-8 lg:space-y-0 lg:space-x-8">
          <div className=" p-8 rounded-lg shadow-lg w-full lg:w-1/2">
            <h3 className="text-xl lg:text-2xl font-bold text-purple-900 mb-4">
              Design Summary
            </h3>
            <p className="text-gray-700 lg:text-lg leading-relaxed">
              The flower shop mobile app boasts a sleek, easy-to-navigate
              interface adorned with soft pastel tones and charming
              flower-themed icons. It provides straightforward navigation,
              interactive elements that engage users, and a visually pleasing
              layout.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg w-full lg:w-1/2">
            <form>
              <label
                htmlFor="name"
                className="font-medium text-purple-900 block mb-2 lg:text-lg"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border border-gray-300 bg-white text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-purple-600 p-3 mb-4"
              />
              <label
                htmlFor="email"
                className="font-medium text-purple-900 block mb-2 lg:text-lg"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border border-gray-300 bg-white text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-purple-600 p-3 mb-4"
              />
              <label
                htmlFor="message"
                className="font-medium text-purple-900 block mb-2 lg:text-lg"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="h-32 block w-full rounded-md border border-gray-300 bg-white text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-purple-600 p-3 mb-4"
              />
              <button className="bg-purple-600 text-white py-3 px-6 rounded-lg font-bold text-lg w-full sm:w-auto hover:bg-purple-700 transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
