import { useState } from "react";
import Login from "./components/Login";
import ThemeContext from "./contexts/ThemeContext";
import Header from "./components/Header";
import "./App.css"
const App = () => {
  const [theme, setTheme] = useState("light");
  console.log(theme.theme)
 return (
    <div className="app">
      <ThemeContext.Provider value={{theme: theme, setTheme: setTheme }}>
        <Header/>
        <Login/>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
