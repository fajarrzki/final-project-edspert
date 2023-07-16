import Kedua from "./page/Kedua";
import Pertama from "./page/Pertama";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Pertama />} />
          <Route path="/Kedua" element={<Kedua />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
