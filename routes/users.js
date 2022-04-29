const fs = require("fs");
const path = require("path");
const { Router } = require("express");

const router = Router();

// api/users
router.get("/", (req, res) => {
  const pathJSON = path.resolve(__dirname, "../users_data.json");
  fs.readFile(pathJSON, (err, data) => {
    res.json(JSON.parse(data));
    // console.log(JSON.parse(data));
  });
});

module.exports = router;
