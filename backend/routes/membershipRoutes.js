import express from "express";
import Membership from "../models/Membership.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

/* ADD MEMBERSHIP */
router.post("/add", isAuthenticated, async (req, res) => {
  const membership = await Membership.create(req.body);

  res.json({
    message: "Membership Added Successfully",
    membership
  });
});

/* GET MEMBERSHIP */
router.get("/:membershipNo", isAuthenticated, async (req, res) => {
  const membership = await Membership.findOne({
    membershipNo: req.params.membershipNo
  });

  if (!membership)
    return res.status(404).json({ message: "Membership Not Found" });

  res.json(membership);
});

/* EXTEND MEMBERSHIP */
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

/* CANCEL MEMBERSHIP */
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
