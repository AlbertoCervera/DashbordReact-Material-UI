import "./App.css";
import Stock from "./components/Stock";
import AlertDialog from "./components/AlertDialog";
import SnackBar from "./components/SnackBar"


function App() {
	return (
		<div className="App">
			<div className="container">
				{/* Dialog y Confirmar */}
				<div className="alertDialog">
					<AlertDialog mensajeDialog=" Esto es un componente de Material UI en React."/>
					<SnackBar/>
				</div>
				{/* Mi componente */}
				<Stock texto="Añadir" />
			</div>
		</div>
	);
}

export default App;
