"use client";
import GameScreen from "@/components/GameScree/gameScreen";
import { useState } from "react";
import StartScreenComponent from "@/components/UI/StartScreen/startScreen";

const Game = () => {
  const [playerName, setPlayerName] = useState("");
  const [score, setScore] = useState(null);

  const handleStart = (name) => {
    setPlayerName(name);
  };

  const handleGameEnd = (score) => {
    setScore(score);
  };

  return (
    <div>
      {playerName === "" ? (
        <StartScreenComponent onStart={handleStart} />
      ) : score === null ? (
        <GameScreen onGameEnd={handleGameEnd} />
      ) : (
        <div className="flex flex-col justify-center items-center mt-4 bg-red-400 max-w-xl rounded-lg text-white px-5 py-3 mx-auto">
          <h1>Game Over, {playerName}!</h1>
          <p>Your score: {score}</p>
          <div className="btn">
            <button
              type="button"
              className="mt-4 bg-transparent border border-black rounded-md px-4 text-xs py-1"
              onClick={(e) => {
                window.location.reload();
              }}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
