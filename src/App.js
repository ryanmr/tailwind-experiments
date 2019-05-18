import React from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";

function Display() {
  return (
    <div className="md:flex my-4">
      <div className="md:flex-shrink-0">
        <img
          className="rounded-lg md:w-56"
          src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
          alt="Woman paying for a purchase"
        />
      </div>
      <div className="mt-4 md:mt-0 md:ml-6">
        <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
          Marketing
        </div>
        <a
          href="#"
          className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
        >
          Finding customers for your new business
        </a>
        <p className="mt-2 text-gray-600">
          Getting a new business off the ground is a lot of hard work. Here are
          five ideas you can use to find your first customers.
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="container mx-auto px-4">
        {Array(3)
          .fill(1)
          .map((_, i) => (
            <Display key={i} />
          ))}
      </div>
    </div>
  );
}

export default App;
