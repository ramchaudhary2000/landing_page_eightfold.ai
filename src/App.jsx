import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Value from "./components/Value";
import "./index.css";

function App() {
  return (
    <>
      <div className="font-Roboto">
        <Navbar />
        <Body />
        <Value/>
      </div>
    </>
  );
}

export default App;
