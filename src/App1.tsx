import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}
const App1 = () => {
  useEffect(() => {
    document.title = "My Demo App";
  });

  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(err=> setError(err.message));
  }, []);

  const deleteUser = (user: User)=> {
    setUsers(users.filter(u => u.id !== user.id))
    axios.delete("https://jsonplaceholder.typicode.com/users" + user.id)
      .catch(err => {
        setUsers(err)
      })
  }
  return (
    <div>
      <p className="text-danger">{error}</p>
      UseEffect Demo
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={()=>deleteUser(user) }> Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App1;
