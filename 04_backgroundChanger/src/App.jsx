import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive"); // when page refrsh it again olive color

  // when page refrsh it set to the last background color
  // const [color, setColor] = useState(() => {
  //   return localStorage.getItem("backgroundColor") || "olive";
  // });

  // // Save the selected color to localStorage whenever it changes
  // useEffect(() => {
  //   localStorage.setItem("backgroundColor", color);
  // }, [color]);

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"></div>

      <div className="fixed bottom-0 left-0 right-0 flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-t-3xl">
        <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg w-24"
          style={{ backgroundColor: "red" }}>
          Red
        </button>
        <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg w-24"
          style={{ backgroundColor: "green" }}>
          Green
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg w-24"
          style={{ backgroundColor: "yellow" }}>
          Yellow
        </button>
        <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg w-24"
          style={{ backgroundColor: "blue" }}>
          Blue
        </button>
        <button
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg w-24"
          style={{ backgroundColor: "orange" }}>
          Orange
        </button>
        <button
          onClick={() => setColor("indigo")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg w-24"
          style={{ backgroundColor: "indigo" }}>
          Indigo
        </button>
        <button
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg w-24"
          style={{ backgroundColor: "purple" }}>
          Purple
        </button>
        <button
          onClick={() => setColor("skyblue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg w-24"
          style={{ backgroundColor: "skyblue" }}>
          Skyblue
        </button>
        <button
          onClick={() => setColor("brown")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg w-24"
          style={{ backgroundColor: "brown" }}>
          Brown
        </button>
      </div>
    </div>
  );
}

export default App;
