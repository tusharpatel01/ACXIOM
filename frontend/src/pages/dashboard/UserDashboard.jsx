import Navbar from "../../components/Navbar";

const UserDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">User Dashboard</h1>
        <p className="mt-2">User cannot access Maintenance.</p>
      </div>
    </>
  );
};

export default UserDashboard;
