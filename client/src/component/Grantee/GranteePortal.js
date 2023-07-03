import React, { useEffect, useState } from "react";

const GranteePortal = () => {
  const [data, setData] = useState([]);
  let a = [
    {
      name: "John Doe",
      age: 25,
      city: "New York",
    },
    {
      name: "Jane Smith",
      age: 30,
      city: "London",
    },
    {
      name: "Bob Johnson",
      age: 35,
      city: "Paris",
    },
  ]
  setData(a);

//   useEffect(() => {
//     // Fetch the JSON data and set it to the 'data' state
//     fetch("data.json")
//       .then((response) => response.json())
//       .then((jsonData) => setData(jsonData))
//       .catch((error) => console.error("Error fetching JSON data:", error));
//   }, []);

  return (
    <div>
      <h1>Grantee Portal</h1>
      <ul>
        {data.map((row, index) => (
          <li key={index}>
            <p>Sr No: {index + 1}</p>
            <p>Field 1: {row.field1}</p>
            <p>Field 2: {row.field2}</p>
            <p>Field 3: {row.field3}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GranteePortal;
