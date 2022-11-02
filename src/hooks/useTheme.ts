import { useLayoutEffect, useState } from "react";

export const useTheme = (defaultValue = "light") => {
  const [theme, setTheme] = useState(defaultValue);

  useLayoutEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme => (theme === "light" ? "dark" : "light"));
  };

  return { toggleTheme };
};
