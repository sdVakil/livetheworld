import Activity from "./pages/Activity/Activity";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/activity/:activity_slug" element={<Activity />} />
      <Route
        path="/"
        element={<Navigate to="/activity/castle-of-gerald-the-devil" replace />}
      />
    </Routes>
  );
}

export default App;
