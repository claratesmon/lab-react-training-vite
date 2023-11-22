import "./App.css";
import Greetings from "./components/Greetings";
import IdCard from "./components/IdCard"

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard />
      <Greetings lang="es">Ramón</Greetings>

    </div>
  );
}

export default App;
