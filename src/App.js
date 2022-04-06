import "./App.css";
import Stock from "./components/Stock";
import AlertDialog from "./components/AlertDialog";
function App() {
  return (
    <div className="App">
      <div className="container">
		<AlertDialog/>
        <Stock texto="Añadir" />
      </div>
    </div>
  );
}

export default App;
