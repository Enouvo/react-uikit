import { useLayoutEffect, useState } from "react";

export const useTheme = (defaultValue = "light") => {
  const [theme, setThem] = useState(defaultValue);

  useLayoutEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setThem(theme => (theme === "light" ? "dark" : "light"));
  };

  return { toggleTheme };
};
