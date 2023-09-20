"use client"

import axios from "axios";
import { useEffect,useId,useState } from "react";

const QueryTable = () => {
    const [queries, setQueries] = useState([]);
    const [disable,setDisable] = useState(false)
    const [name,setName]=useState("")
    const inputId=useId()

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/querySubmit');
          const data = await response.json();
          setQueries(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [queries]);

    function handleChange(e){
      setName(e.target.value)
    }

    function handleResolve(id){
      setDisable(true)
      try{
        axios.put("/api/querySubmit", {id:id,name:name})
      }catch(error){
        console.log(error)
      }finally{
        setDisable(false)
      }
    }

  return (
    <div className= "m-6 flex flex-col justify-center">
        <h3 className="mb-5 text-3xl">Query Table</h3>
      <div className="overflow-x-auto">
        <table className="table table-xs bg-white">
          <thead className="bg-black text-white">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Employee ID</th>
              <th>Location</th>
              <th>Department</th>
              <th>Message</th>
              <th>Created At</th>
              <th>Resolved</th>
              <th>Toggle Resolve</th>
            </tr>
          </thead>
          <tbody>
            {queries.map(query => 
            <tr key={query.id}>
              <th>{query.id}</th>
              <td>{query.name}</td>
              <td>{query.phone}</td>
              <td>{query.email}</td>
              <td>{query.employeeId}</td>
              <td>{query.location}</td>
              <td>{query.department}</td>
              <td>{query.message}</td>
              <td>{query.createdAt}</td>
              <td>{query.resolved}</td>
              {query.resolved ==="Unresolved" && <td>
                  <input id={inputId} name="name" placeholder="Name" onChange={handleChange} className="input border-black mr-4" required/>
                  <button className="btn btn-primary" id={inputId} disabled={disable || name === "" } onClick={()=>handleResolve(query.id)}>
                    Resolve
                  </button>
                </td>}
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QueryTable;