
import { useState } from "react";
import { useEffect } from "react";
// fetching api example
function App(){

  const [data ,setData ] = useState([]);

  useEffect(  ()=> {
    const apifetch = async ()=>{
    const api = await fetch("https://jsonplaceholder.typicode.com/todos");
    const apidata = await api.json();
    console.log(apidata);
    setData(apidata);
    }

    apifetch();
  },[])
 
   return <>

   {data.map((data)=><div className="container" key={data.id}>

    <h1>Title : {data.title}</h1>
    

   </div>)}
   
   </>;
}

export default App;