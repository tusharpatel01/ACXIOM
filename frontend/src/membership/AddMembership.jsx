import { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";

const AddMembership = () => {
  const [data, setData] = useState({
    membershipNo: "",
    memberName: "",
    email: "",
    duration: "6"
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/membership/add", data, {
      withCredentials: true
    });

    alert("Membership Added Successfully");
  };

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-lg mx-auto bg-white shadow rounded-xl">
        <h2 className="text-xl font-bold mb-4">Add Membership</h2>

        <form onSubmit={submitHandler} className="space-y-3">
          <input
            required
            placeholder="Membership No"
            className="w-full border p-2"
            onChange={(e) =>
              setData({ ...data, membershipNo: e.target.value })
            }
          />

          <input
            required
            placeholder="Member Name"
            className="w-full border p-2"
            onChange={(e) =>
              setData({ ...data, memberName: e.target.value })
            }
          />

          <input
            required
            placeholder="Email"
            className="w-full border p-2"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />

          <div>
            <p className="font-semibold">Duration:</p>

            {["6", "12", "24"].map((val) => (
              <label key={val} className="mr-4">
                <input
                  type="radio"
                  value={val}
                  checked={data.duration === val}
                  onChange={(e) =>
                    setData({ ...data, duration: e.target.value })
                  }
                />
                <span className="ml-2">
                  {val === "6"
                    ? "6 Months"
                    : val === "12"
                    ? "1 Year"
                    : "2 Years"}
                </span>
              </label>
            ))}
          </div>

          <button className="w-full bg-green-600 text-white py-2 rounded">
            Add Membership
          </button>
        </form>
      </div>
    </>
  );
};

export default AddMembership;
