import { useState } from "react";
import { DefaultContext, ThemeContext } from "./Context";

//импортируем стили
import "./App.css";

import { Header } from "./components/header";
import { Content } from "./components/content";
import Footer from "./components/footer";

export default function App() {
    const [fan, setFan] = useState("");
    const [theme, setTheme] = useState("dark");

    const handleCreateFan = ({ name }) => {
        setFan(name);
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
            }}
        >
            <DefaultContext.Provider value={{ handleCreateFan }}>
                <Header fan={fan} />
                <hr />
                <Content />
                <Footer />
            </DefaultContext.Provider>
        </ThemeContext.Provider>
    );
}
