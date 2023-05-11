import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function OnlineUsers() {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/users/status"
      );
      if (status === 200) {
        setUsers(data.users);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Online Users</h2>
      <ul style={{ listStyle: "none" }}>
        {users &&
          users?.map(({ name, status }) => (
            <li
              key={name}
              style={{ color: status === "Online" ? "green" : "red" }}
            >
              {name} - {status}
            </li>
          ))}
      </ul>
    </div>
  );
}
