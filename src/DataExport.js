import React from 'react';
import App from './App'; 
import ReactExport from 'react-data-export';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet; 
const DataExport = () => {
const DataSet =[
    {
        columns:[
            {title: "name", style:{font:{sz:"18",bold:true}},width :{wpx:125}},
            {title: "gender", style:{font:{sz:"18",bold:true}},width :{wpx:125}},
            {title: "email", style:{font:{sz:"18",bold:true}},width :{wpx:125}},
            {title: "status", style:{font:{sz:"18",bold:true}},width :{wpx:125}},
        ]
    }
]

  return
   <div>

  </div>;
};

export default DataExport;
