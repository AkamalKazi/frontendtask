import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const GameScreen = ({ onGameEnd }) => {
  const [dogImage, setDogImage] = useState("");
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [correctBreed, setCorrectBreed] = useState("");

  const fetchDogData = async () => {
    try {
      const breedsResponse = await axios.get(
        "https://dog.ceo/api/breeds/list/all"
      );
      const breeds = Object.keys(breedsResponse.data.message);
      const correctBreed = breeds[Math.floor(Math.random() * breeds.length)];
      setCorrectBreed(correctBreed);

      const dogResponse = await axios.get(
        `https://dog.ceo/api/breed/${correctBreed}/images/random`
      );
      setDogImage(dogResponse.data.message);

      const shuffledBreeds = [...breeds].sort(() => 0.5 - Math.random());
      const options = [correctBreed, ...shuffledBreeds.slice(0, 3)];
      setOptions(options.sort(() => 0.5 - Math.random()));
    } catch (error) {
      console.error("Error fetching dog data:", error);
    }
  };

  useEffect(() => {
    fetchDogData();
  }, []);

  const handleOptionClick = (breed) => {
    if (breed === correctBreed) {
      setScore(score + 1);
      fetchDogData();
    } else {
      onGameEnd(score);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="score">
        <h1 className="text-xl ">
          Score: <span className="font-bold text-green-600"> {score}</span>
        </h1>
      </div>
      <div className="dog-img w-1/5 object-contain overflow-hidden rounded-lg">
        {dogImage && (
          <Image
            height={250}
            width={250}
            src={dogImage}
            alt="Dog"
            style={{ width: "300px", height: "300px" }}
          />
        )}
      </div>
      <div className="flex gap-4 mt-4 rounded-lg bg-transparent ">
        {options.map((option, index) => (
          <button
            className="border border-black px-3 py-1 rounded-lg"
            key={index}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GameScreen;
