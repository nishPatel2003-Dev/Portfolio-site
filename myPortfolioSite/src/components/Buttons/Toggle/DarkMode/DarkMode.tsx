import { useState, useEffect } from "react";
import Toggle from "../Toggle";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        document.body.setAttribute("data-bs-theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <Toggle
            isActive={darkMode}
            onToggle={() => setDarkMode((prev) => !prev)}
            icon={darkMode ? <FaMoon /> : <FaSun />}
            backgroundColor={darkMode ? "#222" : "#ffd700"}
        />
    );
};

export default DarkMode;