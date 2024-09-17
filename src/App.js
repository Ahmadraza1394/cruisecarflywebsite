import "./App.css";

import { BrowserRouter } from "react-router-dom";
import HomeRoutes from "./routes/HomeRoutes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HomeRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
