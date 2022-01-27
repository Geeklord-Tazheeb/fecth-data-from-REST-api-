import axios from 'axios'; 
import { useEffect, useState } from 'react';
import './App.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import PostForm from './PostForm';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




const App = ()=> {

const [user, setUser] = useState([]);
const [search, setSearch] = useState("");


const getUserData = async () => {
try{
const {data} =await axios.get("https://gorest.co.in/public/v1/users");
console.log(data.data); 
setUser(data.data);
}
catch(e){
  console.log(e) 
}
}
useEffect(()=>{
  getUserData()
},[])

  return (
    <div className="App">
      <h1 className='my-5'>Welcome to User Dashboard</h1>


<input className='my-3'
type="text"
placeholder='Search User Here'
onChange={e =>{
  setSearch(e.target.value);
}}
/>
<PostForm/>

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Gender</StyledTableCell>
            <StyledTableCell align="left">Email Id</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>


          {user.filter(user =>{
        if (search===""){
          return user
        }
        else if (user.name.toLowerCase().includes(search.toLowerCase())){
          return user
        }
      })
      .map((user)=>{
        return (
       
        
          <StyledTableRow >
            <StyledTableCell component="th" scope="row">{user.id}</StyledTableCell>
            <StyledTableCell align="left">{user.name}</StyledTableCell>
            <StyledTableCell align="left">{user.gender}</StyledTableCell>
            <StyledTableCell align="left">{user.email}</StyledTableCell>
            <StyledTableCell align="left">{user.status}</StyledTableCell>
          </StyledTableRow>
        
        );
      })}

        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default App;
