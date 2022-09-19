import Activity from "./pages/Activity/Activity";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/activity/:activity_slug" element={<Activity />} />
    </Routes>
  );
}

export default App;
