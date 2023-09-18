"use client"

import axios from "axios";
import { useEffect,useState } from "react";

const QueryTable = () => {
    const [queries, setQueries] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
          const response = await fetch('/api/getQueries');
          const data = await response.json();
          setQueries(data);
      };
  
      fetchData();
    }, [queries]);


    function resolveId(id){
      axios.put("/api/querySubmit", id)
      console.log(id)
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
              {query.resolved ==="Unresolved" && <td><button className="btn btn-primary" onClick={()=>resolveId(query.id)}>
            Resolve
        </button></td>}
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QueryTable;