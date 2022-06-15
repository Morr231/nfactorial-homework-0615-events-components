import "./footer.css";

import { useContext } from "react";
import { ThemeContext } from "../../Context";

const Footer = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <footer className={`footer  ${theme === "light" ? "light" : "dark"}`}>
            <div className="footer-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt vel voluptates quibusdam corrupti cumque quae
                necessitatibus velit ratione illum maxime. Cum quae, repellat
                autem dolore quibusdam quidem maxime inventore magnam!
            </div>
            <div className="footer-links">
                <a
                    className="footer-link"
                    href="https://www.youtube.com/watch?v=4HLDaBGdnLc&ab_channel=EAStarWars"
                >
                    «Star Wars Jedi: Survivor» — Официальный тизер
                </a>
                <a
                    className="footer-link"
                    href="https://www.youtube.com/watch?v=4cJpiOPKH14&ab_channel=StarWars"
                >
                    Star Wars Eclipse – Official Cinematic Reveal Trailer
                </a>
            </div>
        </footer>
    );
};

export default Footer;
