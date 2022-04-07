import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function SxProp() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 20,
    maxColumns: 5,
  });
  console.log(data)

  return (
    <div style={{ height: "91vh", width: '100%', maxHeight: "91vh"}}>
      <DataGrid
        {...data}
        sx={{
          boxShadow: 2,
          '& .MuiDataGrid-cell:hover': {
            color: 'secondary',
            background: "secondary.dark"
          },
          ".MuiDataGrid-columnHeaders":{
              fontWeight: "bolder",
              fontFamily: "'Poppins', sans-serif",
              color: "default"
          },
          ".css-1jbbcbn-MuiDataGrid-columnHeaderTitle":{
              fontWeight: "bolder !important",
              textShadow: "0px 0px 1px"
          }
          
        }}
      />
    </div>
  );
}