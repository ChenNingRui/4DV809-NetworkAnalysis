import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function createData(data, filterList){
  let res = [];

  for(let i = 0; i < data['betweenness'].length; i++){
    let name = data['betweenness'][i][0];
    let temp = {
      id: name,
      betweenness: data['betweenness'][i][1],
      closeness_centrality: data['closeness_centrality'][name],
      degree_centrality: data['degree_centrality'][name],
      visable: filterList.indexOf(name) !== -1 ? false : true,
    };

    res.push(temp);
  }

  return res;
}

export default function DataTable({data, filterList, setFilterList}) {
  const rows = createData(data, filterList);
  const [pageSize, setPageSize] = React.useState(5);


  function onVisableButtonClick(e, params){
    e.stopPropagation();
    params.row.visable = !params.row.visable;
    let tempList = [...filterList];

    if(!params.row.visable) {
      tempList.push(params.row.id)
    }
    else {
      let index = tempList.indexOf(params.row.id);
      if(index !== -1) tempList.splice(index, 1);
    }
    setFilterList(tempList);
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'betweenness', headerName: 'Betweenness', type: 'number', width: 180 },
    { field: 'closeness_centrality', headerName: 'Closeness Centrality', type: 'number', width: 180 },
    { field: 'degree_centrality', headerName: 'Degree Centrality', type: 'number', width: 100, },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 180,
      renderCell: (params) => { 
        return (
          <IconButton onClick={(e) => onVisableButtonClick(e, params)}>
            {params.row.visable ? <VisibilityIcon/> : <VisibilityOffIcon/>}
          </IconButton>
          );}
    },
  ];

  return (
    <div style={{ height: '380px', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        disableSelectionOnClick
      />
    </div>
  );
}
