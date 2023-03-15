import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AddNewJob from "./pages/AddNewJob";
import EditJob from "./pages/EditJob";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/jobs" replace />} />
          <Route path="/jobs/*" element={<Home />} />
          <Route path="/addNewJob/" element={<AddNewJob />} />
          <Route path="/editJob/:jobId" element={<EditJob />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
