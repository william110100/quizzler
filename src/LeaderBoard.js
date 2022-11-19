import React, { useState } from "react";
import { leaderBoards } from "./data";

const sortedLeaderBoards = leaderBoards.sort((a, b) => (b.score > a.score ? b.score - a.score : -1));

const LeaderBoard = () => {
  const [isStarting, setIsStarting] = useState(false);

  return (
    <div className="bg-[#3a3a3a] h-screen p-12">
      {isStarting ? (
        <div className="flex flex-col justify-items-center">
          <h4 className="text-xl text-white/60">Name</h4>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-4"
            id="name"
            placeholder="Example: John"
            type="text"
          />
          <button
            className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            onClick={() => window.location.replace("/play")}
            type="button"
          >
            Start Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="flex flex-row items-center justify-between">
            <h1 className="font-semibold text-3xl text-center text-[#b3b4c9]">LeaderBoard</h1>
            <button
              className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              onClick={() => setIsStarting(true)}
              type="button"
            >
              Start Quiz
            </button>
          </div>
          <ul className="divide-y divide-black-900 pt-4 w-full">
            {sortedLeaderBoards.map((leaderBoard, index) => {
              return (
                <li className="bg-white flex flex-row items-center justify-between my-2 p-4 sm:rounded-lg" key={index}>
                  <div className="font-semibold inline-flex items-center text-base text-[#b3b4c9]">
                    {leaderBoard.name}
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-base text-[#b3b4c9]">{leaderBoard.score}</p>
                    <p className="font-medium text-base text-[#b3b4c9]">Points</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default LeaderBoard;
