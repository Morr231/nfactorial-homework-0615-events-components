import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { useContext } from "react";
import { ThemeContext } from "../../Context";

export const ItemSpisok = ({ children }) => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemText
                    className={`${theme === "light" ? "light" : "dark"}`}
                    primary={children}
                />
            </ListItemButton>
        </ListItem>
    );
};
