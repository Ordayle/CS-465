const express = require("express");
const router = express.Router();

const ctrlTrips = require("../controllers/trips");
const authCtrl = require("../controllers/authentication");
const { requireAuth } = require("../middleware/auth");

/* POST login (returns JWT) */
router.post("/login", authCtrl.login);

/* GET all trips (public) */
router.get("/trips", ctrlTrips.tripsList);

/* GET single trip (public) */
router.get("/trips/:tripid", ctrlTrips.tripById);

/* POST create new trip (admin protected) */
router.post("/trips", requireAuth, ctrlTrips.tripsCreate);

/* PUT update trip (admin protected) */
router.put("/trips/:tripid", requireAuth, ctrlTrips.tripsUpdate);

/* DELETE remove trip (admin protected) */
router.delete("/trips/:tripid", requireAuth, ctrlTrips.tripsDelete);

module.exports = router;
