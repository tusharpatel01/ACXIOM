import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import AdminDashboard from "./pages/dashboard/AdminDashboard.jsx";
import UserDashboard from "./pages/dashboard/UserDashboard.jsx";

import AddMembership from "./pages/membership/AddMembership.jsx";
import UpdateMembership from "./pages/membership/UpdateMembership.jsx";

import Reports from "./pages/reports/Reports.jsx";
// import Transactions from "./pages/transactions/Transactions.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Transactions from "./pages/transaction/Transactions.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboards */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user"
          element={
            <ProtectedRoute role="user">
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        {/* Membership */}
        <Route path="/add-membership" element={<AddMembership />} />
        <Route path="/update-membership" element={<UpdateMembership />} />

        {/* Reports + Transactions */}
        <Route path="/reports" element={<Reports />} />
        <Route path="/transactions" element={<Transactions/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
