import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black text-white p-4 flex gap-6">
      <Link to="/add-membership">Add</Link>
      <Link to="/update-membership">Update</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/transactions">Transactions</Link>
    </div>
  );
};

export default Navbar;
