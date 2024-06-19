import React from "react";
import Section from "./models/Section";

const Contact = () => {
  return (
    <Section>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-teal-600 mb-8">
          Contact me
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mb-8">
          <h3 className="text-xl font-bold text-teal-900 mb-4">Design Summary:</h3>
          <p className="text-gray-700">
            The flower shop mobile app features a clean, user-friendly interface with soft pastel colors and flower-themed icons. It offers intuitive navigation, engaging interactive elements, and a visually appealing layout. The design ensures a seamless user experience across different screen sizes.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-lg">
          <form>
            <label htmlFor="name" className="font-medium text-teal-900 block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border border-gray-300 bg-white text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-teal-600 p-3 mb-4"
            />
            <label htmlFor="email" className="font-medium text-teal-900 block mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border border-gray-300 bg-white text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-teal-600 p-3 mb-4"
            />
            <label htmlFor="message" className="font-medium text-teal-900 block mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border border-gray-300 bg-white text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-teal-600 p-3 mb-4"
            />
            <button className="bg-teal-600 text-white py-2 px-4 sm:py-4 sm:px-8 rounded-lg font-bold text-md sm:text-lg w-full sm:w-auto hover:bg-teal-700 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
