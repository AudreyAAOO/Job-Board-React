import "./App.css";
import Jobs from "./Components/Jobs.js";
import Title from "./Components/Title.js";

function App() {
  return (
    <>
      <div className="header">
        <Title />
      </div>
      <div className="container">
        <Jobs />
      </div>
      <div className="footer">
        <p>Made with React by Audrey</p>
      </div>
    </>
  );
}
export default App;