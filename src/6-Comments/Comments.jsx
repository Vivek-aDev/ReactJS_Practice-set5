import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function Comments() {
  const [commentsData, setCommentsData] = useState([]);

  const getData = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/comments"
      );
      if (status === 200) {
        setCommentsData(data.comments);
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
      <h2>Comments</h2>
      <div>
        {commentsData &&
          commentsData?.map(({ name, text }) => (
            <div key={name}>
              <h3>{name}</h3>
              <p>{text}</p>
              <button
                onClick={() =>
                  setCommentsData(
                    commentsData.filter((comment) => comment.name !== name)
                  )
                }
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
