import React from "react";
import Section from "./models/Section";

const Contact = () => {
  return (
    <Section>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">Contact me</h2>
      <div className="mt-8 p-4 sm:p-8 rounded-md bg-white w-full max-w-md mx-auto">
        <form>
          <label htmlFor="name" className="font-medium text-gray-900 block mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            htmlFor="email"
            className="font-medium text-gray-900 block mb-1 mt-4"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            htmlFor="message"
            className="font-medium text-gray-900 block mb-1 mt-4"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <button className="bg-indigo-600 text-white py-2 px-4 sm:py-4 sm:px-8 rounded-lg font-bold text-md sm:text-lg mt-8 w-full sm:w-auto">
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
