"use client"

import axios from "axios";
import { useEffect,useState } from "react";
import CustomInput from "./CustomInput";

const QueryTable = () => {
    const [queries, setQueries] = useState([]);
    const [disable,setDisable] = useState(false)
    const [nameInputs, setNameInputs] = useState({});

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

    function handleChange(e, id) {
      const { value } = e.target;
      setNameInputs((prevInputs) => ({
        ...prevInputs,
        [id]: value,
      }));
    }

    function handleResolve(id) {
      setDisable(true);
      try {
        const nameForQuery = nameInputs[id];
        axios.put("/api/querySubmit", { id: id, name: nameForQuery });
      } catch (error) {
        console.log(error);
      } finally {
        setDisable(false);
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
              {query.resolved ==="Unresolved" && <CustomInput
                    id={query.id}
                    value={nameInputs[query.id] || ''}
                    onChange={(e) => handleChange(e, query.id)}
                    placeholder="Name"
                    disabled= {disable}
                    handleResolve={handleResolve}
                  />
                  }
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QueryTable;