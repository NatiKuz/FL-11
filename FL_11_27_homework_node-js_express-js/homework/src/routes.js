const express = require('express');
const router = express.Router();
const handlers = require('./handlers/car');

router.get("/", handlers.getAll);

router.get("/:id", handlers.get);

router.post("/", handlers.post);

router.put("/:id", handlers.put);

router.delete("/:id", handlers.delete);

module.exports = router;