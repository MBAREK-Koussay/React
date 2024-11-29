import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={
      {
        marginLeft: "32rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        placeItems: "center"
      }
    }>
      <h1 style={{display :"flex", placeItems: "center" }}>
        You clicked {count} times</h1>
      <button  onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default App;