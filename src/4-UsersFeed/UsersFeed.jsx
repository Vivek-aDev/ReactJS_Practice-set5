import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function UsersFeed() {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      const { status, data } = await fakeFetch("https://example.com/api/users");
      if (status === 200) {
        setUsersData(data);
        setIsLoading(false);
      }
    } catch (e) {
      console.log(setError(e.message));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Users Feed</h2>
      <p>{isLoading && "Loading..."} </p>
      {usersData &&
        usersData?.map(({ name, image, likes, comments }) => (
          <div key={name}>
            <img src={image} alt={name} height="250px" width="250px" />
            <p>
              <b>{name}</b>
            </p>
            <p>Likes:{likes}</p>
            <p>Comments: {comments}</p>
          </div>
        ))}
      <div>{error}</div>
    </div>
  );
}
