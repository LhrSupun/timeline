import Timeline from "./timeline/Timeline";
function App() {
  return (
    <div style={{
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      maxWidth:"50%",
      margin:"10px"
    }}>

      <Timeline />
    </div>
  );
}

export default App;
