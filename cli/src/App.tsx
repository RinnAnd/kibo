import { Routes, Route } from "react-router";
import Home from "./views/Home/Home";


function App() { 

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </>
  );
}

export default App;
