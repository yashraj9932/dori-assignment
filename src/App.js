import "./App.css";
import ButtonAppBar from "./components/AppBar";
import Footer from "./components/Footer";
import MainLeft from "./components/MainLeft";
import MainRight from "./components/MainRight";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [videoNumber, setVideoNumber] = useState(-1);

  return (
    <div className="App">
      <ButtonAppBar />
      <div style={{ display: "flex", marginTop: "16px" }}>
        <MainLeft
          setUrl={setUrl}
          setVideoNumber={setVideoNumber}
          videoNumber={videoNumber}
        />
        <MainRight url={url} />
      </div>
      <Footer setUrl={setUrl} setVideoNumber={setVideoNumber} />
    </div>
  );
}

export default App;
