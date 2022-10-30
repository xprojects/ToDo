const express = require("express");
const Entry = require("../models/Entry");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const entries = await Entry.find();
    res.json(entries);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const entry = new Entry({
    title: req.body.title,
    order: req.body.order,
  });

  try {
    const savedEntry = await entry.save();
    res.json(savedEntry);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:entryId", async (req, res) => {
  try {
    const removedEntry = await Entry.remove({ _id: req.params.entryId });
    res.json(removedEntry);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:entryId", async (req, res) => {
  try {
    const updatedEntry = await Entry.updateOne(
      { _id: req.params.entryId },
      {
        $set: {
          title: req.body.title,
          order: req.body.order,
        },
      }
    );
    res.json(updatedEntry);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
