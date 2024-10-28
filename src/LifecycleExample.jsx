import React, { useEffect, useState } from 'react';


const Practice = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://dummyjson.com/users', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          setUsers(response.users); // Extract users array from response
        } else {
          setError('Request failed with status: ' + xhr.status);
        }
      }
    };
    xhr.send();
  }, []);


  if (error) {
    return <div>{error}</div>;
  }


  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} ({user.age}) - {user.gender} ({user.phone})
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Practice;