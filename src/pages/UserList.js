import { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null); // where to store the coming errors
  useEffect(() => {
      // the function to fetch data from the api
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data))
        .catch((err) => setError(err));
  },[]);

  return (
    <div>
      <h1 className="title">List of Users</h1>
      <div className="grid">
        {users.map((user) => (
          <div key={user.id} className="box_info">
            <div>
              <h2>{user.name}</h2>
            </div>
            <p>
              <span>Username:</span> {user.username}
            </p>
            <p>
              <span>Email:</span> {user.email}
            </p>
            <p>
              <span>Phone:</span> {user.phone}
            </p>
            <p>
              <span>Website:</span>
              {user.website}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;