import React, { useState } from "react";
import animals from "../data";

function SearchAnimals() {
  const [animal, setAnimal] = useState(animals);
  const [animalMatch, setAnimalMatch] = useState([]);

  const searchNames = (text) => {
    if (!text) {
      setAnimalMatch("");
    } else {
      let matches = animal.filter((item) => {
        const regex = new RegExp(`${text}`, "gi");
        return item.name.match(regex);
      });
      setAnimalMatch(matches);
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Choose your animal"
        onChange={(e) => searchNames(e.target.value)}
      />

      {animalMatch &&
        animalMatch.map((item, index) => {
          return (
            <div className="searchSuggestions" key={index}>
              {item.name}
            </div>
          );
        })}
    </div>
  );
}

export default SearchAnimals;
