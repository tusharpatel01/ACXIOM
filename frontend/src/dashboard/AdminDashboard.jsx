import Navbar from "../../components/Navbar";

const AdminDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="mt-2">Admin can access all modules.</p>
      </div>
    </>
  );
};

export default AdminDashboard;
