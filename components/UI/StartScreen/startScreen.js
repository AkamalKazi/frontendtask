"use client";
import { useState } from "react";

const StartScreenComponent = ({ onStart }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onStart(name);
  };

  return (
    <div className="flex flex-col mt-9 items-center h-screen ">
      <div>
        <div>
          <label htmlFor="">Name</label>
        </div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="border border-black px-2 py-2 rounded-lg"
            required
          />
        </div>
        <div className="btn">
          <button
            className="rounded-lg mt-4 px-5 py-1 bg-blue-400 text-white"
            onClick={(e) => handleSubmit(e)}
            type="submit"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartScreenComponent;
