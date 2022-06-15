import { useState } from "react";

import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";

import { ItemSpisok } from "../sw-item-spisok";

import { ItemLists } from "../sw-item-lists";

import { useContext } from "react";
import { ThemeContext } from "../../Context";

export const Content = ({ handleCreateFan }) => {
    const [selector, setSelector] = useState("Characters");
    const { theme, setTheme } = useContext(ThemeContext);

    const handleSelectorChange = (event) => {
        setSelector(event.target.value);
    };

    return (
        <div
            className={`content-layout ${theme === "light" ? "light" : "dark"}`}
        >
            <select
                value={selector}
                placeholder="Choose your path"
                className="select-item"
                onChange={handleSelectorChange}
            >
                <option>Characters</option>
                <option>Planets</option>
                <option>Starships</option>
            </select>

            {selector === "Characters" &&
                swCharacters.map((character) => (
                    <ItemLists
                        key={character.name}
                        item={character}
                        type="chars"
                    >
                        <ItemSpisok>gender: {character.gender}</ItemSpisok>
                        <ItemSpisok>
                            birthday: {character.birth_year}
                        </ItemSpisok>
                    </ItemLists>
                ))}

            {selector === "Planets" &&
                swPlanets.map((planet) => (
                    <ItemLists key={planet.name} item={planet} type="planets">
                        <ItemSpisok>
                            Rotation Period: {planet.rotation_period}
                        </ItemSpisok>
                        <ItemSpisok>
                            Orbital Period: {planet.orbital_period}
                        </ItemSpisok>
                    </ItemLists>
                ))}

            {selector === "Starships" &&
                swStarships.map((starship) => (
                    <ItemLists
                        key={starship.name}
                        item={starship}
                        type="starship"
                    >
                        <ItemSpisok>Model: {starship.model}</ItemSpisok>
                        <ItemSpisok>
                            Manufacturer: {starship.manufacturer}
                        </ItemSpisok>
                    </ItemLists>
                ))}
        </div>
    );
};
