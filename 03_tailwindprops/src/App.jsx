// /* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);
  let myInfo = {
    name: "Laxmi-Narayana",
    age: 22,
    country: "India",
  };
  return (
    <>
      <h1 className="bg-yellow-400 text-black p-1 rounded-xl">Tailwind CSS </h1>

      {/* whatever you write inside thhat card it across all the components acts as props */}
      <Card username="LaxmiNarayana31" someObj={myInfo} />
      <Card username="Shiva31" someObj={myInfo} />
    </>
  );
}

export default App;
