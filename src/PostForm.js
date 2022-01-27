import React, {useState} from "react";
import axios from "axios";

function PostForm() {

const url = "https://gorest.co.in/public/v1/users"
const TOKEN = '6bdfad3b05e649dadb26285fb41d49fa985a5c7282b45b3822e7405ec6673fcc'
const [data , setData] = useState({
    
    name:"",
    gender:"",
    email:"",
    status:""
})

function submit(e){
e.preventDefault();
axios.post(url,{
     
    name:data.name,
    gender:data.gender,
    email:data.email,    
    status:data.status 
})
.then(res =>{
    console.log(res.data);
})
} 

function handle(e){
    const newdata ={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
}

  return (
    <div>
      <form className="my-2" onSubmit={(e)=> submit(e)}>
       
        <input onChange={(e)=> handle(e)} id="name" value={data.name} className="mx-1"  placeholder="Enter Your Name" type="text"></input>
        <input onChange={(e)=> handle(e)} id="gender" value={data.gender} className="mx-1"  placeholder="Enter Your Gender" type="text"></input> 
        <input onChange={(e)=> handle(e)} id="email" value={data.email} className=" mx-1 inline" placeholder="Your Email Id" type="email"></input>
        <input onChange={(e)=> handle(e)} id="status" value={data.status} className=" mx-1 inline" placeholder="Status (active or inactive)" type="text"></input>
                
        <button type="button" class=" mx-3 my-4  btn-outline-dark">Add User</button>
      </form>
    </div>
  );
}

export default PostForm;
