import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function Chat() {
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/userchat"
      );
      if (status === 200) {
        setChartData(data);
        setIsLoading(false);
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
      <h2>Chat</h2>
      <p>{isLoading && "Loading Chats..."} </p>
      {chartData &&
        chartData?.map(({ name, messages }) => (
          <ul key={name}>
            <li>
              <h3>{name}'s Chat</h3>
              <ul>
                {messages.map(({ from, message }) => (
                  <li>
                    <b>{from}: </b>
                    {message}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        ))}
    </div>
  );
}
