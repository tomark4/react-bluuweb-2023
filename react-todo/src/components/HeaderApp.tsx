import { useEffect, useState } from "react";
import { MoonIcon } from "./icons";
import SunIcon from "./icons/SunIcon";

const HeaderApp = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="container mx-auto px-4 pt-8">
      <div className="flex justify-between">
        <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">
          Todo
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {!darkMode ? <MoonIcon className="fill-yellow-300" /> : <SunIcon />}
        </button>
      </div>
    </header>
  );
};

export default HeaderApp;
