import React, {useContext} from "react";
import ThemeContext from "../../contexts/ThemeContext";

function Header() {
  const {theme, setTheme} = useContext(ThemeContext)
  return (
    <div className="header">
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}

export default Header;
