const router = require("express").Router();
const accessorySevice = require("./../services/accessoryService");

router.get("/create", (req, res) => {
    res.render("accessories/create");
});

router.post("/create", async (req, res) => {
    const { name, description, imageUrl } = req.body;

    await accessorySevice.create({name, description, imageUrl});

    res.redirect("/");
});

module.exports = router;