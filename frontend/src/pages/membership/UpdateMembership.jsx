import { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";

const UpdateMembership = () => {
  const [membershipNo, setMembershipNo] = useState("");
  const [member, setMember] = useState(null);
  const [duration, setDuration] = useState("6");

  const fetchMember = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/membership/${membershipNo}`,
      { withCredentials: true }
    );

    setMember(res.data);
  };

  const extendMembership = async () => {
    await axios.put(
      `http://localhost:5000/api/membership/extend/${membershipNo}`,
      { duration },
      { withCredentials: true }
    );

    alert("Membership Extended!");
  };

  const cancelMembership = async () => {
    await axios.put(
      `http://localhost:5000/api/membership/cancel/${membershipNo}`,
      {},
      { withCredentials: true }
    );

    alert("Membership Cancelled!");
  };

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-xl mx-auto">
        <h2 className="text-xl font-bold mb-3">Update Membership</h2>

        <input
          placeholder="Enter Membership No"
          className="border p-2 w-full"
          onChange={(e) => setMembershipNo(e.target.value)}
        />

        <button
          onClick={fetchMember}
          className="bg-blue-600 text-white px-4 py-2 mt-2 rounded"
        >
          Search
        </button>

        {member && (
          <div className="mt-5 bg-white shadow p-4 rounded">
            <p>Name: {member.memberName}</p>
            <p>Email: {member.email}</p>
            <p>Status: {member.status}</p>

            <h3 className="mt-4 font-bold">Extend Membership</h3>

            <select
              className="border p-2 w-full"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              <option value="6">6 Months</option>
              <option value="12">1 Year</option>
              <option value="24">2 Years</option>
            </select>

            <button
              onClick={extendMembership}
              className="bg-green-600 text-white px-4 py-2 mt-3 rounded"
            >
              Extend
            </button>

            <button
              onClick={cancelMembership}
              className="bg-red-600 text-white px-4 py-2 mt-3 ml-3 rounded"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default UpdateMembership;
