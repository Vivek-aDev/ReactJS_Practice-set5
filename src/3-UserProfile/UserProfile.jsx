import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

const heading = "User Profile";
const width = "350px";
const height = "250px";

export function UserProfile() {
  const [userData, setUserData] = useState({});

  const getData = async () => {
    try {
      const { data, status } = await fakeFetch("https://example.com/api/user");
      if (status === 200) {
        setUserData(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const { image, name, likes, comments } = userData;

  return (
    <div>
      <h2>{heading}</h2>
      <div>
        <img src={image} alt={name} width={width} height={height} />
        <h3>Name: {name}</h3>
        <h3>Likes: {likes}</h3>
        <h3>Comments: {comments}</h3>
      </div>
    </div>
  );
}
