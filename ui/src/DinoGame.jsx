import React, { useState, useEffect } from "react";
import "./game.css";
const DinoGame = () => {
  const dinosaurs = [
    "Tyrannosaurus Rex",
    "Velociraptor",
    "Stegosaurus",
    "Triceratops",
    "Brachiosaurus",
    "Allosaurus",
    // Add more dinosaur names as needed
  ];

  const [cards, setCards] = useState(
    dinosaurs.concat(dinosaurs).sort(() => Math.random() - 0.5)
  );
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [firstIndex, secondIndex] = flippedIndices;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedPairs((prev) => [...prev, cards[firstIndex]]);
      }
      setTimeout(() => {
        setFlippedIndices([]);
      }, 1000);
    }
  }, [flippedIndices, cards]);

  const handleCardClick = (index) => {
    if (flippedIndices.length < 2 && !flippedIndices.includes(index)) {
      setFlippedIndices((prev) => [...prev, index]);
    }
  };

  const isCardFlipped = (index) =>
    flippedIndices.includes(index) || matchedPairs.includes(cards[index]);

  return (
    <div className="dinosaur-game">
      {cards.map((dinosaur, index) => (
        <div
          key={index}
          className={`dinosaur-card ${isCardFlipped(index) ? "flipped" : ""}`}
          onClick={() => handleCardClick(index)}
        >
          <h3>{isCardFlipped(index) ? dinosaur : "? ?"}</h3>
        </div>
      ))}
    </div>
  );
};

export default DinoGame;
