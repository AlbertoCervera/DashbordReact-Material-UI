import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

export default function SxProp() {
    
    const [stateData, setStateData] = useState([])

    useEffect(()=>{
      getApiData()
      
    },[stateData])

    const getApiData = async () => {
      const data = await axios.get("http://localhost:80/apiphp/obtener_videojuegos.php");
      const UsuariosData = await data.data;
      setStateData(await UsuariosData)
    };
    
    

  //   Datos de DataGrid
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "nombre",
      headerName: "Nombre",
      width: 150,
      editable: true,
      
    },
    {
      field: "precio",
      headerName: "Precio",
      width: 150,
      editable: true,
    },
    {
      field: "calificacion",
      headerName: "Calificación",
      width: 200,
      editable: true,
      headerAlign: 'center',
      align: "center",
   
      
    },
    
  ];


  return (
    <div style={{ height: "91vh", width: "100%", maxHeight: "91vh" }}>
      <DataGrid
        columns={columns}
        rows={stateData}
        sx={{
          boxShadow: 2,
          "& .MuiDataGrid-cell:hover": {
            color: "secondary",
            background: "secondary.dark",
          },
          ".MuiDataGrid-columnHeaders": {
            fontWeight: "bolder",
            fontFamily: "'Poppins', sans-serif",
            color: "default",
          },
          ".css-1jbbcbn-MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bolder !important",
            textShadow: "0px 0px 1px",
          },
        }}
        


      />
    </div>
  );
}
