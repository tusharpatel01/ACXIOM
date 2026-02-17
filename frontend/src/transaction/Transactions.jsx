import Navbar from "../../components/Navbar";

const Transactions = () => {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Transactions Module</h1>
        <p>Accessible by Admin and User</p>
      </div>
    </>
  );
};

export default Transactions;
