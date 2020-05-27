import React, { useState, useEffect } from "react";
import axios from "axios";
function UserList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Users List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Address</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, key) => (
            <tr>
              <td key={item.objectID}>
                {console.log(item)}
                {item.id}
              </td>
              <td>{item.name} </td>
              <td>{item.username} </td>
              <td>{item.email} </td>
              <td>{item.phone} </td>
              <td>{item.website} </td>
              <td>
                {item.address.suite} {item.address.street} {item.address.city}{" "}
                {item.address.zipcode}
              </td>
              <td>{item.company.name} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default UserList;
