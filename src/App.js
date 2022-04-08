import "./App.css";
import Stock from "./components/Stock";
import AlertDialog from "./components/AlertDialog";
import SnackBar from "./components/SnackBar"
import DataGrid from "./components/dataGrid"
import AppBar from "./components/appBar"
import axios from "axios";
import GridData from "./components/GridData"
function App() {
	const returnData = async() =>{
		const data= await axios.get("http://localhost:80/apiphp/obtener_videojuegos.php")
		console.log(data.data)

	}
	returnData()
	return (
		<div className="App">
			<AppBar/>
			<DataGrid/>
			<div className="container">
				{/* Dialog y Confirmar */}
				<div className="alertDialog">
					<AlertDialog mensajeDialog="Esto es un componente de Material UI en React."/>
					<SnackBar/>
				</div>
				{/* Mi componente */}
				<Stock texto="Añadir" />
				
			</div>
			<GridData/>
		</div>
		
	);
}

export default App;
