import "./styles.css";
import { OnlineUsers } from "./1-OnlineUsers/OnlineUsers";
import { Products } from "./2-Products/Products";
import { UserProfile } from "./3-UserProfile/UserProfile";
import { UsersFeed } from "./4-UsersFeed/UsersFeed";
import { Chat } from "./5-Chat/Chat";
import { Comments } from "./6-Comments/Comments";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>ReactJS Practice Question Set 5</h1>
      <hr />
      <OnlineUsers />
      <hr />
      <Products />
      <hr />
      <UserProfile />
      <hr />
      <UsersFeed />
      <hr />
      <Chat />
      <hr />
      <Comments />
    </div>
  );
}
