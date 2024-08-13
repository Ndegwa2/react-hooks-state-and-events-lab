import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const[isDarkMode, setIsDarkMode] = useState(false);
  const appClass = false ? "App dark" : "App light";
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={appClass}>
    <header>
      <h2>Shopster</h2>
      {/*  Adding  an onClick handler to the button */}
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
    <ShoppingList items={itemData} />
  </div>
);
}

export default App;

