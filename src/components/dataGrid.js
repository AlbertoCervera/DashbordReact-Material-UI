import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

export default function SxProp() {
    
    const [stateData, setStateData] = useState([])

    useEffect(()=>{
      getApiData()
      
    },[])

    const getApiData = async () => {
      const data = await axios.get("https://jsonplaceholder.typicode.com/users");
      const UsuariosData = await data.data;
      setStateData(await UsuariosData)
    };
    
    

  //   Datos de DataGrid
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Nombre",
      width: 150,
      editable: true,
      
    },
    {
      field: "username",
      headerName: "Nombre de Usuario",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: true,
      headerAlign: 'center',
      align: "center"
      
    },
    {
      field: "fullName",
      headerName: "Nombre y Usuario",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      resize: true,
      width: 400,
      valueGetter: (params) =>
        `${params.row.name || ""}  @${params.row.username || ""}`,
    },
    {
      field: "phone",
      headerName: "Teléfono",
      width: 300,
      editable: true,
      headerAlign: 'center',
      align: "left"
      
    },
    {
      field: "address",
      headerName: "Calle",
      width: 200,
      editable: true,
      headerAlign: 'center',
      align: "left",
      valueGetter: (params) =>
        `${params.row.address.street } `,
      
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
