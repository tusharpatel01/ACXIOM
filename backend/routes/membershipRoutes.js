import express from "express";
import Membership from "../models/Membership.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

//this is the add membership logic, we will use this to create new memberships
router.post("/add", isAuthenticated, async (req, res) => {
  const membership = await Membership.create(req.body);

  res.json({
    message: "Membership Added Successfully",
    membership
  });
});

//this is the get membership logic, we will use this to get a membership by its membership number
router.get("/:membershipNo", isAuthenticated, async (req, res) => {
  const membership = await Membership.findOne({
    membershipNo: req.params.membershipNo
  });

  if (!membership)
    return res.status(404).json({ message: "Membership Not Found" });

  res.json(membership);
});

//this is the extend membership logic, we will use this to extend a membership by updating its duration
router.put("/extend/:membershipNo", isAuthenticated, async (req, res) => {
  const membership = await Membership.findOneAndUpdate(
    { membershipNo: req.params.membershipNo },
    { duration: req.body.duration },
    { new: true }
  );

  res.json({
    message: "Membership Extended Successfully",
    membership
  });
});

//this is the cancel membership logic, we will use this to cancel a membership by updating its status to cancelled
router.put("/cancel/:membershipNo", isAuthenticated, async (req, res) => {
  const membership = await Membership.findOneAndUpdate(
    { membershipNo: req.params.membershipNo },
    { status: "cancelled" },
    { new: true }
  );

  res.json({
    message: "Membership Cancelled Successfully",
    membership
  });
});

export default router;
